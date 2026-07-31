import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Definitions and frameworks for judgment memory in private equity, from Wiserbond.",
  alternates: { canonical: canonicalFor("/research") },
};

const articles = [
  {
    href: "/research/what-is-judgment-memory",
    title: "What Is Judgment Memory for Private Equity?",
    blurb:
      "Definition: conditions, judgment, reasoning, evidence, and outcomes — retrieved when similar conditions recur.",
  },
  {
    href: "/research/judgment-memory-framework",
    title: "Wiserbond Judgment Memory Framework v1",
    blurb:
      "Eight elements: Condition, Judgment, Reasoning, Evidence, Outcome, Transferability, Provenance, Supersession. PDF available.",
  },
  {
    href: "/research/precedent-transferability",
    title: "What Is Precedent Transferability?",
    blurb:
      "Test whether a past investment judgment still applies under current deal conditions.",
  },
  {
    href: "/research/decision-archive-vs-judgment-memory",
    title: "Decision Archive versus Judgment Memory",
    blurb:
      "Keeping files is not the same as keeping reusable decision reasoning.",
  },
  {
    href: "/research/how-investment-judgments-become-outdated",
    title: "How Investment Judgments Become Outdated",
    blurb:
      "Condition drift and supersession — when a historical precedent should stop being reused.",
  },
];

export default function ResearchIndex() {
  return (
    <>
      <Nav />
      <main className="max-w-[920px] mx-auto px-5 md:px-10 py-14 md:py-20 space-y-10">
        <header className="space-y-4">
          <p className="text-sm font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
            Research
          </p>
          <h1 className="font-serif text-[2rem] md:text-[2.75rem] font-medium tracking-tight text-[var(--brand)]">
            Judgment memory research
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            Wiserbond builds Akashic Record. These pages define the concepts so
            they can be cited without a demo.
          </p>
        </header>

        <ul className="space-y-6">
          {articles.map((a) => (
            <li key={a.href} className="border-t border-[var(--border-soft)] pt-6">
              <Link
                href={a.href}
                className="block group space-y-2 hover:opacity-90"
              >
                <h2 className="text-[1.35rem] font-semibold text-[var(--text)] group-hover:text-[var(--brand)]">
                  {a.title}
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {a.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
