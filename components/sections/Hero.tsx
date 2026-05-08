"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beaker, Leaf, PlayCircle } from "lucide-react";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();
  const hero = t.home.hero;

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 md:pb-20 lg:min-h-[88svh] lg:px-8 lg:pt-40">
      <div className="absolute inset-0 bg-[linear-gradient(125deg,#080a08_0%,#141813_46%,#063b24_100%)]" />
      <div className="absolute inset-0 bg-perlite-radial opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-basalt-950 to-transparent" />
      <MoroccanPatternBackground density="medium" />
      <AnimatedParticles />

      <div className="relative mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <motion.div
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-atlas-sand backdrop-blur-xl md:mb-7 md:text-xs md:tracking-[0.24em]"
          >
            <Leaf aria-hidden="true" className="h-4 w-4 text-agritech-emerald" />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="max-w-4xl text-balance font-display text-[2.35rem] font-semibold leading-[1.04] text-perlite-50 md:text-5xl md:leading-[1.06] lg:text-6xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-7 text-silver-200/75 md:mt-6 md:text-lg md:leading-8"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-agritech-emerald px-6 py-4 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-basalt-950"
            >
              {hero.ctaPrimary}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/produit"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-6 py-4 text-sm font-semibold text-perlite-50 backdrop-blur-xl transition hover:border-atlas-sand/50 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand"
            >
              <PlayCircle aria-hidden="true" className="h-4 w-4" />
              {hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-[560px]"
        >
          <div className="hero-mineral relative aspect-[0.9] overflow-hidden rounded-xl border border-white/10 bg-basalt-900/70 shadow-glass backdrop-blur-2xl sm:aspect-[0.86] lg:rounded-lg">
            <div className="absolute inset-0 mineral-noise opacity-70" />
            <div className="absolute inset-0 hero-mineral__strata" />
            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-perlite-50/80">
              {hero.visualLabel}
            </div>
            <div className="absolute inset-x-8 top-20 flex justify-center">
              <Image
                src="/brand/barakah-perlite-logo-transparent.png"
                width={220}
                height={220}
                alt=""
                aria-hidden="true"
                className="h-36 w-36 object-contain opacity-95 md:h-44 md:w-44"
                preload
                loading="eager"
              />
            </div>
            <div className="perlite-cluster absolute inset-x-10 bottom-28 h-40" />
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.065] p-4 backdrop-blur-xl">
                <Beaker aria-hidden="true" className="mb-3 h-5 w-5 text-atlas-sand" />
                <p className="text-xs uppercase tracking-[0.22em] text-silver-200/50">
                  {hero.cardOneKicker}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-perlite-50">
                  {hero.cardOneTitle}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.065] p-4 backdrop-blur-xl">
                <Leaf aria-hidden="true" className="mb-3 h-5 w-5 text-agritech-emerald" />
                <p className="text-xs uppercase tracking-[0.22em] text-silver-200/50">
                  {hero.cardTwoKicker}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-perlite-50">
                  {hero.cardTwoTitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
