import type { GoalByTeam } from "@/data/goals";

type GoalsByTeamProps = {
  teams: GoalByTeam[];
};

export function GoalsByTeam({ teams }: GoalsByTeamProps) {
  const numericGoals = teams.map((team) => (typeof team.goals === "number" ? team.goals : Number.parseInt(team.goals, 10)));
  const maxGoals = Math.max(...numericGoals);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Goals by Team
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
            Every shirt, every chapter.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {teams.map((team) => {
            const value = typeof team.goals === "number" ? team.goals : Number.parseInt(team.goals, 10);
            return (
              <article key={team.team} className="border border-white/10 bg-card p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-4xl uppercase leading-none text-warm">
                      {team.team}
                    </h3>
                    <p className="mt-2 font-mono text-xs text-muted">{team.period}</p>
                  </div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    {team.type}
                  </p>
                </div>
                <p className="mt-8 font-mono text-5xl font-bold leading-none text-brand-orange">
                  {team.goals}
                </p>
                <div className="mt-5 h-2 bg-white/10">
                  <div
                    className="h-full bg-brand-orange"
                    style={{ width: `${Math.max(8, (value / maxGoals) * 100)}%` }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
