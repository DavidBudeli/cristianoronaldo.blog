import { signatureNumbers } from "@/data/site";

export function StatsDashboard() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {signatureNumbers.map((item) => (
        <div key={item.label} className="border border-white/10 bg-card p-5">
          <p className="font-mono text-5xl font-bold text-gold-light">
            {item.value}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-warm">
            {item.label}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
