import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/api-guard";
import {
  deleteHeroSlide,
  getHeroSlideById,
  revalidateHeroSlides,
  updateHeroSlide,
} from "@/lib/hero-slides/server";
import { deleteHeroImage } from "@/lib/server/blob-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ id: string }> };

// PATCH /api/admin/hero-slides/:id — toggle isActive and/or edit title.
export async function PATCH(request: Request, context: RouteContext) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { id } = await context.params;

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requête invalide." },
      { status: 400 },
    );
  }

  const data: { title?: string | null; isActive?: boolean } = {};

  if ("isActive" in body) {
    if (typeof body.isActive !== "boolean") {
      return NextResponse.json(
        { ok: false, message: "isActive doit être un booléen." },
        { status: 400 },
      );
    }
    data.isActive = body.isActive;
  }

  if ("title" in body) {
    if (body.title === null) {
      data.title = null;
    } else if (typeof body.title === "string") {
      const trimmed = body.title.trim();
      data.title = trimmed ? trimmed.slice(0, 120) : null;
    } else {
      return NextResponse.json(
        { ok: false, message: "title invalide." },
        { status: 400 },
      );
    }
  }

  if (Object.keys(data).length === 0) {
    return NextResponse.json(
      { ok: false, message: "Aucune modification fournie." },
      { status: 400 },
    );
  }

  try {
    const slide = await updateHeroSlide(id, data);
    if (!slide) {
      return NextResponse.json(
        { ok: false, message: "Image introuvable." },
        { status: 404 },
      );
    }
    revalidateHeroSlides();
    return NextResponse.json({ ok: true, slide });
  } catch (error) {
    console.error("Hero slide update failed", error);
    return NextResponse.json(
      { ok: false, message: "Échec de la mise à jour." },
      { status: 500 },
    );
  }
}

// DELETE /api/admin/hero-slides/:id — remove blob object + DB record.
export async function DELETE(_request: Request, context: RouteContext) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { id } = await context.params;

  try {
    const slide = await getHeroSlideById(id);
    if (!slide) {
      return NextResponse.json(
        { ok: false, message: "Image introuvable." },
        { status: 404 },
      );
    }

    await deleteHeroImage(slide.imageUrl);
    await deleteHeroSlide(id);
    revalidateHeroSlides();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Hero slide delete failed", error);
    return NextResponse.json(
      { ok: false, message: "Échec de la suppression." },
      { status: 500 },
    );
  }
}
