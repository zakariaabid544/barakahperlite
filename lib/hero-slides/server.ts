import "server-only";

import { revalidatePath } from "next/cache";
import { getPrisma } from "@/lib/db";
import {
  HERO_AGRICULTURE_PAGE,
  HERO_PAGES,
  type HeroCarouselSlide,
  type HeroSlideDTO,
} from "@/lib/hero-slides/types";

type HeroSlideRow = {
  id: string;
  imageUrl: string;
  storageKey: string;
  title: string | null;
  sortOrder: number;
  isActive: boolean;
};

function toDTO(row: HeroSlideRow): HeroSlideDTO {
  return {
    id: row.id,
    imageUrl: row.imageUrl,
    title: row.title,
    sortOrder: row.sortOrder,
    isActive: row.isActive,
  };
}

const orderBy = [{ sortOrder: "asc" as const }, { createdAt: "asc" as const }];

// Public read used by the Agriculture hero. The page is served with ISR
// (`export const revalidate` in app/agriculture/page.tsx) and admin mutations
// purge it on demand through revalidateHeroSlides().
export async function getActiveHeroSlides(
  page: string = HERO_AGRICULTURE_PAGE,
): Promise<HeroCarouselSlide[]> {
  const prisma = getPrisma();
  if (!prisma) return [];

  try {
    const rows = await prisma.heroSlide.findMany({
      where: { page, isActive: true },
      orderBy,
    });
    return rows.map((row: HeroSlideRow) => ({
      id: row.id,
      imageUrl: row.imageUrl,
      title: row.title,
    }));
  } catch (error) {
    console.error("getActiveHeroSlides failed", error);
    return [];
  }
}

// Admin read (all slides, active or not), uncached.
export async function listHeroSlides(
  page: string = HERO_AGRICULTURE_PAGE,
): Promise<HeroSlideDTO[]> {
  const prisma = getPrisma();
  if (!prisma) return [];

  const rows = await prisma.heroSlide.findMany({ where: { page }, orderBy });
  return rows.map(toDTO);
}

export async function getHeroSlideById(id: string) {
  const prisma = getPrisma();
  if (!prisma) return null;
  return prisma.heroSlide.findUnique({ where: { id } });
}

export async function createHeroSlide(input: {
  page?: string;
  imageUrl: string;
  storageKey: string;
  title: string | null;
}): Promise<HeroSlideDTO> {
  const prisma = getPrisma();
  if (!prisma) throw new Error("Database is not configured.");

  const page = input.page ?? HERO_AGRICULTURE_PAGE;
  const max = await prisma.heroSlide.aggregate({
    where: { page },
    _max: { sortOrder: true },
  });
  const sortOrder = (max._max.sortOrder ?? -1) + 1;

  const row = await prisma.heroSlide.create({
    data: {
      page,
      imageUrl: input.imageUrl,
      storageKey: input.storageKey,
      title: input.title,
      sortOrder,
    },
  });

  return toDTO(row);
}

export async function updateHeroSlide(
  id: string,
  data: { title?: string | null; isActive?: boolean },
): Promise<HeroSlideDTO | null> {
  const prisma = getPrisma();
  if (!prisma) throw new Error("Database is not configured.");

  const row = await prisma.heroSlide.update({ where: { id }, data });
  return toDTO(row);
}

export async function deleteHeroSlide(id: string): Promise<void> {
  const prisma = getPrisma();
  if (!prisma) throw new Error("Database is not configured.");
  await prisma.heroSlide.delete({ where: { id } });
}

// Persists a new order. `ids` is the full ordered list of slide ids for the page.
export async function reorderHeroSlides(
  page: string,
  ids: string[],
): Promise<void> {
  const prisma = getPrisma();
  if (!prisma) throw new Error("Database is not configured.");

  await prisma.$transaction(
    ids.map((id, index) =>
      prisma.heroSlide.update({
        where: { id },
        data: { sortOrder: index },
      }),
    ),
  );
}

// Call after any mutation so the affected public hero refreshes immediately.
// Mutations by id don't always carry the page, so we purge every hero route —
// each is a cheap, on-demand revalidation triggered only by admin actions.
export function revalidateHeroSlides() {
  for (const page of HERO_PAGES) {
    revalidatePath(`/${page.key}`);
  }
}
