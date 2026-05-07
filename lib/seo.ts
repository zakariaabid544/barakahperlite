import type { Metadata } from "next";

const siteName = "Barakah Perlite";
const baseUrl = "https://barakahperlite.com";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: SeoInput): Metadata {
  const canonical = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords: [
      "perlite Maroc",
      "substrat perlite",
      "perlite agricole",
      "perlite horticole",
      "substrat hydroponique",
      "perlite industrielle",
      "isolation perlite",
      "filtration perlite",
      ...keywords,
    ],
    robots: noIndex ? { index: false, follow: false } : undefined,
    alternates: {
      canonical,
      languages: {
        fr: canonical,
        ar: `${baseUrl}/ar${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonical,
      siteName,
      locale: "fr_MA",
      type: "website",
      images: [
        {
          url: "/brand/barakah-perlite-logo-transparent.png",
          width: 1254,
          height: 1254,
          alt: "Logo Barakah Perlite",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: ["/brand/barakah-perlite-logo-transparent.png"],
    },
  };
}
