import "server-only";

import { PrismaPg } from "@prisma/adapter-pg";
import {
  PrismaClient,
  type PrismaClient as PrismaClientType,
} from "@/lib/generated/prisma/client";
import { getDatabaseUrl } from "@/lib/database-url";

const globalForPrisma = globalThis as typeof globalThis & {
  barakahPrisma?: PrismaClientType;
};

export function isDatabaseConfigured() {
  return Boolean(getDatabaseUrl());
}

export function getPrisma() {
  const connectionString = getDatabaseUrl();

  if (!connectionString) {
    return null;
  }

  if (!globalForPrisma.barakahPrisma) {
    const adapter = new PrismaPg(connectionString);
    globalForPrisma.barakahPrisma = new PrismaClient({ adapter });
  }

  return globalForPrisma.barakahPrisma;
}
