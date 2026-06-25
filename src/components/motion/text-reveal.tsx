"use client";

import { useEffect, useMemo, useRef, type ReactNode, type Ref } from "react";
import { useLanguage } from "@/components/i18n/language-provider";
import { translateText } from "@/lib/i18n";
import { prefersReducedMotion } from "@/lib/motion";

type TextRevealProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  children: string;
  className?: string;
};

export function TextReveal({
  as: Element = "span",
  children,
  className,
}: TextRevealProps) {
  const { locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const displayText = translateText(children, locale);
  const words = useMemo(() => displayText.split(" "), [displayText]);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function runAnimation() {
      const { gsap } = await import("gsap");

      if (cancelled || !element) {
        return;
      }

      const targets = element.querySelectorAll("[data-text-reveal-word]");
      const context = gsap.context(() => {
        gsap.fromTo(
          targets,
          { opacity: 0.001, yPercent: 92 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.85,
            ease: "power4.out",
            stagger: 0.035,
            clearProps: "opacity,transform",
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
  }, [displayText]);

  const content: ReactNode = words.map((word, index) => (
    <span key={`${word}-${index}`} className="inline align-baseline">
      <span className="inline-block overflow-hidden align-baseline">
        <span data-text-reveal-word className="inline-block will-change-transform">
          {word}
        </span>
      </span>
      {index < words.length - 1 ? " " : null}
    </span>
  ));

  if (Element === "h1") {
    return <h1 ref={ref as Ref<HTMLHeadingElement>} className={className}>{content}</h1>;
  }

  if (Element === "h2") {
    return <h2 ref={ref as Ref<HTMLHeadingElement>} className={className}>{content}</h2>;
  }

  if (Element === "h3") {
    return <h3 ref={ref as Ref<HTMLHeadingElement>} className={className}>{content}</h3>;
  }

  if (Element === "p") {
    return <p ref={ref as Ref<HTMLParagraphElement>} className={className}>{content}</p>;
  }

  return <span ref={ref as Ref<HTMLSpanElement>} className={className}>{content}</span>;
}
