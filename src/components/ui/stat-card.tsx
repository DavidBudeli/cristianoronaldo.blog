export function StatCard({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="border border-white/10 bg-card p-5">
      <p className="font-mono text-5xl text-warm">{value}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-brand-orange">{label}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}
