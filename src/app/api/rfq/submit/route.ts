import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, ...data } = body;
    const recipient = to || "spindelx@outlook.com";

    // Log the submission server-side
    console.log("[RFQ SUBMIT]", { recipient, ...data, ts: new Date().toISOString() });

    // TODO: Replace with Nodemailer / Resend / SendGrid integration to send emails
    // Example (Resend SDK):
    //   const { Resend } = await import("resend");
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from: "noreply@spindelx.com", to: recipient, subject: "New RFQ", text: JSON.stringify(data) });

    return NextResponse.json({ ok: true, message: "RFQ received", recipient }, { status: 200 });
  } catch (e) {
    console.error("[RFQ Submit Error]", e);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
