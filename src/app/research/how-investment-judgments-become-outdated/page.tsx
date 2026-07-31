import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { canonicalFor } from "@/lib/url";

const title = "How Investment Judgments Become Outdated";
const description =
  "Investment judgments go outdated through condition drift — when facts that once supported a decision change — and through judgment supersession, when later outcomes or experience revise or replace the original logic.";
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
        Condition drift is change in the facts that once made a judgment
        reasonable. Market structure, regulation, competition, retention
        economics, integration capacity — any of these can stop matching the
        original case.
      </p>
      <p>
        The old conclusion can stay historically correct and still be unsafe to
        reuse.
      </p>

      <h2>Judgment supersession</h2>
      <p>
        Supersession is when later experience revises or replaces an earlier
        judgment. A risk accepted then may look underpriced now. A pass may
        look too cautious.
      </p>
      <p>
        Skip recording supersession, and teams keep retrieving obsolete logic
        as current policy.
      </p>

      <h2>When not to reuse a precedent</h2>
      <ul>
        <li>Core supporting conditions no longer hold</li>
        <li>The original outcome contradicted the judgment</li>
        <li>Later decisions superseded the prior call</li>
        <li>
          Failure conditions noted at the time are present in the current deal
        </li>
      </ul>

      <h2>For PE teams</h2>
      <p>
        Keeping past judgment without transfer caution creates false
        confidence. &ldquo;Have we seen this before?&rdquo; is not enough. Ask
        whether the judgment that applied then still applies under today&apos;s
        conditions.
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
