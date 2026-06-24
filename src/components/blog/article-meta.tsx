import { formatDisplayDate } from "@/lib/articles";
import type { Article } from "@/types/content";

export function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-muted">
      <span>{formatDisplayDate(article.publishedAt)}</span>
      <span>{article.readTime}</span>
      <span>{article.author}</span>
    </div>
  );
}
