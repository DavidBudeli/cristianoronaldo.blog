"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export function TimelineProgress({ className = "" }: { className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    const section = track?.parentElement;

    if (!track || !fill || !section) {
      return;
    }

    const fillElement = fill;
    const sectionElement = section;

    if (prefersReducedMotion()) {
      fillElement.style.transform = "scaleY(1)";
      return;
    }

    let frame = 0;

    function update() {
      const rect = sectionElement.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max((rect.top * -1 + window.innerHeight * 0.25) / scrollable, 0), 1);
      fillElement.style.transform = `scaleY(${progress})`;
    }

    function onScroll() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={trackRef} className={`pointer-events-none bg-white/10 ${className}`} aria-hidden="true">
      <span ref={fillRef} className="block h-full w-full origin-top scale-y-0 bg-brand-orange" />
    </div>
  );
}
