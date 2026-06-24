import { notFound } from "next/navigation";
import { ArticleGrid } from "@/components/article-grid";
import { PageHero } from "@/components/page-hero";
import { authors } from "@/data/site";
import { getArticlesByAuthor, getAuthorBySlug } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  return buildMetadata({ title: author?.name ?? "Author", path: `/authors/${slug}` });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={author.role} title={author.name} text={author.bio} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ArticleGrid articles={getArticlesByAuthor(author.slug)} />
      </section>
    </>
  );
}
