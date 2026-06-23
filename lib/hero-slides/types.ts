// Shared, client-safe types for the Hero Agriculture image system.
// No "server-only" import here so these can be consumed by client components
// (carousel + dashboard manager) as well as server code.

export const HERO_AGRICULTURE_PAGE = "agriculture";

// Public fallback used when no active slide exists in the database.
export const HERO_FALLBACK_IMAGE = "/images/agriculture-greenhouse-tomatoes.jpeg";

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
