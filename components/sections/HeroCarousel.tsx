"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { HeroCarouselSlide } from "@/lib/hero-slides/types";

type HeroCarouselProps = {
  slides: HeroCarouselSlide[];
  fallbackSrc: string;
};

const AUTOPLAY_MS = 5000;
const IMAGE_SIZES = "(min-width: 1024px) 52vw, 100vw";
// Keeps the exact look of the previous static hero image.
const IMAGE_CLASS = "object-cover object-center opacity-[0.82]";

const variants = {
  enter: (direction: number) => ({
    y: direction >= 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { y: "0%", opacity: 1 },
  exit: (direction: number) => ({
    y: direction >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export function HeroCarousel({ slides, fallbackSrc }: HeroCarouselProps) {
  const prefersReducedMotion = useReducedMotion();

  const items: HeroCarouselSlide[] =
    slides.length > 0
      ? slides
      : [{ id: "__fallback__", imageUrl: fallbackSrc, title: null }];

  const count = items.length;
  const isCarousel = slides.length >= 2;

  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = hovered || focused;

  const go = useCallback(
    (delta: number) => {
      setState(([current]) => [(current + delta + count) % count, delta]);
    },
    [count],
  );

  useEffect(() => {
    if (!isCarousel || paused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setState(([current]) => [(current + 1) % count, 1]);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isCarousel, paused, prefersReducedMotion, count]);

  const safeIndex = index % count;
  const current = items[safeIndex];

  const transition = prefersReducedMotion
    ? { duration: 0.2 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      {/* Image layer (behind every existing card overlay/badge/title). */}
      <div className="absolute inset-0 overflow-hidden">
        {isCarousel ? (
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${safeIndex}-${current.id}`}
              custom={direction}
              variants={
                prefersReducedMotion
                  ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
                  : variants
              }
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0"
            >
              <Image
                src={current.imageUrl}
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes={IMAGE_SIZES}
                className={IMAGE_CLASS}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Image
            src={current.imageUrl}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes={IMAGE_SIZES}
            className={IMAGE_CLASS}
          />
        )}
      </div>

      {/* Soft top + bottom fade of the image only — never lateral. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020806]/85 via-[#020806]/35 to-transparent md:h-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020806]/90 via-[#020806]/40 to-transparent md:h-32"
      />

      {/* Controls — only when there is something to scroll. */}
      {isCarousel ? (
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3"
          role="group"
          aria-roledescription="carrousel"
          aria-label="Images de la serre"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={() => setFocused(false)}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Image précédente"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-perlite-50/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C85F]"
          >
            <ChevronUp aria-hidden="true" className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Image suivante"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-perlite-50/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C85F]"
          >
            <ChevronDown aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>
      ) : null}
    </>
  );
}
