import { goalSummary, goalsByCompetition, goalsByTeam } from "@/data/goals";
import { recordItems } from "@/data/records";
import { siteConfig } from "@/data/site";
import { mainStats } from "@/data/stats";
import { absoluteUrl } from "@/lib/metadata";
import type { Article } from "@/types/content";

export type StructuredData = Record<string, unknown>;

const publisher = {
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: siteConfig.visualName,
  url: absoluteUrl("/"),
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/brand/logos/cr7.svg"),
  },
};

export function webSiteStructuredData(): StructuredData {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.visualName,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: ["pt-BR", "en"],
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/search")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function personStructuredData(): StructuredData {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#cristiano-ronaldo"),
    name: "Cristiano Ronaldo",
    alternateName: "CR7",
    description:
      "Professional footballer whose public records, goals and career milestones are covered by CR7 Blog.",
    subjectOf: { "@id": absoluteUrl("/#website") },
  };
}

export function organizationStructuredData(): StructuredData {
  return publisher;
}

export function blogStructuredData(): StructuredData {
  return {
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    name: siteConfig.visualName,
    description: siteConfig.description,
    url: absoluteUrl("/blog"),
    inLanguage: ["pt-BR", "en"],
    publisher: { "@id": absoluteUrl("/#organization") },
    about: { "@id": absoluteUrl("/#cristiano-ronaldo") },
  };
}

export function globalStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData(),
      personStructuredData(),
      webSiteStructuredData(),
      blogStructuredData(),
    ],
  };
}

export function blogPostingStructuredData(article: Article): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${article.slug}#article`),
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: ["pt-BR", "en"],
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
    image: absoluteUrl(article.coverImage),
    keywords: article.tags,
    articleSection: article.category,
  };
}

export function breadcrumbStructuredData(
  items: Array<{ name: string; path: string }>,
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function collectionPageStructuredData({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: ["pt-BR", "en"],
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#cristiano-ronaldo") },
  };
}

export function itemListStructuredData({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: Array<{ name: string; path: string; description?: string }>;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
      description: item.description,
    })),
  };
}

export function goalsDatasetStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Cristiano Ronaldo Goal Archive",
    description:
      "Public Cristiano Ronaldo goal totals by team, competition, year and milestone.",
    url: absoluteUrl("/goals"),
    inLanguage: ["pt-BR", "en"],
    keywords: ["Cristiano Ronaldo goals", "CR7 goals", "goal archive"],
    creator: publisher,
    variableMeasured: [
      `Total goals: ${goalSummary.totalGoals}`,
      ...goalsByTeam.map((team) => `${team.team}: ${team.goals}`),
      ...goalsByCompetition.map((item) => `${item.competition}: ${item.goals}`),
    ],
  };
}

export function statsDatasetStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Cristiano Ronaldo Statistics",
    description:
      "Career statistics, records and milestone numbers for Cristiano Ronaldo.",
    url: absoluteUrl("/stats"),
    inLanguage: ["pt-BR", "en"],
    keywords: ["Cristiano Ronaldo stats", "CR7 records", "football statistics"],
    creator: publisher,
    variableMeasured: mainStats.map((stat) => `${stat.label}: ${stat.value}`),
  };
}

export function recordsItemListStructuredData(): StructuredData {
  return itemListStructuredData({
    name: "Cristiano Ronaldo Records",
    path: "/records",
    items: recordItems.map((record) => ({
      name: record.title,
      path: `/records#${record.category.toLowerCase().replaceAll(" ", "-")}`,
      description: record.description,
    })),
  });
}
