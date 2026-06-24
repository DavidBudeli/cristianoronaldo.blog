import { NumberCounter } from "@/components/motion/number-counter";
import { Reveal } from "@/components/motion/reveal";
import type { GoalByCompetition } from "@/data/goals";

type GoalsByCompetitionProps = {
  competitions: GoalByCompetition[];
};

export function GoalsByCompetition({ competitions }: GoalsByCompetitionProps) {
  return (
    <section className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Goals by Competition
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
              The arenas of the archive.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Competition totals show where the goals landed: Europe, domestic leagues, Portugal and the current Saudi chapter.
            </p>
          </div>
          <Reveal className="grid gap-3 sm:grid-cols-2" stagger={0.05}>
            {competitions.map((item) => (
              <article key={item.competition} data-reveal-item className="border border-white/10 bg-card p-5">
                <p className="font-mono text-4xl font-bold leading-none text-brand-orange">
                  <NumberCounter value={item.goals} />
                </p>
                <h3 className="mt-4 font-display text-3xl uppercase leading-none text-warm">
                  {item.competition}
                </h3>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
