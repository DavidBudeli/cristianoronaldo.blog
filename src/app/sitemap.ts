import type { MetadataRoute } from "next";
import { categories } from "@/data/site";
import { getAllArticles, getAllTags } from "@/lib/articles";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "daily" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "daily" as const },
    { route: "/stats", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/records", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/career", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "/mindset", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/fans", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/categories", priority: 0.55, changeFrequency: "weekly" as const },
    { route: "/search", priority: 0.5, changeFrequency: "weekly" as const },
    { route: "/archive", priority: 0.55, changeFrequency: "weekly" as const },
    { route: "/authors", priority: 0.45, changeFrequency: "monthly" as const },
    { route: "/legacy", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/newsletter", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.45, changeFrequency: "yearly" as const },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/legal", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: absoluteUrl(route || "/"),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...getAllArticles().map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: article.featured ? 0.85 : 0.75,
    })),
    ...categories.map((category) => ({
      url: absoluteUrl(`/categories/${category.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.55,
    })),
    ...getAllTags().map((tag) => ({
      url: absoluteUrl(`/tags/${tag}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.45,
    })),
  ];
}
