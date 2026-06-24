export type StatSource = {
  id: string;
  label: string;
  url: string;
  publisher: string;
  lastChecked: string;
};

export type StatCard = {
  id: string;
  label: string;
  value: string;
  description: string;
  category: "career" | "clubs" | "portugal" | "champions" | "awards" | "records";
  sourceIds: string[];
};

export type ClubStatRow = {
  team: string;
  period: string;
  goals: string;
  appearances: string;
  notes: string;
};

export type CompetitionRecord = {
  competition: string;
  record: string;
  value: string;
  description: string;
  sourceIds: string[];
};

export const statSources: StatSource[] = [
  {
    id: "uefa-records",
    label: "UEFA Records",
    url: "https://www.uefa.com/european-qualifiers/news/0253-0d820b46805f-b78ccae2c451-1000--what-uefa-records-does-cristiano-ronaldo-hold/",
    publisher: "UEFA",
    lastChecked: "2026-06-24",
  },
  {
    id: "fifa-portugal",
    label: "FIFA Profile / Tournament Records",
    url: "https://www.fifa.com/en/articles/cristiano-ronaldos-records-with-portugal",
    publisher: "FIFA",
    lastChecked: "2026-06-24",
  },
  {
    id: "fbref",
    label: "FBref / statistical database",
    url: "https://fbref.com/en/players/dea698d9/Cristiano-Ronaldo",
    publisher: "Sports Reference / FBref",
    lastChecked: "2026-06-24",
  },
  {
    id: "official-cr7",
    label: "Official Cristiano Ronaldo channels",
    url: "https://www.cristianoronaldo.com/",
    publisher: "Cristiano Ronaldo official website",
    lastChecked: "2026-06-24",
  },
  {
    id: "real-madrid-profile",
    label: "Real Madrid Profile",
    url: "https://www.realmadrid.com/en-US/the-club/history/football-legends/cristiano-ronaldo-dos-santos-aveiro",
    publisher: "Real Madrid CF",
    lastChecked: "2026-06-24",
  },
  {
    id: "juventus-profile",
    label: "Juventus Profile",
    url: "https://www.juventus.com/en/news/articles/rewind-cristiano-ronaldo-s-first-for-juve",
    publisher: "Juventus",
    lastChecked: "2026-06-24",
  },
  {
    id: "man-utd-statement",
    label: "Manchester United Statement",
    url: "https://www.manutd.com/en/news/man-utd-official-statement-on-cristiano-ronaldo-22-november-2022",
    publisher: "Manchester United",
    lastChecked: "2026-06-24",
  },
];

export const statsUpdateNote =
  "Sources reviewed on 2026-06-24. UEFA lists its Ronaldo records page as updated on 17 June 2026.";

export const statsValidationCopy =
  "Statistics are compiled from official competition records, club data and approved editorial sources. Dynamic totals should be reviewed before production publication.";

export const mainStats: StatCard[] = [
  {
    id: "career-goals",
    label: "Career Goals",
    value: "900+",
    description: "Senior goals across club football and Portugal, tracked as a dynamic career milestone.",
    category: "career",
    sourceIds: ["uefa-records", "fifa-portugal", "fbref"],
  },
  {
    id: "senior-appearances",
    label: "Senior Appearances",
    value: "1,200+",
    description: "Competitive senior appearances across clubs and international football.",
    category: "career",
    sourceIds: ["uefa-records", "fbref"],
  },
  {
    id: "ucl-goals",
    label: "Champions League Goals",
    value: "140",
    description: "All-time UEFA Champions League scoring record.",
    category: "champions",
    sourceIds: ["uefa-records"],
  },
  {
    id: "ucl-appearances",
    label: "Champions League Appearances",
    value: "183",
    description: "Most appearances in UEFA Champions League history.",
    category: "champions",
    sourceIds: ["uefa-records"],
  },
  {
    id: "uefa-club-goals",
    label: "UEFA Club Competition Goals",
    value: "145",
    description: "Record goal total across UEFA club competitions.",
    category: "records",
    sourceIds: ["uefa-records"],
  },
  {
    id: "ballon-dor",
    label: "Ballon d'Or",
    value: "5",
    description: "Five Ballon d'Or awards across a peak era of elite European football.",
    category: "awards",
    sourceIds: ["official-cr7", "fifa-portugal"],
  },
  {
    id: "ucl-titles",
    label: "Champions League Titles",
    value: "5",
    description: "Five-time UEFA Champions League winner.",
    category: "awards",
    sourceIds: ["uefa-records"],
  },
  {
    id: "portugal-caps",
    label: "Portugal Caps",
    value: "200+",
    description: "Historic international appearance total for Portugal.",
    category: "portugal",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    id: "portugal-goals",
    label: "Portugal Goals",
    value: "140+",
    description: "World-record international goal total, tracked as a current milestone.",
    category: "portugal",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    id: "league-titles",
    label: "League Titles",
    value: "7+",
    description: "Domestic league titles won in England, Spain and Italy.",
    category: "awards",
    sourceIds: ["official-cr7", "fifa-portugal"],
  },
  {
    id: "international-trophies",
    label: "Major International Trophies",
    value: "2",
    description: "UEFA European Championship and UEFA Nations League honors with Portugal.",
    category: "awards",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    id: "seasons-at-top",
    label: "Seasons at the Top",
    value: "20+",
    description: "Two decades of senior-level output across elite domestic and international football.",
    category: "career",
    sourceIds: ["official-cr7", "fbref"],
  },
];

export const heroStats = mainStats.filter((stat) =>
  ["career-goals", "ucl-goals", "portugal-goals", "ballon-dor"].includes(stat.id),
);

export const europeanRecords: CompetitionRecord[] = [
  {
    competition: "UEFA Champions League",
    record: "All-time Champions League top scorer",
    value: "140 goals",
    description: "The benchmark scoring total in the competition's modern era.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "UEFA Champions League",
    record: "Most Champions League appearances",
    value: "183",
    description: "The leading appearance total in UEFA Champions League history.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "UEFA Champions League",
    record: "Most goals in a Champions League season",
    value: "17",
    description: "Set during the 2013/14 campaign.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "UEFA Champions League",
    record: "Most Champions League knockout goals",
    value: "67",
    description: "A knockout-stage record built across title-winning campaigns.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "UEFA Club Competitions",
    record: "UEFA club competition goals",
    value: "145",
    description: "Record total across UEFA club competitions.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "UEFA Champions League",
    record: "Champions League titles",
    value: "5",
    description: "Final wins with Manchester United and Real Madrid.",
    sourceIds: ["uefa-records"],
  },
];

export const portugalRecords: CompetitionRecord[] = [
  {
    competition: "Portugal",
    record: "Portugal appearances",
    value: "200+",
    description: "A world-leading international career measured across more than two decades.",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    competition: "Portugal",
    record: "Portugal goals",
    value: "140+",
    description: "The leading men's international goal record.",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    competition: "UEFA Euro",
    record: "UEFA Euro goals",
    value: "14",
    description: "The all-time EURO finals scoring record.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "UEFA Euro",
    record: "UEFA Euro appearances",
    value: "30",
    description: "The all-time EURO finals appearance record.",
    sourceIds: ["uefa-records"],
  },
  {
    competition: "Portugal",
    record: "Major international trophies",
    value: "2",
    description: "UEFA Euro 2016 and UEFA Nations League 2019.",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    competition: "FIFA World Cup",
    record: "World Cup tournaments",
    value: "5+",
    description: "A tournament span from 2006 onward, including a first-player-to-score-at-five-World-Cups milestone.",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
];

// Update these values before official publication using approved CR7, club and competition data sources.
export const clubBreakdown: ClubStatRow[] = [
  {
    team: "Sporting CP",
    period: "2002-2003",
    goals: "5",
    appearances: "31",
    notes: "Professional breakthrough in Portugal.",
  },
  {
    team: "Manchester United",
    period: "2003-2009 / 2021-2022",
    goals: "145",
    appearances: "346",
    notes: "Two spells, including a Champions League-winning peak.",
  },
  {
    team: "Real Madrid",
    period: "2009-2018",
    goals: "451",
    appearances: "438",
    notes: "Club-record scorer and four-time Champions League winner in Madrid.",
  },
  {
    team: "Juventus",
    period: "2018-2021",
    goals: "101",
    appearances: "134",
    notes: "Serie A titles and continued elite scoring output.",
  },
  {
    team: "Al Nassr",
    period: "2023-present",
    goals: "100+",
    appearances: "100+",
    notes: "Current chapter tracked across Saudi and continental competitions.",
  },
  {
    team: "Portugal",
    period: "2003-present",
    goals: "140+",
    appearances: "200+",
    notes: "Record-setting international career for Portugal.",
  },
];

export const awardsHonors: StatCard[] = [
  {
    id: "award-ballon-dor",
    label: "Ballon d'Or",
    value: "5",
    description: "Five-time winner of football's most recognized individual award.",
    category: "awards",
    sourceIds: ["official-cr7", "fifa-portugal"],
  },
  {
    id: "award-champions-league",
    label: "Champions League",
    value: "5",
    description: "Winner in 2008, 2014, 2016, 2017 and 2018.",
    category: "awards",
    sourceIds: ["uefa-records"],
  },
  {
    id: "award-euro",
    label: "UEFA European Championship",
    value: "1",
    description: "Portugal's Euro 2016 title.",
    category: "awards",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    id: "award-nations-league",
    label: "UEFA Nations League",
    value: "1",
    description: "Portugal's 2019 Nations League title.",
    category: "awards",
    sourceIds: ["uefa-records", "fifa-portugal"],
  },
  {
    id: "award-club-world-cup",
    label: "Club World Cup",
    value: "4",
    description: "Global club titles with Manchester United and Real Madrid.",
    category: "awards",
    sourceIds: ["fifa-portugal", "official-cr7"],
  },
  {
    id: "award-domestic-leagues",
    label: "Domestic League Titles",
    value: "7+",
    description: "League titles in England, Spain and Italy.",
    category: "awards",
    sourceIds: ["official-cr7", "fifa-portugal"],
  },
];
