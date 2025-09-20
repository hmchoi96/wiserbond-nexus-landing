export const SITE = {
  name: "Wiserbond Nexus",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com",
  defaultTitle: "Wiserbond Nexus | On-prem Judgment Memory for Macro & Risk Teams",
  defaultDescription:
    "On-prem judgment memory that turns past decisions into today's edge. One-click 'then vs now' macro comparison, auto-recap, and faster research for hedge funds and corporate risk teams.",
  twitter: "@wiserbond", // 없으면 빈 문자열 유지
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com"}/og/wiserbond-og.jpg`, // 1200x630 준비
  ogImageTwitter: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com"}/og/wiserbond-og-800.jpg`, // 800x418 트위터용
  locale: "en_US",
};

export const SEO_KEYWORDS = [
  "judgment memory",
  "decision log",
  "macro risk",
  "research copilot",
  "on-prem",
  "hedge fund",
  "macro strategy copilot",
  "decision memory system",
  "investment research automation",
  "risk committee playbook",
  "then vs now analysis",
  "on-prem AI copilot",
  "akashic record",
  "macro reasoning",
  "investment decision tracking",
  "risk management software",
  "enterprise AI",
  "financial research automation",
];
