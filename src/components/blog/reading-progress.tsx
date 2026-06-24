"use client";

import { useEffect, useRef } from "react";

export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const progressElement = element;
    let frame = 0;

    function update() {
      const article = document.querySelector<HTMLElement>("[data-article-body]");
      const target = article ?? document.documentElement;
      const rect = target.getBoundingClientRect();
      const scrollable = Math.max(target.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max((rect.top * -1) / scrollable, 0), 1);
      progressElement.style.transform = `scaleX(${progress})`;
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
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left scale-x-0 bg-gold motion-reduce:hidden"
      aria-hidden="true"
    />
  );
}
