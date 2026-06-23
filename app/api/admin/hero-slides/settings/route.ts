import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/api-guard";
import {
  getHeroSettings,
  revalidateHeroSlides,
  updateHeroSettings,
} from "@/lib/hero-slides/server";
import { normalizeHeroSettings, resolveHeroPage } from "@/lib/hero-slides/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/admin/hero-slides/settings?page=<key> — current settings for a page.
export async function GET(request: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const page = resolveHeroPage(new URL(request.url).searchParams.get("page"));
  const settings = await getHeroSettings(page);
  return NextResponse.json({ ok: true, page, settings });
}

// PUT /api/admin/hero-slides/settings — body: { page, mode, showArrows, autoplay, intervalMs }.
export async function PUT(request: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requête invalide." },
      { status: 400 },
    );
  }

  const page = resolveHeroPage(body.page);
  const settings = normalizeHeroSettings(body);

  try {
    const saved = await updateHeroSettings(page, settings);
    revalidateHeroSlides();
    return NextResponse.json({ ok: true, page, settings: saved });
  } catch (error) {
    console.error("[hero-slides] Settings update failed:", error);
    const detail = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { ok: false, message: `Échec de l'enregistrement des réglages: ${detail}` },
      { status: 500 },
    );
  }
}
