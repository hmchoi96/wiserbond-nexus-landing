export const brand = { 
  primary: "var(--brand)", 
  accent: "var(--accent)" 
} as const;

export const nav = [
  { label: "Problem", href: "/#problem" },
  { label: "Solution", href: "/#solution" },
  { label: "For", href: "/#for" },
  { label: "Contact", href: "/#contact" },
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
