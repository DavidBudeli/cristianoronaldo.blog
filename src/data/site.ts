import type { Author, Category } from "@/types/content";
import { mainNavigation } from "@/data/navigation";

export const siteConfig = {
  productName: "CR7 Blog",
  visualName: "CR7 Blog",
  subtitle: "Official Blog",
  description:
    "Stories, records, career milestones and the mindset behind Cristiano Ronaldo's global football legacy.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  navigation: mainNavigation,
};

export const categories: Category[] = [
  {
    slug: "career",
    title: "Career",
    description:
      "Club chapters, career timeline stories and defining seasons.",
  },
  {
    slug: "records",
    title: "Records",
    description:
      "Champions League, international, club and longevity milestones.",
  },
  {
    slug: "portugal",
    title: "Portugal",
    description:
      "International legacy, tournament moments and Portugal records.",
  },
  {
    slug: "mindset",
    title: "Mindset",
    description:
      "Discipline, longevity and consistency through public career evidence.",
  },
  {
    slug: "legacy",
    title: "Legacy",
    description:
      "The moments and numbers that shaped a global football era.",
  },
  {
    slug: "fans",
    title: "Fans",
    description:
      "Fan culture, matchday emotion and the global CR7 community.",
  },
];

export const authors: Author[] = [
  {
    slug: "cr7-editorial-team",
    name: "CR7 Editorial Team",
    role: "Editorial Team",
    bio: "Features, timelines and public-record explainers on Cristiano Ronaldo's career.",
  },
  {
    slug: "records-desk",
    name: "Records Desk",
    role: "Stats and Records",
    bio: "Record-focused coverage built from competition, club and statistical sources.",
  },
  {
    slug: "fans-desk",
    name: "Fans Desk",
    role: "Community Stories",
    bio: "Coverage of global support, matchday culture and fan-facing stories.",
  },
];

export const editorialPillars = [
  {
    title: "Career",
    text: "From Madeira to Manchester, Madrid, Turin, Riyadh and Portugal.",
  },
  {
    title: "Records",
    text: "Champions League records, international marks and club scoring milestones.",
  },
  {
    title: "Mindset",
    text: "Discipline and longevity viewed through visible career consistency.",
  },
  {
    title: "Fans",
    text: "A global football community connected by every chapter of the story.",
  },
];

export const signatureNumbers = [
  {
    value: "973",
    label: "Tracked Goals",
    detail: "The live scoring archive starts from the public 973-goal counter reviewed on 2026-06-24.",
  },
  {
    value: "140",
    label: "Champions League Goals",
    detail: "UEFA's all-time Champions League scoring record.",
  },
  {
    value: "451",
    label: "Real Madrid Goals",
    detail: "Real Madrid's official all-time club scoring mark for Ronaldo.",
  },
  {
    value: "145+",
    label: "Portugal Goals",
    detail: "A moving international total tied to public competition records.",
  },
];

export const legacyTimeline = [
  {
    year: "2002",
    title: "Sporting CP breakthrough",
    text: "The senior story starts in Portugal with Sporting CP.",
  },
  {
    year: "2003",
    title: "Manchester United arrival",
    text: "Old Trafford becomes the platform for Ronaldo's rise into a global star.",
  },
  {
    year: "2009",
    title: "Real Madrid record era",
    text: "Nine seasons in Madrid produce 451 goals in 438 competitive appearances.",
  },
  {
    year: "2018",
    title: "Juventus chapter",
    text: "A new league brings 101 goals in 134 appearances for Juventus.",
  },
  {
    year: "2023",
    title: "Al Nassr era",
    text: "The Riyadh chapter keeps the goal archive moving toward new milestones.",
  },
];
