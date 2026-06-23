import "server-only";

import { del, put } from "@vercel/blob";

// Vercel Blob storage wrapper for Hero Agriculture images.
// Never writes to the local filesystem / public/ (read-only on Vercel).

const HERO_PREFIX = "hero/agriculture";

const extensionByMime: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

// Resolve the Blob read/write token at runtime. Prefers the canonical
// BLOB_READ_WRITE_TOKEN, but also accepts a Vercel store connected with a
// custom env-var prefix (e.g. "AGRI_BLOB_READ_WRITE_TOKEN"). Read on each call
// so it reflects the runtime environment, never a build-time snapshot.
export function resolveBlobToken(): string | undefined {
  const direct = process.env.BLOB_READ_WRITE_TOKEN;
  if (direct && direct.trim()) return direct;

  for (const [key, value] of Object.entries(process.env)) {
    if (key.endsWith("BLOB_READ_WRITE_TOKEN") && value && value.trim()) {
      return value;
    }
  }
  return undefined;
}

export function isBlobConfigured() {
  return Boolean(resolveBlobToken());
}

// Diagnostic for runtime troubleshooting. Returns only env-var NAMES and
// booleans — never the secret values — so it is safe to log and to return on
// an admin-only endpoint.
export function describeBlobEnv() {
  const blobEnvKeys = Object.keys(process.env)
    .filter((key) => key.includes("BLOB"))
    .sort();

  return {
    blobEnvKeys,
    hasCanonicalToken: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
    tokenResolved: Boolean(resolveBlobToken()),
    vercelEnv: process.env.VERCEL_ENV ?? null,
  };
}

function buildObjectKey(file: File) {
  const fromName = file.name?.split(".").pop()?.toLowerCase();
  const ext =
    extensionByMime[file.type] ||
    (fromName && /^[a-z0-9]{2,5}$/.test(fromName) ? fromName : "jpg");
  // crypto.randomUUID is available in the Node.js runtime used by these routes.
  return `${HERO_PREFIX}/${crypto.randomUUID()}.${ext}`;
}

export async function uploadHeroImage(
  file: File,
): Promise<{ url: string; key: string }> {
  const key = buildObjectKey(file);
  // Pass the token explicitly so behaviour is deterministic; when undefined
  // @vercel/blob falls back to process.env.BLOB_READ_WRITE_TOKEN itself.
  const blob = await put(key, file, {
    access: "public",
    addRandomSuffix: false,
    contentType: file.type || undefined,
    token: resolveBlobToken(),
  });

  return { url: blob.url, key: blob.pathname };
}

// Best-effort removal; a failed blob delete must not block the DB cleanup.
export async function deleteHeroImage(urlOrKey: string): Promise<void> {
  try {
    await del(urlOrKey, { token: resolveBlobToken() });
  } catch (error) {
    console.error("Hero blob delete failed", error);
  }
}
