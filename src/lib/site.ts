export const PRODUCT_NAME = "Akashic"; // Working name; branding is not finalized.

export const SITE = {
  name: "Wiserbond",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com",
  defaultTitle: `Wiserbond | ${PRODUCT_NAME}: Shared Agent Memory`,
  defaultDescription: `Carry context, decisions and reasoning between your connected agents with ${PRODUCT_NAME}.`,
  twitter: "@wiserbond",
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com"}/og/wiserbond-og.jpg`,
  ogImageTwitter: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com"}/og/wiserbond-og-800.jpg`,
  locale: "en_US",
};

/** Canonical brand/product copy — keep identical across site, LinkedIn, directories. */
export const LEGACY_BRAND = {
  company:
    "Wiserbond develops systems that preserve and reuse organizational judgment.",
  product:
    "Akashic Record is a precedent-based judgment memory system for private equity teams.",
  companyProduct:
    "Wiserbond builds Akashic Record, a judgment memory system for private equity teams.",
  icp: "It is initially designed for buyout firms conducting repeated add-on acquisitions, beginning with insurance brokerage roll-ups.",
  does: "It preserves the conditions, judgment, reasoning, evidence, and outcomes behind past investment decisions and retrieves relevant precedents when similar conditions recur.",
  doesNot:
    "It does not recommend whether a firm should complete a transaction or replace investment committee judgment.",
  author: {
    name: "Jamie Choi",
    url: "https://www.wiserbond.com",
  },
} as const;

export const BRAND = {
  company: "Wiserbond builds shared memory infrastructure for AI agents.",
  product: `${PRODUCT_NAME} is shared memory for your connected agents, preserving context, decisions and reasoning across apps.`,
} as const;

export const AKASHIC_SETUP_URL = "https://akashic-v2.onrender.com/setup";
export const SEO_KEYWORDS = [
  "Akashic V2",
  "shared agent memory",
  "cross-app context",
  "MCP memory",
  "Wiserbond",
];
