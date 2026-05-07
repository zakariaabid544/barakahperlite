import type { MetadataRoute } from "next";

const routes = [
  "",
  "/produit",
  "/produit/naturelle",
  "/produit/stable",
  "/produit/technique",
  "/agriculture",
  "/industrie",
  "/galerie",
  "/experience",
  "/a-propos",
  "/contact",
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://barakahperlite.com${route}`,
    lastModified: new Date("2026-05-02"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
