import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">404</p>
      <h1 className="mt-4 font-display text-6xl uppercase text-warm">Pagina nao encontrada.</h1>
      <p className="mt-4 text-muted">A rota editorial solicitada nao existe.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full border border-brand-orange bg-brand-orange px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black">
        Voltar ao inicio
      </Link>
    </section>
  );
}
