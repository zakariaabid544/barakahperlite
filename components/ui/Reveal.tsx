"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
  "data-premium-reveal"?: boolean | "";
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...rest
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];
  const isGsapManaged = Object.prototype.hasOwnProperty.call(
    rest,
    "data-premium-reveal",
  );

  if (shouldReduceMotion || isGsapManaged) {
    return (
      <Component {...rest} className={cn(className)} initial={false}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      {...rest}
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
