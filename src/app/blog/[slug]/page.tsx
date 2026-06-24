import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd, articleJsonLd } from "@/lib/json-ld";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({ title: "Artigo nao encontrado", path: `/blog/${slug}` });
  }

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.coverImage,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: [article.author],
    tags: article.tags,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleLayout article={article} />
      <JsonLd data={articleJsonLd(article)} />
    </>
  );
}
