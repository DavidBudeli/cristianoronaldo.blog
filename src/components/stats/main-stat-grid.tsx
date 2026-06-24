import type { StatCard as StatCardData } from "@/data/stats";
import { StatCard } from "@/components/stats/stat-card";

type MainStatGridProps = {
  eyebrow: string;
  title: string;
  text?: string;
  stats: StatCardData[];
};

export function MainStatGrid({ eyebrow, title, text, stats }: MainStatGridProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 text-base leading-8 text-muted">{text}</p>
          ) : null}
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
