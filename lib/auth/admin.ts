import "server-only";

import bcrypt from "bcryptjs";
import { createSessionToken, isAuthConfigured } from "@/lib/auth/session";
import { getPrisma, isDatabaseConfigured } from "@/lib/db";

function getPortalRedirect(role: string) {
  return role === "admin" ? "/portal/analytics" : "/portal/client";
}

export async function authenticatePortalUser(email: string, password: string) {
  if (!isAuthConfigured()) {
    return { ok: false, message: "Authentication is not configured." };
  }

  if (!isDatabaseConfigured()) {
    return { ok: false, message: "Authentication database is not configured." };
  }

  const prisma = getPrisma();
  if (!prisma) {
    return { ok: false, message: "Authentication database is not configured." };
  }

  const admin = await prisma.admin.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!admin) {
    return { ok: false, message: "Invalid email or password." };
  }

  const passwordMatches = await bcrypt.compare(password, admin.passwordHash);
  if (!passwordMatches) {
    return { ok: false, message: "Invalid email or password." };
  }

  // TODO: Add RBAC and multi-admin permission checks when portal roles expand.
  // Client accounts can move to a dedicated User/Client model later; for now
  // non-admin roles authenticated from this table are routed to /portal/client.
  const token = await createSessionToken({
    adminId: admin.id,
    email: admin.email,
    role: admin.role,
  });

  return { ok: true, token, role: admin.role, redirectTo: getPortalRedirect(admin.role) };
}

export async function authenticateAdmin(email: string, password: string) {
  return authenticatePortalUser(email, password);
}
