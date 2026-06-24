import { ArticleCard } from "@/components/article-card";
import type { Article } from "@/types/content";

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
