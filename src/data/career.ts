export type CareerPhase = {
  id: string;
  title: string;
  period: string;
  summary: string;
  goals?: string;
  appearances?: string;
  honors: string[];
  image: string;
  sourceIds: string[];
};

export const careerPhases: CareerPhase[] = [
  {
    id: "madeira",
    title: "Early Years / Madeira",
    period: "1985-2002",
    summary:
      "The story begins in Funchal, Madeira, before Ronaldo's senior breakthrough in Lisbon.",
    honors: ["Madeira roots", "Sporting academy pathway"],
    image: "/brand/photos/highlights/sporting.png",
    sourceIds: ["official-cr7"],
  },
  {
    id: "sporting",
    title: "Sporting CP",
    period: "2002-2003",
    summary:
      "Ronaldo's senior career opened at Sporting CP, where his first professional goals started the archive.",
    goals: "5",
    appearances: "31",
    honors: ["Primeira Liga breakthrough"],
    image: "/brand/photos/highlights/sporting.png",
    sourceIds: ["fbref-profile"],
  },
  {
    id: "man-utd-first",
    title: "Manchester United",
    period: "2003-2009",
    summary:
      "The first Old Trafford chapter turned Ronaldo into a Champions League winner and Ballon d'Or player.",
    goals: "118",
    appearances: "292",
    honors: ["3 Premier League titles", "2008 Champions League", "2008 Ballon d'Or"],
    image: "/brand/photos/highlights/manchester-united.png",
    sourceIds: ["man-utd-statement", "uefa-records"],
  },
  {
    id: "real-madrid",
    title: "Real Madrid",
    period: "2009-2018",
    summary:
      "Real Madrid's official profile lists Ronaldo as the club's all-time leading scorer with 451 goals in 438 appearances.",
    goals: "451",
    appearances: "438",
    honors: ["4 Champions League titles", "2 La Liga titles", "4 Ballon d'Or awards as a Madrid player"],
    image: "/brand/photos/highlights/real-madrid.png",
    sourceIds: ["real-madrid-profile", "uefa-records"],
  },
  {
    id: "juventus",
    title: "Juventus",
    period: "2018-2021",
    summary:
      "Juventus records Ronaldo's Turin chapter at 134 appearances and 101 goals.",
    goals: "101",
    appearances: "134",
    honors: ["2 Serie A titles", "Coppa Italia", "Supercoppa Italiana"],
    image: "/brand/photos/highlights/juventus.png",
    sourceIds: ["juventus-profile"],
  },
  {
    id: "man-utd-return",
    title: "Manchester United Return",
    period: "2021-2022",
    summary:
      "The return added another scoring chapter to his Manchester United total of 145 goals across two spells.",
    goals: "27",
    appearances: "54",
    honors: ["Premier League return", "European goals"],
    image: "/brand/photos/highlights/manchester-united.png",
    sourceIds: ["man-utd-statement"],
  },
  {
    id: "al-nassr",
    title: "Al Nassr",
    period: "2023-present",
    summary:
      "The Riyadh chapter keeps the goal count moving and remains a current part of the archive.",
    goals: "120+",
    appearances: "100+",
    honors: ["Saudi chapter", "Active scoring milestones"],
    image: "/brand/photos/highlights/al-nassr.jpg",
    sourceIds: ["fbref-profile", "perplexity-ronaldo"],
  },
  {
    id: "portugal",
    title: "Portugal",
    period: "2003-present",
    summary:
      "Portugal is the constant thread: major trophies, international scoring records and more than two decades of tournament football.",
    goals: "145+",
    appearances: "200+",
    honors: ["UEFA Euro 2016", "UEFA Nations League", "World-record international goals"],
    image: "/brand/photos/highlights/portugal.png",
    sourceIds: ["uefa-records", "uefa-caps", "fifa-portugal"],
  },
];
