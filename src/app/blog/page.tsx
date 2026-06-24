import Link from "next/link";
import { ArticleGrid } from "@/components/article-grid";
import { CategoryFilter } from "@/components/category-filter";
import { SearchBox } from "@/components/search-box";
import { PageHero } from "@/components/page-hero";
import { TagCloud } from "@/components/blog/tag-cloud";
import { Reveal } from "@/components/motion/reveal";
import { getAllArticles } from "@/lib/articles";
import { JsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  collectionPageStructuredData,
  itemListStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Latest Stories",
  description:
    "News, features and editorial stories about Cristiano Ronaldo's career, records and legacy.",
  path: "/blog",
});

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Latest Stories"
        text="News, features and editorial stories about Cristiano Ronaldo's career, records and legacy."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <Reveal className="min-w-0">
          <CategoryFilter />
          <div className="mt-8">
            <ArticleGrid articles={articles} />
          </div>
        </Reveal>
        <Reveal as="aside" className="min-w-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
          <SearchBox articles={articles} />
          <div className="border border-white/10 bg-card p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Tags</p>
            <TagCloud />
          </div>
          <div className="border border-white/10 bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Most Read
            </p>
            <div className="mt-4 grid gap-3">
              {articles.slice(0, 4).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="font-display text-2xl uppercase leading-none text-warm transition hover:text-brand-orange"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <JsonLd
        data={collectionPageStructuredData({
          name: "CR7 Blog stories",
          description:
            "News, features and editorial stories about Cristiano Ronaldo's career, records and legacy.",
          path: "/blog",
        })}
      />
      <JsonLd
        data={itemListStructuredData({
          name: "Latest CR7 Blog articles",
          path: "/blog",
          items: articles.map((article) => ({
            name: article.title,
            path: `/blog/${article.slug}`,
            description: article.excerpt,
          })),
        })}
      />
    </>
  );
}
