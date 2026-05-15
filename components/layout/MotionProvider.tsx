"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";
import {
  registerLuxuryCardHover,
  registerMagneticCta,
} from "@/components/animations/gsap-interactions";

gsap.registerPlugin(ScrollTrigger);

type MotionProviderProps = {
  children: ReactNode;
};

function outsideProductPage(element: HTMLElement) {
  return !element.closest("[data-product-page]");
}

function setAnimating(targets: gsap.TweenTarget) {
  gsap.set(targets, { willChange: "transform,opacity,filter,clip-path" });
}

function clearAnimating(targets: gsap.TweenTarget) {
  gsap.set(targets, { clearProps: "willChange" });
}

export function MotionProvider({ children }: MotionProviderProps) {
  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    if (reduceMotionQuery.matches) {
      return;
    }

    const isMobile = mobileQuery.matches;
    const isTouch = coarsePointerQuery.matches;

    const lenis = new Lenis({
      duration: coarsePointerQuery.matches ? 0.82 : 1.05,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.05,
      wheelMultiplier: 0.9,
    });

    const syncScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", syncScrollTrigger);

    let animationFrame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };
    animationFrame = requestAnimationFrame(raf);

    const interactionCleanups: Array<() => void> = [];

    const context = gsap.context(() => {
      const revealFrom = {
        autoAlpha: 0,
        y: isMobile ? 38 : 62,
        filter: `blur(${isMobile ? 5 : 10}px)`,
        clipPath: "inset(10% 0% 0% 0%)",
      };
      const revealTo = {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        clipPath: "inset(0% 0% 0% 0%)",
        duration: isMobile ? 0.72 : 1.04,
        ease: "expo.out",
        force3D: true,
      };
      const revealStart = isMobile ? "top 88%" : "top 82%";
      const revealEnd = "bottom 20%";
      const reversibleActions = "play none none reverse";

      gsap.utils
        .toArray<HTMLElement>(
          "[data-premium-reveal], [data-gsap-copy], [data-gsap-section-title]",
        )
        .filter(outsideProductPage)
        .forEach((element) => {
          gsap.fromTo(element, revealFrom, {
            ...revealTo,
            scrollTrigger: {
              trigger: element,
              start: revealStart,
              end: revealEnd,
              toggleActions: reversibleActions,
            },
            onStart: () => setAnimating(element),
            onComplete: () => clearAnimating(element),
            onReverseComplete: () => clearAnimating(element),
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-hero-title]")
        .filter(outsideProductPage)
        .forEach((title) => {
          const spans = title.querySelectorAll("span");
          const targets = spans.length ? spans : [title];

          gsap.fromTo(
            targets,
            {
              autoAlpha: 0,
              y: isMobile ? 42 : 72,
              filter: `blur(${isMobile ? 4 : 8}px)`,
              clipPath: "inset(14% 0% 0% 0%)",
            },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              clipPath: "inset(0% 0% 0% 0%)",
              duration: isMobile ? 0.78 : 1.08,
              stagger: spans.length ? (isMobile ? 0.045 : 0.065) : 0,
              ease: "expo.out",
              force3D: true,
              onStart: () => setAnimating(targets),
              onComplete: () => clearAnimating(targets),
              onReverseComplete: () => clearAnimating(targets),
              scrollTrigger: {
                trigger: title,
                start: isMobile ? "top 88%" : "top 82%",
                end: revealEnd,
                toggleActions: reversibleActions,
              },
            },
          );
        });

      const cards = gsap.utils
        .toArray<HTMLElement>("[data-gsap-card]")
        .filter(outsideProductPage);

      if (cards.length) {
        gsap.set(cards, {
          autoAlpha: 0,
          y: isMobile ? 40 : 70,
          scale: 0.955,
          filter: `blur(${isMobile ? 5 : 10}px)`,
        });

        ScrollTrigger.batch(cards, {
          start: revealStart,
          end: revealEnd,
          batchMax: isMobile ? 3 : 5,
          interval: 0.08,
          onEnter: (batch) => {
            setAnimating(batch);
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: isMobile ? 0.7 : 0.94,
              stagger: isMobile ? 0.06 : 0.09,
              ease: "expo.out",
              force3D: true,
              onComplete: () => clearAnimating(batch),
            });
          },
          onLeaveBack: (batch) => {
            setAnimating(batch);
            gsap.to(batch, {
              autoAlpha: 0,
              y: isMobile ? 40 : 70,
              scale: 0.955,
              filter: `blur(${isMobile ? 5 : 10}px)`,
              duration: isMobile ? 0.48 : 0.64,
              stagger: isMobile ? 0.035 : 0.055,
              ease: "power2.out",
              onComplete: () => clearAnimating(batch),
            });
          },
        });
      }

      if (!isMobile && !isTouch) {
        cards.forEach((card) => {
          interactionCleanups.push(registerLuxuryCardHover(card));
        });

        gsap.utils
          .toArray<HTMLElement>(".bp-glass-cta")
          .filter(outsideProductPage)
          .forEach((cta) => {
            interactionCleanups.push(registerMagneticCta(cta));
          });
      }

      if (!isMobile) {
        gsap.utils
          .toArray<HTMLElement>("[data-soft-parallax]")
          .filter(outsideProductPage)
          .forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.9,
              },
              yPercent: -4,
              ease: "none",
            });
          });
      }
    });

    const handleReducedMotionChange = () => {
      if (reduceMotionQuery.matches) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    reduceMotionQuery.addEventListener("change", handleReducedMotionChange);
    ScrollTrigger.refresh();

    return () => {
      reduceMotionQuery.removeEventListener("change", handleReducedMotionChange);
      cancelAnimationFrame(animationFrame);
      lenis.off("scroll", syncScrollTrigger);
      lenis.destroy();
      interactionCleanups.forEach((cleanup) => cleanup());
      context.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return <>{children}</>;
}
