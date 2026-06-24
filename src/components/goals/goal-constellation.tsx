import type { GoalByYear, MilestoneGoal } from "@/data/goals";

type GoalConstellationProps = {
  years: GoalByYear[];
  milestones: MilestoneGoal[];
  compact?: boolean;
};

export function GoalConstellation({ years, milestones, compact = false }: GoalConstellationProps) {
  const maxGoals = Math.max(...years.map((year) => year.goals));
  const points = years.map((year, index) => {
    const x = 8 + (index / Math.max(years.length - 1, 1)) * 84;
    const y = 84 - (year.goals / maxGoals) * 66;
    const radius = year.goals >= 60 ? 4.8 : year.goals >= 45 ? 3.8 : 2.8;

    return { ...year, x, y, radius };
  });

  return (
    <div className={`relative overflow-hidden border border-white/10 bg-card ${compact ? "min-h-80" : "min-h-[420px]"} p-5 sm:p-6`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,90,31,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(142,16,24,0.24),transparent_30%)]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Goal Constellation
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none text-warm">
              Seasons as stars.
            </h2>
          </div>
          <p className="hidden max-w-44 text-right text-xs leading-6 text-muted sm:block">
            Points represent season totals and selected milestones.
          </p>
        </div>

        <svg
          viewBox="0 0 100 100"
          role="img"
          aria-label="Abstract constellation of Cristiano Ronaldo goal seasons"
          className="mt-8 h-64 w-full overflow-visible sm:h-80"
        >
          <defs>
            <linearGradient id="goal-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="url(#goal-line)"
            strokeWidth="0.45"
            points={points.map((point) => `${point.x},${point.y}`).join(" ")}
          />
          {points.map((point) => (
            <g key={point.year}>
              <circle cx={point.x} cy={point.y} r={point.radius + 1.6} fill="#ff5a1f" opacity="0.13" />
              <circle cx={point.x} cy={point.y} r={point.radius} fill="#ff5a1f" />
              {point.year % 4 === 0 ? (
                <text x={point.x} y={94} textAnchor="middle" className="fill-[#b2aca4] text-[3px]">
                  {point.year}
                </text>
              ) : null}
            </g>
          ))}
          {milestones.slice(-3).map((milestone, index) => (
            <text
              key={milestone.milestone}
              x={58}
              y={12 + index * 7}
              className="fill-white text-[3px] font-bold uppercase"
            >
              {milestone.milestone}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
