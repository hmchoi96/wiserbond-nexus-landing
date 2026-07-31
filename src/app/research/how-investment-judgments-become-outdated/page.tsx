import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { canonicalFor } from "@/lib/url";

const title = "How Investment Judgments Become Outdated";
const description =
  "Investment judgments become outdated through condition drift — when the facts that once supported a decision change — and through judgment supersession, when later outcomes or experience revise or replace the original logic.";
const path = "/research/how-investment-judgments-become-outdated";
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
        { name: "When Judgments Become Outdated", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong>
      </p>

      <h2>Condition drift</h2>
      <p>
        Condition drift is the material change, over time, in the conditions
        that made a past judgment reasonable. Market structure, regulation,
        competitive dynamics, retention economics, or integration capacity may
        no longer match the original case. The past conclusion can remain
        historically correct while becoming unsafe to reuse.
      </p>

      <h2>Judgment supersession</h2>
      <p>
        Judgment supersession is the process by which newer experience revises
        or replaces an earlier judgment. A firm may later learn that a risk it
        accepted was underpriced, or that a pass was overly cautious. Without
        recording supersession, teams keep retrieving obsolete logic as if it
        were current policy.
      </p>

      <h2>When a historical precedent should not be reused</h2>
      <ul>
        <li>Core supporting conditions no longer hold</li>
        <li>The original outcome contradicted the judgment</li>
        <li>Later decisions explicitly superseded the prior call</li>
        <li>
          Failure conditions identified at the time are now present in the
          current deal
        </li>
      </ul>

      <h2>Practical implication for PE teams</h2>
      <p>
        Preserving past judgment without preserving transfer caution creates
        false confidence. The useful question is not only &ldquo;have we seen
        this before?&rdquo; but &ldquo;does the judgment that applied then still
        apply under today&apos;s conditions?&rdquo;
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <a href="/research/precedent-transferability">
            Precedent transferability
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
