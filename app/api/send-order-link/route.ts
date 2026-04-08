import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  buildBuyerOrderEmailHtml,
  generateInvoiceRef,
} from "../../../lib/buyer-order-email-html";

type Body = {
  fullName?: string;
  email?: string;
  country?: string;
  tierName?: string;
  sellAppLink?: string;
  /** Display price from the pricing card, e.g. "€14.32 /mo" */
  priceDisplay?: string;
};

function buildTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("Missing SMTP_HOST, SMTP_USER, or SMTP_PASS");
  }
  const port = Number(process.env.SMTP_PORT) || 587;
  // Port 465 uses implicit TLS (SSL); Hostinger needs secure: true
  const secure =
    port === 465 || process.env.SMTP_SECURE === "true";
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const country = typeof body.country === "string" ? body.country.trim() : "";
  const tierName =
    typeof body.tierName === "string" ? body.tierName.trim() : "";
  const sellAppLink =
    typeof body.sellAppLink === "string" ? body.sellAppLink.trim() : "";
  const priceDisplay =
    typeof body.priceDisplay === "string" ? body.priceDisplay.trim() : "";

  if (!fullName || !email || !country || !tierName || !sellAppLink) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const from = (process.env.SMTP_FROM || process.env.SMTP_USER)?.trim();
  if (!adminEmail || !from) {
    console.error(
      "send-order-link: Missing ADMIN_EMAIL or SMTP_FROM/SMTP_USER — add them to .env.local (not only .env.example)",
    );
    return NextResponse.json(
      { error: "Server email configuration error" },
      { status: 500 },
    );
  }

  let transporter: nodemailer.Transporter;
  try {
    transporter = buildTransporter();
  } catch (e) {
    console.error("send-order-link: SMTP config error:", e);
    return NextResponse.json(
      { error: "Server email configuration error" },
      { status: 500 },
    );
  }

  const siteOrigin =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://catchontvapp.com";
  const invoiceRef = generateInvoiceRef();

  const buyerSubject = `Your order is ready — ${tierName} (${invoiceRef})`;
  const buyerHtml = buildBuyerOrderEmailHtml({
    fullName,
    email,
    country,
    tierName,
    sellAppLink,
    priceDisplay: priceDisplay || "—",
    invoiceRef,
    siteOrigin,
  });

  const buyerText = `Hello ${fullName},

Thanks for choosing Catchon TV. Your secure payment link is ready.

Invoice reference: ${invoiceRef}

Open payment link: ${sellAppLink}

Plan: ${tierName}${priceDisplay ? ` — ${priceDisplay}` : ""}

After paying, check your Spam folder if you don't see our confirmation.

If you didn't request this email, you can ignore it.

— Catchon TV`;

  const adminSubject = `NEW FORM FILLED: ${tierName} - ${fullName}`;
  const adminText = `A user has filled the order form.
Name: ${fullName}
Email: ${email}
Country: ${country}
Tier Selected: ${tierName}
Status: Secure link has been sent to the buyer.`;

  try {
    await Promise.all([
      transporter.sendMail({
        from,
        to: email,
        subject: buyerSubject,
        text: buyerText,
        html: buyerHtml,
      }),
      transporter.sendMail({
        from,
        to: adminEmail,
        subject: adminSubject,
        text: adminText,
      }),
    ]);
  } catch (err) {
    console.error("send-order-link: SMTP send error:", err);
    return NextResponse.json(
      { error: "Failed to send emails. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
