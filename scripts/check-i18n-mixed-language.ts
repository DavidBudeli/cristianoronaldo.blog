import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const srcDir = join(root, "src");
const externalGoalsUrl = "https://www.perplexity.ai/ronaldo/pt-br";
const officialCristianoRonaldoUrl = "https://cristianoronaldo.com/#cr7";
const failures: string[] = [];

function walk(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }

  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      return walk(fullPath);
    }

    return fullPath;
  });
}

function read(file: string) {
  return readFileSync(file, "utf8");
}

function rel(file: string) {
  return relative(root, file).replaceAll("\\", "/");
}

const sourceFiles = walk(srcDir).filter((file) => /\.(ts|tsx)$/.test(file));
const externalConfig = join(srcDir, "data", "external-links.ts");
const i18nFile = join(srcDir, "lib", "i18n.ts");
const portugueseDictionaryFile = join(srcDir, "i18n", "dictionaries", "pt-BR.ts");
const englishDictionaryFile = join(srcDir, "i18n", "dictionaries", "en.ts");
const sitemapFile = join(srcDir, "app", "sitemap.ts");

for (const file of sourceFiles) {
  const content = read(file);
  const fileName = rel(file);
  const isExternalConfig = file === externalConfig;

  if (!isExternalConfig && content.includes(externalGoalsUrl)) {
    failures.push(`${fileName}: Perplexity URL must come from src/data/external-links.ts`);
  }

  if (!isExternalConfig && content.includes(officialCristianoRonaldoUrl)) {
    failures.push(`${fileName}: official Cristiano Ronaldo URL must come from src/data/external-links.ts`);
  }

  if (content.includes("<iframe")) {
    failures.push(`${fileName}: iframe usage is not allowed for the Perplexity experience`);
  }

  if (/\bLOCAL\b/.test(content)) {
    failures.push(`${fileName}: language switcher must not expose LOCAL`);
  }

  const internalGoalPatterns = [
    /href=["'`]\/goals(?:[#?"'`]|$)/,
    /href:\s*["']\/goals(?:[#?"']|$)/,
    /path:\s*["']\/goals["']/,
    /absoluteUrl\(\s*["']\/goals["']\s*\)/,
  ];

  if (internalGoalPatterns.some((pattern) => pattern.test(content))) {
    failures.push(`${fileName}: public links/metadata must not point to internal /goals`);
  }
}

if (existsSync(sitemapFile) && read(sitemapFile).includes('route: "/goals"')) {
  failures.push("src/app/sitemap.ts: /goals must not be listed in sitemap");
}

const i18nContent = existsSync(i18nFile) ? read(i18nFile) : "";
const portugueseDictionaryContent = existsSync(portugueseDictionaryFile)
  ? read(portugueseDictionaryFile)
  : "";
const englishDictionaryContent = existsSync(englishDictionaryFile)
  ? read(englishDictionaryFile)
  : "";

const requiredPortugueseTranslations = [
  ['"Goals": "Gols"'],
  ['"Explore all goals": "Explorar todos os gols"'],
  ['"Open interactive goals experience": "Abrir experiência interativa de gols"'],
  ['"Interactive goals": "Gols interativos"'],
  ['"Search": "Buscar"'],
  ['"Subscribe": "Assinar"'],
  ['"Beyond the Standard": "Além do Padrão"'],
  ['"Featured Story": "História em destaque"'],
  ['"Read Story": "Ler história"'],
  ['"Stats": "Estatísticas"'],
];

for (const [translation] of requiredPortugueseTranslations) {
  if (!portugueseDictionaryContent.includes(translation)) {
    failures.push(`src/i18n/dictionaries/pt-BR.ts: missing required translation ${translation}`);
  }
}

const visibleEnglishTermsRequiringPortuguese = [
  "Latest Stories",
  "Featured Story",
  "Read Story",
  "Read more",
  "Beyond the Standard",
  "Discipline",
  "Career Timeline",
  "Goals",
  "Records",
  "Stats",
  "Subscribe",
  "Search",
];

for (const term of visibleEnglishTermsRequiringPortuguese) {
  if (!portugueseDictionaryContent.includes(`"${term}"`)) {
    failures.push(`src/i18n/dictionaries/pt-BR.ts: missing PT coverage for visible term "${term}"`);
  }
}

const visiblePortugueseTermsRequiringEnglish = [
  "Início",
  "Carreira",
  "Gols",
  "Estatísticas",
  "Recordes",
  "Mentalidade",
  "Fãs",
  "Assinar",
  "Buscar",
  "Ler história",
  "História em destaque",
];

if (!englishDictionaryContent.includes("englishTranslations")) {
  failures.push("src/i18n/dictionaries/en.ts: English reverse dictionary is not configured");
}

for (const term of visiblePortugueseTermsRequiringEnglish) {
  if (!portugueseDictionaryContent.includes(`"${term}"`)) {
    failures.push(`src/i18n/dictionaries/pt-BR.ts: missing source Portuguese term "${term}" for EN reverse translation`);
  }
}

if (!i18nContent.includes("translateText")) {
  failures.push("src/lib/i18n.ts: translateText helper must be exported");
}

if (failures.length > 0) {
  console.error("i18n/external-link audit failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("i18n/external-link audit passed.");
