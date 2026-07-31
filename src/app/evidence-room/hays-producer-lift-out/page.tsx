import type { Metadata } from "next";
import ResearchArticle from "@/components/site/ResearchArticle";
import { canonicalFor } from "@/lib/url";

const title = "What the Hays Producer Lift-Out Reveals About Retention Risk";
const description =
  "Seven years after Brown & Brown acquired Hays, a coordinated employee departure hit the book. Retention rested on confidentiality, non-solicitation, non-recruitment, compensation, and equity — not non-competes. Those tools supported later litigation; they did not stop the departure.";
const path = "/evidence-room/hays-producer-lift-out";
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
        { name: "Hays Producer Lift-Out", href: path },
      ]}
    >
      <p>
        <strong>{description}</strong>
      </p>
      <p>
        This record scores the retention-protection judgment (IBR-003), not the
        2018 purchase price (IBR-001). Litigation is pending. Howden contests
        the allegations. Jim Hays denies involvement and is not a defendant.
      </p>

      <h2>Bottom Line</h2>
      <p>
        Covenants and pay packages gave Brown & Brown grounds to fight after
        the fact. They did not deter a coordinated lift-out of roughly 275
        former employees, per the company, who joined Howden US Services.
      </p>

      <h2>Historical Conditions</h2>
      <ul>
        <li>
          Retention on the acquired Hays business rested on confidentiality,
          non-solicitation, and non-recruitment covenants, plus compensation
          and equity — not post-employment non-competes.
        </li>
        <li>
          Around 2025-12-18, roughly 200 employees resigned without notice
          across Massachusetts, Minnesota, Illinois, Kansas, and Wisconsin,
          effective Dec 19. Per Brown & Brown, about 275 former employees
          joined Howden US Services, four months after Howden launched its U.S.
          retail platform in August 2025.
        </li>
        <li>
          Jim Hays&apos;s employment ended in January 2024. He left the board
          in March 2024. He joined Howden as vice chairman in August 2025 —
          twenty months after his own exit.
        </li>
      </ul>

      <h2>Judgment</h2>
      <p>
        Protect the producer book acquired with Hays through confidentiality,
        non-solicitation, and non-recruitment covenants plus compensation and
        equity, rather than through post-employment non-competes.
      </p>
      <p>
        Reconstructed from the covenant package in the litigation record. Not
        quoted from an internal memo.
      </p>

      <h2>Reasoning</h2>
      <ul>
        <li>
          Scores retention protection only. Pricing on the same asset is
          IBR-001 and is not contradicted here.
        </li>
        <li>
          On the 2026-01-27 earnings call, the CEO said departing employees
          took customers &ldquo;currently representing known annual revenues of
          $23 million&rdquo; against FY2025 revenue of $5.9B, and attributed Q4
          2025 organic growth of −2.8% substantially to a prior-year
          flood-claims comparison rather than to the departures.
        </li>
        <li>
          Howden&apos;s filing attributes the departures to &ldquo;terrible
          management and poor, under-market compensation.&rdquo; Conduct
          allegations remain contested.
        </li>
      </ul>

      <h2>Outcome</h2>
      <p>
        <strong>Verdict (scoped):</strong> failure — on retention protection,
        not on Brown & Brown&apos;s overall performance.
      </p>
      <p>
        The package did not prevent the coordinated departure. Trade press
        reports TROs in Massachusetts and a Minnesota action against 16 former
        employees. Pleadings were not read end-to-end for the fixture. Matters
        are pending.
      </p>
      <p>
        <strong>What went wrong:</strong> Non-solicits supported injunctive
        relief after the fact. They did not stop the exit. Compensation and
        equity were matched by the recruiter.
      </p>
      <p>
        <strong>What was missed:</strong> Attrition was treated like an
        independent per-person hazard. The exposure was a correlated lift-out
        across a relationship network spanning several offices — a network that
        survived the founder&apos;s exit by twenty months.
      </p>
      <p>
        <strong>Next-time rule:</strong> Underwrite concentration at office and
        relationship-network level. Stress-test a coordinated location
        lift-out. Where non-competes are absent, price residual retention risk
        into the multiple instead of assuming non-solicitation covers it.
      </p>

      <h2>What Still Holds</h2>
      <ul>
        <li>Brokerage add-ons often buy books whose value depends on people staying.</li>
        <li>
          Confidentiality / non-solicitation / non-recruitment stay common when
          non-competes are limited or unused.
        </li>
        <li>Injunctive relief after a raid is not prevention.</li>
        <li>
          Correlated office/network risk differs from single-producer
          concentration.
        </li>
      </ul>

      <h2>What Changed</h2>
      <ul>
        <li>
          Howden&apos;s U.S. retail launch (Aug 2025) created a recruiter that
          could absorb a large cohort quickly.
        </li>
        <li>
          Jim Hays had been outside employment and the board for months before
          the Dec 2025 resignations.
        </li>
        <li>Public dispute; facts and characterizations remain contested.</li>
      </ul>

      <h2>Transfer Caution</h2>
      <ul>
        <li>
          Do not treat &ldquo;we have non-solicits and equity&rdquo; as proof
          the book is protected.
        </li>
        <li>
          Do not reuse this as a finding that Howden wrongfully raided anyone —
          that is litigated and denied.
        </li>
        <li>
          Do not collapse this into the 2018 pricing judgment (
          <a href="/evidence-room/hays-earn-out-success">IBR-001</a>). Same
          asset, different judgment.
        </li>
        <li>
          Reuse the underwriting lesson: model coordinated lift-outs; price
          residual risk when non-competes are absent.
        </li>
      </ul>

      <h2>Provenance</h2>
      <ul>
        <li>
          <a
            href="https://www.businessinsurance.com/brown-brown-sues-howden-over-holiday-season-raid/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Business Insurance — Brown &amp; Brown sues Howden (Dec 2025)
          </a>
        </li>
        <li>
          <a
            href="https://www.insurancejournal.com/news/national/2025/12/30/852581.htm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Insurance Journal — mass departures litigation (2025-12-30)
          </a>
        </li>
        <li>
          <a
            href="https://www.insurancebusinessmag.com/us/news/breaking-news/brown-and-brown-wins-tro-against-howden-over-alleged-employee-raiding-574818.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            Insurance Business America — TRO coverage
          </a>
        </li>
        <li>
          <a
            href="https://www.insurancejournal.com/magazines/mag-features/2026/02/23/858358.htm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Insurance Journal magazine feature (2026-02-23)
          </a>
        </li>
        <li>
          <a
            href="https://www.businessinsurance.com/brown-to-continue-fighting-howden-on-recruiting/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Business Insurance — Q4 2025 earnings / recruiting (call 2026-01-27)
          </a>
        </li>
        <li>
          <a
            href="https://www.startribune.com/minnesota-insurance-operation-in-legal-firestorm-over-mass-employee-exodus/601594116"
            rel="noopener noreferrer"
            target="_blank"
          >
            Star Tribune — Minnesota mass employee exodus
          </a>
        </li>
      </ul>
      <p>
        Encoded in{" "}
        <code>akashic_record/scripts/seed_brokerage_fixtures.ts</code> as
        IBR-003. Source draft:{" "}
        <code>docs/evidence/hays-producer-lift-out.md</code>.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <a href="/evidence-room/hays-earn-out-success">
            Hays earn-out / pricing (IBR-001)
          </a>
        </li>
        <li>
          <a href="/research/precedent-transferability">
            Precedent transferability
          </a>
        </li>
        <li>
          <a href="/research/what-is-judgment-memory">
            What is judgment memory
          </a>
        </li>
      </ul>
    </ResearchArticle>
  );
}
