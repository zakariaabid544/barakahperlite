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

export function isBlobConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
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
  const blob = await put(key, file, {
    access: "public",
    addRandomSuffix: false,
    contentType: file.type || undefined,
  });

  return { url: blob.url, key: blob.pathname };
}

// Best-effort removal; a failed blob delete must not block the DB cleanup.
export async function deleteHeroImage(urlOrKey: string): Promise<void> {
  try {
    await del(urlOrKey);
  } catch (error) {
    console.error("Hero blob delete failed", error);
  }
}
