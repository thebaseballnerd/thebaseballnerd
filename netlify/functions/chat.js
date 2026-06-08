// netlify/functions/chat.js
// Chat + lead capture for The Baseball Nerd.
// - Answers baseball questions, steering toward the Analytics Suite.
// - On capture, appends a lead to the "chat-leads" Netlify Blobs store,
//   shaped as the CRM row array so it imports cleanly later.
//
// Requires env var: ANTHROPIC_API_KEY  (set in Netlify dashboard).
// Uses @netlify/blobs (available in the Netlify Functions runtime).

import { getStore } from "@netlify/blobs";

const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 600;

const SYSTEM = `You are the chat assistant for The Baseball Nerd (thebaseballnerd.com), a baseball analytics brand built by Pete Dwyer. Voice: confident, data-first, conversational, "numbers not feelings." Never use em dashes. Use commas, periods, or restructure. Vary sentence length. No bullet lists in answers, write in prose.

You answer questions about players, stats, projections, and where guys are headed. When relevant, you point readers toward The Baseball Nerd's own work and proprietary models rather than generic stats:
- SPARK Score: breakout potential for players aged 20 to 27.
- FADE Score: regression risk for players 28 and older.
- Bases Gained (BG): a comprehensive offensive counting metric.
- CSR (Contact Suppression Rate): the pitching metric.
- ABS IQ+: challenge system intelligence.
These together are the Baseball Nerd Analytics Suite, the paid subscriber product. Refer to SPARK/FADE only as "the model," never "the framework."

Keep answers tight, two to four sentences. Give a real, useful take, then naturally suggest the deeper numbers live in the Analytics Suite or a relevant article on the site. Do not invent precise stat lines you are unsure of. The Athletics are always "the Athletics" or "the A's," never Oakland.`;

export default async (req) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

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

  // Fire-and-forget lead capture the moment an email arrives.
  if (capturedNow && email && isEmail(email)) {
    try {
      await saveLead({ email, messages, page, url });
    } catch (e) {
      // Never let a capture failure break the chat reply.
      console.error("lead save failed:", e);
    }
  }

  // Call Anthropic.
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({ error: "Server not configured" }, 500);
  }

  // Only send role/content, trim to last ~10 turns to keep it cheap.
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

    const reply = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return json({ reply: reply || "Let me get back to you on that one." });
  } catch (e) {
    console.error("fetch failed:", e);
    return json({ error: "Request failed" }, 500);
  }
};

// --- lead storage ---------------------------------------------------------
// CRM row shape (from the CRM frontend):
// [email, name, segment, open_rate, opens_7d, opens_6mo, received,
//  clicks, post_views, comments, state, source, plan, type]
async function saveLead({ email, messages, page, url }) {
  const store = getStore("chat-leads");
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const name = email.split("@")[0];

  const firstQuestion =
    (messages.find((m) => m.role === "user") || {}).content || "";

  const row = [
    email,        // 0 email
    name,         // 1 name
    "hot",        // 2 segment  (chat lead = engaged = hot)
    0,            // 3 open_rate
    0,            // 4 opens_7d
    0,            // 5 opens_6mo
    0,            // 6 received
    0,            // 7 clicks
    0,            // 8 post_views
    0,            // 9 comments
    "",           // 10 state
    "chat",       // 11 source
    "free",       // 12 plan
    "lead",       // 13 type
  ];

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
