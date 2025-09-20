import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import NexusHero from "@/components/landing/NexusHero";
import Sections from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "On-prem Judgment Memory for Macro & Risk Teams",
  description:
    "On-prem judgment memory that turns past decisions into today's edge. One-click 'then vs now' macro comparison, auto-recap, and faster research for hedge funds and corporate risk teams.",
  alternates: { canonical: canonicalFor("/") },
  openGraph: {
    title: "On-prem Judgment Memory for Macro & Risk Teams",
    description:
      "On-prem judgment memory that turns past decisions into today's edge. One-click 'then vs now' macro comparison, auto-recap, and faster research for hedge funds and corporate risk teams.",
  },
  twitter: {
    title: "On-prem Judgment Memory for Macro & Risk Teams",
    description:
      "On-prem judgment memory that turns past decisions into today's edge. One-click 'then vs now' macro comparison, auto-recap, and faster research for hedge funds and corporate risk teams.",
  },
};

// JSON-LD 구조화 데이터
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wiserbond",
  url: "https://www.wiserbond.com",
  logo: "https://www.wiserbond.com/og/wiserbond-logo.png",
  sameAs: ["https://www.linkedin.com/company/wiserbond"]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wiserbond Nexus",
  applicationCategory: "BusinessApplication",
  operatingSystem: "On-premise; Docker; Linux",
  offers: { 
    "@type": "Offer", 
    category: "Early Access",
    description: "Early Access plan for teams"
  },
  provider: { "@type": "Organization", name: "Wiserbond", url: "https://www.wiserbond.com" },
  description:
    "On-prem judgment memory for macro & risk teams. Compare 'then vs now', auto-recap decisions, and reduce re-research time."
};

export default function Page(){
  return (
    <>
      <Nav />
      <NexusHero />
      <Sections />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
    </>
  );
}
