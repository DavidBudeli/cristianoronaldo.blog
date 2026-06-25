"use client";

import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

type AnimatedGridProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function AnimatedGrid({
  children,
  className = "",
  stagger = 0.055,
}: AnimatedGridProps) {
  return (
    <Reveal className={className} stagger={stagger} variant="fade-up">
      {children}
    </Reveal>
  );
}

