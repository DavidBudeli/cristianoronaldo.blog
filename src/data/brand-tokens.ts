export const brandTokens = {
  colors: {
    background: "#000000",
    surface: "#0B0B0B",
    text: "#FFFFFF",
    mutedText: "#B2ACA4",
    primary: "#FFFFFF",
    secondary: "#141414",
    border: "#2A2A2A",
    accent: "#FF5A1F",
  },
  typography: {
    heading: "Barlow Condensed como aproximacao Google Fonts de Proxima Nova Condensed",
    body: "Inter como aproximacao Google Fonts de Proxima Nova",
    mono: "JetBrains Mono",
  },
  radius: {
    card: "0px",
    button: "999px",
  },
  spacing: {
    section: "clamp(72px, 9vw, 144px)",
    container: "min(100% - 32px, 1280px)",
  },
} as const;
