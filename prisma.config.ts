import { loadEnvConfig } from "@next/env";
import { defineConfig } from "prisma/config";
import { getDatabaseUrl } from "./lib/database-url";

loadEnvConfig(process.cwd());

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: getDatabaseUrl({ preferDirect: true }),
  },
});
