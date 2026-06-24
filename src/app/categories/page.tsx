import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { categories } from "@/data/site";
import { getArticlesByCategory } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Categories", path: "/categories" });

export default function CategoriesPage() {
  return (
    <>
      <PageHero eyebrow="Categories" title="Story categories." text="Explore CR7 Blog coverage by career, records, Portugal, mindset, legacy and fans." />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`} className="border border-white/10 bg-card p-6 transition hover:border-white/40">
            <p className="font-mono text-sm text-brand-orange">{getArticlesByCategory(category.slug).length.toString().padStart(2, "0")}</p>
            <h2 className="mt-4 font-display text-4xl uppercase text-warm">{category.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
