import { NumberCounter } from "@/components/motion/number-counter";
import { Reveal } from "@/components/motion/reveal";
import type { StatCard as StatCardData } from "@/data/stats";

type StatsHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  phrase: string;
  quickStats: StatCardData[];
  updateNote: string;
};

export function StatsHero({
  badge,
  title,
  subtitle,
  phrase,
  quickStats,
  updateNote,
}: StatsHeroProps) {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-absolute-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <Reveal className="min-w-0" variant="clip-reveal">
          <p className="inline-flex border border-brand-orange/70 bg-brand-orange px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
            {badge}
          </p>
          <h1 className="mt-7 max-w-5xl font-display text-6xl uppercase leading-[0.88] text-warm sm:text-8xl lg:text-9xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {subtitle}
          </p>
          <p className="mt-8 max-w-3xl font-display text-4xl uppercase leading-none text-warm sm:text-6xl">
            {phrase}
          </p>
          <p className="mt-8 max-w-2xl border-l border-brand-orange pl-4 text-xs leading-6 text-muted">
            {updateNote}
          </p>
        </Reveal>

        <Reveal className="grid min-w-0 gap-3 self-end sm:grid-cols-2" stagger={0.07}>
          {quickStats.map((stat) => (
            <article
              key={stat.id}
              data-reveal-item
              className="border border-white/10 bg-card p-5 sm:p-6"
            >
              <p className="font-mono text-4xl font-bold leading-none text-brand-orange sm:text-5xl">
                <NumberCounter value={stat.value} />
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-none text-warm">
                {stat.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {stat.description}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
