import { brandChecklist } from "@/lib/brand-readiness";

export function BrandReadinessChecklist() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {brandChecklist.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between gap-4 border border-white/10 bg-card p-4"
        >
          <span className="text-sm font-medium text-warm">{item.label}</span>
          <span className="border border-gold/35 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
            {item.status === "pending" ? "pendente" : "concluido"}
          </span>
        </div>
      ))}
    </div>
  );
}
