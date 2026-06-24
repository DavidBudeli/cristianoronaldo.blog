import { articles } from "@/data/articles";
import { authors, categories } from "@/data/site";
import type { Article, CategorySlug } from "@/types/content";

export function getAllArticles() {
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? getAllArticles()[0];
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article) {
  return article.related
    .map((slug) => getArticleBySlug(slug))
    .filter((related): related is Article => Boolean(related));
}

export function getArticlesByCategory(category: CategorySlug) {
  return getAllArticles().filter((article) => article.category === category);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getArticlesByAuthor(authorSlug: string) {
  return getAllArticles().filter((article) => article.author === authorSlug);
}

export function getAllTags() {
  return Array.from(new Set(articles.flatMap((article) => article.tags))).sort();
}

export function getArticlesByTag(tag: string) {
  return getAllArticles().filter((article) => article.tags.includes(tag));
}

export function getCategoryTitle(categorySlug: CategorySlug) {
  return getCategoryBySlug(categorySlug)?.title ?? categorySlug;
}

export function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}
