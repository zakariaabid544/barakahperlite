"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { technicalDocuments } from "@/data/documents";
import { useI18n } from "@/lib/i18n";

export function ProductHero() {
  const { locale, t } = useI18n();
  const titleLines =
    locale === "fr"
      ? ["Perlite expansée naturelle,", "pour usages agricoles,", "et industriels."]
      : [t.product.header.title];
  const mobileTitleLines =
    locale === "fr"
      ? [
          "Perlite expansée",
          "naturelle,",
          "pour usages agricoles,",
          "et industriels.",
        ]
      : [t.product.header.title];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-4 pb-12 pt-28 sm:px-6 md:pb-16 lg:min-h-[680px] lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(8,10,8,0.97),rgba(20,24,19,0.91),rgba(6,59,36,0.58))]" />
      <MoroccanPatternBackground density="medium" className="z-[1]" />
      <div className="absolute inset-y-0 right-0 z-[2] hidden w-[46%] overflow-hidden p-6 lg:block lg:p-10">
        <Image
          src="/images/hero-perlite-final.svg"
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="46vw"
          className="object-contain object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-[39%] z-[3] hidden w-[25%] bg-[linear-gradient(90deg,rgba(8,10,8,0)_0%,rgba(8,10,8,0.6)_20%,rgba(8,10,8,0.96)_44%,rgba(8,10,8,0.78)_62%,rgba(8,10,8,0.28)_82%,rgba(8,10,8,0)_100%)] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[3] hidden w-[16%] bg-[linear-gradient(90deg,rgba(8,10,8,0)_0%,rgba(8,10,8,0.24)_34%,rgba(8,10,8,0.7)_72%,#080a08_100%)] lg:block" />
      <AnimatedParticles className="z-[4] opacity-80" />
      <div className="relative z-[5] mx-auto max-w-7xl">
        <div className="flex w-full min-w-0 max-w-[640px] flex-col lg:min-h-[520px] lg:justify-between">
          <div className="w-full min-w-0 max-w-[640px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-atlas-sand md:mb-5 md:tracking-[0.34em]">
              {t.product.header.eyebrow}
            </p>
            <h1 className="w-full max-w-[640px] font-display text-[1.82rem] font-normal leading-[1.06] tracking-normal text-perlite-50 min-[390px]:text-[1.9rem] sm:hidden">
              {mobileTitleLines.map((line) => (
                <span key={line} className="block max-w-full">
                  {line}
                </span>
              ))}
            </h1>
            <h1 className="hidden w-full max-w-[640px] font-display text-[2.25rem] font-normal leading-[1.08] tracking-normal text-perlite-50 sm:block md:text-[2.4rem] lg:text-5xl">
              {titleLines.map((line) => (
                <span key={line} className="block max-w-full">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 w-full max-w-[22rem] text-pretty text-base leading-7 text-silver-200/78 sm:max-w-[620px] md:mt-6 md:text-lg md:leading-8">
              {t.product.header.description}
            </p>
          </div>
          <div className="mt-8 flex w-full max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:mt-10 lg:mt-auto">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-agritech-emerald px-5 py-3.5 text-sm font-semibold text-basalt-950 transition hover:-translate-y-0.5 hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-basalt-950 sm:w-auto"
            >
              {t.common.quoteRequest}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={technicalDocuments.datasheet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3.5 text-sm font-semibold text-silver-200/70 transition hover:border-atlas-sand/45 hover:bg-white/[0.08] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand sm:w-auto"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              {t.product.header.datasheetCta}
            </a>
            <a
              href={technicalDocuments.msds}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3.5 text-sm font-semibold text-silver-200/70 transition hover:border-atlas-sand/45 hover:bg-white/[0.08] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand sm:w-auto"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              {t.product.header.msdsCta}
            </a>
          </div>
          <div className="mt-8 w-full max-w-[22rem] overflow-hidden rounded-xl border border-white/10 bg-basalt-900/70 p-3 shadow-glass backdrop-blur-xl sm:max-w-none lg:hidden">
            <div className="relative h-44 sm:h-64 md:h-72">
              <Image
                src="/images/hero-perlite-final.svg"
                alt=""
                aria-hidden="true"
                fill
                priority
                unoptimized
                sizes="(max-width: 1023px) 100vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
