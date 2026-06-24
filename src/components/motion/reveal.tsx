"use client";

import { createElement, type ReactNode } from "react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import type { RevealOptions } from "@/lib/motion";

type RevealProps = RevealOptions & {
  as?: "div" | "section" | "article" | "header" | "aside" | "span";
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Reveal({
  as: Element = "div",
  children,
  className,
  id,
  ...options
}: RevealProps) {
  const ref = useGsapReveal<HTMLElement>(options);

  return createElement(Element, { ref, id, className }, children);
}
