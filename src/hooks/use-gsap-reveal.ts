"use client";

import { useEffect, useRef } from "react";
import {
  defaultRevealOptions,
  getRevealFromVars,
  getRevealToVars,
  prefersReducedMotion,
  type RevealOptions,
} from "@/lib/motion";

export function useGsapReveal<T extends HTMLElement>({
  variant = defaultRevealOptions.variant,
  stagger = defaultRevealOptions.stagger,
  delay = defaultRevealOptions.delay,
  duration = defaultRevealOptions.duration,
  ease = defaultRevealOptions.ease,
  once = defaultRevealOptions.once,
}: RevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function runAnimation() {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || !element) {
        return;
      }

      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const targetList = stagger
        ? Array.from(element.querySelectorAll<HTMLElement>("[data-reveal-item]"))
        : [element];
      const targets = targetList.length > 0 ? targetList : [element];

      const context = gsap.context(() => {
        gsap.fromTo(
          targets,
          getRevealFromVars(variant),
          {
            ...getRevealToVars(variant),
            delay,
            duration,
            ease,
            stagger: stagger || undefined,
            force3D: true,
            clearProps: "transform,opacity,clipPath",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once,
            },
          },
        );
      }, element);

      cleanup = () => context.revert();
    }

    void runAnimation();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [delay, duration, ease, once, stagger, variant]);

  return ref;
}
