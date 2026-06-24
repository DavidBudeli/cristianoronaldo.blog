import { NumberCounter } from "@/components/motion/number-counter";

type GoalCounterProps = {
  totalGoals: number;
  lastChecked: string;
};

export function GoalCounter({ totalGoals, lastChecked }: GoalCounterProps) {
  return (
    <div className="border border-white/10 bg-card p-5 sm:p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-orange">
        Total goals
      </p>
      <p className="mt-4 font-mono text-6xl font-bold leading-none text-warm sm:text-8xl">
        <NumberCounter value={totalGoals.toLocaleString("en-US")} />
      </p>
      <p className="mt-4 text-xs leading-6 text-muted">
        Last checked {lastChecked}
      </p>
    </div>
  );
}
