"use client";

import { useEffect, useMemo, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type NumberCounterProps = {
  value: string | number;
  className?: string;
};

function parseValue(value: string | number) {
  const raw = value.toString();
  const numeric = Number.parseFloat(raw.replace(/,/g, "").match(/\d+(\.\d+)?/)?.[0] ?? "0");
  const prefix = raw.match(/^\D+/)?.[0] ?? "";
  const suffix = raw.match(/[^\d.,]+$/)?.[0] ?? "";

  return { raw, numeric, prefix, suffix };
}

function formatNumber(value: number, source: string) {
  const hasComma = source.includes(",");
  return hasComma ? Math.round(value).toLocaleString("en-US") : Math.round(value).toString();
}

export function NumberCounter({ value, className }: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion() || parsed.numeric <= 0) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function runCounter() {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || !element) {
        return;
      }

      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const counter = { value: 0 };
      const tween = gsap.to(counter, {
        value: parsed.numeric,
        duration: 1.05,
        ease: "power3.out",
        onUpdate: () => {
          element.textContent = `${parsed.prefix}${formatNumber(counter.value, parsed.raw)}${parsed.suffix}`;
        },
        scrollTrigger: {
          trigger: element,
          start: "top 92%",
          once: true,
        },
      });

      cleanup = () => tween.kill();
    }

    void runCounter();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [parsed.numeric, parsed.prefix, parsed.raw, parsed.suffix]);

  return (
    <span ref={ref} className={className}>
      {parsed.raw}
    </span>
  );
}
