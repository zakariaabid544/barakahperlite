import "server-only";

import nodemailer from "nodemailer";

const requiredSmtpEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_SECURE",
  "SMTP_USER",
  "SMTP_PASSWORD",
] as const;

export function getMissingSmtpConfig() {
  return requiredSmtpEnvVars.filter((key) => !process.env[key]);
}

export function getSmtpTransporter() {
  const smtpPort = Number(process.env.SMTP_PORT);

  if (
    getMissingSmtpConfig().length > 0 ||
    !Number.isInteger(smtpPort) ||
    smtpPort <= 0
  ) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}
