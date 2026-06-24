import Link from "next/link";
import { categories } from "@/data/site";

export function CategoryFilter({ active }: { active?: string }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <Link
        href="/blog"
        className={`shrink-0 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
          active
            ? "border-white/10 text-muted hover:border-gold hover:text-gold"
            : "border-gold bg-gold text-black"
        }`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/categories/${category.slug}`}
          className={`shrink-0 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
            active === category.slug
              ? "border-gold bg-gold text-black"
              : "border-white/10 text-muted hover:border-gold hover:text-gold"
          }`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}
