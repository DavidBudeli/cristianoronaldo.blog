export const officialAssetSource =
  "Baixado de cristianoronaldo.com para uso local de composicao. Confirme licenca e aprovacao antes de qualquer lancamento publico.";

export const brandLogos = [
  { name: "CR7", src: "/brand/logos/cr7.svg" },
  { name: "CR7 Signature Museum", src: "/brand/logos/signature-museum_horizontal.svg" },
];

export const brandPhotos = [
  { name: "URSU", src: "/brand/photos/brands/ursu-desktop.jpg" },
  { name: "Erakulis", src: "/brand/photos/brands/erakulis-desktop.jpg" },
  { name: "CR7 Fragrances", src: "/brand/photos/brands/fragrances-desktop.jpg" },
  { name: "CR7 Underwear", src: "/brand/photos/brands/underwear-desktop.jpg" },
  { name: "CR7 Footwear", src: "/brand/photos/brands/footwear-desktop.jpg" },
];

export const partnerLogos = [
  "Logo_AVA.svg",
  "Logo_Binance.svg",
  "Logo_BoulevardCity.svg",
  "Logo_Clear.svg",
  "Logo_CR7CrunchFitness.svg",
  "Logo_DomumSeptem.svg",
  "Logo_Erakulis.svg",
  "Logo_Herbalife.svg",
  "Logo_Insparya.png",
  "Logo_JacobCo.svg",
  "Logo_Nike.svg",
  "Logo_Perplexity.svg",
  "Logo_PestanaCR7.svg",
  "Logo_RiyadhSeason.svg",
  "Logo_SMC.svg",
  "Logo_SNK.svg",
  "Logo_UFL.svg",
  "Logo_Ursu.svg",
  "Logo_Whoop.svg",
  "Logo_Zujugp.svg",
].map((file) => ({
  name: file.replace("Logo_", "").replace(/\.(svg|png)$/i, ""),
  src: `/brand/partners/${file}`,
}));

export const teamHighlightImages = [
  { name: "Sporting CP", src: "/brand/photos/highlights/sporting.png", logoStatus: "logo-oficial-pendente" },
  { name: "Manchester United", src: "/brand/photos/highlights/manchester-united.png", logoStatus: "logo-oficial-pendente" },
  { name: "Real Madrid", src: "/brand/photos/highlights/real-madrid.png", logoStatus: "logo-oficial-pendente" },
  { name: "Juventus", src: "/brand/photos/highlights/juventus.png", logoStatus: "logo-oficial-pendente" },
  { name: "Portugal", src: "/brand/photos/highlights/portugal.png", logoStatus: "logo-oficial-pendente" },
  { name: "Al Nassr", src: "/brand/photos/highlights/al-nassr.jpg", logoStatus: "logo-oficial-pendente" },
];
