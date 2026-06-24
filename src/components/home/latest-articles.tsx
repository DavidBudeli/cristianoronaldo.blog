import { ArticleGrid } from "@/components/article-grid";
import { getAllArticles } from "@/lib/articles";

export function LatestArticles() {
  return <ArticleGrid articles={getAllArticles().filter((article) => !article.featured).slice(0, 6)} />;
}
