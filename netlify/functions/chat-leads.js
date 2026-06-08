// netlify/functions/chat-leads.js
// Read captured chat leads. Password-gated with the same header pattern
// as the CRM (x-crm-password). Returns an array of CRM-shaped rows so it
// drops straight into the subscriber importer.
//
// Requires env var: CRM_PASSWORD  (set in Netlify dashboard).

import { getStore } from "@netlify/blobs";

export default async (req) => {
  const pwd = req.headers.get("x-crm-password");
  if (!process.env.CRM_PASSWORD || pwd !== process.env.CRM_PASSWORD) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const store = getStore("chat-leads");
  const { blobs } = await store.list();

  const leads = [];
  for (const b of blobs) {
    const v = await store.get(b.key, { type: "json" });
    if (v && v.row) {
      leads.push({
        row: v.row,
        capturedAt: v.capturedAt,
        firstQuestion: v.firstQuestion,
        page: v.page,
        url: v.url,
      });
    }
  }

  // Newest first.
  leads.sort((a, b) => (b.capturedAt || "").localeCompare(a.capturedAt || ""));

  return new Response(JSON.stringify(leads), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
