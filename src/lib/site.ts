export const SITE = {
  name: "Wiserbond",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com",
  defaultTitle: "Wiserbond | Akashic Record — Judgment Memory",
  defaultDescription:
    "Turn past decisions into reusable judgment memory. Offline-first, on-prem. Your data never leaves your network.",
  twitter: "@wiserbond",
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com"}/og/wiserbond-og.jpg`,
  ogImageTwitter: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com"}/og/wiserbond-og-800.jpg`,
  locale: "en_US",
};

/** Canonical brand/product copy — keep identical across site, LinkedIn, directories. */
export const BRAND = {
  company:
    "Wiserbond develops systems that preserve and reuse organizational judgment.",
  product:
    "Akashic Record is a precedent-based judgment memory system for private equity teams.",
  companyProduct:
    "Wiserbond builds Akashic Record, a judgment memory system for private equity teams.",
  icp: "It is initially designed for buyout firms conducting repeated add-on acquisitions, beginning with insurance brokerage roll-ups.",
  does:
    "It preserves the conditions, judgment, reasoning, evidence, and outcomes behind past investment decisions and retrieves relevant precedents when similar conditions recur.",
  doesNot:
    "It does not recommend whether a firm should complete a transaction or replace investment committee judgment.",
  author: {
    name: "Jamie Choi",
    url: "https://www.wiserbond.com",
  },
} as const;

export const SEO_KEYWORDS = [
  "judgment memory",
  "precedent-based judgment memory",
  "private equity judgment memory",
  "akashic record",
  "CJR",
  "condition judgment reasoning",
  "precedent transferability",
  "investment decision provenance",
  "institutional memory private equity",
  "on-prem",
  "offline-first",
];
