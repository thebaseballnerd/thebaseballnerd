// netlify/functions/chat.js
// Chat for The Baseball Nerd, grounded ONLY in the knowledge base.
// - Answers definitional/methodology questions from tbn-knowledge.js.
// - Classifies each question easy vs deep. Deep questions get a short
//   teaser then a Substack subscribe CTA (shown as a button by the widget).
// - Logs every question anonymously (text + timestamp) to "chat-questions".
// - Still captures email leads to "chat-leads" when one is given.
//
// Requires env var: ANTHROPIC_API_KEY
// Uses @netlify/blobs.

import { getStore } from "@netlify/blobs";
import { KNOWLEDGE } from "./tbn-knowledge.js";

const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 700;
const SUBSTACK_URL = "https://thebaseballnerd.substack.com/";

const SYSTEM = `You are the chat assistant for The Baseball Nerd (thebaseballnerd.com), the baseball analytics brand built by Pete Dwyer. Voice: confident, data-first, conversational, "numbers not feelings." Never use em dashes; use commas, periods, or restructure. Vary sentence length. Write in prose, no bullet lists. The Athletics are always "the Athletics" or "the A's," never Oakland. Refer to SPARK and FADE only as "the model," never "the framework."

You answer ONLY using the REFERENCE MATERIAL provided below. This material is the brand's own published explainers on its proprietary models (SPARK, FADE, Bases Gained, ABS IQ+) and on public stats it has explained (wRC+, OPS+, WAR). Rules:

1. If the question can be answered from the reference material, answer it accurately and concisely (two to four sentences) in the brand voice.

2. If the question asks for CURRENT or LIVE standings (who leads right now, current top scores, this week's rankings, a specific player's current score, current team ABS IQ+ standings, fantasy rankings), you DO NOT have that data. Do not invent numbers. Give the framework-level context you do have, then say the current rankings live in the Baseball Nerd Analytics Suite.

3. If the question is outside the reference material entirely (general MLB trivia, other stats, opinions on players you have no data on), give at most a brief honest framing and steer back to what the models do. Do not fabricate.

4. Never invent specific stat lines, player scores, or rankings that are not explicitly in the reference material. The validation examples in the material (e.g. historical SPARK/FADE cases) may be cited because they are published. Current-season specifics may not.

You must respond with a JSON object and nothing else, no markdown, no backticks:
{"reply": "your answer text", "deep": true or false}

Set "deep" to true when the question is the kind that deserves Pete's full subscriber-level treatment: questions about a specific current player's outlook, buy/sell/trade decisions, current rankings or leaders, "who should I" fantasy advice, or anything where the real answer is in the live Suite data. Set "deep" to false for straightforward definitional/methodology questions that the reference material fully answers (what is X, how does X work, what do the tiers mean, X vs Y).

REFERENCE MATERIAL:
${KNOWLEDGE}`;

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Bad JSON" }, 400);
  }

  const { messages, email, capturedNow, page, url } = body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: "No messages" }, 400);
  }

  // Anonymous engagement logging: the latest user question only, no identifiers.
  const lastUser = [...messages].reverse().find((m) => m && m.role === "user" && m.content);
  if (lastUser) {
    try {
      await logQuestion(String(lastUser.content).slice(0, 500), page);
    } catch (e) {
      console.error("question log failed:", e);
    }
  }

  // Email lead capture (unchanged behavior).
  if (capturedNow && email && isEmail(email)) {
    try {
      await saveLead({ email, messages, page, url });
    } catch (e) {
      console.error("lead save failed:", e);
    }
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: "Server not configured" }, 500);

  const trimmed = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && m.content)
    .slice(-10)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM,
        messages: trimmed,
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      console.error("anthropic error:", data);
      return json({ error: "Upstream error" }, 502);
    }

    const raw = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    // The model returns JSON. Parse defensively.
    let reply = raw;
    let deep = false;
    try {
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      if (parsed && typeof parsed.reply === "string") {
        reply = parsed.reply;
        deep = parsed.deep === true;
      }
    } catch {
      reply = raw;
    }

    return json({
      reply: reply || "Let me point you to the Suite for that one.",
      deep,
      cta: deep ? { label: "Subscribe on Substack", url: SUBSTACK_URL } : null,
    });
  } catch (e) {
    console.error("fetch failed:", e);
    return json({ error: "Request failed" }, 500);
  }
};

// --- anonymous question log -----------------------------------------------
async function logQuestion(text, page) {
  const store = getStore("chat-questions");
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await store.setJSON(id, {
    question: text,
    page: page || "",
    at: new Date().toISOString(),
  });
}

// --- email lead capture (CRM row shape) -----------------------------------
async function saveLead({ email, messages, page, url }) {
  const store = getStore("chat-leads");
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const name = email.split("@")[0];
  const firstQuestion = (messages.find((m) => m.role === "user") || {}).content || "";
  const row = [email, name, "hot", 0, 0, 0, 0, 0, 0, 0, "", "chat", "free", "lead"];
  await store.setJSON(id, {
    row,
    capturedAt: new Date().toISOString(),
    firstQuestion: String(firstQuestion).slice(0, 500),
    page: page || "",
    url: url || "",
  });
}

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
