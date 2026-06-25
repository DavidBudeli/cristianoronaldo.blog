import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CR7 Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f7efe4",
          padding: "62px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#ff5a1f",
          }}
        >
          <span>Cristiano Ronaldo</span>
          <span>Official Blog</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 112,
              lineHeight: 0.88,
              fontWeight: 900,
              textTransform: "uppercase",
              maxWidth: 850,
            }}
          >
            CR7 Blog
          </div>
          <div
            style={{
              width: 220,
              height: 8,
              background: "#ff5a1f",
            }}
          />
          <div style={{ fontSize: 34, lineHeight: 1.25, color: "#c9c1b8", maxWidth: 780 }}>
            Histórias, recordes, carreira e mentalidade por trás do legado global de Cristiano Ronaldo.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#f7c873" }}>
          <span>Goals</span>
          <span>/</span>
          <span>Records</span>
          <span>/</span>
          <span>Career</span>
          <span>/</span>
          <span>Stats</span>
        </div>
      </div>
    ),
    size,
  );
}
