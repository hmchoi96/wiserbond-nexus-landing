"use client";

import ScrollImageWalkthrough, {
  type WalkthroughScene,
} from "./ScrollImageWalkthrough";

const IC_BRIEF_SCENES: WalkthroughScene[] = [
  {
    id: "overview",
    focalX: 0.55,
    focalY: 0.15,
    scale: 1.1,
    eyebrow: "THE CURRENT DECISION",
    heading: "Start with the conditions in front of the deal team.",
    body: "Akashic structures the current deal context before retrieving anything from memory.",
  },
  {
    id: "context",
    focalX: 0.42,
    focalY: 0.29,
    scale: 1.82,
    eyebrow: "CURRENT CONDITIONS",
    heading: "Define what is true about this decision now.",
    body: "Deal structure, financing conditions, concentration, and integration constraints establish the conditions against which prior judgments must be tested.",
  },
  {
    id: "precedent",
    focalX: 0.42,
    focalY: 0.45,
    scale: 1.9,
    eyebrow: "RETRIEVE",
    heading: "Bring back the judgment that best matches those conditions.",
    body: "The system retrieves the prior judgment, its reasoning, and the evidence that made it relevant.",
  },
  {
    id: "differences",
    focalX: 0.42,
    focalY: 0.63,
    scale: 1.98,
    eyebrow: "COMPARE",
    heading: "Do not copy the precedent. Test where it stops transferring.",
    body: "Akashic separates comparable conditions from material differences that could invalidate direct reuse.",
  },
  {
    id: "verify",
    focalX: 0.84,
    focalY: 0.4,
    scale: 2.05,
    eyebrow: "VERIFY",
    heading: "Surface what could still change the conclusion.",
    body: "Missing facts, downside conditions, and required checks remain visible before the team relies on the precedent.",
  },
  {
    id: "draft",
    focalX: 0.84,
    focalY: 0.78,
    scale: 2.1,
    eyebrow: "HUMAN REVIEW",
    heading: "Produce a grounded draft, not an automated investment decision.",
    body: "The deal team receives a synthesized judgment tied to specific memories and remains responsible for reviewing and confirming it.",
  },
  {
    id: "resolution",
    focalX: 0.55,
    focalY: 0.48,
    scale: 1.12,
    eyebrow: "COMPOUND JUDGMENT",
    heading: "Preserve what the team decided, under which conditions, and why.",
    body: "Each reviewed decision becomes institutional memory for the next comparable situation.",
  },
];

const IC_BRIEF_MOBILE = IC_BRIEF_SCENES.filter((s) =>
  ["overview", "context", "precedent", "verify", "draft"].includes(s.id)
);

/** Memory Action: mostly vertical; moderate zoom; long holds on transfer + boundary. */
const MEMORY_ACTION_SCENES: WalkthroughScene[] = [
  {
    id: "memory-overview",
    focalX: 0.55,
    focalY: 0.16,
    scale: 1.12,
    hold: 1.15,
    eyebrow: "MEMORY ACTION",
    heading: "Decide how prior judgment should be reused.",
    body: "Akashic converts the precedent review into a specific memory action without turning it into an automated investment decision.",
  },
  {
    id: "primary-base",
    focalX: 0.54,
    focalY: 0.28,
    scale: 1.72,
    hold: 1.25,
    eyebrow: "THE PRIMARY BASE",
    heading: "Reuse the closest judgment without copying it unchanged.",
    body: "The selected precedent addresses the core financing-cost question, but its reasoning must be adjusted for the conditions of the current deal.",
  },
  {
    id: "controlled-transfer",
    focalX: 0.54,
    focalY: 0.38,
    scale: 1.78,
    hold: 1.65,
    eyebrow: "CONTROLLED TRANSFER",
    heading: "Separate the reusable reasoning from the changed conditions.",
    body: "Financing-cost precedent and retention logic still matter, while concentration, earn-out design, and integration capacity require the judgment to be rewritten for the present case.",
  },
  {
    id: "review-boundary",
    focalX: 0.54,
    focalY: 0.58,
    scale: 1.8,
    hold: 1.65,
    eyebrow: "REVIEW BOUNDARY",
    heading: "Define when the current memory action should no longer hold.",
    body: "The record states which future changes would require the team to reopen the review instead of silently carrying the judgment forward.",
  },
  {
    id: "judgment-lineage",
    focalX: 0.54,
    focalY: 0.82,
    scale: 1.72,
    hold: 1.3,
    eyebrow: "JUDGMENT LINEAGE",
    heading: "Preserve where the new memory came from.",
    body: "The new candidate remains linked to its primary precedent, supporting context, and superseded history rather than appearing as an isolated conclusion.",
  },
  {
    id: "memory-resolution",
    focalX: 0.55,
    focalY: 0.5,
    scale: 1.12,
    hold: 1.1,
    eyebrow: "REVIEWABLE MEMORY UPDATE",
    heading: "Keep the action, its limits, and its lineage together.",
    body: "The result is a proposed update to organizational memory, with enough context for a reviewer to understand what was reused, what changed, and when to reconsider it.",
  },
];

const MEMORY_ACTION_MOBILE: WalkthroughScene[] = [
  MEMORY_ACTION_SCENES[0], // recommendation
  MEMORY_ACTION_SCENES[2], // changed conditions
  MEMORY_ACTION_SCENES[3], // reconsideration boundary
  MEMORY_ACTION_SCENES[4], // CJR lineage
];

/** Detail scenes match IC Brief zoom tightness; overview/resolution stay establishing. */
const EVIDENCE_SCENES: WalkthroughScene[] = [
  {
    id: "evidence-overview",
    focalX: 0.54,
    focalY: 0.12,
    scale: 1.28,
    hold: 1.15,
    eyebrow: "EVIDENCE ROOM",
    heading:
      "See not only what was retrieved, but how every candidate was judged.",
    body: "Akashic keeps applicable, partially transferable, and rejected memories visible in one review trail.",
  },
  {
    id: "selected-precedent",
    focalX: 0.52,
    focalY: 0.26,
    scale: 2.32,
    hold: 1.25,
    eyebrow: "THE SELECTED PRECEDENT",
    heading: "Recover the judgment as it was understood at the time.",
    body: "The record preserves the original conclusion, the team’s reasoning, and what happened afterward instead of reducing the precedent to a summary.",
  },
  {
    id: "conditions",
    focalX: 0.52,
    focalY: 0.4,
    scale: 2.4,
    hold: 1.7,
    eyebrow: "CONDITION MATCHING",
    heading: "Separate what still transfers from what changed.",
    body: "A precedent is not reused because it looks similar. Its original conditions are compared against the current decision.",
  },
  {
    id: "caution-provenance",
    focalX: 0.52,
    focalY: 0.54,
    scale: 2.35,
    hold: 1.3,
    eyebrow: "AUDITABLE REUSE",
    heading: "Keep the caution, outcome, and source trail attached.",
    body: "Every reused judgment remains tied to its transfer limits, observable outcome, source evidence, and exact record lineage.",
  },
  {
    id: "alternatives",
    focalX: 0.52,
    focalY: 0.76,
    scale: 2.2,
    hold: 1.25,
    eyebrow: "WHAT WAS NOT USED",
    heading: "Preserve why the other memories were not carried forward.",
    body: "Partially transferable, superseded, and rejected records remain visible, so the team can inspect both the selected precedent and the alternatives it displaced.",
  },
  {
    id: "evidence-resolution",
    focalX: 0.54,
    focalY: 0.55,
    scale: 1.25,
    hold: 1.1,
    eyebrow: "DECISION TRACE",
    heading:
      "Keep the judgment, the alternatives, and the reason for the choice.",
    body: "The result is not just an answer. It is a reviewable record of how the answer was grounded.",
  },
];

const EVIDENCE_MOBILE = EVIDENCE_SCENES.filter((s) =>
  [
    "evidence-overview",
    "selected-precedent",
    "conditions",
    "alternatives",
    "evidence-resolution",
  ].includes(s.id)
);

export default function ReuseWalkthrough() {
  return (
    <section
      id="reuse"
      className="py-16 md:py-20 border-t border-[var(--border-soft)]"
    >
      <div className="mb-10 md:mb-12 max-w-3xl">
        <div className="text-xs md:text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
          Reuse
        </div>
        <h2 className="font-serif text-[28px] md:text-[34px] font-medium text-[var(--brand)] tracking-tight leading-snug mb-4">
          Past judgment is a starting point
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] m-0">
          Material differences, conflicting evidence, and a draft for humans to
          confirm. AI proposes; people decide what becomes memory.
        </p>
      </div>

      <ScrollImageWalkthrough
        imageSrc="/product/deep-mode-04-result.png"
        imageWidth={2838}
        imageHeight={4262}
        imageAlt="Akashic Record Deep Mode IC brief showing current decision context, transferable precedent, material differences, verification checks, and draft judgment for human review"
        scenes={IC_BRIEF_SCENES}
        mobileScenes={IC_BRIEF_MOBILE}
        ariaLabel="IC Brief judgment reuse walkthrough"
        scrollLengthVh={5.2}
        moveDuration={0.85}
        fadeDuration={0.28}
        defaultHold={1.05}
      />

      <div className="mt-16 md:mt-20 mb-8 md:mb-10 max-w-3xl">
        <div className="text-xs md:text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
          Memory action
        </div>
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-[var(--brand)] tracking-tight leading-snug mb-3">
          How the precedent becomes a controlled update
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] m-0">
          Reuse with modification, the conditions that would reopen review, and
          the lineage tying the new memory to prior CJRs.
        </p>
      </div>

      <ScrollImageWalkthrough
        imageSrc="/product/deep-mode-01-memoryaction.png"
        imageWidth={2912}
        imageHeight={2673}
        imageAlt="Akashic Record Memory Action with suggested reuse, reconsideration boundary, and CJR relationship lineage"
        scenes={MEMORY_ACTION_SCENES}
        mobileScenes={MEMORY_ACTION_MOBILE}
        ariaLabel="Memory Action controlled reuse walkthrough"
        scrollLengthVh={3.3}
        moveDuration={1.05}
        fadeDuration={0.32}
        defaultHold={1.2}
        tabletScaleFactor={0.88}
      />

      <div className="mt-16 md:mt-20 mb-8 md:mb-10 max-w-3xl">
        <div className="text-xs md:text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
          Evidence trail
        </div>
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-[var(--brand)] tracking-tight leading-snug mb-3">
          Why this precedent — and why not the others
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] m-0">
          The Evidence Room keeps the selected judgment, its conditions, and the
          classified alternatives in one reviewable trail.
        </p>
      </div>

      <ScrollImageWalkthrough
        imageSrc="/product/Deep-mode-01-evidence.png"
        imageWidth={2926}
        imageHeight={5669}
        imageAlt="Akashic Record Evidence Room with selected precedent, condition matching, transfer caution, provenance, and classified alternative memories"
        scenes={EVIDENCE_SCENES}
        mobileScenes={EVIDENCE_MOBILE}
        ariaLabel="Evidence Room decision trace walkthrough"
        scrollLengthVh={3.5}
        moveDuration={1.05}
        fadeDuration={0.32}
        defaultHold={1.2}
        tabletScaleFactor={0.88}
      />
    </section>
  );
}
