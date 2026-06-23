"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  DEFAULT_HERO_SETTINGS,
  type HeroCarouselSlide,
  type HeroSettingsDTO,
} from "@/lib/hero-slides/types";

type HeroCarouselProps = {
  slides: HeroCarouselSlide[];
  fallbackSrc: string;
  settings?: HeroSettingsDTO;
};

const IMAGE_SIZES = "(min-width: 1024px) 52vw, 100vw";
// Natural, full-brightness image; framing comes only from the top/bottom fades.
const IMAGE_CLASS = "object-cover object-center";

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

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function HeroCarousel({
  slides,
  fallbackSrc,
  settings = DEFAULT_HERO_SETTINGS,
}: HeroCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const { mode, showArrows, autoplay, intervalMs } = settings;

  const items: HeroCarouselSlide[] =
    slides.length > 0
      ? slides
      : [{ id: "__fallback__", imageUrl: fallbackSrc, title: null }];

  const count = items.length;

  // Animated carousel only in carousel mode with 2+ slides. In "fixed" mode (or
  // with a single image) we render just the first active image.
  const isCarousel = mode === "carousel" && slides.length >= 2;
  const arrowsVisible = isCarousel && showArrows;
  const autoplayOn = isCarousel && autoplay;
  // A full-card interaction layer is needed to host arrows and/or to pause
  // autoplay on hover/focus.
  const showControls = arrowsVisible || autoplayOn;

  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = hovered || focused;

  const go = (delta: number) => {
    setState(([current]) => [(current + delta + count) % count, delta]);
  };

  useEffect(() => {
    if (!autoplayOn || paused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setState(([current]) => [(current + 1) % count, 1]);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [autoplayOn, paused, prefersReducedMotion, count, intervalMs]);

  const safeIndex = ((index % count) + count) % count;
  const current = items[safeIndex];

  const transition = prefersReducedMotion
    ? { duration: 0.25 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  const bounceTransition = {
    duration: 2.2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  const arrowClass =
    "absolute left-1/2 -translate-x-1/2 rounded text-white opacity-[0.65] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

  return (
    <>
      {/* Image layer — sits behind the badge and arrows. */}
      <div className="absolute inset-0 overflow-hidden">
        {isCarousel ? (
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${safeIndex}-${current.id}`}
              custom={direction}
              variants={prefersReducedMotion ? reducedVariants : variants}
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

      {/* Fade only at the top and bottom — never lateral; centre stays bright. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020806]/75 via-[#020806]/15 to-transparent md:h-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020806]/80 via-[#020806]/20 to-transparent md:h-28"
      />

      {/* Controls / pause layer — present only when there is something to drive. */}
      {showControls ? (
        <div
          className="absolute inset-0 z-30"
          role="group"
          aria-roledescription="carrousel"
          aria-label="Images de la serre"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={() => setFocused(false)}
        >
          {arrowsVisible ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Image précédente"
                className={`${arrowClass} top-2 md:top-3.5`}
              >
                <motion.span
                  className="block"
                  animate={prefersReducedMotion ? undefined : { y: [0, -3.5, 0] }}
                  transition={prefersReducedMotion ? undefined : bounceTransition}
                >
                  <ChevronUp aria-hidden="true" className="h-7 w-7" />
                </motion.span>
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Image suivante"
                className={`${arrowClass} bottom-2 md:bottom-3.5`}
              >
                <motion.span
                  className="block"
                  animate={prefersReducedMotion ? undefined : { y: [0, 3.5, 0] }}
                  transition={prefersReducedMotion ? undefined : bounceTransition}
                >
                  <ChevronDown aria-hidden="true" className="h-7 w-7" />
                </motion.span>
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
