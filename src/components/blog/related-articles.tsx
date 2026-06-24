import { ArticleGrid } from "@/components/article-grid";
import { getRelatedArticles } from "@/lib/articles";
import type { Article } from "@/types/content";

export function RelatedArticles({ article }: { article: Article }) {
  return <ArticleGrid articles={getRelatedArticles(article)} />;
}
