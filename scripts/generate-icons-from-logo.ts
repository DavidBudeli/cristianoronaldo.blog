import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const brandDir = join(root, "public", "brand");
const svgLogo = join(brandDir, "cr7-logo.svg");
const pngLogo = join(brandDir, "cr7-logo.png");

const outputs = {
  faviconIco: join(brandDir, "favicon.ico"),
  favicon48: join(brandDir, "favicon-48x48.png"),
  icon192: join(brandDir, "icon-192.png"),
  icon512: join(brandDir, "icon-512.png"),
  appleTouchIcon: join(brandDir, "apple-touch-icon.png"),
  ogImage: join(brandDir, "og-image.png"),
  appFavicon: join(root, "src", "app", "favicon.ico"),
};

function getLogoSource() {
  if (existsSync(svgLogo)) {
    return svgLogo;
  }

  if (existsSync(pngLogo)) {
    return pngLogo;
  }

  throw new Error(
    "Missing CR7 logo source. Add public/brand/cr7-logo.svg or public/brand/cr7-logo.png before running generate:icons.",
  );
}

function createIcoFromPng(png: Buffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const directory = Buffer.alloc(16);
  directory.writeUInt8(48, 0);
  directory.writeUInt8(48, 1);
  directory.writeUInt8(0, 2);
  directory.writeUInt8(0, 3);
  directory.writeUInt16LE(1, 4);
  directory.writeUInt16LE(32, 6);
  directory.writeUInt32LE(png.length, 8);
  directory.writeUInt32LE(header.length + directory.length, 12);

  return Buffer.concat([header, directory, png]);
}

async function renderSquareIcon(source: string, size: number) {
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: "#050505",
    },
  })
    .composite([
      {
        input: await sharp(source)
          .resize(Math.round(size * 0.82), Math.round(size * 0.22), {
            fit: "inside",
            withoutEnlargement: false,
          })
          .png()
          .toBuffer(),
      },
    ])
    .png()
    .toBuffer();
}

async function renderOgImage(source: string) {
  const logo = await sharp(source)
    .resize(720, 128, { fit: "inside" })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: "#050505",
    },
  })
    .composite([
      {
        input: logo,
        left: 62,
        top: 76,
      },
      {
        input: Buffer.from(
          `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <rect x="62" y="236" width="260" height="8" fill="#ff5a1f"/>
            <text x="62" y="335" fill="#ffffff" font-family="Arial, sans-serif" font-size="62" font-weight="800">CR7 Blog</text>
            <text x="62" y="402" fill="#c9c1b8" font-family="Arial, sans-serif" font-size="32">Histórias, recordes, carreira e mentalidade.</text>
            <text x="62" y="484" fill="#ff5a1f" font-family="Arial, sans-serif" font-size="28" font-weight="700">Cristiano Ronaldo</text>
          </svg>`,
        ),
        left: 0,
        top: 0,
      },
    ])
    .png()
    .toBuffer();
}

async function main() {
  mkdirSync(brandDir, { recursive: true });
  mkdirSync(dirname(outputs.appFavicon), { recursive: true });

  const source = getLogoSource();
  const favicon48 = await renderSquareIcon(source, 48);

  writeFileSync(outputs.favicon48, favicon48);
  writeFileSync(outputs.faviconIco, createIcoFromPng(favicon48));
  writeFileSync(outputs.appFavicon, createIcoFromPng(favicon48));
  writeFileSync(outputs.icon192, await renderSquareIcon(source, 192));
  writeFileSync(outputs.icon512, await renderSquareIcon(source, 512));
  writeFileSync(outputs.appleTouchIcon, await renderSquareIcon(source, 180));
  writeFileSync(outputs.ogImage, await renderOgImage(source));

  if (source === svgLogo) {
    writeFileSync(pngLogo, await sharp(readFileSync(svgLogo)).resize(512, 128, { fit: "inside" }).png().toBuffer());
  }

  console.log("Generated CR7 favicon, app icons, apple touch icon and OG image.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
