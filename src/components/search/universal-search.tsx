"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type {
  GoalByCompetition,
  GoalByTeam,
  GoalLogItem,
  MilestoneGoal,
} from "@/data/goals";
import { externalLinks } from "@/data/external-links";
import type { RecordItem } from "@/data/records";
import type { CareerPhase } from "@/data/career";
import { ExternalLink } from "@/components/ui/external-link";
import type { Article } from "@/types/content";

type UniversalSearchProps = {
  articles: Article[];
  goalTeams: GoalByTeam[];
  goalCompetitions: GoalByCompetition[];
  goalLog: GoalLogItem[];
  milestones: MilestoneGoal[];
  records: RecordItem[];
  career: CareerPhase[];
};

type SearchGroup = "Articles" | "Goals" | "Records" | "Career";

type SearchItem = {
  group: SearchGroup;
  title: string;
  excerpt: string;
  href: string;
  meta: string;
  keywords: string[];
};

const groupOrder: SearchGroup[] = ["Articles", "Goals", "Records", "Career"];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function matches(item: SearchItem, query: string) {
  if (!query) {
    return true;
  }

  const haystack = normalize([
    item.title,
    item.excerpt,
    item.meta,
    ...item.keywords,
  ].join(" "));

  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

function recordAnchor(category: string) {
  return category.toLowerCase().replaceAll(" ", "-");
}

export function UniversalSearch({
  articles,
  goalTeams,
  goalCompetitions,
  goalLog,
  milestones,
  records,
  career,
}: UniversalSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [input, setInput] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);

  const items = useMemo<SearchItem[]>(() => {
    const articleItems = articles.map<SearchItem>((article) => ({
      group: "Articles",
      title: article.title,
      excerpt: article.excerpt,
      href: `/blog/${article.slug}`,
      meta: `${article.category} / ${article.readTime}`,
      keywords: [
        article.subtitle,
        article.category,
        article.author,
        ...article.tags,
        ...article.body.flatMap((section) => [
          section.heading,
          ...section.paragraphs,
          section.quote ?? "",
        ]),
      ],
    }));

    const teamItems = goalTeams.map<SearchItem>((team) => ({
      group: "Goals",
      title: `${team.team} goals`,
      excerpt: `${team.goals} goals across ${team.period}.`,
      href: externalLinks.perplexityRonaldoGoals,
      meta: team.type,
      keywords: [team.team, team.period, team.type, String(team.goals)],
    }));

    const competitionItems = goalCompetitions.map<SearchItem>((competition) => ({
      group: "Goals",
      title: competition.competition,
      excerpt: `${competition.goals} tracked goals in this competition archive.`,
      href: externalLinks.perplexityRonaldoGoals,
      meta: "Competition",
      keywords: [competition.competition, String(competition.goals)],
    }));

    const milestoneItems = milestones.map<SearchItem>((goal) => ({
      group: "Goals",
      title: goal.milestone,
      excerpt: `${goal.team} vs ${goal.opponent} in ${goal.competition}. ${goal.description}`,
      href: externalLinks.perplexityRonaldoGoals,
      meta: goal.date,
      keywords: [goal.team, goal.opponent, goal.competition, goal.milestone],
    }));

    const logItems = goalLog.map<SearchItem>((goal) => ({
      group: "Goals",
      title: goal.goalNumber > 0 ? `Goal ${goal.goalNumber}` : goal.competition,
      excerpt: `${goal.team} vs ${goal.opponent}. ${goal.notes ?? ""}`,
      href: externalLinks.perplexityRonaldoGoals,
      meta: `${goal.date} / ${goal.competition}`,
      keywords: [
        goal.team,
        goal.opponent,
        goal.competition,
        goal.venue ?? "",
        goal.scoreContext ?? "",
      ],
    }));

    const recordItems = records.map<SearchItem>((record) => ({
      group: "Records",
      title: record.title,
      excerpt: record.description,
      href: `/records#${recordAnchor(record.category)}`,
      meta: `${record.category} / ${record.value}`,
      keywords: [record.category, record.value, record.title],
    }));

    const careerItems = career.map<SearchItem>((phase) => ({
      group: "Career",
      title: phase.title,
      excerpt: phase.summary,
      href: `/career#${phase.id}`,
      meta: phase.period,
      keywords: [
        phase.period,
        phase.goals ?? "",
        phase.appearances ?? "",
        ...phase.honors,
      ],
    }));

    return [
      ...articleItems,
      ...teamItems,
      ...competitionItems,
      ...milestoneItems,
      ...logItems,
      ...recordItems,
      ...careerItems,
    ];
  }, [articles, career, goalCompetitions, goalLog, goalTeams, milestones, records]);

  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(input.trim()), 180);

    return () => window.clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    const nextUrl = params.toString() ? `${pathname}?${params}` : pathname;
    router.replace(nextUrl, { scroll: false });
  }, [pathname, query, router, searchParams]);

  const groupedResults = useMemo(() => {
    const filtered = items.filter((item) => matches(item, query));

    return groupOrder.map((group) => ({
      group,
      items: filtered.filter((item) => item.group === group).slice(0, query ? 12 : 6),
    }));
  }, [items, query]);

  const resultCount = groupedResults.reduce((total, group) => total + group.items.length, 0);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-gold"
          >
            Search stories, goals, records and career
          </label>
          <input
            id="search"
            type="search"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Search by team, competition, tag, record or career chapter"
            className="mt-4 w-full border border-white/10 bg-card px-4 py-4 text-base text-warm outline-none transition placeholder:text-muted focus:border-gold"
          />
        </div>
        <button
          type="button"
          onClick={() => setInput("")}
          className="inline-flex min-h-12 items-center justify-center border border-white/10 px-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted transition hover:border-brand-orange hover:text-brand-orange"
        >
          Clear
        </button>
      </div>

      <p className="mt-5 text-sm text-muted" aria-live="polite">
        {query ? `${resultCount} results for "${query}"` : `${resultCount} featured entries`}
      </p>

      <div className="mt-8 grid gap-8">
        {groupedResults.map((group) =>
          group.items.length > 0 ? (
            <section key={group.group}>
              <h2 className="font-display text-3xl uppercase text-warm">
                {group.group}
              </h2>
              <div className="mt-4 grid gap-4">
                {group.items.map((item) =>
                  item.href.startsWith("http") ? (
                    <ExternalLink
                      key={`${item.group}-${item.href}-${item.title}`}
                      href={item.href}
                      ariaLabel="Open Cristiano Ronaldo interactive goals experience on Perplexity"
                      className="block border border-white/10 bg-card p-5 transition hover:border-gold focus-visible:border-gold focus-visible:outline-none"
                    >
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                        {item.meta}
                      </span>
                      <span className="mt-3 block font-display text-3xl uppercase leading-none text-warm">
                        {item.title}
                      </span>
                      <span className="mt-3 block text-sm leading-6 text-muted">
                        {item.excerpt}
                      </span>
                    </ExternalLink>
                  ) : (
                    <Link
                      key={`${item.group}-${item.href}-${item.title}`}
                      href={item.href}
                      className="border border-white/10 bg-card p-5 transition hover:border-gold focus-visible:border-gold focus-visible:outline-none"
                    >
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                        {item.meta}
                      </span>
                      <p className="mt-3 font-display text-3xl uppercase leading-none text-warm">
                        {item.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {item.excerpt}
                      </p>
                    </Link>
                  ),
                )}
              </div>
            </section>
          ) : null,
        )}
      </div>

      {resultCount === 0 ? (
        <div className="mt-8 border border-white/10 bg-card p-6">
          <p className="font-display text-3xl uppercase text-warm">
            No matching archive entries.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Try a team, competition, record name, tag or career chapter.
          </p>
        </div>
      ) : null}
    </div>
  );
}
