import { notFound } from "next/navigation";
import { ArticleGrid } from "@/components/article-grid";
import { PageHero } from "@/components/page-hero";
import { getAllTags, getArticlesByTag } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllTags().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return buildMetadata({ title: `Tag: ${slug}`, path: `/tags/${slug}` });
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = getArticlesByTag(slug);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Tag" title={slug} text="Stories grouped by tag." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ArticleGrid articles={articles} />
      </section>
    </>
  );
}
