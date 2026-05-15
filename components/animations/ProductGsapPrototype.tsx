"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  registerLuxuryCardHover,
  registerMagneticCta,
} from "@/components/animations/gsap-interactions";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function setAnimating(targets: gsap.TweenTarget) {
  gsap.set(targets, { willChange: "transform,opacity,filter,clip-path" });
}

function clearAnimating(targets: gsap.TweenTarget) {
  gsap.set(targets, { clearProps: "willChange" });
}

export function ProductGsapPrototype() {
  useGSAP(() => {
    const root = document.querySelector<HTMLElement>("[data-product-page]");
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { reduceMotion, isMobile } = context.conditions ?? {};
        if (reduceMotion) return;

        const select = gsap.utils.selector(root);
        const cleanups: Array<() => void> = [];
        const revealStart = isMobile ? "top 88%" : "top 82%";
        const revealEnd = "bottom 20%";
        const reversibleActions = "play none none reverse";
        const titleTargets = select("[data-hero-title] span").length
          ? select("[data-hero-title] span")
          : select("[data-hero-title]");
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        heroTimeline
          .fromTo(
            select("[data-hero-eyebrow]"),
            {
              autoAlpha: 0,
              y: isMobile ? 6 : 10,
              filter: `blur(${isMobile ? 2 : 3}px)`,
            },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.55,
              onStart: () => setAnimating(select("[data-hero-eyebrow]")),
              onComplete: () => clearAnimating(select("[data-hero-eyebrow]")),
            },
          )
          .fromTo(
            titleTargets,
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
              stagger: isMobile ? 0.045 : 0.065,
              ease: "expo.out",
              force3D: true,
              onStart: () => setAnimating(titleTargets),
              onComplete: () => clearAnimating(titleTargets),
            },
            "-=0.18",
          )
          .fromTo(
            select("[data-hero-subtitle]"),
            {
              autoAlpha: 0,
              y: isMobile ? 16 : 24,
              filter: `blur(${isMobile ? 3 : 5}px)`,
            },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: isMobile ? 0.64 : 0.78,
              ease: "power3.out",
              force3D: true,
              onStart: () => setAnimating(select("[data-hero-subtitle]")),
              onComplete: () => clearAnimating(select("[data-hero-subtitle]")),
            },
            "-=0.28",
          )
          .fromTo(
            select("[data-hero-cta]"),
            {
              autoAlpha: 0,
              y: isMobile ? 18 : 26,
              scale: 0.975,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: isMobile ? 0.66 : 0.78,
              stagger: isMobile ? 0.06 : 0.09,
              ease: "power3.out",
              force3D: true,
              onStart: () => setAnimating(select("[data-hero-cta]")),
              onComplete: () => clearAnimating(select("[data-hero-cta]")),
            },
            "-=0.25",
          )
          .fromTo(
            select("[data-hero-image]"),
            {
              autoAlpha: 0,
              scale: isMobile ? 0.975 : 0.94,
              y: isMobile ? 16 : 28,
              filter: `blur(${isMobile ? 2 : 4}px)`,
            },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: isMobile ? 0.86 : 1.28,
              ease: "expo.out",
              force3D: true,
              onStart: () => setAnimating(select("[data-hero-image]")),
              onComplete: () => clearAnimating(select("[data-hero-image]")),
            },
            isMobile ? "-=0.42" : 0.18,
          );

        if (!isMobile) {
          gsap.utils.toArray<HTMLElement>(select("[data-hero-cta]")).forEach((cta) => {
            cleanups.push(registerMagneticCta(cta));
          });

          const heroFloat = gsap.to(select("[data-hero-image]"), {
            y: -8,
            duration: 5.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.25,
            paused: true,
          });

          const particleDrift = gsap.to(select("[data-hero-particles]"), {
            x: 8,
            y: -6,
            duration: 8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            paused: true,
          });

          const ambientTweens = [heroFloat, particleDrift];
          const playAmbient = () => ambientTweens.forEach((tween) => tween.play());
          const pauseAmbient = () => ambientTweens.forEach((tween) => tween.pause());
          const heroImage = select("[data-hero-image]")[0] ?? root;

          ScrollTrigger.create({
            trigger: heroImage,
            start: "top bottom",
            end: "bottom top",
            onEnter: playAmbient,
            onEnterBack: playAmbient,
            onLeave: pauseAmbient,
            onLeaveBack: pauseAmbient,
          });
        }

        const sections = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-gsap-section]"),
        );

        sections.forEach((section) => {
          const copy = section.querySelectorAll(
            "[data-gsap-copy], [data-gsap-section-title]",
          );
          const cards = section.querySelectorAll<HTMLElement>("[data-gsap-card]");

          if (copy.length) {
            gsap.fromTo(
              copy,
              {
                autoAlpha: 0,
                y: isMobile ? 38 : 62,
                filter: `blur(${isMobile ? 5 : 10}px)`,
                clipPath: "inset(10% 0% 0% 0%)",
              },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                clipPath: "inset(0% 0% 0% 0%)",
                duration: isMobile ? 0.72 : 1.04,
                stagger: isMobile ? 0.06 : 0.085,
                ease: "expo.out",
                force3D: true,
                scrollTrigger: {
                  trigger: section,
                  start: revealStart,
                  end: revealEnd,
                  toggleActions: reversibleActions,
                },
                onStart: () => setAnimating(copy),
                onComplete: () => clearAnimating(copy),
                onReverseComplete: () => clearAnimating(copy),
              },
            );
          }

          if (cards.length) {
            gsap.fromTo(
              cards,
              {
                autoAlpha: 0,
                y: isMobile ? 40 : 70,
                scale: 0.955,
                filter: `blur(${isMobile ? 5 : 10}px)`,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: isMobile ? 0.7 : 0.94,
                stagger: {
                  each: isMobile ? 0.06 : 0.09,
                  from: "start",
                },
                ease: "expo.out",
                force3D: true,
                scrollTrigger: {
                  trigger: section,
                  start: revealStart,
                  end: revealEnd,
                  toggleActions: reversibleActions,
                },
                onStart: () => setAnimating(cards),
                onComplete: () => clearAnimating(cards),
                onReverseComplete: () => clearAnimating(cards),
              },
            );

            if (!isMobile) {
              cards.forEach((card) => {
                cleanups.push(registerLuxuryCardHover(card));
              });
            }
          }
        });

        ScrollTrigger.refresh();

        return () => {
          cleanups.forEach((cleanup) => cleanup());
        };
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}
