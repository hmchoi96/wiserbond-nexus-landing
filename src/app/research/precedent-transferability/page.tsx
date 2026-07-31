import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { canonicalFor } from "@/lib/url";

const title = "What Is Precedent Transferability?";
const description =
  "Precedent transferability is the evaluation of how far a past investment judgment applies to a current situation — based on which conditions still hold, which have changed, and whether the original outcome supports reuse.";
const path = "/research/precedent-transferability";
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
        { name: "Precedent Transferability", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong>
      </p>

      <h2>Similarity is not transferability</h2>
      <p>
        Two deals can look alike — same sector, similar size, similar
        structure — while the conditions that justified the original judgment
        no longer hold. Similarity search finds resemblance. Transferability
        asks whether reuse is still warranted.
      </p>

      <h2>The Precedent Transferability Test</h2>
      <ol>
        <li>Which core conditions still hold?</li>
        <li>Which conditions have changed?</li>
        <li>What was the outcome of the past judgment?</li>
        <li>Did the outcome support or contradict that judgment?</li>
        <li>What failure conditions would invalidate reuse?</li>
        <li>Has the past judgment since been superseded?</li>
      </ol>

      <h2>What still holds vs what changed</h2>
      <p>
        A usable precedent record should separate conditions that remain true
        from conditions that have drifted. Teams can then reuse the parts of
        the judgment that remain valid and withhold the parts that do not.
      </p>

      <h2>Transfer caution</h2>
      <p>
        Transfer caution is the explicit statement of why a precedent should
        not be applied wholesale. Without it, historical judgment becomes a
        false shortcut — especially dangerous in repeated add-on programs where
        pattern-matching feels natural.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <a href="/research/how-investment-judgments-become-outdated">
            How investment judgments become outdated
          </a>
        </li>
        <li>
          <a href="/research/judgment-memory-framework">
            Judgment Memory Framework v1
          </a>
        </li>
      </ul>
    </ResearchArticle>
  );
}
