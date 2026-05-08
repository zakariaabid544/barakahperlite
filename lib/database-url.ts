const pooledDatabaseEnvKeys = [
  "DATABASE_URL",
  "POSTGRES_PRISMA_URL",
  "POSTGRES_URL",
] as const;

const directDatabaseEnvKeys = [
  "DATABASE_URL_UNPOOLED",
  "POSTGRES_URL_NON_POOLING",
  "DATABASE_URL",
  "POSTGRES_PRISMA_URL",
  "POSTGRES_URL",
] as const;

type DatabaseUrlOptions = {
  preferDirect?: boolean;
};

export function getDatabaseUrl(options: DatabaseUrlOptions = {}) {
  const keys = options.preferDirect ? directDatabaseEnvKeys : pooledDatabaseEnvKeys;

  for (const key of keys) {
    const value = process.env[key];
    if (value) return value;
  }

  return undefined;
}

export function getDatabaseUrlRequirement(options: DatabaseUrlOptions = {}) {
  const keys = options.preferDirect ? directDatabaseEnvKeys : pooledDatabaseEnvKeys;

  return keys.join(" or ");
}
