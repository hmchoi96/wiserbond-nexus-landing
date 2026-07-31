import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { canonicalFor } from "@/lib/url";
import { CALENDLY_URL } from "@/lib/config/calendly";

export const metadata: Metadata = {
  title: "Pilot Deployment",
  description:
    "Pilot Akashic Record, Wiserbond's judgment memory system for private equity teams. On-prem, offline-first. Request a 15-minute interview.",
  alternates: { canonical: canonicalFor("/pilot") },
  openGraph: {
    title: "Pilot Deployment | Wiserbond",
    description:
      "Pilot Akashic Record, Wiserbond's judgment memory system for private equity teams. On-prem, offline-first.",
  },
  twitter: {
    title: "Pilot Deployment | Wiserbond",
    description:
      "Pilot Akashic Record, Wiserbond's judgment memory system for private equity teams. On-prem, offline-first.",
  },
};

export default function Pilot() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-5 md:px-10 py-16 md:py-24 space-y-12">
        <div className="space-y-5 text-center">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
            Akashic Record
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[var(--brand)] leading-tight">
            Pilot judgment memory on your network
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Wiserbond builds Akashic Record, a precedent-based judgment memory
            system for private equity teams. Pricing is not public — we start
            with a short conversation about whether an offline pilot fits your
            workflow.
          </p>
        </div>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            What a pilot covers
          </h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>On-prem / offline-first deployment — your data stays on your network</li>
            <li>Preserving Condition–Judgment–Reasoning records from past decisions</li>
            <li>Retrieving transferable precedents when similar deal conditions recur</li>
            <li>Clear transfer caution: when historical judgment should not be reused</li>
          </ul>
        </div>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            What this is not
          </h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>Not a public SaaS pricing page or self-serve checkout</li>
            <li>Not an IC memo generator or deal CRM</li>
            <li>Not a macro strategy or investment recommendation engine</li>
          </ul>
        </div>

        <div className="text-center space-y-5 pt-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 px-8 items-center justify-center rounded-md text-base font-semibold text-white hover:bg-[var(--brand-hover)] transition-colors"
            style={{ background: "var(--brand)" }}
          >
            Request a 15-min Interview
          </a>
          <p className="text-sm text-[var(--text-muted)]">
            Or email{" "}
            <a
              href="mailto:hmchoi@sfu.ca"
              className="underline hover:text-[var(--brand)]"
            >
              hmchoi@sfu.ca
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
