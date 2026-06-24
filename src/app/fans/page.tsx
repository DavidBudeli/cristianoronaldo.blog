import { ArticleGrid } from "@/components/article-grid";
import { FanCommunityPreview } from "@/components/home/fan-community-preview";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageHero } from "@/components/page-hero";
import { getArticlesByCategory } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "For the Fans",
  description:
    "A global football community connected by every chapter of Cristiano Ronaldo's career.",
  path: "/fans",
});

export default function FansPage() {
  return (
    <>
      <PageHero
        eyebrow="Fans"
        title="For the Fans"
        text="A global football community connected by every chapter of Cristiano Ronaldo's career."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-8">
          <FanCommunityPreview />
          <div className="grid gap-3 sm:grid-cols-2">
            {["Global Support", "Matchday Memories", "Portugal Pride", "Iconic Celebrations"].map((item) => (
              <div key={item} className="border border-white/10 bg-card p-5">
                <h2 className="font-display text-3xl uppercase leading-none text-warm">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  A fan-facing chapter connected to the goals, clubs and national-team moments that shaped the CR7 story.
                </p>
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-card p-6">
            <NewsletterForm />
          </div>
        </div>
        <ArticleGrid articles={getArticlesByCategory("fans")} />
      </section>
    </>
  );
}
