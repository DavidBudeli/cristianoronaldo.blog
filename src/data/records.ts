export type RecordItem = {
  id: string;
  title: string;
  value: string;
  category: "Champions League" | "Portugal" | "Clubs" | "Awards" | "Longevity";
  description: string;
  sourceIds: string[];
};

export const recordItems: RecordItem[] = [
  {
    id: "ucl-top-scorer",
    title: "Champions League top scorer",
    value: "140",
    category: "Champions League",
    description: "UEFA's all-time Champions League goal record.",
    sourceIds: ["uefa-records"],
  },
  {
    id: "ucl-appearances",
    title: "Most Champions League appearances",
    value: "183",
    category: "Champions League",
    description: "The leading appearance total in competition history.",
    sourceIds: ["uefa-records"],
  },
  {
    id: "uefa-club-goals",
    title: "UEFA club competition goals",
    value: "145",
    category: "Champions League",
    description: "Record total across UEFA club competitions.",
    sourceIds: ["uefa-records"],
  },
  {
    id: "international-goals",
    title: "Most international goals",
    value: "145+",
    category: "Portugal",
    description: "The men's international scoring record continues to move.",
    sourceIds: ["uefa-caps", "fifa-portugal"],
  },
  {
    id: "international-caps",
    title: "Most international appearances",
    value: "230+",
    category: "Portugal",
    description: "UEFA lists Ronaldo as the most-capped men's international player.",
    sourceIds: ["uefa-caps"],
  },
  {
    id: "real-madrid-scorer",
    title: "Real Madrid all-time top scorer",
    value: "451",
    category: "Clubs",
    description: "Real Madrid's official profile lists 451 goals in 438 appearances.",
    sourceIds: ["real-madrid-profile"],
  },
  {
    id: "ballon-dor",
    title: "Ballon d'Or",
    value: "5",
    category: "Awards",
    description: "Five wins across one of football's defining individual-award eras.",
    sourceIds: ["official-cr7"],
  },
  {
    id: "champions-league-titles",
    title: "Champions League titles",
    value: "5",
    category: "Awards",
    description: "Five-time winner of Europe's top club competition.",
    sourceIds: ["uefa-records"],
  },
  {
    id: "career-900",
    title: "First player to 900 official career goals",
    value: "900",
    category: "Longevity",
    description: "Reuters reported the landmark during Portugal's Nations League match against Croatia.",
    sourceIds: ["reuters-900"],
  },
];
