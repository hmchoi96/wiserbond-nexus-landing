export const brand = { 
  primary: "var(--brand)", 
  accent: "var(--accent)" 
} as const;

export const nav = [
  { label: "Why", href: "/#why" },
  { label: "Product", href: "/#product" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Security", href: "/#security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tools", href: "/tools" },
];

export const tools = [
  { 
    slug: "nexus", 
    name: "Nexus", 
    tagline: "Akashic Record + Macro reasoning", 
    href: "/tools/nexus" 
  },
  // 차후: { slug: "atlas", name: "Atlas", tagline: "Risk ontology builder", href: "/tools/atlas" }
];
