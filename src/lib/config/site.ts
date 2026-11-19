import { PRODUCT_NAME } from "@/lib/site";

export const brand = {
  primary: "var(--brand)",
  accent: "var(--brand)",
} as const;
export const nav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "What’s possible", href: "/#possibilities" },
  { label: "Connections", href: "/#connections" },
  { label: "Your memory", href: "/#controls" },
  { label: "For agents", href: "/agents" },
];
export const tools = [
  {
    slug: "wibee",
    name: PRODUCT_NAME,
    tagline: "Shared memory for your connected agents",
    href: "/",
  },
];
