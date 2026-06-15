import { loadEnvConfig } from "@next/env";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { getDatabaseUrl, getDatabaseUrlRequirement } from "../lib/database-url";
import { PrismaClient } from "../lib/generated/prisma/client";

loadEnvConfig(process.cwd());

const connectionString = getDatabaseUrl();
const seedPassword = process.env.SEED_ADMIN_PASSWORD;
const forcePasswordReset = process.env.SEED_ADMIN_FORCE_RESET === "true";
const seedEmails = (process.env.SEED_ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

const minimumSeedPasswordLength = 16;
const weakSeedPasswords = new Set([
  "1234567890",
  "password",
  "admin",
  "changeme",
  "change_me",
  "default",
  "change_me_to_a_strong_random_password",
]);

function isPlaceholderEmail(email: string) {
  return email.startsWith("todo_") || email.includes("replace");
}

function getSeedPasswordIssues(password: string) {
  const issues: string[] = [];
  const normalizedPassword = password.trim().toLowerCase();

  if (password.length < minimumSeedPasswordLength) {
    issues.push(`must be at least ${minimumSeedPasswordLength} characters`);
  }

  if (
    weakSeedPasswords.has(normalizedPassword) ||
    normalizedPassword.includes("changeme") ||
    normalizedPassword.includes("change_me")
  ) {
    issues.push("must not be an obvious default or placeholder value");
  }

  const characterClassCount = [
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  if (characterClassCount < 3) {
    issues.push("must include at least three of lowercase, uppercase, number, symbol");
  }

  return issues;
}

async function main() {
  if (!connectionString) {
    throw new Error(
      `${getDatabaseUrlRequirement()} is required to seed admin accounts.`,
    );
  }

  if (!seedPassword) {
    throw new Error("SEED_ADMIN_PASSWORD is required to seed admin accounts.");
  }

  const seedPasswordIssues = getSeedPasswordIssues(seedPassword);
  if (seedPasswordIssues.length > 0) {
    throw new Error(
      `SEED_ADMIN_PASSWORD is too weak: ${seedPasswordIssues.join("; ")}.`,
    );
  }

  const emails = seedEmails.filter((email) => !isPlaceholderEmail(email));
  if (emails.length === 0) {
    throw new Error("SEED_ADMIN_EMAILS must include at least one real admin email.");
  }

  const adapter = new PrismaPg(connectionString);
  const prisma = new PrismaClient({ adapter });
  const passwordHash = await bcrypt.hash(seedPassword, 12);

  try {
    for (const email of emails) {
      // TODO: Force password rotation immediately after first login in production.
      await prisma.admin.upsert({
        where: { email },
        update: forcePasswordReset
          ? { passwordHash, role: "admin" }
          : { role: "admin" },
        create: { email, passwordHash, role: "admin" },
      });
      console.log(`Seeded admin: ${email}`);
    }

    const skipped = seedEmails.filter(isPlaceholderEmail);
    if (skipped.length > 0) {
      console.log(
        `Skipped placeholder admin email(s): ${skipped.join(", ")}. Replace before production.`,
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
