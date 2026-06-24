import type { BrandAssetsStatus, ReadinessItem, SiteMode } from "@/types/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const isLocalUrl = siteUrl.includes("localhost") || siteUrl.includes("127.0.0.1");

export const siteMode = (process.env.NEXT_PUBLIC_SITE_MODE ??
  (isLocalUrl ? "local" : "production")) as SiteMode;

export const brandAssetsStatus = (process.env
  .NEXT_PUBLIC_BRAND_ASSETS_STATUS ?? "pending") as BrandAssetsStatus;

export const isProduction = siteMode === "production";

export const canIndex = isProduction && !isLocalUrl;

export const productionBrandWarning =
  "Assets oficiais da marca sao obrigatorios antes do lancamento em producao.";

export const brandChecklist: ReadinessItem[] = [
  { label: "Logo oficial recebido", status: "pending" },
  { label: "Wordmark oficial recebido", status: "pending" },
  { label: "Fotografia oficial licenciada", status: "pending" },
  { label: "Manual de marca recebido", status: "pending" },
  { label: "Tipografia aprovada", status: "pending" },
  { label: "Revisao juridica concluida", status: "pending" },
  { label: "Conteudo aprovado", status: "pending" },
  { label: "Fonte de estatisticas aprovada", status: "pending" },
  { label: "CMS selecionado", status: "pending" },
  { label: "Dominio de producao aprovado", status: "pending" },
  { label: "Consentimento analitico configurado", status: "pending" },
  { label: "Indexacao SEO aprovada", status: "pending" },
];

export function warnIfProductionBlocked() {
  if (isProduction && brandAssetsStatus === "pending") {
    console.warn(productionBrandWarning);
  }
}
