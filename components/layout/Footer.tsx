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

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-basalt-950 px-4 py-14 sm:px-6 lg:px-8">
      <MoroccanPatternBackground />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr]">
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
      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-silver-200/50 md:flex-row md:items-center md:justify-between">
        <p>{t.footer.copyright}</p>
        <p>{t.footer.architecture}</p>
      </div>
    </footer>
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
