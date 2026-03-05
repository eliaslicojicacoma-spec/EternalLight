import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, message: "Invalid email" }, { status: 400 });
    }

    // Placeholder: aqui depois ligamos a um provider (Brevo/Mailchimp/Resend/etc)
    return NextResponse.json({ ok: true, email });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
