import { ArticleGrid } from "@/components/article-grid";
import { PageHero } from "@/components/page-hero";
import { MindsetBand } from "@/components/home/mindset-band";
import { getArticlesByCategory } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Mindset",
  description:
    "Discipline, longevity and performance through the lens of a career built on consistency.",
  path: "/mindset",
});

export default function MindsetPage() {
  return (
    <>
      <PageHero
        eyebrow="Mindset"
        title="Mindset"
        text="Discipline, longevity and performance through the lens of a career built on consistency."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <MindsetBand />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {["Discipline", "Longevity", "Adaptation", "Pressure", "Consistency"].map((item) => (
            <div key={item} className="border border-white/10 bg-card p-5">
              <h2 className="font-display text-3xl uppercase leading-none text-warm">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                A public lens on how Ronaldo&apos;s career stayed productive across clubs, leagues and international tournaments.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ArticleGrid articles={getArticlesByCategory("mindset")} />
        </div>
      </section>
    </>
  );
}
