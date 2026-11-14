import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { PRODUCT_NAME } from "@/lib/site";

export const alt = `${PRODUCT_NAME}: shared memory for your agents`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/wibee-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#051f5b", padding: "65px 80px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img src={logoSrc} alt="" width={72} height={72} style={{ borderRadius: 12 }} />
        <span style={{ fontSize: 30, fontWeight: 600 }}>{PRODUCT_NAME}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 78, letterSpacing: -4 }}>Less catching up.</span>
        <span style={{ fontSize: 78, letterSpacing: -4, color: "#051f5b" }}>More carrying on.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#4f5b70" }}>
        <span>Shared memory for your agents.</span>
        <span>Built by Wiserbond</span>
      </div>
    </div>, size,
  );
}
