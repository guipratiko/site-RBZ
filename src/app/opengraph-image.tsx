import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/data/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1815",
          color: "#faf8f5",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#8a6d3b" }}>
          RBZ REPRESENTAÇÕES
        </div>
        <div
          style={{
            fontSize: 56,
            marginTop: 24,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Gestão de marcas e desenvolvimento de negócios para o varejo de
          moda
        </div>
        <div style={{ fontSize: 22, marginTop: 32, color: "#c9c2b6" }}>
          {siteConfig.statesServed.join(" · ")}
        </div>
      </div>
    ),
    { ...size },
  );
}
