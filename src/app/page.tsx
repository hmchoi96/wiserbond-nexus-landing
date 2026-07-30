import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import NexusHero from "@/components/landing/NexusHero";
import Sections from "@/components/landing/Sections";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Wiserbond | Akashic Record — Judgment Memory",
  description:
    "Turn past decisions into reusable judgment memory. Offline-first, on-prem. Your data never leaves your network.",
  alternates: { canonical: canonicalFor("/") },
  openGraph: {
    title: "Wiserbond | Akashic Record — Judgment Memory",
    description:
      "Turn past decisions into reusable judgment memory. Offline-first, on-prem. Your data never leaves your network.",
  },
  twitter: {
    title: "Wiserbond | Akashic Record — Judgment Memory",
    description:
      "Turn past decisions into reusable judgment memory. Offline-first, on-prem. Your data never leaves your network.",
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
  name: "Akashic Record",
  applicationCategory: "BusinessApplication",
  operatingSystem: "On-premise; Local; Offline",
  offers: {
    "@type": "Offer",
    category: "Pilot",
    description: "15-min interview for pilot teams",
  },
  provider: {
    "@type": "Organization",
    name: "Wiserbond",
    url: "https://www.wiserbond.com",
  },
  description:
    "Turn past decisions into reusable judgment memory. Offline-first, on-prem. Your data never leaves your network.",
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
