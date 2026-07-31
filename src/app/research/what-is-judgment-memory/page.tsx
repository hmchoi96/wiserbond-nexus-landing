import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { BRAND } from "@/lib/site";
import { canonicalFor } from "@/lib/url";

const title = "What Is Judgment Memory for Private Equity?";
const description =
  "Judgment memory preserves the conditions, judgment, reasoning, evidence, and outcomes behind past investment decisions, then retrieves relevant precedents when similar conditions recur.";
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
      <p>
        Wiserbond owns this definition. The surveys below show the surrounding
        knowledge problem. They do not invent the category.
      </p>

      <h2>A private equity example</h2>
      <p>
        A firm is looking at another insurance brokerage add-on. Document
        search can pull old IC memos and diligence folders. Judgment memory
        should return something else: which risks the firm accepted before,
        under what conditions, what happened after, and whether those
        conditions still hold.
      </p>

      <h2>What it preserves</h2>
      <ul>
        <li>
          <strong>Conditions</strong> — facts and assumptions present when the
          decision was made
        </li>
        <li>
          <strong>Judgment</strong> — invest, pass, structure, escalate, wait
        </li>
        <li>
          <strong>Reasoning</strong> — why that choice followed from those
          conditions
        </li>
        <li>
          <strong>Evidence</strong> — sources that actually drove the call
        </li>
        <li>
          <strong>Outcome</strong> — what later confirmed, weakened, or
          overturned the judgment
        </li>
      </ul>

      <h2>Why archives fall short</h2>
      <p>
        Deal archives keep final documents. They rarely keep which conditions
        made the IC accept or reject a specific risk.
      </p>
      <p>
        After someone leaves, shared drives still open. The assumptions often
        do not: why a risk was taken, why a deal was passed, when that logic
        should stop applying.
      </p>

      <h2>How it differs from institutional memory</h2>
      <p>
        Institutional memory covers documents, relationships, procedures,
        history. Judgment memory covers decisions only — what was chosen under
        which conditions, why, on what evidence, and what followed.
      </p>

      <h2>Versus adjacent systems</h2>
      <div className="overflow-x-auto">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">System</th>
              <th scope="col">Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Document search</td>
              <td>Finds files and passages</td>
            </tr>
            <tr>
              <td>Knowledge base</td>
              <td>Stores firm information for later lookup</td>
            </tr>
            <tr>
              <td>IC memo generator</td>
              <td>Drafts analysis for the current deal</td>
            </tr>
            <tr>
              <td>Deal CRM</td>
              <td>Tracks pipeline, contacts, process</td>
            </tr>
            <tr>
              <td>Recommendation engine</td>
              <td>Suggests whether to proceed</td>
            </tr>
            <tr>
              <td>Judgment memory</td>
              <td>
                Keeps prior decision reasoning and retrieves it under
                comparable conditions
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In investment firms, AI often speeds deal screening, meeting prep,
        landscape briefs, earnings coverage. Judgment memory asks a different
        question. When this firm saw comparable conditions before, what did it
        decide, why, what happened, and what still holds?
      </p>

      <h2>Industry evidence</h2>
      <p>
        AlphaSense&apos;s <em>2025 State of AI for Business and Finance</em>{" "}
        surveyed 300 full-time professionals in the United States. 84% of
        organizations still struggle to access and use internal insights.
      </p>
      <p>
        A companion brief for investment firms, citing that research, reports
        more than seven hours a week spent searching internal data, and only
        39% with a well-organized, accessible internal knowledge base.
      </p>
      <p>
        The survey was not PE-only. Private equity and venture capital were 6%
        of respondents. The numbers describe a broader internal-knowledge
        problem, not PE prevalence.
      </p>
      <p>
        The same material lists internal research notes, pitch decks, CIMs,
        management notes as content that often sits in silos without shared
        practice or governance. Judgment memory targets the missing piece:
        decision reasoning you can retrieve when conditions recur — not another
        document store.
      </p>

      <h2>How teams use precedents</h2>
      <p>On a comparable deal — another brokerage add-on, for example — review:</p>
      <ul>
        <li>Conditions that still hold</li>
        <li>Conditions that changed</li>
        <li>Outcome of the prior judgment</li>
        <li>Transfer caution — why wholesale reuse may be unsafe</li>
        <li>Provenance — who judged, when, on what evidence</li>
      </ul>
      <p>Reuse under matching conditions. Do not copy the old conclusion blind.</p>

      <h2>Does not replace judgment</h2>
      <p>
        The State of AI report puts generative tools as amplifiers of human
        judgment, not replacements. Trust and verification stay as adoption
        barriers.
      </p>
      <p>{BRAND.doesNot}</p>

      <h2>Related</h2>
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

      <h2>About Akashic Record</h2>
      <p>{BRAND.icp}</p>

      <h2>Sources</h2>
      <ul>
        <li>
          AlphaSense, <em>The 2025 State of AI for Business and Finance</em>{" "}
          (300 U.S. full-time professionals, May 2025): sample mix; 84%
          struggle to access internal insights; genAI as amplifier of human
          judgment.
        </li>
        <li>
          AlphaSense, <em>Top AI Use Cases</em> for investment firms (citing
          State of AI): 7+ hours/week searching internal data; 39% with an
          organized accessible knowledge base; silos and governance gaps around
          proprietary research.
        </li>
      </ul>
      <p>
        Both are AlphaSense publications. AlphaSense sells market-intelligence
        and enterprise-search software. Cited here for the knowledge-access
        problem, not as proof of Wiserbond&apos;s product or definition.
      </p>
    </ResearchArticle>
  );
}
