import { NextResponse } from "next/server";

import { popupLeadSchema } from "@/lib/validations/popup-lead-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = popupLeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const webhookUrl = process.env.POPUP_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    console.error("POPUP_WEBHOOK_URL is not configured");
    return NextResponse.json({ ok: true, forwarded: false });
  }

  const { website, ...payload } = parsed.data;
  void website;

  try {
    // Await no servidor para o Next não cortar o fetch ao responder.
    // O cliente já fecha o popup sem esperar esta resposta.
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        formType: "popup-loja",
        source: "rbz-website-popup",
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("popup webhook responded with", response.status);
      return NextResponse.json({ ok: true, forwarded: false });
    }
  } catch (error) {
    console.error("Failed to reach popup webhook", error);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  return NextResponse.json({ ok: true, forwarded: true });
}
