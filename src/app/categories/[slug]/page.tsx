import { notFound } from "next/navigation";
import { ArticleGrid } from "@/components/article-grid";
import { CategoryFilter } from "@/components/category-filter";
import { PageHero } from "@/components/page-hero";
import { categories } from "@/data/site";
import { getArticlesByCategory, getCategoryBySlug } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";
import type { CategorySlug } from "@/types/content";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return buildMetadata({
    title: category?.title ?? "Category",
    description: category?.description,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Category" title={category.title} text={category.description} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <CategoryFilter active={category.slug} />
        <div className="mt-8">
          <ArticleGrid articles={getArticlesByCategory(category.slug as CategorySlug)} />
        </div>
      </section>
    </>
  );
}
