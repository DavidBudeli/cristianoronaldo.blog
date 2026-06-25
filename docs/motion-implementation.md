# Motion implementation

The CR7 Blog motion layer is intentionally lightweight and SEO-safe.

## Where motion is used

- `src/components/motion/reveal.tsx` powers scroll reveal for sections and cards.
- `src/components/motion/text-reveal.tsx` animates hero headings by word with opacity and transform.
- `src/components/motion/animated-grid.tsx` adds staggered reveal to grids.
- `src/components/motion/number-counter.tsx` animates public numeric totals.
- `src/components/motion/scroll-progress.tsx` shows reading/page scroll progress.
- `src/components/motion/magnetic-button.tsx` adds a subtle hover response to CTAs.
- `src/components/motion/timeline-progress.tsx` supports the career timeline.

## Reduced motion

Motion checks `prefers-reduced-motion: reduce` through `src/lib/motion.ts` and `src/hooks/use-prefers-reduced-motion.ts`. When reduced motion is enabled, content remains visible and animations do not run.

## SEO and performance rules

- Main content is rendered in HTML before animation runs.
- Animations use `opacity` and `transform`, not layout properties.
- GSAP is loaded only inside client effects.
- ScrollTrigger instances are cleaned up through GSAP context cleanup.
- Mobile motion uses the same light transforms and avoids heavy parallax.

