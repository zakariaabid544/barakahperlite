import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Barakah Perlite",
    short_name: "Barakah",
    description:
      "Perlite marocaine pour agriculture, horticulture, hydroponie et industrie.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#080a08",
    theme_color: "#080a08",
    orientation: "portrait",
    icons: [
      {
        src: "/brand/barakah-perlite-logo-transparent.png",
        sizes: "891x1131",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    // TODO: Add offline caching, push notifications and install prompts when the PWA roadmap starts.
  };
}
