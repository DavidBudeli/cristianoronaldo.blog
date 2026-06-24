import Link from "next/link";
import { BrandAssetSlot } from "@/components/brand-asset-slot";

export function HeroEditorial() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-absolute-black">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(200,164,93,0.12),transparent_28%,rgba(142,16,24,0.16)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="flex max-w-[calc(100vw-2rem)] flex-col justify-between py-4 sm:max-w-none">
          <div>
            <p className="inline-flex border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Plataforma Editorial Oficial
            </p>
            <h1 className="mt-8 max-w-[320px] font-display text-5xl uppercase leading-[0.86] text-warm sm:max-w-none sm:text-8xl lg:text-9xl">
              <span className="block">Por dentro</span>
              <span className="block">do padrao.</span>
            </h1>
            <p className="mt-6 max-w-[320px] text-base leading-8 text-muted sm:max-w-xl sm:text-lg">
              Historias, performance, legado e a mentalidade por tras de um
              icone global do futebol.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex w-full max-w-[320px] justify-center rounded-full border border-brand-orange bg-brand-orange px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black sm:w-auto"
            >
              Ler os mais recentes
            </Link>
            <Link
              href="/legacy"
              className="inline-flex w-full max-w-[320px] justify-center rounded-full border border-white/25 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-warm transition hover:border-white hover:bg-white hover:text-black sm:w-auto"
            >
              Explorar legado
            </Link>
          </div>
        </div>
        <BrandAssetSlot
          aspect="hero"
          src="/brand/photos/brands/ursu-desktop.jpg"
          label="Asset visual de fonte oficial."
          detail="Imagem local do ecossistema CR7 obtida em cristianoronaldo.com. Uso publico final exige aprovacao da marca."
          className="min-w-0"
        />
      </div>
    </section>
  );
}
