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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/brand/barakah-perlite-logo-transparent.png",
    apple: "/brand/barakah-perlite-logo-transparent.png",
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
    logo: "https://barakahperlite.com/brand/barakah-perlite-logo-transparent.png",
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
