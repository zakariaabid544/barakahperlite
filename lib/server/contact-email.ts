import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { recordAnalyticsEvent } from "@/lib/analytics/server";

type ContactFormPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  country?: unknown;
  sector?: unknown;
  quantity?: unknown;
  subject?: unknown;
  message?: unknown;
  sourcePage?: unknown;
  honeypot?: unknown;
  website?: unknown;
};

type NormalizedContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  sector: string;
  quantity: string;
  subject: string;
  message: string;
  sourcePage: string;
};

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_SECURE",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "CONTACT_RECEIVER",
] as const;

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function display(value: string) {
  return value || "-";
}

function getMissingEmailConfig() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function getSubmittedAt() {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Africa/Casablanca",
  }).format(new Date());
}

function normalizePayload(payload: ContactFormPayload): NormalizedContactPayload {
  return {
    name: stringValue(payload.name),
    company: stringValue(payload.company),
    email: stringValue(payload.email),
    phone: stringValue(payload.phone),
    country: stringValue(payload.country),
    sector: stringValue(payload.sector),
    quantity: stringValue(payload.quantity),
    subject: stringValue(payload.subject),
    message: stringValue(payload.message),
    sourcePage: stringValue(payload.sourcePage),
  };
}

function hasNoVisibleContent(payload: NormalizedContactPayload) {
  return [
    payload.name,
    payload.company,
    payload.email,
    payload.phone,
    payload.country,
    payload.sector,
    payload.quantity,
    payload.subject,
    payload.message,
  ].every((value) => !value);
}

function buildEmailContent(payload: NormalizedContactPayload, formType: "contact" | "quote") {
  const submittedAt = getSubmittedAt();
  const rows = [
    ["Type", formType === "quote" ? "Demande de devis" : "Contact"],
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Country", payload.country],
    ["Sector", payload.sector],
    ["Quantity", payload.quantity],
    ["Subject", payload.subject],
    ["Message", payload.message],
    ["Date/time", submittedAt],
    ["Source page", payload.sourcePage],
  ] as const;

  const text = rows
    .map(([label, value]) => `${label}: ${display(value)}`)
    .join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #d9e2dc;font-weight:700;background:#f5f7f4;color:#111;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #d9e2dc;color:#222;white-space:pre-wrap;">${escapeHtml(display(value))}</td>
        </tr>
      `,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111;background:#ffffff;padding:24px;">
      <h1 style="margin:0 0 16px;font-size:22px;color:#063b24;">Nouveau message depuis barakahperlite.com</h1>
      <p style="margin:0 0 20px;color:#444;">Un visiteur a envoyé une demande depuis le site Barakah Perlite.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${htmlRows}
      </table>
    </div>
  `;

  return { html, text };
}

function getSourceRoute(sourcePage: string) {
  try {
    const url = new URL(sourcePage);
    return url.pathname || "/contact";
  } catch {
    return "/contact";
  }
}

function getFormLabel(data: NormalizedContactPayload, formType: "contact" | "quote") {
  if (
    formType === "quote" ||
    data.quantity ||
    data.sector ||
    data.subject.toLowerCase().includes("devis")
  ) {
    return "quote_request";
  }

  return "contact_submission";
}

export async function handleContactEmailRequest(
  request: Request,
  formType: "contact" | "quote",
) {
  let payload: ContactFormPayload;

  try {
    payload = (await request.json()) as ContactFormPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  // TODO: Add production rate limiting per IP/session before public launch.
  const honeypot = stringValue(payload.honeypot) || stringValue(payload.website);
  if (honeypot) {
    return NextResponse.json(
      { ok: false, message: "Spam submission rejected." },
      { status: 400 },
    );
  }

  const data = normalizePayload(payload);

  if (hasNoVisibleContent(data)) {
    return NextResponse.json(
      { ok: false, message: "Empty submission rejected." },
      { status: 400 },
    );
  }

  const missingFields = [
    ["name", data.name],
    ["email", data.email],
    ["phone", data.phone],
    ["message", data.message],
  ]
    .filter(([, value]) => !value)
    .map(([field]) => field);

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Required fields are missing.",
        fields: missingFields,
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json(
      { ok: false, message: "Invalid email address.", fields: ["email"] },
      { status: 400 },
    );
  }

  const missingConfig = getMissingEmailConfig();
  const smtpPort = Number(process.env.SMTP_PORT);

  if (missingConfig.length > 0 || !Number.isInteger(smtpPort) || smtpPort <= 0) {
    return NextResponse.json(
      { ok: false, message: "Email provider not configured." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { html, text } = buildEmailContent(data, formType);

  try {
    await transporter.sendMail({
      from: '"Barakah Perlite" <info@barakahperlite.com>',
      to: process.env.CONTACT_RECEIVER,
      replyTo: data.email,
      subject: "Nouveau message depuis barakahperlite.com",
      text,
      html,
    });

    const response = NextResponse.json(
      { ok: true, message: "Message sent successfully." },
      { status: 200 },
    );

    try {
      const analyticsResult = await recordAnalyticsEvent(request, {
        type: "FORM_SUBMISSION",
        route: getSourceRoute(data.sourcePage),
        label: getFormLabel(data, formType),
        target: `/api/${formType}`,
        metadata: {
          hasCompany: Boolean(data.company),
          hasQuantity: Boolean(data.quantity),
          hasSector: Boolean(data.sector),
        },
      });

      analyticsResult.cookies.forEach((cookie) => {
        response.cookies.set(cookie.name, cookie.value, cookie.options);
      });
    } catch (analyticsError) {
      console.error("Form conversion analytics failed", analyticsError);
    }

    return response;
  } catch (error) {
    console.error("Contact email sending failed", error);

    return NextResponse.json(
      { ok: false, message: "Email could not be sent." },
      { status: 502 },
    );
  }
}
