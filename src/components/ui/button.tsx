import Link from "next/link";

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black">
      {children}
    </Link>
  );
}
