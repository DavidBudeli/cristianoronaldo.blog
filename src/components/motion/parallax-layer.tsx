"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
};

export function ParallaxLayer({ children, className, y = -12 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function runParallax() {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || !element) {
        return;
      }

      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.to(element, {
          yPercent: y,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.65,
          },
        });
      }, element);

      cleanup = () => context.revert();
    }

    void runParallax();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
