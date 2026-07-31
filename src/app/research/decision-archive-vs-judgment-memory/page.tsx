import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { BRAND } from "@/lib/site";
import { canonicalFor } from "@/lib/url";

const title = "Decision Archive versus Judgment Memory";
const description =
  "A decision archive stores final documents and files. Judgment memory keeps the conditions, judgment, reasoning, evidence, and outcomes behind those decisions so teams can retrieve transferable precedents — not just filenames.";
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
        Final documents stay. Which conditions made the IC accept or reject a
        specific risk usually do not.
      </p>

      <h2>What judgment memory keeps</h2>
      <ul>
        <li>Conditions observed at the time</li>
        <li>The judgment — including passes</li>
        <li>Reasoning tied to those conditions</li>
        <li>Evidence linked to the reasoning</li>
        <li>Outcomes linked back to the judgment</li>
        <li>Transferability notes for later reuse</li>
      </ul>

      <h2>When people leave</h2>
      <p>
        The archive still searches. The judgment context often does not.
        Colleagues find the memo. They cannot reconstruct which assumptions
        carried the weight, which risks were accepted on purpose, or when that
        logic should stop applying.
      </p>

      <h2>Document search vs judgment retrieval</h2>
      <p>Document search asks where the file is.</p>
      <p>
        Judgment retrieval asks when the firm faced comparable conditions, what
        it decided, what happened, and what still holds.
      </p>

      <h2>About Akashic Record</h2>
      <p>
        {BRAND.product} {BRAND.doesNot}
      </p>
    </ResearchArticle>
  );
}
