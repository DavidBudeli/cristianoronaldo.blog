import { NumberCounter } from "@/components/motion/number-counter";
import { Reveal } from "@/components/motion/reveal";
import type { GoalByYear } from "@/data/goals";

type GoalsByYearProps = {
  years: GoalByYear[];
};

export function GoalsByYear({ years }: GoalsByYearProps) {
  const maxGoals = Math.max(...years.map((year) => year.goals));

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Goals by Year
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
            The scoring rhythm.
          </h2>
        </div>
        <Reveal className="mt-9 overflow-x-auto border border-white/10 bg-card p-5">
          <div className="flex min-w-[920px] items-end gap-2">
            {years.map((year) => (
              <div key={year.year} className="flex flex-1 flex-col items-center gap-3">
                <span className="font-mono text-xs text-muted">
                  <NumberCounter value={year.goals} />
                </span>
                <div
                  className="w-full bg-brand-orange"
                  style={{ height: `${Math.max(16, (year.goals / maxGoals) * 180)}px` }}
                />
                <span className="font-mono text-[0.65rem] text-muted">{year.year}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
