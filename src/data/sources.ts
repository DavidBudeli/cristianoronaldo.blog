import { externalLinks } from "@/data/external-links";

export type Source = {
  id: string;
  label: string;
  publisher: string;
  url: string;
  lastChecked: string;
  reliability: "official" | "competition" | "club" | "database" | "news" | "reference";
};

export const sources: Source[] = [
  {
    id: "perplexity-ronaldo",
    label: "Perplexity Ronaldo page",
    publisher: "Perplexity",
    url: externalLinks.perplexityRonaldoGoals,
    lastChecked: "2026-06-24",
    reliability: "reference",
  },
  {
    id: "official-cr7",
    label: "Cristiano Ronaldo Official Website",
    publisher: "Cristiano Ronaldo",
    url: "https://www.cristianoronaldo.com/",
    lastChecked: "2026-06-24",
    reliability: "official",
  },
  {
    id: "official-cr7-brands",
    label: "Cristiano Ronaldo Brands",
    publisher: "Cristiano Ronaldo",
    url: "https://www.cristianoronaldo.com/brands",
    lastChecked: "2026-06-24",
    reliability: "official",
  },
  {
    id: "uefa-records",
    label: "UEFA Records",
    publisher: "UEFA",
    url: "https://www.uefa.com/european-qualifiers/news/0253-0d820b46805f-b78ccae2c451-1000--what-uefa-records-does-cristiano-ronaldo-hold/",
    lastChecked: "2026-06-24",
    reliability: "competition",
  },
  {
    id: "uefa-caps",
    label: "UEFA Most-Capped Players",
    publisher: "UEFA",
    url: "https://www.uefa.com/european-qualifiers/news/023f-0e9797c3479b-bdb6067609d3-1000--europe-s-most-capped-men-s-international-players-cristiano/",
    lastChecked: "2026-06-24",
    reliability: "competition",
  },
  {
    id: "real-madrid-profile",
    label: "Real Madrid Cristiano Ronaldo Profile",
    publisher: "Real Madrid CF",
    url: "https://www.realmadrid.com/en-US/the-club/history/football-legends/cristiano-ronaldo-dos-santos-aveiro",
    lastChecked: "2026-06-24",
    reliability: "club",
  },
  {
    id: "juventus-profile",
    label: "Juventus Ronaldo Rewind",
    publisher: "Juventus",
    url: "https://www.juventus.com/en/news/articles/rewind-cristiano-ronaldo-s-first-for-juve",
    lastChecked: "2026-06-24",
    reliability: "club",
  },
  {
    id: "man-utd-statement",
    label: "Manchester United Ronaldo Statement",
    publisher: "Manchester United",
    url: "https://www.manutd.com/en/news/man-utd-official-statement-on-cristiano-ronaldo-22-november-2022",
    lastChecked: "2026-06-24",
    reliability: "club",
  },
  {
    id: "fifa-portugal",
    label: "FIFA Ronaldo Portugal Records",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/articles/cristiano-ronaldos-records-with-portugal",
    lastChecked: "2026-06-24",
    reliability: "competition",
  },
  {
    id: "fifa-tribute",
    label: "FIFA Cristiano Ronaldo Tribute",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/news/articles/cristiano-ronaldo-portugal-tribute-40th-birthday",
    lastChecked: "2026-06-24",
    reliability: "competition",
  },
  {
    id: "fbref-profile",
    label: "FBref Cristiano Ronaldo Profile",
    publisher: "Sports Reference / FBref",
    url: "https://fbref.com/en/players/dea698d9/Cristiano-Ronaldo",
    lastChecked: "2026-06-24",
    reliability: "database",
  },
  {
    id: "reuters-900",
    label: "Ronaldo scores 900th career goal",
    publisher: "Reuters via SuperSport",
    url: "https://supersport.com/football/news/036b6e2f-c386-412b-afd4-f0affa9865bc/ronaldo-scores-900th-career-goal-as-portugal-beat-croatia",
    lastChecked: "2026-06-24",
    reliability: "news",
  },
];

export function getSourceById(id: string) {
  return sources.find((source) => source.id === id);
}

export function getSourcesByIds(ids: string[]) {
  return ids.map((id) => getSourceById(id)).filter((source): source is Source => Boolean(source));
}
