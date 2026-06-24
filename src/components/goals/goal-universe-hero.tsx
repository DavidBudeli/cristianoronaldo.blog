import { GoalConstellation } from "@/components/goals/goal-constellation";
import { GoalCounter } from "@/components/goals/goal-counter";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { Reveal } from "@/components/motion/reveal";
import type { GoalByYear, GoalSummary, MilestoneGoal } from "@/data/goals";

type GoalUniverseHeroProps = {
  summary: GoalSummary;
  years: GoalByYear[];
  milestones: MilestoneGoal[];
};

const quickFilters = ["All", "Clubs", "Portugal", "Champions League", "Real Madrid", "Manchester United", "Al Nassr"];

export function GoalUniverseHero({ summary, years, milestones }: GoalUniverseHeroProps) {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-absolute-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <Reveal className="min-w-0" variant="clip-reveal">
          <p className="inline-flex border border-brand-orange/70 bg-brand-orange px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
            All Goals Archive
          </p>
          <h1 className="mt-7 font-display text-6xl uppercase leading-[0.88] text-warm sm:text-8xl lg:text-9xl">
            Goal Universe
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Explore Cristiano Ronaldo&apos;s goals by club, country, competition, year and milestone.
          </p>
          <p className="mt-8 max-w-2xl font-display text-4xl uppercase leading-none text-warm sm:text-5xl">
            Every goal tells a chapter. Explore the numbers, eras and milestones behind Cristiano Ronaldo&apos;s scoring legacy.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <a
                key={filter}
                href="#goal-log"
                className="border border-white/10 bg-card px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition hover:border-brand-orange hover:text-brand-orange"
              >
                {filter}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal className="grid min-w-0 gap-4" stagger={0.08}>
          <GoalCounter totalGoals={summary.totalGoals} lastChecked={summary.lastChecked} />
          <ParallaxLayer y={-6}>
            <GoalConstellation years={years} milestones={milestones} compact />
          </ParallaxLayer>
        </Reveal>
      </div>
    </section>
  );
}
