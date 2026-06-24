import type { Article } from "@/types/content";

export function searchArticles(articles: Article[], query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return articles;
  }

  return articles.filter((article) => {
    const value = [
      article.title,
      article.subtitle,
      article.excerpt,
      article.category,
      article.author,
      ...article.tags,
    ]
      .join(" ")
      .toLowerCase();

    return value.includes(normalized);
  });
}
