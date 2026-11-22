import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Sections from "@/components/landing/Sections";
import Link from "next/link";
import { canonicalFor } from "@/lib/url";
export const metadata: Metadata = {
  title: "Akashic Record V1 Archive",
  description:
    "Archived product and research: judgment memory for private equity teams. Wiserbond now builds Wibee, shared memory for connected AI agents.",
  alternates: { canonical: canonicalFor("/archive/akashic-v1") },
};
export default function Archive() {
  return (
    <>
      <Nav />
      <main>
        <header className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
          <p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">
            Previous project · Archived
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--brand)] my-6">
            Akashic Record V1
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Our earlier judgment memory system for private equity teams. It
            preserved the conditions, judgment and reasoning behind investment
            decisions. This material is retained for reference; V1 is no longer
            our active product.
          </p>
          <div className="flex flex-wrap gap-6 mt-8 underline underline-offset-4">
            <Link href="/">Explore Wibee</Link>
            <Link href="/research">V1 research</Link>
            <Link href="/evidence-room">V1 evidence</Link>
          </div>
        </header>
        <Sections />
      </main>
      <Footer />
    </>
  );
}
