import "server-only";

import { PrismaPg } from "@prisma/adapter-pg";
import {
  PrismaClient,
  type PrismaClient as PrismaClientType,
} from "@/lib/generated/prisma/client";

const globalForPrisma = globalThis as typeof globalThis & {
  barakahPrisma?: PrismaClientType;
};

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function getPrisma() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  if (!globalForPrisma.barakahPrisma) {
    const adapter = new PrismaPg(connectionString);
    globalForPrisma.barakahPrisma = new PrismaClient({ adapter });
  }

  return globalForPrisma.barakahPrisma;
}
