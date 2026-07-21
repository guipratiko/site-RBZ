import { NextResponse } from "next/server";

import { leadSchema } from "@/lib/validations/lead-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  // Honeypot: real users never populate this field.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL is not configured");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const { website, ...payload } = parsed.data;
  void website;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "rbz-website",
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("n8n webhook responded with", response.status);
      return NextResponse.json({ error: "webhook_error" }, { status: 502 });
    }
  } catch (error) {
    console.error("Failed to reach n8n webhook", error);
    return NextResponse.json({ error: "webhook_unreachable" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
