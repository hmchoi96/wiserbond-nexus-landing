import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { BRAND } from "@/lib/site";
import { canonicalFor } from "@/lib/url";

const title = "Wiserbond Judgment Memory Framework v1";
const description =
  "The Wiserbond Judgment Memory Framework defines eight elements for preserving and reusing investment judgment: Condition, Judgment, Reasoning, Evidence, Outcome, Transferability, Provenance, and Supersession.";
const path = "/research/judgment-memory-framework";
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
        { name: "Judgment Memory Framework v1", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong> The framework is product-independent: a
        firm can apply it with notes, memos, or software.{" "}
        {BRAND.product}
      </p>

      <h2>The eight elements</h2>

      <h3>1. Condition</h3>
      <p>
        The observable facts and assumptions present when the decision was
        made. Without conditions, a past conclusion cannot be tested against a
        new deal.
      </p>

      <h3>2. Judgment</h3>
      <p>
        The choice itself — including decisions to pass. Passes belong in
        institutional memory; recording only closed deals biases reuse.
      </p>

      <h3>3. Reasoning</h3>
      <p>
        Why the judgment followed from those conditions. Final IC memos often
        keep the conclusion while losing which assumptions actually mattered.
      </p>

      <h3>4. Evidence</h3>
      <p>
        The supporting materials and sources tied to the reasoning — not the
        entire data room, but the evidence that drove the call.
      </p>

      <h3>5. Outcome</h3>
      <p>
        What happened after the decision. Outcome-linked judgment connects
        prior reasoning to realized results so teams know whether the logic
        held.
      </p>

      <h3>6. Transferability</h3>
      <p>
        An assessment of how far the past judgment applies under current
        conditions. See the{" "}
        <a href="/research/precedent-transferability">
          Precedent Transferability Test
        </a>
        .
      </p>

      <h3>7. Provenance</h3>
      <p>
        Who decided, when, under which evidence and premises. Judgment
        provenance makes reuse auditable instead of anecdotal.
      </p>

      <h3>8. Supersession</h3>
      <p>
        When later experience revises or replaces an earlier judgment.
        Supersession prevents teams from reusing outdated logic as if it were
        still authoritative.
      </p>

      <h2>The Precedent Transferability Test</h2>
      <p>
        Before applying a historical precedent to a current deal, ask:
      </p>
      <ol>
        <li>Which core conditions still hold?</li>
        <li>Which conditions have changed?</li>
        <li>What was the outcome of the past judgment?</li>
        <li>Did the outcome support or contradict that judgment?</li>
        <li>What failure conditions would invalidate reuse?</li>
        <li>Has the past judgment since been superseded?</li>
      </ol>

      <h2>The Judgment Loss Audit</h2>
      <p>Use these questions to diagnose what the firm actually retains:</p>
      <ul>
        <li>Are reasons to pass searchable?</li>
        <li>Can the firm find why a specific risk was accepted?</li>
        <li>Can assumptions be linked to later outcomes?</li>
        <li>
          When an investment professional leaves, does deal judgment context
          remain?
        </li>
        <li>
          Can the firm compare a current deal to similar past deals by
          condition, not by filename?
        </li>
      </ul>

      <h2>Named concepts in this framework</h2>
      <ul>
        <li>
          <strong>Judgment memory</strong> — preserving and retrieving the
          full decision record for reuse
        </li>
        <li>
          <strong>Precedent transferability</strong> — evaluating applicability
          to the current situation
        </li>
        <li>
          <strong>Condition drift</strong> — material change in the conditions
          that once supported a judgment
        </li>
        <li>
          <strong>Judgment provenance</strong> — tracking who judged, when, and
          on what basis
        </li>
        <li>
          <strong>Outcome-linked judgment</strong> — connecting decisions to
          realized results
        </li>
        <li>
          <strong>Judgment supersession</strong> — revising or replacing prior
          judgment with later learning
        </li>
      </ul>

      <h2>Version</h2>
      <p>
        This is <strong>Wiserbond Judgment Memory Framework v1</strong>,
        published {datePublished}. Cite this page when referring to the
        framework.
      </p>
    </ResearchArticle>
  );
}
