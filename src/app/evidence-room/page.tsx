import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Evidence Room",
  description:
    "Public precedents structured as judgment memory: conditions, judgment, reasoning, outcomes, and transfer caution.",
  alternates: { canonical: canonicalFor("/evidence-room") },
};

const precedents = [
  {
    href: "/evidence-room/hays-producer-lift-out",
    title: "What the Hays Producer Lift-Out Reveals About Retention Risk",
    blurb:
      "IBR-003 · Brown & Brown / Hays retention covenants vs coordinated 2025 departures to Howden. Pending litigation.",
  },
];

export default function EvidenceRoomIndex() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-5 md:px-10 py-14 md:py-20 space-y-10">
        <header className="space-y-4">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
            Evidence Room
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[var(--brand)]">
            Public precedents
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Each page is a judgment-memory record built from public sources:
            conditions, judgment, reasoning, outcome, and transfer caution.
            Product pitch stays out of the body.
          </p>
        </header>

        <ul className="space-y-6">
          {precedents.map((p) => (
            <li key={p.href} className="border-t border-[var(--border-soft)] pt-6">
              <Link
                href={p.href}
                className="block group space-y-2 hover:opacity-90"
              >
                <h2 className="text-xl font-semibold text-[var(--text)] group-hover:text-[var(--brand)]">
                  {p.title}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {p.blurb}
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
