import type { Metadata } from "next";
import { canIndex } from "@/lib/brand-readiness";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  absoluteTitle?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/brand/photos/brands/ursu-desktop.jpg",
  absoluteTitle = false,
}: MetadataInput = {}): Metadata {
  const canonical = absoluteUrl(path);
  const resolvedTitle = title
    ? absoluteTitle
      ? title
      : `${title} | ${siteConfig.visualName}`
    : siteConfig.visualName;

  return {
    title: absoluteTitle && title ? { absolute: resolvedTitle } : resolvedTitle,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical,
    },
    robots: {
      index: canIndex,
      follow: canIndex,
      googleBot: {
        index: canIndex,
        follow: canIndex,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.visualName,
      title: resolvedTitle,
      description,
      url: canonical,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${siteConfig.visualName} editorial placeholder`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
