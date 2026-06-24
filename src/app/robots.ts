import type { MetadataRoute } from "next";
import { canIndex } from "@/lib/brand-readiness";
import { absoluteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: canIndex ? "/" : undefined,
      disallow: canIndex ? undefined : "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
