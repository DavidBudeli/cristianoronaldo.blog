import type { ClubStatRow } from "@/data/stats";

type ClubBreakdownTableProps = {
  rows: ClubStatRow[];
};

export function ClubBreakdownTable({ rows }: ClubBreakdownTableProps) {
  return (
    <section className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Club Breakdown
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
            Goals by shirt.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            A compact view of the defining teams and national-team chapter behind the scoring total.
          </p>
        </div>

        <div className="mt-9 max-w-full overflow-x-auto border border-white/10 bg-card">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-card-elevated text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                <th className="px-5 py-4 font-semibold">Team</th>
                <th className="px-5 py-4 font-semibold">Period</th>
                <th className="px-5 py-4 font-semibold">Goals</th>
                <th className="px-5 py-4 font-semibold">Appearances</th>
                <th className="px-5 py-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row) => (
                <tr key={`${row.team}-${row.period}`} className="align-top">
                  <td className="px-5 py-5 font-display text-2xl uppercase leading-none text-warm">
                    {row.team}
                  </td>
                  <td className="px-5 py-5 font-mono text-sm text-muted">
                    {row.period}
                  </td>
                  <td className="px-5 py-5 font-mono text-2xl font-bold text-brand-orange">
                    {row.goals}
                  </td>
                  <td className="px-5 py-5 font-mono text-2xl font-bold text-warm">
                    {row.appearances}
                  </td>
                  <td className="max-w-sm px-5 py-5 text-sm leading-7 text-muted">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
