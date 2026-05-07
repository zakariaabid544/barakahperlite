import { loadEnvConfig } from "@next/env";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../lib/generated/prisma/client";

loadEnvConfig(process.cwd());

const connectionString = process.env.DATABASE_URL;
const seedPassword = process.env.SEED_ADMIN_PASSWORD;
const seedEmails = (process.env.SEED_ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

function isPlaceholderEmail(email: string) {
  return email.startsWith("todo_") || email.includes("replace");
}

async function main() {
  if (!connectionString) {
    throw new Error("DATABASE_URL is required to seed admin accounts.");
  }

  if (!seedPassword) {
    throw new Error("SEED_ADMIN_PASSWORD is required to seed admin accounts.");
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
        update: { passwordHash, role: "admin" },
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
