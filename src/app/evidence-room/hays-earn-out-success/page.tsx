import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { canonicalFor } from "@/lib/url";

const title = "What the Hays Earn-Out Reveals About Pricing Retention Risk";
const description =
  "Brown & Brown paid up to $730M for Hays with $25M earn-out over three years. Every earn-out metric was met and the full $25M was paid. That scores the 2018–2021 price structure — not seven-year retention on the same book.";
const path = "/evidence-room/hays-earn-out-success";
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
      kicker="Evidence Room"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Evidence Room", href: "/evidence-room" },
        { name: "Hays Earn-Out", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong>
      </p>
      <p>
        Precedent IBR-001. Pair with{" "}
        <a href="/evidence-room/hays-producer-lift-out">IBR-003</a> — same Hays
        asset, retention-protection judgment, different clock.
      </p>

      <h2>Bottom Line</h2>
      <p>
        Up to $25M of the $730M price sat in a three-year earn-out. That left
        retention and growth risk with the seller through the integration
        window. Jim Hays stated under oath in a December 2025 affidavit that
        they exceeded all earn-out metrics and received the entire $25 million.
      </p>
      <p>
        Earn-out success is not a seven-year retention verdict.
      </p>

      <h2>Historical Conditions</h2>
      <ul>
        <li>
          2018-10-22: Brown &amp; Brown agreed to buy Hays Companies — then
          #22 U.S. insurance broker, 700+ employees, 32 locations in 21 states.
        </li>
        <li>
          2018-11-15 close: $705M ($605M cash + 3,376,103 BRO shares at $100M)
          plus up to $25M cash earn-out over three years. Roughly $600M borrowed
          under the credit facility.
        </li>
        <li>
          Fed target 2.00–2.25% at signing; 2.25–2.50% from 2018-12-20.
          Management guided — Business Insurance report, not audited — to 2017
          gross revenue $199.1M and 2019 revenue $210–220M on $47–53M EBITDAC.
        </li>
      </ul>

      <h2>Judgment</h2>
      <p>
        Pay $730M for Hays — $705M at closing plus up to $25M of earn-out —
        funded largely with credit facility borrowings, treating the retained
        producer force as the asset being bought.
      </p>
      <p>
        Reconstructed from 8-K terms and management commentary. No published
        multiple from Brown &amp; Brown in this form.
      </p>

      <h2>Reasoning</h2>
      <ul>
        <li>
          Deferring $25M shifted retention/growth risk to the seller for the
          integration window instead of putting it all in upfront cash.
        </li>
        <li>
          Implied multiple uses guided 2019 EBITDAC ($47–53M), not a reported
          multiple. Trade press $750M is not the filing figure.
        </li>
        <li>
          ~$600M facility debt was serviceable at Fed 2.00–2.25%. Cheap
          financing was a condition of the price.
        </li>
      </ul>

      <h2>Outcome</h2>
      <p>
        <strong>Verdict (scoped):</strong> success — 2018–2021 earn-out period
        only. All metrics met. Full $25M paid.
      </p>
      <p>
        <strong>What went right:</strong> Targets cleared each year. Deferral
        paid only against delivered performance.
      </p>
      <p>
        <strong>Limits:</strong> Verdict rests on the affidavit sentence about
        earn-out attainment. No public Hays-level revenue/margin series after
        close to audit anything finer.
      </p>
      <p>
        <strong>Next-time rule:</strong> Score earn-out success against
        intangible amortization life, not only earn-out tenor. Track founder and
        top-decile producers at years five and seven.
      </p>

      <h2>What Still Holds</h2>
      <ul>
        <li>Earn-outs can push near-term retention/growth risk to the seller.</li>
        <li>2018 cost of debt helped make this price workable.</li>
        <li>Buying a producer force as the asset remains a common brokerage thesis.</li>
      </ul>

      <h2>What Changed</h2>
      <ul>
        <li>
          By 2025 the same book faced a coordinated departure episode (
          <a href="/evidence-room/hays-producer-lift-out">IBR-003</a>).
        </li>
        <li>
          Later financing conditions inverted. Do not paste 2018 debt cost into
          a current underwriting without re-scoring.
        </li>
      </ul>

      <h2>Transfer Caution</h2>
      <ul>
        <li>Earn-out success ≠ seven-year retention.</li>
        <li>
          Do not say the Hays deal &ldquo;worked&rdquo; in full from this page
          alone.
        </li>
        <li>
          Do not bury IBR-003 behind a short success window. Same asset,
          different judgment.
        </li>
        <li>Use $705M + up to $25M, not trade-press $750M.</li>
      </ul>

      <h2>Provenance</h2>
      <ul>
        <li>
          <a
            href="https://investor.bbinsurance.com/static-files/5c10504d-cdad-4480-a820-447a1cc912cd"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brown &amp; Brown 8-K — Hays announcement (2018-10-22)
          </a>
        </li>
        <li>
          <a
            href="https://www.sec.gov/Archives/edgar/data/79282/000007928218000042/form8-kxprojectapolloc.htm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brown &amp; Brown 8-K — closing / Project Apollo (2018-11-15)
          </a>
        </li>
        <li>
          <a
            href="https://www.businessinsurance.com/brown-brown-reports-sluggish-2018-third-quarter-growth-details-hays-acquisitio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Business Insurance — Q3 2018 call / Hays details
          </a>
        </li>
        <li>
          <a
            href="https://static.insuranceinsider.com/2a/14/2d3c2b204956aee69fe4168a1bd2/brown-v-howden-jim-hays-affidavit.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Affidavit of Jim Hays (Dec 2025)
          </a>
        </li>
        <li>
          <a
            href="https://www.federalreserve.gov/monetarypolicy/openmarket.htm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Federal Reserve — target range history
          </a>
        </li>
      </ul>
      <p>
        Fixture <code>IBR-001</code>. Source draft:{" "}
        <code>docs/evidence/hays-earn-out-success.md</code>.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <a href="/evidence-room/hays-producer-lift-out">
            Hays producer lift-out (IBR-003)
          </a>
        </li>
        <li>
          <a href="/research/precedent-transferability">
            Precedent transferability
          </a>
        </li>
      </ul>
    </ResearchArticle>
  );
}
