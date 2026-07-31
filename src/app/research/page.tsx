import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { BRAND } from "@/lib/site";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Definitions and frameworks for judgment memory in private equity — from Wiserbond, the team behind Akashic Record.",
  alternates: { canonical: canonicalFor("/research") },
};

const articles = [
  {
    href: "/research/what-is-judgment-memory",
    title: "What Is Judgment Memory for Private Equity?",
    blurb:
      "A clear definition of judgment memory: preserving conditions, judgment, reasoning, evidence, and outcomes so precedents can be reused.",
  },
  {
    href: "/research/judgment-memory-framework",
    title: "Wiserbond Judgment Memory Framework v1",
    blurb:
      "The public framework: Condition, Judgment, Reasoning, Evidence, Outcome, Transferability, Provenance, and Supersession.",
  },
  {
    href: "/research/precedent-transferability",
    title: "What Is Precedent Transferability?",
    blurb:
      "How to evaluate whether a past investment judgment still applies under current deal conditions.",
  },
  {
    href: "/research/decision-archive-vs-judgment-memory",
    title: "Decision Archive versus Judgment Memory",
    blurb:
      "Why storing documents is not the same as preserving reusable investment judgment.",
  },
  {
    href: "/research/how-investment-judgments-become-outdated",
    title: "How Investment Judgments Become Outdated",
    blurb:
      "Condition drift and judgment supersession — when historical precedents should no longer be reused.",
  },
];

export default function ResearchIndex() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-5 md:px-10 py-14 md:py-20 space-y-10">
        <header className="space-y-4">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
            Research
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[var(--brand)]">
            Judgment memory research
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {BRAND.companyProduct} These pages define the concepts behind the
            product so they can be cited independently of any demo.
          </p>
        </header>

        <ul className="space-y-6">
          {articles.map((a) => (
            <li key={a.href} className="border-t border-[var(--border-soft)] pt-6">
              <Link
                href={a.href}
                className="block group space-y-2 hover:opacity-90"
              >
                <h2 className="text-xl font-semibold text-[var(--text)] group-hover:text-[var(--brand)]">
                  {a.title}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
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
