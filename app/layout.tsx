import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { I18nProvider } from "@/components/layout/I18nProvider";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://barakahperlite.com"),
  title: {
    default: "Barakah Perlite | Perlite marocaine agricole et industrielle",
    template: "%s | Barakah Perlite",
  },
  description:
    "Barakah Perlite produit et commercialise une perlite marocaine naturelle pour substrats agricoles, horticulture, hydroponie, construction, filtration et industrie.",
  applicationName: "Barakah Perlite",
  authors: [{ name: "Barakah Perlite" }],
  generator: "Next.js",
  category: "Industrial agritech",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#20d564" }],
  },
  openGraph: {
    type: "website",
    siteName: "Barakah Perlite",
    title: "Barakah Perlite | Perlite marocaine agricole et industrielle",
    description:
      "Perlite marocaine naturelle pour substrats agricoles, horticulture, hydroponie, construction, filtration et industrie.",
    url: "https://barakahperlite.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barakah Perlite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barakah Perlite",
    description:
      "Perlite marocaine naturelle pour agriculture, espaces verts, construction et industrie.",
    images: ["/og-image.png"],
  },
  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#080a08",
  },
};

export const viewport: Viewport = {
  themeColor: "#080a08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Barakah Perlite",
    url: "https://barakahperlite.com",
    logo: "https://barakahperlite.com/social-icon-1024.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "N°5 ET.3 Imm. El Khiati, Avenue Hassan II",
      addressLocality: "Taroudant",
      addressCountry: "MA",
    },
    email: [
      "info@barakahperlite.com",
      "Sven@barakahperlite.com",
      "Ahmed@barakahperlite.com",
    ],
    telephone: ["+32497846579", "+212707081425", "+212661697490"],
  };

  return (
    <html lang="fr" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="overflow-x-hidden font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <MotionProvider>
            <div className="site-shell min-h-screen">
              <Header />
              <main>{children}</main>
              <Footer />
              <WhatsAppButton />
              <AnalyticsTracker />
            </div>
          </MotionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
