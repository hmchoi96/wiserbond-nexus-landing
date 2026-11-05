import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  GitBranch,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { AKASHIC_SETUP_URL, BRAND, SITE, PRODUCT_NAME } from "@/lib/site";
import { canonicalFor } from "@/lib/url";
import "./v2.css";
export const metadata: Metadata = {
  title: { absolute: SITE.defaultTitle },
  description: SITE.defaultDescription,
  alternates: { canonical: canonicalFor("/") },
  openGraph: { title: SITE.defaultTitle, description: SITE.defaultDescription },
  twitter: { title: SITE.defaultTitle, description: SITE.defaultDescription },
};
const steps = [
  [
    "01",
    "Keep what matters",
    "A connected agent contributes compact decisions, preferences and progress, including the reasons behind them.",
  ],
  [
    "02",
    "Give memory a clear status",
    "New contributions stay temporary until your designated primary agent reviews them. Revisions keep a history.",
  ],
  [
    "03",
    "Pick up in another app",
    "Another connected agent can retrieve relevant memory and continue with the context you already built.",
  ],
];
export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT_NAME,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    url: SITE.baseUrl,
    description: BRAND.product,
    provider: { "@type": "Organization", name: "Wiserbond", url: SITE.baseUrl },
  };
  return (
    <>
      <Nav />
      <main id="main-content" className="v2-main">
        <section className="v2-hero v2-wrap">
          <div>
            <p className="v2-eyebrow">
              <span /> {PRODUCT_NAME.toUpperCase()} · EARLY ACCESS
            </p>
            <h1>
              Your next agent.
              <br />
              <em>The same context.</em>
            </h1>
            <p className="v2-lead">
              Keep your decisions, reasoning and progress connected as you move
              between AI apps. Spend less time explaining where you left off.
            </p>
            <div className="v2-actions">
              <a className="v2-button" href={AKASHIC_SETUP_URL}>
                Connect {PRODUCT_NAME} <ArrowUpRight size={18} />
              </a>
              <a className="v2-text-link" href="#how-it-works">
                See how it works <ArrowRight size={17} />
              </a>
            </div>
            <p className="v2-caption">
              Shared memory for your agents. Built by Wiserbond.
            </p>
          </div>
          <div
            className="v2-memory"
            aria-label="Illustrative example of a decision carried between connected agents"
          >
            <div className="v2-window-bar">
              <span className="v2-dots">● ● ●</span>
              <span>CONTEXT / SHARED</span>
            </div>
            <div className="v2-note">
              <div className="v2-note-label">
                A DECISION WORTH KEEPING <span>Illustrative example</span>
              </div>
              <p>“Launch after the certification tests are complete.”</p>
              <div className="v2-note-meta">
                <span>
                  <Check size={14} /> Decision + reason
                </span>
                <span>Project: Northstar</span>
              </div>
            </div>
            <div className="v2-memory-center">
              <Layers size={22} />
              <div>
                <strong>{PRODUCT_NAME}</strong>
                <span>One shared memory</span>
              </div>
              <span className="v2-pill">Available to connected agents</span>
            </div>
            <div className="v2-recall">
              <span className="v2-note-label">LATER, IN ANOTHER APP</span>
              <p>“Why are we waiting to launch?”</p>
              <div>
                <span className="v2-answer-mark">↳</span>
                <p>
                  The launch depends on completing certification tests. That was
                  the reason behind the decision.
                </p>
              </div>
            </div>
            <p className="v2-example-label">
              Concept illustration · retrieval requires an authorized agent call
            </p>
          </div>
        </section>
        <div className="v2-strip">
          <div className="v2-wrap">
            <span>THE WORK CONTINUES.</span>
            <p>The context should come with it.</p>
            <span>CONTEXT → DECISION → CONTINUITY</span>
          </div>
        </div>
        <section id="how-it-works" className="v2-wrap v2-section">
          <p className="v2-eyebrow">LESS RE-EXPLAINING. MORE CONTINUING.</p>
          <div className="v2-section-heading">
            <h2>
              A memory layer between
              <br />
              you and your agents.
            </h2>
            <p>
              The useful part of a conversation is often a small piece: what you
              decided, why, and what comes next. Akashic gives that context a
              place to live beyond a single app.
            </p>
          </div>
          <div className="v2-steps">
            {steps.map(([n, t, b]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="connections" className="v2-connections">
          <div className="v2-wrap v2-section">
            <p className="v2-eyebrow">YOUR TOOLS, CONNECTED</p>
            <div className="v2-section-heading">
              <h2>
                Change the app.
                <br />
                Keep the thread.
              </h2>
              <p>
                Connect through MCP and host-specific setup. Your agents read
                and contribute to the same memory under your account.
              </p>
            </div>
            <div className="v2-hosts">
              {[
                ["ChatGPT", "MCP connection"],
                ["Claude", "MCP connection"],
                ["Cursor", "Plugin + MCP"],
                ["Claude Code", "Plugin + MCP"],
              ].map(([name, type]) => (
                <div key={name}>
                  <span className="v2-host-symbol" aria-hidden="true">
                    {name.slice(0, 2)}
                  </span>
                  <h3>{name}</h3>
                  <p>{type}</p>
                </div>
              ))}
            </div>
            <p className="v2-caption">
              Early access: setup and tool use vary by host. Connecting an app
              does not guarantee that it will recall or save context on every
              turn. Check the setup page for current connection instructions.
            </p>
            <a className="v2-text-link" href={AKASHIC_SETUP_URL}>
              Find your connection guide <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section id="controls" className="v2-wrap v2-section">
          <p className="v2-eyebrow">MEMORY WITH CONTEXT AND CONTROL</p>
          <div className="v2-section-heading">
            <h2>
              Know what is remembered.
              <br />
              And why it is there.
            </h2>
            <p>
              Memory needs to change as your work changes. Keep new
              contributions distinct from reviewed memory and follow the history
              of a decision.
            </p>
          </div>
          <div className="v2-controls">
            {[
              [
                GitBranch,
                "Temporary, then reviewed",
                "Your designated primary agent manages contributions. Temporary memory remains distinguishable from settled records.",
              ],
              [
                Layers,
                "Revisions with a history",
                "Update a decision without losing the reason it changed. Inspect surviving versions when you need the background.",
              ],
              [
                ShieldCheck,
                "Connected on your terms",
                "Authorize apps, revoke their access, inspect memory and explicitly forget records from the account workspace.",
              ],
            ].map(([Icon, title, body]) => {
              const I = Icon as typeof Layers;
              return (
                <article key={title as string}>
                  <I size={24} />
                  <h3>{title as string}</h3>
                  <p>{body as string}</p>
                </article>
              );
            })}
          </div>
          <div className="v2-boundary">
            <strong>A focused memory layer.</strong>
            <p>
              Agents contribute compact context rather than uploading entire
              chat histories. Capture depends on host behavior and your
              settings. Akashic is cloud-hosted; memory is processed by the
              service and shared with authorized apps.
            </p>
          </div>
        </section>
        <section className="v2-wrap v2-cta">
          <p className="v2-eyebrow">PICK UP WHERE YOU LEFT OFF</p>
          <h2>
            Your work has a history.
            <br />
            Give your agents access to it.
          </h2>
          <a className="v2-button" href={AKASHIC_SETUP_URL}>
            Connect {PRODUCT_NAME} <ArrowUpRight size={18} />
          </a>
          <p className="v2-caption">
            Early access · Choose an app and follow the connection guide.
          </p>
        </section>
        <aside className="v2-wrap v2-archive">
          <p>
            <strong>Looking for Akashic Record V1?</strong> Our earlier work on
            investment judgment memory is preserved as an archive. Wiserbond now
            focuses on V2.
          </p>
          <Link href="/archive/akashic-v1">
            Visit the archive <ArrowRight size={16} />
          </Link>
        </aside>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
