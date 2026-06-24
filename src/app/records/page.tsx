import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { recordItems } from "@/data/records";
import { buildMetadata } from "@/lib/metadata";

const filters = ["All", "Champions League", "Portugal", "Clubs", "Awards", "Longevity"];

export const metadata = buildMetadata({
  title: "Records",
  description: "The milestones and records that define Cristiano Ronaldo's career.",
  path: "/records",
});

export default function RecordsPage() {
  return (
    <>
      <PageHero
        eyebrow="Records"
        title="Records"
        text="The milestones and records that define Cristiano Ronaldo's career."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <a
              key={filter}
              href={`#${filter.toLowerCase().replaceAll(" ", "-")}`}
              className="border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition hover:border-brand-orange hover:text-brand-orange"
            >
              {filter}
            </a>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recordItems.map((record) => (
            <article key={record.id} id={record.category.toLowerCase().replaceAll(" ", "-")} className="border border-white/10 bg-card p-5 sm:p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {record.category}
              </p>
              <p className="mt-6 font-mono text-5xl font-bold leading-none text-warm">
                {record.value}
              </p>
              <h2 className="mt-5 font-display text-3xl uppercase leading-none text-warm">
                {record.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{record.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 border border-white/10 bg-card p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Goal archive
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none text-warm">
              Explore the goals behind the records.
            </h2>
          </div>
          <Link
            href="/goals"
            className="mt-6 inline-flex rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black sm:mt-0"
          >
            Open Goal Universe
          </Link>
        </div>
      </section>
    </>
  );
}
