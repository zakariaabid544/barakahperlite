// Shared, client-safe types for the Hero Agriculture image system.
// No "server-only" import here so these can be consumed by client components
// (carousel + dashboard manager) as well as server code.

export const HERO_AGRICULTURE_PAGE = "agriculture";

// Public fallback used when no active slide exists in the database (agriculture).
export const HERO_FALLBACK_IMAGE = "/images/agriculture-greenhouse-tomatoes.jpeg";

// Single source of truth for every page that supports admin-managed hero
// images. `key` is both the DB `page` value and the route segment ("/<key>").
export const HERO_PAGES = [
  {
    key: "agriculture",
    label: "Agriculture",
    fallbackImage: "/images/agriculture-greenhouse-tomatoes.jpeg",
  },
  {
    key: "green-space",
    label: "Green Space",
    fallbackImage: "/images/green-space-perlite-seedlings.png",
  },
  {
    key: "produit",
    label: "Produit",
    fallbackImage: "/images/barakah-hero-plant.jpg",
  },
] as const;

export type HeroPageKey = (typeof HERO_PAGES)[number]["key"];

export const HERO_PAGE_KEYS: readonly HeroPageKey[] = HERO_PAGES.map(
  (page) => page.key,
);

export function isHeroPageKey(value: unknown): value is HeroPageKey {
  return (
    typeof value === "string" &&
    HERO_PAGE_KEYS.includes(value as HeroPageKey)
  );
}

// Lenient resolver for API inputs: valid key wins, anything else falls back to
// agriculture so existing behaviour never breaks.
export function resolveHeroPage(value: unknown): HeroPageKey {
  return isHeroPageKey(value) ? value : "agriculture";
}

export function heroFallbackImage(page: HeroPageKey): string {
  return (
    HERO_PAGES.find((entry) => entry.key === page)?.fallbackImage ??
    HERO_FALLBACK_IMAGE
  );
}

// Full record exposed to the admin dashboard manager.
export type HeroSlideDTO = {
  id: string;
  imageUrl: string;
  title: string | null;
  sortOrder: number;
  isActive: boolean;
};

// Minimal shape needed to render a slide in the public hero carousel.
export type HeroCarouselSlide = {
  id: string;
  imageUrl: string;
  title: string | null;
};
