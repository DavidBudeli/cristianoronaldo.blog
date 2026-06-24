import { GoalLogTable } from "@/components/goals/goal-log-table";
import { GoalSources } from "@/components/goals/goal-sources";
import { GoalConstellation } from "@/components/goals/goal-constellation";
import { GoalUniverseHero } from "@/components/goals/goal-universe-hero";
import { GoalsByCompetition } from "@/components/goals/goals-by-competition";
import { GoalsByTeam } from "@/components/goals/goals-by-team";
import { GoalsByYear } from "@/components/goals/goals-by-year";
import { MilestoneGoals } from "@/components/goals/milestone-goals";
import {
  goalArchiveNote,
  goalLog,
  goalSources,
  goalSummary,
  goalsByCompetition,
  goalsByTeam,
  goalsByYear,
  milestoneGoals,
} from "@/data/goals";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cristiano Ronaldo Goals | Complete CR7 Goal Archive",
  description:
    "Explore Cristiano Ronaldo's goals by club, country, competition, year and milestone in the CR7 Blog Goal Universe.",
  path: "/goals",
  absoluteTitle: true,
});

export default function GoalsPage() {
  return (
    <>
      <GoalUniverseHero summary={goalSummary} years={goalsByYear} milestones={milestoneGoals} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GoalConstellation years={goalsByYear} milestones={milestoneGoals} />
        </div>
      </section>
      <GoalsByTeam teams={goalsByTeam} />
      <GoalsByCompetition competitions={goalsByCompetition} />
      <GoalsByYear years={goalsByYear} />
      <MilestoneGoals milestones={milestoneGoals} />
      <GoalLogTable items={goalLog} />
      <GoalSources sources={goalSources} note={goalArchiveNote} />
    </>
  );
}
