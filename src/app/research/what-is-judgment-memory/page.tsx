import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { BRAND } from "@/lib/site";
import { canonicalFor } from "@/lib/url";

const title = "What Is Judgment Memory for Private Equity?";
const description =
  "Judgment memory is a system that preserves the conditions, judgment, reasoning, evidence, and outcomes behind past investment decisions so that relevant precedents can be retrieved when similar conditions recur.";
const path = "/research/what-is-judgment-memory";
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
        { name: "What Is Judgment Memory", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong>
      </p>

      <h2>Why the term matters</h2>
      <p>
        &ldquo;Institutional memory for private equity&rdquo; is a useful search
        category, but it is crowded and vague. Many tools store documents,
        notes, or CRM records and call the result memory. Judgment memory is
        narrower: it preserves{" "}
        <em>why</em> a decision was made under specific conditions, what
        evidence supported it, what happened afterward, and when that judgment
        should or should not be reused.
      </p>

      <h2>What judgment memory preserves</h2>
      <ul>
        <li>
          <strong>Conditions</strong> — the facts and assumptions that framed
          the decision at the time
        </li>
        <li>
          <strong>Judgment</strong> — what the team chose (invest, pass,
          structure, escalate, wait)
        </li>
        <li>
          <strong>Reasoning</strong> — why that choice followed from those
          conditions
        </li>
        <li>
          <strong>Evidence</strong> — the materials and sources that supported
          the reasoning
        </li>
        <li>
          <strong>Outcome</strong> — what later happened that confirms,
          weakens, or overturns the judgment
        </li>
      </ul>

      <h2>What judgment memory is not</h2>
      <ul>
        <li>Not document search alone</li>
        <li>Not a knowledge base of generic firm policies</li>
        <li>Not an IC memo generator for the current deal</li>
        <li>Not a deal CRM or pipeline tracker</li>
        <li>Not an automated investment recommendation engine</li>
      </ul>
      <p>{BRAND.doesNot}</p>

      <h2>How private equity teams use it</h2>
      <p>
        When a similar deal appears — for example another insurance brokerage
        add-on — the firm retrieves precedents whose conditions still hold,
        notes which conditions have drifted, and reviews transfer caution
        before reusing prior judgment. The point is reusable judgment under
        comparable conditions, not copying a past conclusion blindly.
      </p>

      <h2>Related concepts</h2>
      <ul>
        <li>
          <a href="/research/judgment-memory-framework">
            Wiserbond Judgment Memory Framework v1
          </a>
        </li>
        <li>
          <a href="/research/precedent-transferability">
            Precedent transferability
          </a>
        </li>
        <li>
          <a href="/research/decision-archive-vs-judgment-memory">
            Decision archive versus judgment memory
          </a>
        </li>
      </ul>

      <h2>Product note</h2>
      <p>
        {BRAND.product} {BRAND.icp}
      </p>
    </ResearchArticle>
  );
}
