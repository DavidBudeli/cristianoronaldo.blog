export type GoalSource = {
  id: string;
  label: string;
  publisher: string;
  url: string;
  lastChecked: string;
  reliability: "official" | "competition" | "club" | "database" | "news" | "reference";
};

export type GoalSummary = {
  totalGoals: number;
  lastChecked: string;
  sourceIds: string[];
};

export type GoalByTeam = {
  team: string;
  period: string;
  goals: number | string;
  type: "club" | "country";
  sourceIds: string[];
};

export type GoalByCompetition = {
  competition: string;
  goals: number | string;
  sourceIds: string[];
};

export type GoalByYear = {
  year: number;
  goals: number;
};

export type MilestoneGoal = {
  milestone: string;
  date: string;
  team: string;
  opponent: string;
  competition: string;
  description: string;
  sourceIds: string[];
};

export type GoalLogItem = {
  id: string;
  goalNumber: number;
  date: string;
  team: string;
  opponent: string;
  competition: string;
  scoreContext?: string;
  venue?: string;
  notes?: string;
  sourceIds: string[];
};

export const goalSources: GoalSource[] = [
  {
    id: "perplexity-ronaldo",
    label: "Perplexity Ronaldo page",
    publisher: "Perplexity",
    url: "https://www.perplexity.ai/ronaldo/pt-br",
    lastChecked: "2026-06-24",
    reliability: "reference",
  },
  {
    id: "uefa-records",
    label: "UEFA Cristiano Ronaldo records",
    publisher: "UEFA",
    url: "https://www.uefa.com/european-qualifiers/news/0253-0d820b46805f-b78ccae2c451-1000--what-uefa-records-does-cristiano-ronaldo-hold/",
    lastChecked: "2026-06-24",
    reliability: "competition",
  },
  {
    id: "real-madrid-profile",
    label: "Real Madrid official profile",
    publisher: "Real Madrid CF",
    url: "https://www.realmadrid.com/en-US/the-club/history/football-legends/cristiano-ronaldo-dos-santos-aveiro",
    lastChecked: "2026-06-24",
    reliability: "club",
  },
  {
    id: "juventus-profile",
    label: "Juventus Ronaldo article",
    publisher: "Juventus",
    url: "https://www.juventus.com/en/news/articles/rewind-cristiano-ronaldo-s-first-for-juve",
    lastChecked: "2026-06-24",
    reliability: "club",
  },
  {
    id: "man-utd-statement",
    label: "Manchester United Ronaldo statement",
    publisher: "Manchester United",
    url: "https://www.manutd.com/en/news/man-utd-official-statement-on-cristiano-ronaldo-22-november-2022",
    lastChecked: "2026-06-24",
    reliability: "club",
  },
  {
    id: "fifa-portugal",
    label: "FIFA records profile",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/articles/cristiano-ronaldos-records-with-portugal",
    lastChecked: "2026-06-24",
    reliability: "competition",
  },
  {
    id: "fbref-profile",
    label: "FBref Cristiano Ronaldo profile",
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

export const goalSummary: GoalSummary = {
  totalGoals: 973,
  lastChecked: "2026-06-24",
  sourceIds: ["perplexity-ronaldo", "uefa-records", "real-madrid-profile", "juventus-profile", "man-utd-statement", "fbref-profile"],
};

export const goalsByTeam: GoalByTeam[] = [
  { team: "Sporting CP", period: "2002-2003", goals: 5, type: "club", sourceIds: ["fbref-profile"] },
  { team: "Manchester United", period: "2003-2009 / 2021-2022", goals: 145, type: "club", sourceIds: ["man-utd-statement"] },
  { team: "Real Madrid", period: "2009-2018", goals: 451, type: "club", sourceIds: ["real-madrid-profile"] },
  { team: "Juventus", period: "2018-2021", goals: 101, type: "club", sourceIds: ["juventus-profile"] },
  { team: "Al Nassr", period: "2023-present", goals: "120+", type: "club", sourceIds: ["fbref-profile", "perplexity-ronaldo"] },
  { team: "Portugal", period: "2003-present", goals: "145+", type: "country", sourceIds: ["uefa-records", "fifa-portugal"] },
];

export const goalsByCompetition: GoalByCompetition[] = [
  { competition: "UEFA Champions League", goals: 140, sourceIds: ["uefa-records"] },
  { competition: "UEFA club competitions", goals: 145, sourceIds: ["uefa-records"] },
  { competition: "La Liga", goals: 311, sourceIds: ["real-madrid-profile", "fbref-profile"] },
  { competition: "Premier League", goals: 103, sourceIds: ["man-utd-statement", "fbref-profile"] },
  { competition: "Serie A", goals: 81, sourceIds: ["juventus-profile", "fbref-profile"] },
  { competition: "UEFA European Championship", goals: 14, sourceIds: ["uefa-records"] },
  { competition: "FIFA World Cup", goals: 8, sourceIds: ["fifa-portugal", "fbref-profile"] },
  { competition: "UEFA Nations League", goals: "20+", sourceIds: ["uefa-records", "reuters-900"] },
  { competition: "Saudi Pro League", goals: "90+", sourceIds: ["fbref-profile", "perplexity-ronaldo"] },
];

// Review annual splits against a complete match log before major publication updates.
export const goalsByYear: GoalByYear[] = [
  { year: 2002, goals: 5 },
  { year: 2003, goals: 1 },
  { year: 2004, goals: 13 },
  { year: 2005, goals: 15 },
  { year: 2006, goals: 25 },
  { year: 2007, goals: 34 },
  { year: 2008, goals: 35 },
  { year: 2009, goals: 30 },
  { year: 2010, goals: 48 },
  { year: 2011, goals: 60 },
  { year: 2012, goals: 63 },
  { year: 2013, goals: 69 },
  { year: 2014, goals: 61 },
  { year: 2015, goals: 57 },
  { year: 2016, goals: 55 },
  { year: 2017, goals: 53 },
  { year: 2018, goals: 49 },
  { year: 2019, goals: 39 },
  { year: 2020, goals: 44 },
  { year: 2021, goals: 47 },
  { year: 2022, goals: 16 },
  { year: 2023, goals: 54 },
  { year: 2024, goals: 43 },
  { year: 2025, goals: 39 },
  { year: 2026, goals: 18 },
];

export const milestoneGoals: MilestoneGoal[] = [
  {
    milestone: "1st senior goal",
    date: "2002-10-07",
    team: "Sporting CP",
    opponent: "Moreirense",
    competition: "Primeira Liga",
    description: "The opening senior chapter in Portugal, scored during his breakout Sporting CP season.",
    sourceIds: ["fbref-profile"],
  },
  {
    milestone: "100th career goal",
    date: "2008-01-27",
    team: "Manchester United",
    opponent: "Tottenham Hotspur",
    competition: "FA Cup",
    description: "An early career century during the Manchester United rise.",
    sourceIds: ["man-utd-statement", "fbref-profile"],
  },
  {
    milestone: "500th career goal",
    date: "2015-09-30",
    team: "Real Madrid",
    opponent: "Malmo",
    competition: "UEFA Champions League",
    description: "A European milestone inside the Real Madrid scoring era.",
    sourceIds: ["real-madrid-profile", "uefa-records"],
  },
  {
    milestone: "700th career goal",
    date: "2019-10-14",
    team: "Portugal",
    opponent: "Ukraine",
    competition: "UEFA Euro qualifying",
    description: "A Portugal goal that moved the career archive into another historic tier.",
    sourceIds: ["uefa-records", "fbref-profile"],
  },
  {
    milestone: "800th career goal",
    date: "2021-12-02",
    team: "Manchester United",
    opponent: "Arsenal",
    competition: "Premier League",
    description: "A Premier League milestone from the second Manchester United chapter.",
    sourceIds: ["man-utd-statement", "fbref-profile"],
  },
  {
    milestone: "900th career goal",
    date: "2024-09-05",
    team: "Portugal",
    opponent: "Croatia",
    competition: "UEFA Nations League",
    description: "Reuters reported the landmark goal during Portugal's 2-1 Nations League win over Croatia.",
    sourceIds: ["reuters-900"],
  },
  {
    milestone: "Latest tracked goal",
    date: "2026-06-23",
    team: "Portugal",
    opponent: "Uzbekistan",
    competition: "FIFA World Cup",
    description: "The latest tracked international entry in the public goal count used by this archive.",
    sourceIds: ["uefa-caps", "perplexity-ronaldo"],
  },
];

export const goalLog: GoalLogItem[] = [
  {
    id: "goal-001",
    goalNumber: 1,
    date: "2002-10-07",
    team: "Sporting CP",
    opponent: "Moreirense",
    competition: "Primeira Liga",
    venue: "Jose Alvalade",
    notes: "First senior goal chapter.",
    sourceIds: ["fbref-profile"],
  },
  {
    id: "goal-100",
    goalNumber: 100,
    date: "2008-01-27",
    team: "Manchester United",
    opponent: "Tottenham Hotspur",
    competition: "FA Cup",
    notes: "Early career century.",
    sourceIds: ["man-utd-statement", "fbref-profile"],
  },
  {
    id: "goal-500",
    goalNumber: 500,
    date: "2015-09-30",
    team: "Real Madrid",
    opponent: "Malmo",
    competition: "UEFA Champions League",
    notes: "Scored during the Madrid Champions League era.",
    sourceIds: ["real-madrid-profile", "uefa-records"],
  },
  {
    id: "goal-ucl-140",
    goalNumber: 0,
    date: "2022-03-12",
    team: "Manchester United",
    opponent: "Tottenham Hotspur",
    competition: "UEFA Champions League archive",
    notes: "UEFA lists 140 Champions League goals as the all-time record total.",
    sourceIds: ["uefa-records"],
  },
  {
    id: "goal-700",
    goalNumber: 700,
    date: "2019-10-14",
    team: "Portugal",
    opponent: "Ukraine",
    competition: "UEFA Euro qualifying",
    notes: "Portugal milestone entry.",
    sourceIds: ["uefa-records", "fbref-profile"],
  },
  {
    id: "goal-800",
    goalNumber: 800,
    date: "2021-12-02",
    team: "Manchester United",
    opponent: "Arsenal",
    competition: "Premier League",
    notes: "Second Manchester United chapter milestone.",
    sourceIds: ["man-utd-statement", "fbref-profile"],
  },
  {
    id: "goal-900",
    goalNumber: 900,
    date: "2024-09-05",
    team: "Portugal",
    opponent: "Croatia",
    competition: "UEFA Nations League",
    scoreContext: "Portugal 2-1 Croatia",
    venue: "Estadio da Luz",
    notes: "Reuters-reported 900th career goal.",
    sourceIds: ["reuters-900"],
  },
  {
    id: "goal-latest",
    goalNumber: 973,
    date: "2026-06-23",
    team: "Portugal",
    opponent: "Uzbekistan",
    competition: "FIFA World Cup",
    notes: "Latest tracked goal in the configured public counter.",
    sourceIds: ["uefa-caps", "perplexity-ronaldo"],
  },
];

export const goalArchiveNote =
  "Goal totals are maintained from public competition, club and editorial sources and should be reviewed after each match.";
