import type { MetadataRoute } from "next";
import { categories } from "@/data/site";
import { getAllArticles, getAllTags } from "@/lib/articles";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/blog",
    "/career",
    "/goals",
    "/stats",
    "/records",
    "/mindset",
    "/fans",
    "/categories",
    "/search",
    "/archive",
    "/authors",
    "/legacy",
    "/newsletter",
    "/about",
    "/privacy",
    "/legal",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route || "/") })),
    ...getAllArticles().map((article) => ({ url: absoluteUrl(`/blog/${article.slug}`) })),
    ...categories.map((category) => ({ url: absoluteUrl(`/categories/${category.slug}`) })),
    ...getAllTags().map((tag) => ({ url: absoluteUrl(`/tags/${tag}`) })),
  ];
}
