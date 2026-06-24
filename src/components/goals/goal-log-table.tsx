"use client";

import { useMemo, useState } from "react";
import { GoalFilters } from "@/components/goals/goal-filters";
import type { GoalLogItem } from "@/data/goals";

type GoalLogTableProps = {
  items: GoalLogItem[];
};

export function GoalLogTable({ items }: GoalLogTableProps) {
  const [team, setTeam] = useState("");
  const [competition, setCompetition] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");

  const teams = useMemo(() => Array.from(new Set(items.map((item) => item.team))).sort(), [items]);
  const competitions = useMemo(() => Array.from(new Set(items.map((item) => item.competition))).sort(), [items]);
  const years = useMemo(
    () => Array.from(new Set(items.map((item) => new Date(item.date).getFullYear()))).sort((a, b) => b - a),
    [items],
  );

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTeam = team ? item.team === team : true;
      const matchesCompetition = competition ? item.competition === competition : true;
      const matchesYear = year ? new Date(item.date).getFullYear().toString() === year : true;
      const haystack = [item.team, item.opponent, item.competition, item.notes, item.venue]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch = query ? haystack.includes(query) : true;

      return matchesTeam && matchesCompetition && matchesYear && matchesSearch;
    });
  }, [competition, items, search, team, year]);

  return (
    <section id="goal-log" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Goal Log
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
            Search the archive.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            A structured sample log for milestone and source-linked goals, ready to expand into a complete match-by-match archive.
          </p>
        </div>
        <div className="mt-9 border border-white/10 bg-card p-4 sm:p-5">
          <GoalFilters
            teams={teams}
            competitions={competitions}
            years={years}
            team={team}
            competition={competition}
            year={year}
            search={search}
            onTeamChange={setTeam}
            onCompetitionChange={setCompetition}
            onYearChange={setYear}
            onSearchChange={setSearch}
          />
          <div className="mt-5 max-w-full overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  <th className="px-4 py-4">Goal</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Team</th>
                  <th className="px-4 py-4">Opponent</th>
                  <th className="px-4 py-4">Competition</th>
                  <th className="px-4 py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {results.map((item) => (
                  <tr key={item.id} className="align-top">
                    <td className="px-4 py-4 font-mono text-xl font-bold text-brand-orange">
                      {item.goalNumber > 0 ? item.goalNumber : "Record"}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-muted">{item.date}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-warm">{item.team}</td>
                    <td className="px-4 py-4 text-sm text-muted">{item.opponent}</td>
                    <td className="px-4 py-4 text-sm text-muted">{item.competition}</td>
                    <td className="max-w-sm px-4 py-4 text-sm leading-6 text-muted">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {results.length === 0 ? (
            <p className="mt-5 border border-white/10 bg-absolute-black p-4 text-sm text-muted">
              No goals match those filters.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
