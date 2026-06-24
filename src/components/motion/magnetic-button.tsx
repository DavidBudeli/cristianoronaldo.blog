"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

export function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const baseClass =
    "inline-flex rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition will-change-transform";
  const variantClass =
    variant === "primary"
      ? "border border-brand-orange bg-brand-orange text-white hover:bg-white hover:text-black"
      : "border border-white/25 text-warm hover:bg-white hover:text-black";

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    const targetElement = element;
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function setupMagnet() {
      const { gsap } = await import("gsap");

      if (cancelled || !element) {
        return;
      }

      const quickX = gsap.quickTo(targetElement, "x", { duration: 0.35, ease: "power3.out" });
      const quickY = gsap.quickTo(targetElement, "y", { duration: 0.35, ease: "power3.out" });

      function onMouseMove(event: MouseEvent) {
        const bounds = targetElement.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        quickX(x * 0.16);
        quickY(y * 0.24);
      }

      function onMouseLeave() {
        quickX(0);
        quickY(0);
      }

      targetElement.addEventListener("mousemove", onMouseMove);
      targetElement.addEventListener("mouseleave", onMouseLeave);

      cleanup = () => {
        targetElement.removeEventListener("mousemove", onMouseMove);
        targetElement.removeEventListener("mouseleave", onMouseLeave);
        quickX(0);
        quickY(0);
      };
    }

    void setupMagnet();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <Link ref={ref} href={href} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
