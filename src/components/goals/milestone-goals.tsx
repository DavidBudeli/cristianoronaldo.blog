import type { MilestoneGoal } from "@/data/goals";

type MilestoneGoalsProps = {
  milestones: MilestoneGoal[];
};

export function MilestoneGoals({ milestones }: MilestoneGoalsProps) {
  return (
    <section className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Milestone Goals
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
            Numbers that became moments.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {milestones.map((goal) => (
            <article key={goal.milestone} className="border border-white/10 bg-card p-5 sm:p-6">
              <p className="font-mono text-xs text-brand-orange">{goal.date}</p>
              <h3 className="mt-4 font-display text-4xl uppercase leading-none text-warm">
                {goal.milestone}
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.12em] text-muted">
                {goal.team} vs {goal.opponent}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{goal.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
