import Link from "next/link";
import { getAllTags } from "@/lib/articles";

export function TagCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {getAllTags().map((tag) => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted transition hover:border-brand-orange hover:text-brand-orange"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
