import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, GitBranch, Fingerprint, ReceiptText, ShieldCheck, KeyRound, Trash2 } from "lucide-react";
import MemoryPreview from "@/components/landing/MemoryPreview";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { AKASHIC_SETUP_URL, BRAND, SITE, PRODUCT_NAME, COMPANY_NAME } from "@/lib/site";
import { canonicalFor } from "@/lib/url";
import "./v2.css";

export const metadata: Metadata = {
  title: { absolute: SITE.defaultTitle }, description: SITE.defaultDescription,
  alternates: { canonical: canonicalFor("/") },
  openGraph: { title: SITE.defaultTitle, description: SITE.defaultDescription },
  twitter: { title: SITE.defaultTitle, description: SITE.defaultDescription },
};
const hosts = [
  { name: "ChatGPT", icon: "chatgpt", type: "Chat app", guide: "Connect ChatGPT" },
  { name: "Claude", icon: "claude", type: "Chat app", guide: "Connect Claude" },
  { name: "Cursor", icon: "cursor", type: "Code editor", guide: "Connect Cursor" },
  { name: "Claude Code", icon: "claude", type: "Coding agent", guide: "Connect Claude Code" },
];
export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: PRODUCT_NAME, applicationCategory: "ProductivityApplication", operatingSystem: "Web", url: SITE.baseUrl, description: BRAND.product, provider: { "@type": "Organization", name: COMPANY_NAME, url: SITE.baseUrl } };
  return <>
    <Nav />
    <main id="main-content" className="v2-main">
      <section className="v2-hero v2-wrap">
        <div>
          <p className="v2-pill-tag">A little memory. A lot less explaining.</p>
          <h1>Stop re-explaining yourself to every AI app.</h1>
          <p className="v2-lead">Your decisions, the reasons behind them, and where you left off. Wibee keeps that context available to your next connected agent.</p>
          <div className="v2-actions">
            <a className="v2-button" href={AKASHIC_SETUP_URL}>Connect your first app <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="v2-text-link" href="#how-it-works">See how it works <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <ul className="wibee-trust" aria-label="Memory controls">
            <li><KeyRound size={15} aria-hidden="true" />Revoke app access</li>
            <li><Trash2 size={15} aria-hidden="true" />Delete memories</li>
            <li><ShieldCheck size={15} aria-hidden="true" />Choose what to save</li>
          </ul>
          <p className="v2-caption">Early access · Cloud-hosted, with you in control.</p>
        </div>
        <MemoryPreview />
      </section>

      <section id="how-it-works" className="v2-wrap v2-section wibee-proof">
        <div className="v2-section-heading"><h2>A memory with<br />a little more to it.</h2><p>Keep the useful part of the conversation, with enough background for the next agent to understand it.</p></div>
        <div className="v2-controls">
          {[
            [GitBranch, "A draft is still a draft.", "Fresh contributions stay temporary. The agent you choose to review and organize memory can mark them as reviewed."],
            [Fingerprint, "Keep the why. And the where.", "See the source, reason and revision behind a memory, so the next agent has more than a loose fact."],
            [ReceiptText, "Check the call.", "Memory tools return a receipt. Inspect the actual call and its result when you need to check what happened."],
          ].map(([Icon, title, body]) => {const I = Icon as typeof GitBranch; return <article key={title as string}><I size={26} aria-hidden="true" /><h3>{title as string}</h3><p>{body as string}</p></article>;})}
        </div>
      </section>

      <section className="wibee-flow-section">
        <div className="v2-wrap v2-section">
          <div className="v2-section-heading"><h2>One thread.<br />Room for more agents.</h2><p>Start with one account. Connect the apps you use. Your agents can work from the same memory.</p></div>
          <div className="v2-steps">
            {[
              ["01", "Keep the useful bits.", "A connected agent saves a compact decision, preference or progress update, with the reason attached."],
              ["02", "Give it a once-over.", "Your chosen reviewing agent helps organize new contributions. You can inspect and edit memory in your account."],
              ["03", "Pick it up elsewhere.", "In another connected app, your next agent can look up the context and carry on."],
            ].map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}
          </div>
        </div>
      </section>

      <section id="connections" className="v2-wrap v2-section">
        <div className="v2-section-heading"><h2>Your apps.<br />A shared starting point.</h2><p>Keep using the tools you like. Choose an app below for its connection steps.</p></div>
        <div className="v2-hosts">
          {hosts.map(host=><a key={host.name} href={AKASHIC_SETUP_URL} className="wibee-host-card" aria-label={host.guide}>
            <div className="wibee-host-top"><Image src={`/brand/hosts/${host.icon}.svg`} alt="" width={36} height={36} unoptimized /><span>{host.type}</span></div>
            <h3>{host.name}</h3><span className="wibee-host-link">Connection guide <ArrowUpRight size={16} aria-hidden="true" /></span>
          </a>)}
        </div>
        <p className="v2-caption">Choose your app in the setup guide for current instructions.</p>
      </section>

      <section id="controls" className="wibee-control-section">
        <div className="v2-wrap v2-section wibee-control-grid">
          <div><ShieldCheck size={30} aria-hidden="true" /><h2>Your memory.<br />Your call.</h2><p className="v2-agent-copy">Review what is stored. Edit what has changed. Forget what you no longer want to keep.</p><a className="v2-text-link" href="https://wibee.wiserbond.com/account">Open your memory <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="wibee-control-list"><div><strong>Choose how to save</strong><p>Automatic, on request, or paused. You can also exclude topics.</p></div><div><strong>Decide who stays connected</strong><p>Authorize an app to use your memory. Revoke its access from your account.</p></div><div><strong>Keep only what matters</strong><p>Wibee stores compact contributions from your agents, rather than copying entire conversations.</p></div></div>
        </div>
      </section>

      <section className="v2-wrap v2-agent-intro" aria-label="Agent resources">
        <div><p className="v2-eyebrow">FOR AGENTS AND THEIR BUILDERS</p><h2>Good context.<br />Clear instructions.</h2></div>
        <div><p>Tools, memory states, source handling and real execution receipts. Everything your agent needs to understand how to work with Wibee.</p><div className="v2-agent-links"><Link className="v2-text-link" href="/agents">Agent guide <ArrowRight size={16} aria-hidden="true" /></Link><Link className="v2-text-link" href="/llms.txt">llms.txt <ArrowUpRight size={15} aria-hidden="true" /></Link><Link className="v2-text-link" href="/agent.json">Discovery JSON <ArrowUpRight size={15} aria-hidden="true" /></Link></div></div>
      </section>

      <section id="questions" className="v2-wrap v2-section v2-faq">
        <h2>A few good questions.</h2>
        <div className="v2-faq-list">
          <details><summary>Is Wibee another chat app?</summary><p>No. It is shared memory for the agents you already use. A person connects the apps and manages permissions; the connected agents read and contribute context.</p></details>
          <details><summary>Will every app remember automatically?</summary><p>Each app has its own setup and permissions. Connecting an app does not guarantee that its agent will recall or save memory on every turn. Follow the app’s setup guide and verify a real memory call. A receipt shows that a call happened; it does not guarantee future recall or prove the memory itself is true.</p></details>
          <details><summary>What does “reviewed” mean?</summary><p>You choose a primary agent to review and organize contributions. New contributions start as temporary. Reviewed memory has passed that review; it is still context to check against the current situation, not an unquestionable fact.</p></details>
          <details><summary>Where does my memory live?</summary><p>Wibee is cloud-hosted. The service stores and processes your memory and returns it to apps you authorize. It is not an on-device vault or a system where the operator is technically unable to read memory.</p></details>
          <details><summary>Can I change my mind?</summary><p>Yes. Inspect and edit your memory, view revisions, forget records, pause capture or revoke a connected app from your account.</p></details>
        </div>
      </section>
      <section className="v2-wrap v2-cta">
        <h2>Less catching up.<br />More carrying on.</h2>
        <a className="v2-button" href={AKASHIC_SETUP_URL}>Connect your first app <ArrowUpRight size={18} aria-hidden="true" /></a>
        <p className="v2-caption">Start with one app. Bring another when you’re ready.</p>
      </section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
