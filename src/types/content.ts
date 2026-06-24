export type CategorySlug =
  | "career"
  | "records"
  | "portugal"
  | "mindset"
  | "legacy"
  | "fans";

export type SiteMode = "local" | "proposal" | "production";

export type BrandAssetsStatus = "pending" | "partial" | "approved";

export type Category = {
  slug: CategorySlug;
  title: string;
  description: string;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  quote?: string;
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: CategorySlug;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  coverImage: string;
  sourceIds: string[];
  featured: boolean;
  body: ArticleSection[];
  related: string[];
};

export type ReadinessItem = {
  label: string;
  status: "pending" | "complete";
};
