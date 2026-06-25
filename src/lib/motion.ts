export type RevealVariant =
  | "fade-up"
  | "clip-reveal"
  | "line-reveal"
  | "scale-in";

export type RevealOptions = {
  variant?: RevealVariant;
  stagger?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  once?: boolean;
};

export const defaultRevealOptions = {
  variant: "fade-up",
  stagger: 0,
  delay: 0,
    duration: 0.9,
  ease: "power3.out",
  once: true,
} satisfies Required<RevealOptions>;

export function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getRevealFromVars(variant: RevealVariant) {
  switch (variant) {
    case "clip-reveal":
      return {
        opacity: 0.001,
        clipPath: "inset(0 0 100% 0)",
        y: 18,
      };
    case "line-reveal":
      return {
        opacity: 0.001,
        yPercent: 112,
      };
    case "scale-in":
      return {
        opacity: 0.001,
        scale: 0.94,
      };
    case "fade-up":
    default:
      return {
        opacity: 0.001,
        y: 42,
      };
  }
}

export function getRevealToVars(variant: RevealVariant) {
  return {
    opacity: 1,
    y: 0,
    yPercent: 0,
    scale: 1,
    clipPath: variant === "clip-reveal" ? "inset(0 0 0% 0)" : undefined,
  };
}
