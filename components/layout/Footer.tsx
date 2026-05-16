"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { useI18n } from "@/lib/i18n";

function phoneHref(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

const footerAddressLines = [
  "Zone industrielle Ahl Rmel, Oulad Teima,",
  "Taroudant, Maroc",
  "N°5 ET.3 Imm. El Khiati, Avenue Hassan II",
];

const resourceTitles = {
  fr: "Ressources",
  en: "Resources",
  ar: "الموارد",
  nl: "Resources",
};

export function Footer() {
  const { locale, t } = useI18n();
  const mobileEmail = contact.email;
  const mobilePrimaryLinks = t.footer.links.filter((link) =>
    [
      "/produit",
      "/agriculture",
      "/green-space",
      "/industrie",
      "/contact",
      "/portal/login",
    ].includes(link.href),
  );
  const legalLinks = t.footer.links.filter((link) =>
    ["/privacy-policy", "/cookie-policy", "/terms"].includes(link.href),
  );
  const desktopNavigationLinks = mobilePrimaryLinks;
  const desktopResourceLinks = legalLinks;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-basalt-950 px-4 py-14 sm:px-6 lg:px-8">
      <MoroccanPatternBackground />

      <div className="relative mx-auto max-w-7xl lg:hidden">
        <div className="rounded-[0.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-glass backdrop-blur-xl">
          <Link href="/" aria-label={t.nav.homeLabel} className="flex items-center gap-4">
            <Image
              src="/brand/barakah-perlite-logo-transparent.png"
              width={48}
              height={48}
              alt="Barakah Perlite"
              className="h-12 w-12 object-contain"
            />
            <span className="text-lg font-bold uppercase leading-[0.95] tracking-[0.08em]">
              <span className="block text-agritech-emerald">Barakah</span>
              <span className="block text-perlite-50">Perlite</span>
            </span>
          </Link>

          <div className="mt-6 h-px w-20 bg-atlas-sand" />

          <p className="mt-5 text-sm leading-7 text-silver-200/70">
            {t.footer.description}
          </p>

          <div className="mt-6 h-px w-14 bg-white/10" />

          <div className="mt-5 space-y-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-perlite-50">
            <p className="flex items-center gap-2">
              <span>Agriculture</span>
              <span className="text-agritech-emerald">·</span>
              <span>Industrie</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Construction</span>
              <span className="text-agritech-emerald">·</span>
              <span>Export</span>
            </p>
          </div>

          <div className="mt-5 flex items-start gap-4 rounded-[0.3rem] border border-white/14 bg-basalt-950/50 px-4 py-4 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <MapPin aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-atlas-sand" />
            <div className="text-sm leading-7 text-silver-100/78">
              {footerAddressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            <a
              href={`mailto:${mobileEmail}`}
              className="inline-flex min-h-11 items-center gap-3 rounded-[0.45rem] border border-white/10 bg-basalt-950/55 px-3 py-2 text-sm text-silver-200/80 transition hover:border-atlas-sand/40 hover:text-atlas-sand"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-atlas-sand" />
              {mobileEmail}
            </a>
            <a
              href={contact.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-3 rounded-[0.45rem] border border-white/10 bg-basalt-950/55 px-3 py-2 text-sm text-silver-200/80 transition hover:border-atlas-sand/40 hover:text-atlas-sand"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4 text-atlas-sand" />
              {contact.website}
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.45rem] border border-agritech-emerald/25 bg-agritech-emerald/10 px-3 py-2 text-sm font-semibold text-agritech-emerald transition hover:bg-agritech-emerald hover:text-basalt-950"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.45rem] border border-white/10 bg-basalt-950/55 px-3 py-2 text-sm font-semibold text-silver-200/80 transition hover:border-atlas-sand/40 hover:text-atlas-sand"
              >
                <LinkedInIcon />
                {t.footer.linkedin}
              </a>
            </div>
          </div>

          <details className="mt-5 rounded-[0.4rem] border border-white/10 bg-white/[0.035] px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-atlas-sand">
              {t.footer.navigation}
              <ChevronRight aria-hidden="true" className="h-4 w-4 text-agritech-emerald" />
            </summary>
            <nav aria-label={t.footer.navigation} className="mt-4 grid grid-cols-2 gap-2">
              {mobilePrimaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[0.35rem] border border-white/10 bg-basalt-950/45 px-3 py-2.5 text-sm text-silver-200/75 transition hover:border-agritech-emerald/30 hover:text-perlite-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>

          <details className="mt-3 rounded-[0.4rem] border border-white/10 bg-white/[0.035] px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-atlas-sand">
              {resourceTitles[locale]}
              <ChevronRight aria-hidden="true" className="h-4 w-4 text-agritech-emerald" />
            </summary>
            <div className="mt-4 grid gap-2 text-sm text-silver-200/65">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-atlas-sand">
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-xs leading-6 text-silver-200/45">{t.footer.copyright}</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden max-w-[1500px] gap-10 lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.45fr_0.62fr_0.76fr_1.12fr] xl:gap-12">
        <div className="max-w-[560px]">
          <Link href="/" aria-label={t.nav.homeLabel} className="inline-flex items-center gap-5">
            <Image
              src="/brand/barakah-perlite-logo-transparent.png"
              width={78}
              height={78}
              alt="Barakah Perlite"
              className="h-[72px] w-[72px] object-contain"
            />
            <span className="text-3xl font-bold uppercase leading-[0.95] tracking-[0.08em]">
              <span className="block text-agritech-emerald">Barakah</span>
              <span className="block text-perlite-50">Perlite</span>
            </span>
          </Link>

          <div className="mt-8 h-px w-24 bg-atlas-sand" />

          <p className="mt-7 max-w-[430px] text-base leading-8 text-silver-100/72">
            {t.footer.description}
          </p>

          <div className="mt-8 h-px w-16 bg-white/10" />

          <p className="mt-8 flex items-center gap-x-3 whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-perlite-50 xl:gap-x-4 xl:text-[0.72rem] xl:tracking-[0.24em]">
            <span>Agriculture</span>
            <span className="text-agritech-emerald">·</span>
            <span>Industrie</span>
            <span className="text-agritech-emerald">·</span>
            <span>Construction</span>
            <span className="text-agritech-emerald">·</span>
            <span>Export</span>
          </p>

          <div className="mt-8 flex max-w-[520px] items-start gap-6 rounded-[0.32rem] border border-white/15 bg-basalt-950/48 px-7 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <MapPin aria-hidden="true" className="mt-1 h-8 w-8 shrink-0 text-atlas-sand" />
            <div className="text-base leading-8 text-silver-100/78">
              {footerAddressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Liens rapides" className="border-l border-white/10 pl-8">
          <FooterColumnTitle>{t.footer.navigation}</FooterColumnTitle>
          <div className="mt-9 grid gap-1">
            {desktopNavigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex min-h-11 items-center justify-between gap-4 text-sm font-medium text-silver-100/76 transition hover:text-perlite-50"
              >
                <span>{link.label}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 text-agritech-emerald transition group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label={resourceTitles[locale]} className="border-l border-white/10 pl-8">
          <FooterColumnTitle>{resourceTitles[locale]}</FooterColumnTitle>
          <div className="mt-9 grid gap-1">
            {desktopResourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex min-h-11 items-center justify-between gap-4 text-sm font-medium text-silver-100/76 transition hover:text-perlite-50"
              >
                <span>{link.label}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 text-agritech-emerald transition group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </nav>

        <address className="border-l border-white/10 pl-8 not-italic">
          <FooterColumnTitle>{t.footer.contact}</FooterColumnTitle>
          <div className="mt-9 grid text-sm text-silver-200/76">
            <div className="flex gap-4 pb-6">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-atlas-sand" />
              <div className="grid gap-2">
                {contact.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="transition hover:text-atlas-sand">
                    {email}
                  </a>
                ))}
              </div>
            </div>
            {contact.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phoneHref(phone.number)}`}
                className="flex gap-4 border-t border-white/10 py-5 transition hover:text-atlas-sand"
              >
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-atlas-sand" />
                <span>
                  <span className="block font-semibold text-perlite-50/90">{phone.name}</span>
                  <span className="mt-1 block text-silver-200/72">{phone.number}</span>
                </span>
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              <a
                href={contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-[0.35rem] border border-white/10 px-3 py-2 transition hover:border-atlas-sand/50 hover:text-atlas-sand"
              >
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
                {contact.website}
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Barakah Perlite"
                className="inline-flex w-fit items-center gap-2 rounded-[0.35rem] border border-white/10 px-3 py-2 transition hover:border-atlas-sand/50 hover:text-atlas-sand"
              >
                <LinkedInIcon />
                {t.footer.linkedin}
              </a>
            </div>
          </div>
        </address>
      </div>
      <div className="relative mx-auto mt-12 hidden max-w-7xl border-t border-white/10 pt-6 text-xs text-silver-200/50 lg:block">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

function FooterColumnTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.34em] text-atlas-sand">
        {children}
      </h2>
      <div className="mt-6 h-px w-16 bg-atlas-sand" />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.03 3.2c-7.06 0-12.8 5.67-12.8 12.64 0 2.23.59 4.41 1.72 6.33L3.12 28.8l6.82-1.79a12.95 12.95 0 0 0 6.09 1.52c7.06 0 12.8-5.67 12.8-12.65S23.09 3.2 16.03 3.2Zm0 23.18c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-4.04 1.06 1.08-3.89-.25-.4a10.38 10.38 0 0 1-1.57-5.58c0-5.79 4.79-10.5 10.67-10.5 5.89 0 10.68 4.71 10.68 10.5 0 5.8-4.79 10.54-10.68 10.54Zm5.86-7.88c-.32-.16-1.9-.93-2.2-1.03-.29-.11-.51-.16-.72.16-.21.31-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.57-.95-.84-1.6-1.88-1.79-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.72-.99-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.35 5.38 4.7.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.9-.77 2.17-1.51.27-.75.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.33 8.02h4.34V23H.33V8.02ZM8.02 8.02h4.16v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.22 2.9 5.22 6.67V23h-4.34v-7.55c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.91 1.97-2.91 4V23H8.02V8.02Z" />
    </svg>
  );
}
