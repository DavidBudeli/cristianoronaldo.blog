import { AnimatedGrid } from "@/components/motion/animated-grid";
import { NumberCounter } from "@/components/motion/number-counter";
import { signatureNumbers } from "@/data/site";

export function StatsDashboard() {
  return (
    <AnimatedGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
      {signatureNumbers.map((item) => (
        <div key={item.label} data-reveal-item className="border border-white/10 bg-card p-5">
          <p className="font-mono text-5xl font-bold text-gold-light">
            <NumberCounter value={item.value} />
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-warm">
            {item.label}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
        </div>
      ))}
    </AnimatedGrid>
  );
}
