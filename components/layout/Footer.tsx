"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { useI18n } from "@/lib/i18n";

function phoneHref(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function Footer() {
  const { t } = useI18n();
  const mobileEmail = contact.email;
  const mobilePrimaryLinks = t.footer.links.filter((link) =>
    ["/produit", "/agriculture", "/industrie", "/contact", "/portal/login"].includes(
      link.href,
    ),
  );
  const legalLinks = t.footer.links.filter((link) =>
    ["/privacy-policy", "/cookie-policy", "/terms"].includes(link.href),
  );

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-basalt-950 px-4 py-14 sm:px-6 lg:px-8">
      <MoroccanPatternBackground />

      <div className="relative mx-auto max-w-7xl lg:hidden">
        <div className="rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-glass backdrop-blur-xl">
          <Link href="/" aria-label={t.nav.homeLabel} className="flex items-center gap-3">
            <Image
              src="/brand/barakah-perlite-logo-transparent.png"
              width={48}
              height={48}
              alt="Barakah Perlite"
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-base uppercase leading-none">
              <span className="block text-agritech-emerald">Barakah</span>
              <span className="block text-perlite-50">Perlite</span>
            </span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-silver-200/70">
            {t.footer.description}
          </p>

          <div className="mt-5 grid gap-2">
            <a
              href={`mailto:${mobileEmail}`}
              className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-white/10 bg-basalt-950/55 px-3 py-2 text-sm text-silver-200/80 transition hover:border-atlas-sand/40 hover:text-atlas-sand"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-atlas-sand" />
              {mobileEmail}
            </a>
            <a
              href={contact.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-white/10 bg-basalt-950/55 px-3 py-2 text-sm text-silver-200/80 transition hover:border-atlas-sand/40 hover:text-atlas-sand"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4 text-atlas-sand" />
              {contact.website}
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-agritech-emerald/25 bg-agritech-emerald/10 px-3 py-2 text-sm font-semibold text-agritech-emerald transition hover:bg-agritech-emerald hover:text-basalt-950"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-basalt-950/55 px-3 py-2 text-sm font-semibold text-silver-200/80 transition hover:border-atlas-sand/40 hover:text-atlas-sand"
              >
                <LinkedInIcon />
                {t.footer.linkedin}
              </a>
            </div>
          </div>

          <nav aria-label={t.footer.navigation} className="mt-6 grid grid-cols-2 gap-2">
            {mobilePrimaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-sm text-silver-200/75 transition hover:border-agritech-emerald/30 hover:text-perlite-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-silver-200/45">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-atlas-sand">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-xs leading-6 text-silver-200/45">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden max-w-7xl gap-10 lg:grid lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <Link href="/" aria-label={t.nav.homeLabel}>
            <Image
              src="/brand/barakah-perlite-logo-transparent.png"
              width={56}
              height={56}
              alt="Barakah Perlite"
              className="h-14 w-14 object-contain"
            />
          </Link>
          <p className="mt-6 max-w-xl text-sm leading-7 text-silver-200/70">
            {t.footer.description}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-atlas-sand">
            {t.footer.tagline}
          </p>
          <p className="mt-6 flex max-w-xl gap-3 text-sm leading-7 text-silver-200/60">
            <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-atlas-sand" />
            <span>
              {contact.address}
              <br />
              <span className="text-silver-200/45">{contact.factory}</span>
            </span>
          </p>
        </div>

        <nav aria-label="Liens rapides">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-perlite-50">
            {t.footer.navigation}
          </h2>
          <div className="mt-5 grid gap-3">
            {t.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-silver-200/70 transition hover:text-atlas-sand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <address className="not-italic">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-perlite-50">
            {t.footer.contact}
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-silver-200/70">
            {contact.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex gap-3 transition hover:text-atlas-sand"
              >
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 text-atlas-sand" />
                {email}
              </a>
            ))}
            {contact.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phoneHref(phone.number)}`}
                className="flex gap-3 transition hover:text-atlas-sand"
              >
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 text-atlas-sand" />
                <span>
                  <span className="block text-perlite-50/85">{phone.name}</span>
                  <span>{phone.number}</span>
                </span>
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 px-3 py-2 transition hover:border-atlas-sand/50 hover:text-atlas-sand"
              >
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
                {contact.website}
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Barakah Perlite"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 px-3 py-2 transition hover:border-atlas-sand/50 hover:text-atlas-sand"
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
