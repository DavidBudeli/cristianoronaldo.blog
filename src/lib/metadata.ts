import type { Metadata } from "next";
import { canIndex } from "@/lib/brand-readiness";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/brand/og-image.png",
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors = ["CR7 Editorial Team"],
  tags = [],
}: MetadataInput = {}): Metadata {
  const canonical = absoluteUrl(path);
  const resolvedTitle = title
    ? absoluteTitle
      ? title
      : `${title} | ${siteConfig.visualName}`
    : siteConfig.visualName;
  const imageUrl = absoluteUrl(image);
  const openGraph =
    type === "article"
      ? {
          type: "article" as const,
          siteName: siteConfig.visualName,
          title: resolvedTitle,
          description,
          url: canonical,
          publishedTime,
          modifiedTime,
          authors,
          tags,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: `${resolvedTitle} cover image`,
            },
          ],
        }
      : {
          type: "website" as const,
          siteName: siteConfig.visualName,
          title: resolvedTitle,
          description,
          url: canonical,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: `${siteConfig.visualName} editorial visual`,
            },
          ],
        };

  return {
    title: absoluteTitle && title ? { absolute: resolvedTitle } : resolvedTitle,
    description,
    applicationName: siteConfig.visualName,
    authors: authors.map((author) => ({ name: author })),
    creator: siteConfig.visualName,
    publisher: siteConfig.visualName,
    keywords: [
      "Cristiano Ronaldo",
      "CR7",
      "CR7 Blog",
      "football records",
      "gols Cristiano Ronaldo",
      "Cristiano Ronaldo stats",
      "Cristiano Ronaldo carreira",
      "Cristiano Ronaldo recordes",
      ...tags,
    ],
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical,
      languages: {
        "pt-BR": canonical,
        en: canonical,
      },
    },
    robots: {
      index: canIndex,
      follow: canIndex,
      googleBot: {
        index: canIndex,
        follow: canIndex,
      },
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [imageUrl],
    },
    icons: {
      icon: [
        { url: "/brand/favicon.ico" },
        { url: "/brand/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: [{ url: "/brand/favicon.ico" }],
      apple: [
        { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}
