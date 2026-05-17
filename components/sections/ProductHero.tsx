"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { contact } from "@/data/site";
import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

const heroTaglines: Record<Locale, string> = {
  fr: "Léger. Naturel. Performant.",
  en: "Light. Natural. High-performing.",
  nl: "Licht. Natuurlijk. Performant.",
  ar: "خفيف. طبيعي. عالي الأداء.",
};

const mobileImageHeadlines: Record<Locale, string> = {
  fr: "Perlite expansée du Maroc.",
  en: "Expanded perlite from Morocco.",
  nl: "Geëxpandeerd perliet uit Marokko.",
  ar: "بيرلايت مغربي ممدد.",
};

const heroTitleLines: Partial<Record<Locale, string[]>> = {
  en: ["Moroccan expanded", "perlite for agriculture,", "industry and export."],
  nl: ["Marokkaans geëxpandeerd", "perliet voor landbouw,", "industrie en export."],
  ar: ["بيرلايت مغربي ممدد", "للزراعة والصناعة", "والتصدير."],
};

export function ProductHero() {
  const { locale, t } = useI18n();
  const isArabic = locale === "ar";
  const heroTextDirection = isArabic ? "rtl" : "ltr";
  const heroTextAlign = isArabic ? "text-right" : "text-left";
  const titleLines = heroTitleLines[locale] ?? [t.product.header.title];

  return (
    <section
      data-product-hero
      className="relative flex min-h-[86svh] overflow-hidden border-b border-white/10 bg-[#04100D] pt-24 text-white sm:pt-28 md:min-h-[720px] lg:min-h-[760px] lg:pt-0 2xl:min-h-[820px]"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_82%_16%,rgba(22,200,95,0.18),transparent_30%),radial-gradient(circle_at_12%_52%,rgba(213,185,122,0.12),transparent_34%),linear-gradient(135deg,#020806_0%,#07110E_58%,#020806_100%)]" />
      <div data-hero-image className="absolute inset-0 z-[2] will-change-transform">
        <div
          data-soft-parallax
          className="pointer-events-none absolute bottom-[12%] right-[4%] top-[14%] hidden w-[44%] overflow-hidden rounded-[0.65rem] border border-white/10 bg-[#07110E]/72 shadow-[0_42px_140px_rgba(0,0,0,0.46)] backdrop-blur-xl md:block lg:right-[5%] xl:right-[6%] xl:w-[42%]"
        >
          <Image
            src="/images/barakah-hero-plant.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1280px) 46vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(2,8,6,0.97)_0%,rgba(2,8,6,0.86)_33%,rgba(2,8,6,0.46)_64%,rgba(2,8,6,0.2)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-[#020806] via-[#020806]/76 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_86%_18%,rgba(22,200,95,0.12),transparent_24%),radial-gradient(circle_at_8%_48%,rgba(0,0,0,0.68),transparent_34%)]" />
      <MoroccanPatternBackground density="medium" className="z-[1] opacity-[0.16]" />

      <div
        data-hero-particles
        className="pointer-events-none absolute inset-0 z-[3] opacity-65 will-change-transform"
      >
        <AnimatedParticles />
      </div>

      <div
        dir="ltr"
        className="relative z-[4] mx-auto flex w-full max-w-[1500px] flex-col justify-end px-5 pb-0 sm:px-6 lg:px-[5%]"
      >
        <div className="flex flex-1 items-center py-9 md:py-12 lg:py-24">
          <div
            dir={heroTextDirection}
            className={`min-w-0 max-w-[540px] ${heroTextAlign} md:max-w-[560px] lg:max-w-[500px] xl:max-w-[600px]`}
          >
            <div data-hero-eyebrow className="mb-6 h-0.5 w-12 bg-[#16C85F] md:mb-7" />
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#16C85F]">
              {t.product.header.eyebrow}
            </p>

            {locale === "fr" ? (
              <h1
                data-hero-title
                className="max-w-full break-words font-display text-[2.35rem] font-semibold leading-[1.07] tracking-[-0.025em] text-white sm:text-[3.55rem] md:font-bold lg:text-[4.75rem] xl:text-[5.3rem]"
              >
                <span className="block">Perlite expansée</span>
                <span className="block">
                  premium du <span className="text-[#16C85F]">Maroc</span>
                </span>
              </h1>
            ) : (
              <h1
                data-hero-title
                className={`max-w-full break-words font-display leading-[1.08] text-white ${
                  isArabic
                    ? "text-[1.95rem] font-semibold tracking-normal sm:text-[2.6rem] md:font-bold lg:text-[2.8rem] xl:text-[3.05rem]"
                    : "text-[2.1rem] font-semibold tracking-[-0.025em] sm:text-[2.85rem] md:font-bold lg:text-[3.05rem] xl:text-[3.45rem]"
                }`}
              >
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            )}

            <p
              data-hero-subtitle
              className="mt-4 text-lg font-semibold leading-snug tracking-[-0.01em] text-white md:mt-5 md:text-2xl"
            >
              {heroTaglines[locale]}
            </p>
            <p
              data-hero-subtitle
              className={`mt-3 text-sm leading-7 text-[#B8C2BD] md:mt-4 md:text-base md:leading-8 ${
                isArabic ? "max-w-[36ch] md:max-w-[38ch]" : "max-w-[52ch]"
              }`}
            >
              {t.product.header.description}
            </p>

            <div dir="ltr" className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
              <Link
                data-hero-cta
                href="/contact"
                className="bp-glass-cta bp-glass-cta--primary w-full sm:w-auto"
              >
                {t.common.quoteRequest}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                data-hero-cta
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-glass-cta bp-glass-cta--secondary w-full sm:w-auto"
              >
                {t.contactPage.whatsapp}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div
              data-gsap-card
              className="relative mt-7 min-h-[245px] overflow-hidden rounded-[0.65rem] border border-white/10 bg-[#07110E]/72 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:min-h-[300px] md:hidden"
            >
              <Image
                src="/images/barakah-hero-plant.jpg"
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.05)_0%,rgba(2,8,6,0.2)_58%,rgba(2,8,6,0.58)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_24%,rgba(22,200,95,0.12),transparent_32%),linear-gradient(90deg,rgba(2,8,6,0.24)_0%,transparent_42%,rgba(2,8,6,0.18)_100%)]" />
              <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-[#020806]/58 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-perlite-50/88 backdrop-blur-md">
                {t.product.header.eyebrow}
              </div>
              <div className={`absolute inset-x-5 bottom-5 ${isArabic ? "text-right" : "text-left"}`}>
                <h2 className="max-w-[16ch] break-words font-display text-[1.22rem] font-semibold leading-snug tracking-[-0.015em] text-perlite-50">
                  {mobileImageHeadlines[locale]}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
