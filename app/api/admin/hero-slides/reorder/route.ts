import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/api-guard";
import {
  reorderHeroSlides,
  revalidateHeroSlides,
} from "@/lib/hero-slides/server";
import { resolveHeroPage } from "@/lib/hero-slides/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/admin/hero-slides/reorder — body: { page, ids: string[] } in order.
export async function POST(request: Request) {
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

  const ids = body.ids;
  if (
    !Array.isArray(ids) ||
    ids.length === 0 ||
    !ids.every((id) => typeof id === "string" && id.length > 0)
  ) {
    return NextResponse.json(
      { ok: false, message: "Liste d'identifiants invalide." },
      { status: 400 },
    );
  }

  try {
    await reorderHeroSlides(resolveHeroPage(body.page), ids as string[]);
    revalidateHeroSlides();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Hero slide reorder failed", error);
    return NextResponse.json(
      { ok: false, message: "Échec de la réorganisation." },
      { status: 500 },
    );
  }
}
