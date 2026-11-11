import { ImageResponse } from "next/og";
import { PRODUCT_NAME } from "@/lib/site";

export const alt = `${PRODUCT_NAME}: shared memory for your agents`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#faf6f0", color: "#051f5b", padding: "65px 80px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, border: "2px solid #051f5b", borderRadius: 12, fontSize: 30 }}>{PRODUCT_NAME[0]}</div>
        <span style={{ fontSize: 30, fontWeight: 600 }}>{PRODUCT_NAME}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 78, letterSpacing: -4 }}>Your next agent.</span>
        <span style={{ fontSize: 78, letterSpacing: -4, color: "#526c58" }}>The same context.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#586455" }}>
        <span>Shared memory for your agents.</span>
        <span>Built by Wiserbond</span>
      </div>
    </div>, size,
  );
}
