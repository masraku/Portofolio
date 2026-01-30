import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Raku — Fullstack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient orbs for depth */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Logo text with burst icon */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "96px",
              fontWeight: 600,
              color: "#e2e8f0",
              letterSpacing: "-2px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Masraku
          </span>
          {/* Burst icon */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            style={{ marginLeft: "4px", marginTop: "8px" }}
          >
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="8"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="18.5"
              y1="5.5"
              x2="14.5"
              y2="9.5"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="22"
              y1="12"
              x2="16"
              y2="12"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            fontWeight: 400,
            letterSpacing: "0.5px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Fullstack Web Developer
        </div>

        {/* Subtle divider */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.6), transparent)",
            marginTop: "32px",
            marginBottom: "32px",
            borderRadius: "1px",
          }}
        />

        {/* Website URL */}
        <div
          style={{
            fontSize: "18px",
            color: "#64748b",
            fontWeight: 400,
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          masraku.dev
        </div>
      </div>

      {/* Bottom subtle accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #8b5cf6, #06b6d4, #8b5cf6)",
          opacity: 0.7,
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
