export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">{children}</span>;
}
