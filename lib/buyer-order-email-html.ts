/**
 * Modern invoice-style HTML for the buyer “secure checkout” email.
 * Table layout + inline styles for broad client support.
 * Colors align with app/globals.css :root (Catchon TV brand).
 */

/** Mirrors :root in globals.css — keep in sync when rebranding */
const C = {
  primary: "#ff00b3",
  primaryDark: "#9d0070",
  bgPage: "#f5f5f7",
  bgCard: "#ffffff",
  text: "#111111",
  textGray: "#4b5563",
  border: "#e5e7eb",
  ctaText: "#000000",
  /** Soft tint of primary for notice box */
  alertBg: "#fff5fc",
  alertBorder: "#ffb8e6",
  headerSub: "rgba(255,255,255,0.92)",
  headerInvoice: "rgba(255,255,255,0.85)",
  linkOnWhite: "#9d0070",
} as const;

export type BuyerOrderEmailParams = {
  fullName: string;
  email: string;
  country: string;
  tierName: string;
  sellAppLink: string;
  /** e.g. "$14.59 /mo" from the pricing card */
  priceDisplay: string;
  invoiceRef: string;
  siteOrigin: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildBuyerOrderEmailHtml(p: BuyerOrderEmailParams): string {
  const name = escapeHtml(p.fullName);
  const mail = escapeHtml(p.email);
  const country = escapeHtml(p.country);
  const tier = escapeHtml(p.tierName);
  const price = escapeHtml(p.priceDisplay || "—");
  const link = escapeHtml(p.sellAppLink);
  const inv = escapeHtml(p.invoiceRef);
  const origin = p.siteOrigin.replace(/\/$/, "");
  const refundUrl = `${origin}/RefundPolicy`;
  const termsUrl = `${origin}/TermsConditions`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Your order is ready</title>
</head>
<body style="margin:0;padding:0;background-color:${C.bgPage};font-family:'Outfit',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};padding:24px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:${C.bgCard};border-radius:12px;overflow:hidden;border:1px solid ${C.border};">
        <!-- Header: brand gradient (primary → primary-dark) -->
        <tr>
          <td style="background:linear-gradient(135deg,${C.primary} 0%,${C.primaryDark} 100%);background-color:${C.primaryDark};padding:28px 32px;text-align:center;">
            <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;color:${C.headerSub};text-transform:uppercase;">Your order is ready!</p>
            <p style="margin:0 0 10px 0;font-size:28px;font-weight:700;color:#ffffff;font-family:Georgia,'Times New Roman',Times,serif;line-height:1.2;">Catchon TV</p>
            <p style="margin:0;font-size:13px;color:${C.headerInvoice};">Invoice reference: <strong style="color:#ffffff;">${inv}</strong></p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px 8px 32px;">
            <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:${C.text};">Hello <strong>${name}</strong>,</p>
            <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:${C.text};">Thanks for choosing <strong style="color:${C.primaryDark};">Catchon TV</strong>. Your secure payment link is ready.</p>
            <!-- Bill to -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};border:1px solid ${C.border};border-radius:10px;margin-bottom:20px;">
              <tr>
                <td style="padding:16px 18px;">
                  <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;color:${C.textGray};text-transform:uppercase;">Bill to</p>
                  <p style="margin:0 0 4px 0;font-size:16px;font-weight:700;color:${C.text};">${name}</p>
                  <p style="margin:0 0 4px 0;font-size:14px;"><a href="mailto:${mail}" style="color:${C.linkOnWhite};text-decoration:underline;">${mail}</a></p>
                  <p style="margin:0;font-size:14px;color:${C.textGray};">${country}</p>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:${C.text};">Please use the secure link below to complete your payment. If the button doesn’t work, copy the URL into your browser.</p>
            <!-- Alert: brand-tinted box -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.alertBg};border:1px solid ${C.alertBorder};border-radius:8px;margin-bottom:24px;">
              <tr>
                <td style="padding:14px 16px;">
                  <p style="margin:0;font-size:14px;line-height:1.55;color:${C.text};"><strong style="color:${C.primaryDark};">Payment:</strong> This link opens the secure checkout page. If you have any trouble, just reply to this email.</p>
                </td>
              </tr>
            </table>
            <!-- CTA: matches .btn-primary -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto 16px auto;">
              <tr>
                <td style="border-radius:50px;background-color:${C.primary};">
                  <a href="${link}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:700;color:${C.ctaText};text-decoration:none;text-transform:none;">Open payment link</a>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 6px 0;font-size:13px;color:${C.textGray};">Or copy this URL into your browser:</p>
            <p style="margin:0 0 28px 0;font-size:13px;word-break:break-all;"><a href="${link}" style="color:${C.linkOnWhite};text-decoration:underline;">${link}</a></p>
            <!-- Line item -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.bgPage};border:1px solid ${C.border};border-radius:10px;">
              <tr>
                <td colspan="2" style="padding:12px 18px;border-bottom:1px solid ${C.border};">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="font-size:11px;font-weight:600;letter-spacing:0.06em;color:${C.textGray};text-transform:uppercase;">Line item</td>
                      <td align="right" style="font-size:11px;font-weight:600;letter-spacing:0.06em;color:${C.textGray};text-transform:uppercase;">Amount</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 18px;font-size:15px;font-weight:700;color:${C.text};vertical-align:top;">${tier}</td>
                <td align="right" style="padding:16px 18px;font-size:15px;font-weight:700;color:${C.primaryDark};white-space:nowrap;vertical-align:top;">${price}</td>
              </tr>
            </table>
            <p style="margin:24px 0 0 0;font-size:13px;line-height:1.5;color:${C.textGray};">After paying, please check your <strong style="color:${C.text};">Spam</strong> or <strong style="color:${C.text};">Promotions</strong> folder — order details sometimes land there.</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:8px 32px 28px 32px;border-top:1px solid ${C.border};">
            <p style="margin:0 0 16px 0;font-size:12px;color:${C.textGray};line-height:1.5;">If you didn’t request this email, you can safely ignore it.</p>
            <p style="margin:0;font-size:13px;">
              <a href="${refundUrl}" style="color:${C.linkOnWhite};text-decoration:none;font-weight:600;">Refund Policy</a>
              <span style="color:${C.border};"> · </span>
              <a href="${termsUrl}" style="color:${C.linkOnWhite};text-decoration:none;font-weight:600;">Terms of Service</a>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function generateInvoiceRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 8; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return `INV-${s}`;
}
