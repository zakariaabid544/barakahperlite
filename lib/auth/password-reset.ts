import "server-only";

import bcrypt from "bcryptjs";
import { createHash, randomBytes } from "crypto";
import { getPrisma, isDatabaseConfigured } from "@/lib/db";
import { getSmtpTransporter } from "@/lib/server/smtp";

const resetTokenMinutes = 30;
const minPasswordLength = 10;

export const passwordResetGenericMessage =
  "Si cet email existe, un lien de réinitialisation a été envoyé.";

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildResetEmail(resetUrl: string) {
  const safeResetUrl = escapeHtml(resetUrl);
  const text = [
    "Bonjour,",
    "",
    "Une demande de réinitialisation du mot de passe a été reçue pour le portail Barakah Perlite.",
    `Lien de réinitialisation: ${resetUrl}`,
    "",
    "Ce lien expire dans 30 minutes. Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;color:#111;background:#ffffff;padding:24px;">
      <h1 style="margin:0 0 14px;font-size:22px;color:#063b24;">Réinitialisation du mot de passe</h1>
      <p style="margin:0 0 18px;color:#333;">Une demande de réinitialisation a été reçue pour le portail privé Barakah Perlite.</p>
      <p style="margin:0 0 22px;">
        <a href="${safeResetUrl}" style="display:inline-block;border-radius:8px;background:#19d66f;color:#081008;padding:12px 18px;text-decoration:none;font-weight:700;">
          Choisir un nouveau mot de passe
        </a>
      </p>
      <p style="margin:0 0 10px;color:#555;">Ce lien expire dans 30 minutes.</p>
      <p style="margin:0;color:#777;font-size:13px;">Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>
    </div>
  `;

  return { html, text };
}

export async function requestPasswordReset(email: string, origin: string) {
  if (!isDatabaseConfigured()) {
    return { ok: false, message: "Authentication database is not configured." };
  }

  const transporter = getSmtpTransporter();
  if (!transporter) {
    return { ok: false, message: "Email provider not configured." };
  }

  const prisma = getPrisma();
  if (!prisma) {
    return { ok: false, message: "Authentication database is not configured." };
  }

  const admin = await prisma.admin.findUnique({
    where: { email: normalizeEmail(email) },
  });

  if (!admin) {
    return { ok: true, message: passwordResetGenericMessage };
  }

  const token = randomBytes(32).toString("hex");
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + resetTokenMinutes * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: {
      adminId: admin.id,
      tokenHash,
      expiresAt,
    },
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || origin;
  const resetUrl = new URL("/portal/reset-password", siteUrl);
  resetUrl.searchParams.set("token", token);

  const { html, text } = buildResetEmail(resetUrl.toString());

  await transporter.sendMail({
    from: '"Barakah Perlite" <info@barakahperlite.com>',
    to: admin.email,
    subject: "Réinitialisation du mot de passe — Barakah Perlite",
    text,
    html,
  });

  return { ok: true, message: passwordResetGenericMessage };
}

export async function resetAdminPassword(token: string, password: string) {
  if (!isDatabaseConfigured()) {
    return { ok: false, message: "Authentication database is not configured." };
  }

  if (password.length < minPasswordLength) {
    return {
      ok: false,
      message: `Le mot de passe doit contenir au moins ${minPasswordLength} caractères.`,
    };
  }

  const prisma = getPrisma();
  if (!prisma) {
    return { ok: false, message: "Authentication database is not configured." };
  }

  const tokenHash = hashToken(token);
  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
  });

  if (
    !resetToken ||
    resetToken.usedAt ||
    resetToken.expiresAt.getTime() <= Date.now()
  ) {
    return { ok: false, message: "Lien de réinitialisation invalide ou expiré." };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.$transaction([
    prisma.admin.update({
      where: { id: resetToken.adminId },
      data: { passwordHash },
    }),
    prisma.passwordResetToken.update({
      where: { id: resetToken.id },
      data: { usedAt: new Date() },
    }),
  ]);

  return { ok: true, message: "Mot de passe mis à jour." };
}
