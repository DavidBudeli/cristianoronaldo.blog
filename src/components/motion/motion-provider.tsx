"use client";

import { ScrollProgress } from "@/components/motion/scroll-progress";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
