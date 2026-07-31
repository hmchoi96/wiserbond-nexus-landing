import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { canonicalFor } from "@/lib/url";

const title = "Wiserbond Judgment Memory Framework v1";
const description =
  "Eight elements for preserving and reusing investment judgment: Condition, Judgment, Reasoning, Evidence, Outcome, Transferability, Provenance, and Supersession.";
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
        <strong>
          Wiserbond Judgment Memory Framework v1 defines eight elements for
          preserving and reusing investment judgment: Condition, Judgment,
          Reasoning, Evidence, Outcome, Transferability, Provenance, and
          Supersession.
        </strong>
      </p>
      <p>
        Use it with notes, memos, or software. No product required to apply the
        structure.{" "}
        <a href="/research/judgment-memory-framework-v1.pdf">Download PDF</a>.
      </p>

      <h2>The eight elements</h2>

      <h3>1. Condition</h3>
      <p>
        Facts and assumptions present when the decision was made. Without
        them, you cannot test an old conclusion against a new deal.
      </p>

      <h3>2. Judgment</h3>
      <p>
        The choice — including passes. If you only keep closed deals, reuse
        skews.
      </p>

      <h3>3. Reasoning</h3>
      <p>
        Why the judgment followed from those conditions. Final IC memos often
        keep the conclusion and lose which assumptions carried the weight.
      </p>

      <h3>4. Evidence</h3>
      <p>
        Sources tied to the reasoning. Not the whole data room — the material
        that drove the call.
      </p>

      <h3>5. Outcome</h3>
      <p>
        What happened after. Link the result back to the prior reasoning so
        you know whether the logic held.
      </p>

      <h3>6. Transferability</h3>
      <p>
        How far the past judgment applies under current conditions. See the{" "}
        <a href="/research/precedent-transferability">
          Precedent Transferability Test
        </a>
        .
      </p>

      <h3>7. Provenance</h3>
      <p>Who decided, when, on which evidence and premises.</p>

      <h3>8. Supersession</h3>
      <p>
        Later experience revises or replaces an earlier judgment. Record it, or
        teams keep pulling outdated logic as if it were still current.
      </p>

      <h2>Precedent Transferability Test</h2>
      <p>Before applying a past precedent to a current deal:</p>
      <ol>
        <li>Which core conditions still hold?</li>
        <li>Which conditions changed?</li>
        <li>What was the outcome of the past judgment?</li>
        <li>Did the outcome support or contradict that judgment?</li>
        <li>What failure conditions would invalidate reuse?</li>
        <li>Has the past judgment been superseded?</li>
      </ol>

      <h2>Judgment Loss Audit</h2>
      <p>Check what the firm actually retains:</p>
      <ul>
        <li>Are reasons to pass searchable?</li>
        <li>Can you find why a specific risk was accepted?</li>
        <li>Can assumptions be linked to later outcomes?</li>
        <li>
          When an investment professional leaves, does deal judgment context
          remain?
        </li>
        <li>
          Can you compare a current deal to past deals by condition, not by
          filename?
        </li>
      </ul>

      <h2>Named concepts</h2>
      <ul>
        <li>
          <strong>Judgment memory</strong> — keep and retrieve the full
          decision record for reuse
        </li>
        <li>
          <strong>Precedent transferability</strong> — test whether a past
          judgment still applies
        </li>
        <li>
          <strong>Condition drift</strong> — material change in conditions that
          once supported a judgment
        </li>
        <li>
          <strong>Judgment provenance</strong> — who judged, when, on what
          basis
        </li>
        <li>
          <strong>Outcome-linked judgment</strong> — decision tied to realized
          results
        </li>
        <li>
          <strong>Judgment supersession</strong> — later learning revises or
          replaces prior judgment
        </li>
      </ul>

      <h2>Version</h2>
      <p>
        Wiserbond Judgment Memory Framework v1. Published {datePublished}.
        Cite this page.
      </p>
    </ResearchArticle>
  );
}
