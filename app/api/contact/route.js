import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, contact, message, honeypot } = body;

    // حماية ضد السبام
    if (honeypot) return NextResponse.json({ success: true });

    if (!name || !email || !contact || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json(
        { error: "Missing Telegram config" },
        { status: 500 }
      );
    }

    const text = `
📬 New Contact Form Submission:

👤 Name: ${name}
📧 Email: ${email}
📱 Contact: ${contact}
📝 Message:
${message}
`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      console.error("Telegram error:", await telegramRes.text());
      return NextResponse.json(
        { error: "Failed to send to Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
