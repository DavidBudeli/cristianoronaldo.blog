import Image from "next/image";

type BrandAssetSlotProps = {
  src?: string;
  label: string;
  detail?: string;
  aspect?: "hero" | "wide" | "square";
  className?: string;
};

const aspectClasses = {
  hero: "min-h-[360px] sm:min-h-[520px]",
  wide: "min-h-[260px]",
  square: "aspect-square",
};

export function BrandAssetSlot({
  src = "/brand/photos/brands/ursu-desktop.jpg",
  label,
  detail = "Asset local de fonte oficial. Confirme a licenca antes de qualquer lancamento publico.",
  aspect = "wide",
  className = "",
}: BrandAssetSlotProps) {
  return (
    <div
      className={`group relative isolate max-w-full overflow-hidden border border-gold/25 bg-card ${aspectClasses[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 1024px) 58vw, 100vw"
        className="object-cover opacity-78 transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,164,93,0.22),transparent_30%),linear-gradient(135deg,rgba(3,3,3,0.32),rgba(3,3,3,0.92))]" />
      <div className="relative z-10 flex h-full min-h-inherit flex-col justify-between p-6 sm:p-8">
        <div className="w-fit border border-gold/40 bg-black/40 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-light">
          Slot de asset
        </div>
        <div className="max-w-[280px] sm:max-w-sm">
          <p className="max-w-[280px] font-display text-2xl uppercase text-warm sm:max-w-sm sm:text-5xl">
            {label}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
        </div>
      </div>
    </div>
  );
}
