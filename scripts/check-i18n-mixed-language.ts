import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const srcDir = join(root, "src");
const externalGoalsUrl = "https://www.perplexity.ai/ronaldo/pt-br";
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
const sitemapFile = join(srcDir, "app", "sitemap.ts");

for (const file of sourceFiles) {
  const content = read(file);
  const fileName = rel(file);
  const isExternalConfig = file === externalConfig;

  if (!isExternalConfig && content.includes(externalGoalsUrl)) {
    failures.push(`${fileName}: Perplexity URL must come from src/data/external-links.ts`);
  }

  if (content.includes("<iframe")) {
    failures.push(`${fileName}: iframe usage is not allowed for the Perplexity experience`);
  }

  if (content.includes("LOCAL")) {
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
const requiredTranslations = [
  ['"Goals": "Gols"'],
  ['"Explore all goals": "Explorar todos os gols"'],
  ['"Open interactive goals experience": "Abrir experiência interativa de gols"'],
  ['"Interactive goals": "Gols interativos"'],
  ['"Search": "Buscar"'],
  ['"Subscribe": "Assinar"'],
];

for (const [translation] of requiredTranslations) {
  if (!i18nContent.includes(translation)) {
    failures.push(`src/lib/i18n.ts: missing required translation ${translation}`);
  }
}

if (failures.length > 0) {
  console.error("i18n/external-link audit failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("i18n/external-link audit passed.");
