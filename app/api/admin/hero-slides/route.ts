import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/api-guard";
import {
  createHeroSlide,
  listHeroSlides,
  revalidateHeroSlides,
} from "@/lib/hero-slides/server";
import { HERO_AGRICULTURE_PAGE } from "@/lib/hero-slides/types";
import { isBlobConfigured, uploadHeroImage } from "@/lib/server/blob-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

// GET /api/admin/hero-slides — list every slide (admin dashboard).
export async function GET() {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const slides = await listHeroSlides(HERO_AGRICULTURE_PAGE);
  return NextResponse.json({ ok: true, slides });
}

// POST /api/admin/hero-slides — multipart upload of a new slide.
export async function POST(request: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  if (!isBlobConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Stockage non configuré (BLOB_READ_WRITE_TOKEN)." },
      { status: 503 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requête invalide." },
      { status: 400 },
    );
  }

  const file = form.get("file");
  const rawTitle = form.get("title");
  const title =
    typeof rawTitle === "string" && rawTitle.trim() ? rawTitle.trim().slice(0, 120) : null;

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json(
      { ok: false, message: "Fichier image requis." },
      { status: 400 },
    );
  }

  if (!ALLOWED_MIME.has(file.type)) {
    return NextResponse.json(
      { ok: false, message: "Format non supporté (JPEG, PNG, WebP ou AVIF)." },
      { status: 415 },
    );
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json(
      { ok: false, message: "Image trop lourde (max 8 Mo)." },
      { status: 413 },
    );
  }

  try {
    const { url, key } = await uploadHeroImage(file);
    const slide = await createHeroSlide({
      page: HERO_AGRICULTURE_PAGE,
      imageUrl: url,
      storageKey: key,
      title,
    });
    revalidateHeroSlides();

    return NextResponse.json({ ok: true, slide }, { status: 201 });
  } catch (error) {
    console.error("Hero slide upload failed", error);
    return NextResponse.json(
      { ok: false, message: "Échec de l'enregistrement de l'image." },
      { status: 500 },
    );
  }
}
