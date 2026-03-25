"use client";

import { Badge } from "@/components/ui/badge";

function ConfidenceBar({ value }: { value: number }) {
  const percent = Math.round(value * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="w-14 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-400"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-emerald-400">{percent}%</span>
    </div>
  );
}

export default function DeepModeShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <Badge variant="outline" className="text-xs tracking-wide">
            Live Product Preview
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold">
            What Deep Mode Actually Produces
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            A real scenario query and the structured output your team receives.
            Not a chatbot response &mdash; a decision-ready framework.
          </p>
        </div>

        {/* Input Preview */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Scenario Query
            </div>
            <span className="text-[10px] text-red-500 font-medium">
              Required
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Should we reduce duration exposure ahead of the March FOMC given
            mixed inflation signals and current yield curve positioning?
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                Conditions
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Core CPI at 3.2%, above Fed 2% target
                <br />
                10Y Treasury yield at 4.35%
                <br />
                Market pricing 62% probability of rate hold
              </p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                Evidence Sources
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Q4 Duration Strategy Report p.8
                <br />
                Bloomberg: UST Curve Analysis
                <br />
                FOMC Minutes Jan 2026
              </p>
            </div>
          </div>
        </div>

        {/* Deep Mode Output (Dark themed to match actual product) */}
        <div className="rounded-2xl bg-[#0d1117] border border-white/5 p-1 shadow-2xl shadow-black/30 overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white tracking-tight">
                Decision Brain
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                JDG-20260305-042
              </span>
              <div className="flex gap-1 bg-white/5 rounded-md p-0.5">
                <span className="text-[11px] px-2.5 py-1 rounded text-slate-500">
                  Fast
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-white/10 border border-blue-500/30 text-white font-medium">
                  Deep
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 font-semibold border border-blue-500/20">
                Deep Mode
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">
                Last sync: 2:34:17 PM
              </span>
            </div>
          </div>

          {/* 3-Column Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_220px] gap-px bg-white/[0.03]">
            {/* LEFT COLUMN */}
            <div className="bg-[#0d1117] p-4 space-y-3">
              {/* Input Summary */}
              <Widget title="Input Summary">
                <KV label="Condition" value="Core CPI at 3.2%, above Fed 2% target..." />
                <KV
                  label="Scenario"
                  value="Should we reduce duration exposure ahead of the March FOMC..."
                />
              </Widget>

              {/* Matched Library */}
              <Widget title="Matched Library" badge="3 matches">
                <MatchedCJR
                  id="CJR-2024-087"
                  title="Duration cut ahead of Sep'24 FOMC"
                  tags={["rates", "duration", "fomc"]}
                  score={94}
                />
                <MatchedCJR
                  id="CJR-2024-051"
                  title="Yield curve steepener Q2'24"
                  tags={["rates", "curve", "positioning"]}
                  score={81}
                />
                <MatchedCJR
                  id="CJR-2023-112"
                  title="Duration neutral stance Dec'23"
                  tags={["rates", "duration", "fed"]}
                  score={73}
                />
              </Widget>
            </div>

            {/* CENTER COLUMN */}
            <div className="bg-[#0d1117] p-4 space-y-3">
              {/* Decision Hinge */}
              <div className="rounded-lg bg-white/[0.03] border border-white/5 p-4 border-l-2 border-l-amber-500">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Decision Hinge
                  </span>
                </div>
                <p className="text-[13px] font-medium text-slate-200 leading-relaxed">
                  February CPI print direction relative to 3.0% threshold and
                  whether the dot plot signals a shift in the median rate path
                  for 2026 H2.
                </p>
              </div>

              {/* Executive Summary */}
              <Widget title="Executive Summary">
                <p className="text-[12px] text-slate-400 leading-[1.7]">
                  The current macro setup presents a genuine tension: sticky
                  inflation argues for duration reduction, but the market is
                  already positioned for a hawkish hold. Historical CJR analysis
                  shows that pre-FOMC duration cuts in similar conditions
                  (CJR-2024-087) delivered modest alpha only when CPI surprised
                  to the upside. The yield curve&apos;s current shape and real rate
                  levels suggest the bulk of the duration repricing has occurred.
                  A measured approach — holding current positioning with a
                  defined switch rule — balances conviction against unnecessary
                  trading costs.
                </p>
              </Widget>

              {/* Scenario Options */}
              <Widget title="Scenario Options">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <OptionTab label="Option A" />
                  <OptionTab label="Option B" recommended />
                  <OptionTab label="Option C" />
                </div>

                <div className="space-y-2">
                  <OptionDetail
                    opt="A"
                    trigger="CPI > 3.4% or 10Y > 4.55%"
                    risk="Whipsaw if FOMC signals dovish tilt; transaction costs erode alpha on reversal"
                  />
                  <OptionDetail
                    opt="B"
                    trigger="Current levels hold; CPI 3.0-3.3%"
                    risk="Underperforms if inflation re-accelerates sharply; opportunity cost if rates spike"
                    recommended
                  />
                  <OptionDetail
                    opt="C"
                    trigger="Curve flattening > 15bp in 2s10s spread"
                    risk="Complexity in execution; basis risk between short and long positions"
                  />
                </div>

                {/* Recommendation */}
                <div className="mt-4 p-3 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-emerald-400">
                      Recommended: Option B
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Historical pattern match favors holding when
                      market-implied probability already reflects hawkish
                      outcome.
                    </div>
                  </div>
                  <ConfidenceBar value={0.72} />
                </div>
              </Widget>

              {/* Debate Compression */}
              <Widget title="Debate Compression">
                <div className="space-y-2">
                  <DebateRow
                    type="agree"
                    text="Market has already priced hawkish hold; additional duration cut offers diminishing marginal alpha."
                  />
                  <DebateRow
                    type="disagree"
                    text="Sticky services inflation could force a more aggressive Fed stance not yet reflected in term premium."
                  />
                  <DebateRow
                    type="hinge"
                    text="Feb CPI services component trajectory — re-acceleration above 4.5% YoY invalidates the hold thesis."
                  />
                </div>
              </Widget>
            </div>

            {/* RIGHT COLUMN */}
            <div className="bg-[#0d1117] p-4 space-y-3">
              {/* Kill Switch */}
              <div className="rounded-lg bg-red-500/[0.06] border border-red-500/15 p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wide">
                      Kill Switch
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/15 text-red-400 font-bold">
                    STRICT
                  </span>
                </div>
                <p className="text-[12px] text-slate-300 leading-relaxed">
                  Immediately reduce duration by 1.5Y if 10Y UST breaks above
                  4.75% on a closing basis or if February CPI core prints above
                  3.5%.
                </p>
              </div>

              {/* Monitoring Checklist */}
              <Widget title="Monitoring Checklist">
                <div className="space-y-2">
                  <ChecklistItem text="Track Feb CPI release (Mar 12)" />
                  <ChecklistItem text="Monitor 10Y yield vs 4.55 level" />
                  <ChecklistItem text="Review FOMC dot plot vs Dec projection" />
                </div>
              </Widget>

              {/* Switch Rule */}
              <Widget title="Switch Rule">
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  B → A if CPI core &gt; 3.4% or 10Y closes above 4.55% for 3
                  consecutive sessions. B → C if 2s10s flattens below -25bp.
                </p>
              </Widget>

              {/* Unknowns */}
              <Widget title="Unknowns">
                <ul className="space-y-1.5 text-[11px] text-slate-500">
                  <li className="flex items-start gap-1.5">
                    <span className="text-slate-600 mt-0.5">&#8226;</span>
                    Tariff policy impact on import prices not modeled
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-slate-600 mt-0.5">&#8226;</span>
                    BOJ policy shift could inject external vol into UST market
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-slate-600 mt-0.5">&#8226;</span>
                    Fiscal spending trajectory for H2 2026 unknown
                  </li>
                </ul>
              </Widget>

              {/* Confidence */}
              <Widget title="Confidence">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-slate-500">
                    Analysis confidence
                  </span>
                  <ConfidenceBar value={0.72} />
                </div>
              </Widget>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto">
          Actual Deep Mode output from Wiserbond Nexus. The 3-column dashboard
          runs entirely on-premise &mdash; your judgment data never leaves your
          network.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

function Widget({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
          {title}
        </span>
        {badge && (
          <span className="text-[10px] text-slate-500">{badge}</span>
        )}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
        {label}
      </div>
      <div className="text-[11px] text-slate-400 leading-relaxed">{value}</div>
    </div>
  );
}

function MatchedCJR({
  id,
  title,
  tags,
  score,
}: {
  id: string;
  title: string;
  tags: string[];
  score: number;
}) {
  return (
    <div className="relative p-2.5 rounded-md bg-white/[0.02] border border-white/5 mb-2 last:mb-0">
      <div className="text-[10px] font-mono text-slate-600 mb-0.5">{id}</div>
      <div className="text-[11px] text-slate-300 font-medium leading-snug pr-8">
        {title}
      </div>
      <div className="flex gap-1 mt-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500"
          >
            {t}
          </span>
        ))}
      </div>
      <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 font-semibold">
        {score}%
      </span>
    </div>
  );
}

function OptionTab({
  label,
  recommended,
}: {
  label: string;
  recommended?: boolean;
}) {
  return (
    <div
      className={`text-center py-1.5 rounded-md text-[11px] font-semibold ${
        recommended
          ? "bg-white/[0.04] border border-emerald-500/30 text-slate-300"
          : "bg-white/[0.02] border border-white/5 text-slate-500"
      }`}
    >
      {label}
      {recommended && (
        <span className="ml-1 text-[9px] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
          REC
        </span>
      )}
    </div>
  );
}

function OptionDetail({
  opt,
  trigger,
  risk,
  recommended,
}: {
  opt: string;
  trigger: string;
  risk: string;
  recommended?: boolean;
}) {
  return (
    <div
      className={`p-2.5 rounded-md border ${
        recommended
          ? "bg-white/[0.03] border-emerald-500/15"
          : "bg-white/[0.02] border-white/5"
      }`}
    >
      <div className="text-[11px] font-semibold text-slate-300 mb-1">
        Option {opt}
      </div>
      <div className="text-[10px] text-slate-500 leading-relaxed">
        <span className="text-slate-400 font-medium">Trigger:</span> {trigger}
        <br />
        <span className="text-slate-400 font-medium">Risk:</span> {risk}
      </div>
    </div>
  );
}

function DebateRow({ type, text }: { type: "agree" | "disagree" | "hinge"; text: string }) {
  const config = {
    agree: { label: "Agree", bg: "bg-emerald-500/8", text: "text-emerald-400", border: "border-emerald-500/15" },
    disagree: { label: "Disagree", bg: "bg-red-500/8", text: "text-red-400", border: "border-red-500/15" },
    hinge: { label: "Hinge", bg: "bg-amber-500/8", text: "text-amber-400", border: "border-amber-500/15" },
  }[type];

  return (
    <div className={`p-2.5 rounded-md ${config.bg} border ${config.border}`}>
      <span className={`text-[11px] font-semibold ${config.text} mr-2`}>
        {config.label}:
      </span>
      <span className="text-[11px] text-slate-400">{text}</span>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-sm border border-white/10 flex-shrink-0" />
      <span className="text-[11px] text-slate-400">{text}</span>
    </div>
  );
}
