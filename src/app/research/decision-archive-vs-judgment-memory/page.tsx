import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { BRAND } from "@/lib/site";
import { canonicalFor } from "@/lib/url";

const title = "Decision Archive versus Judgment Memory";
const description =
  "A decision archive stores final documents and files. Judgment memory preserves the conditions, judgment, reasoning, evidence, and outcomes behind those decisions so teams can retrieve transferable precedents — not just search filenames.";
const path = "/research/decision-archive-vs-judgment-memory";
const datePublished = "2026-07-31";
const dateModified = "2026-07-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalFor(path) },
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return (
    <ResearchArticle
      title={title}
      description={description}
      path={path}
      datePublished={datePublished}
      dateModified={dateModified}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Research", href: "/research" },
        { name: "Archive vs Judgment Memory", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong>
      </p>

      <h2>What a decision archive usually keeps</h2>
      <ul>
        <li>Final IC memos and board materials</li>
        <li>Data room exports and diligence folders</li>
        <li>Model versions and closing binders</li>
        <li>Email threads and shared drives</li>
      </ul>
      <p>
        Traditional deal archives usually preserve final documents, but they
        do not consistently preserve which conditions caused the investment
        committee to accept or reject a specific risk.
      </p>

      <h2>What judgment memory adds</h2>
      <ul>
        <li>Structured conditions observed at the time</li>
        <li>The judgment made — including decisions to pass</li>
        <li>Reasoning tied to those conditions</li>
        <li>Evidence linked to the reasoning</li>
        <li>Outcomes connected back to the original judgment</li>
        <li>Transferability notes for later reuse</li>
      </ul>

      <h2>Why the difference matters when people leave</h2>
      <p>
        When an investment professional leaves, the archive often remains
        searchable while the judgment context disappears. Colleagues can find
        the memo but not reconstruct which assumptions were load-bearing, which
        risks were consciously accepted, or when that logic should no longer
        apply.
      </p>

      <h2>Document search vs judgment retrieval</h2>
      <p>
        Document search answers &ldquo;where is the file?&rdquo; Judgment
        retrieval answers &ldquo;when have we faced comparable conditions, what
        did we decide, what happened, and what still holds?&rdquo;
      </p>

      <h2>Product note</h2>
      <p>
        {BRAND.product} {BRAND.does} {BRAND.doesNot}
      </p>
    </ResearchArticle>
  );
}
