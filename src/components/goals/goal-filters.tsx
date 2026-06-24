"use client";

type GoalFiltersProps = {
  teams: string[];
  competitions: string[];
  years: number[];
  team: string;
  competition: string;
  year: string;
  search: string;
  onTeamChange: (value: string) => void;
  onCompetitionChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onSearchChange: (value: string) => void;
};

export function GoalFilters({
  teams,
  competitions,
  years,
  team,
  competition,
  year,
  search,
  onTeamChange,
  onCompetitionChange,
  onYearChange,
  onSearchChange,
}: GoalFiltersProps) {
  const selectClass = "min-h-12 border border-white/10 bg-absolute-black px-3 text-sm text-warm outline-none transition focus:border-brand-orange";

  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_0.75fr_0.75fr_0.55fr]">
      <label className="sr-only" htmlFor="goal-search">Search goals</label>
      <input
        id="goal-search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search opponent, team or notes"
        className="min-h-12 border border-white/10 bg-absolute-black px-4 text-sm text-warm outline-none transition placeholder:text-muted focus:border-brand-orange"
      />
      <select value={team} onChange={(event) => onTeamChange(event.target.value)} className={selectClass} aria-label="Filter by team">
        <option value="">All teams</option>
        {teams.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <select value={competition} onChange={(event) => onCompetitionChange(event.target.value)} className={selectClass} aria-label="Filter by competition">
        <option value="">All competitions</option>
        {competitions.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <select value={year} onChange={(event) => onYearChange(event.target.value)} className={selectClass} aria-label="Filter by year">
        <option value="">All years</option>
        {years.map((item) => (
          <option key={item} value={item.toString()}>{item}</option>
        ))}
      </select>
    </div>
  );
}
