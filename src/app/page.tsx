import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  GitBranch,
  Layers,
  ShieldCheck,
} from "lucide-react";
import MemoryPreview from "@/components/landing/MemoryPreview";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { AKASHIC_SETUP_URL, BRAND, SITE, PRODUCT_NAME, COMPANY_NAME } from "@/lib/site";
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
    provider: { "@type": "Organization", name: COMPANY_NAME, url: SITE.baseUrl },
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
                Get started <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <Link className="v2-text-link" href="/agents">
                For agents <ArrowRight size={17} />
              </Link>
            </div>
            <p className="v2-caption">
              Early access · Connect your apps to one memory.
            </p>
          </div>
          <MemoryPreview />
        </section>
        <div className="v2-strip">
          <div className="v2-wrap">
            <span>THE WORK CONTINUES.</span>
            <p>The context should come with it.</p>
            <span>CONTEXT → DECISION → CONTINUITY</span>
          </div>
        </div>
        <section className="v2-wrap v2-agent-intro" aria-label="Agent-first memory">
          <div><p className="v2-eyebrow">PEOPLE CONNECT. AGENTS CONTINUE.</p><h2>Built to be used<br />by your agents.</h2></div>
          <div><p>You set up the account and permissions. Your agents find prior context, contribute useful changes and check the evidence behind a memory. Clear tools, provenance and execution receipts give them something concrete to work with.</p><div className="v2-agent-links"><Link className="v2-text-link" href="/agents">Read the agent guide <ArrowRight size={16} /></Link><Link className="v2-text-link" href="/llms.txt">llms.txt <ArrowUpRight size={15} /></Link><Link className="v2-text-link" href="/agent.json">Discovery JSON <ArrowUpRight size={15} /></Link></div></div>
        </section>
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
              decided, why, and what comes next. {PRODUCT_NAME} gives that context a
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
                ["ChatGPT", "Connect your account"],
                ["Claude", "Additional setup required"],
                ["Cursor", "Install the plugin"],
                ["Claude Code", "Install the plugin"],
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
              settings. {PRODUCT_NAME} is cloud-hosted; memory is processed by the
              service and shared with authorized apps.
            </p>
          </div>
        </section>
        <section id="questions" className="v2-wrap v2-section v2-faq">
          <p className="v2-eyebrow">A FEW THINGS TO KNOW</p>
          <div className="v2-section-heading"><h2>A little clarity.<br />Before you connect.</h2><p>Shared context should be useful and understandable. Here is what the early-access product does today.</p></div>
          <div className="v2-faq-list">
            <details><summary>Is this another AI chat app?</summary><p>No. {PRODUCT_NAME} is a shared memory layer for agents you already use. Connect an app, authorize access to your account, and follow its setup guide.</p></details>
            <details><summary>Will it remember every conversation automatically?</summary><p>It stores compact contributions from connected agents, not a copy of your entire chat history. You can choose automatic capture, save only on request, pause contributions, or exclude topics. Whether an agent actually calls a memory tool also depends on the app and its permissions.</p></details>
            <details><summary>Does every app work the same way?</summary><p>No. Each app has its own connection and permission controls. Some need a plugin or additional instructions. Check the connection guide for current steps and verify a real memory call before relying on a connection.</p></details>
            <details><summary>Can I change or delete a memory?</summary><p>Yes. Your account workspace lets you inspect and edit memories, review versions, forget records, and revoke connected apps. New agent contributions are temporary until reviewed by your designated primary agent.</p></details>
            <details><summary>Is my memory stored only on my device?</summary><p>No. {PRODUCT_NAME} is a cloud service. Memory is stored and processed by the service and returned to apps you authorize. The earlier on-premise Akashic Record product is preserved separately in the archive.</p></details>
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
            Get started <ArrowUpRight size={18} aria-hidden="true" />
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
