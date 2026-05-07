"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const particles = Array.from({ length: 38 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 7) % 100}%`,
  top: `${(index * 47 + 13) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 7),
  delay: (index % 9) * 0.27,
  drift: index % 2 === 0 ? 26 : -22,
}));

type AnimatedParticlesProps = {
  className?: string;
};

export function AnimatedParticles({ className }: AnimatedParticlesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-perlite-50 shadow-[0_0_18px_rgba(250,248,239,0.34)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: 0.44,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [-8, -54, -8],
                  x: [0, particle.drift, 0],
                  opacity: [0.18, 0.58, 0.18],
                  scale: [1, 1.45, 1],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
