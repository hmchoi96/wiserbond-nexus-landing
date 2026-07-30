/** Akashic Record architecture — cream/navy, English, non-overlapping layout */

const BRANCHES = [
  {
    key: "ingest",
    title: "Ingest",
    accent: false,
    nodes: [
      { label: "Documents", sub: "PDF · DOCX · TXT" },
      { label: "Parse", sub: "Docling · OCR" },
      { label: "Extract CJR", sub: "AI proposes" },
      { label: "Human Review", sub: "approve · edit" },
    ],
  },
  {
    key: "memory",
    title: "Memory",
    accent: true,
    nodes: [
      { label: "Condition", sub: "C · situation" },
      { label: "Judgment", sub: "J · decision" },
      { label: "Reasoning", sub: "R · rationale" },
      { label: "Evidence", sub: "span · citation" },
    ],
  },
  {
    key: "reuse",
    title: "Reuse",
    accent: true,
    nodes: [
      { label: "Search", sub: "BM25 Top-3" },
      { label: "Fast / Deep", sub: "reasoning budget" },
      { label: "Brain", sub: "compare context" },
      { label: "Action", sub: "reuse · revise · create" },
    ],
  },
  {
    key: "evolve",
    title: "Evolve",
    accent: false,
    nodes: [
      { label: "Outcome", sub: "CJRO" },
      { label: "Principles", sub: "extract · approve" },
      { label: "Retention", sub: "status · version" },
      { label: "Lineage", sub: "supersede" },
    ],
  },
] as const;

const FLOW = ["Document", "Extract", "Confirm", "Memory", "Reuse", "Learn"] as const;

const STRUCTURE = [
  { name: "Product", detail: "CJR · Brain · Principles" },
  { name: "Storage", detail: "JSON → Postgres later" },
  { name: "Inference", detail: "Ollama · OpenRouter" },
  { name: "Deploy", detail: "Local → BYOC" },
] as const;

function BranchCard({
  title,
  accent,
  nodes,
}: {
  title: string;
  accent: boolean;
  nodes: ReadonlyArray<{ label: string; sub?: string }>;
}) {
  return (
    <div
      className={`rounded border bg-[var(--surface)] p-3 ${
        accent ? "border-[var(--brand)]" : "border-[var(--border)]"
      }`}
    >
      <div
        className={`text-[11px] font-bold tracking-[0.12em] uppercase mb-3 ${
          accent ? "text-[var(--brand)]" : "text-[var(--text-secondary)]"
        }`}
      >
        {title}
      </div>
      <div className="space-y-2">
        {nodes.map((n) => (
          <div
            key={n.label}
            className="rounded border border-[var(--border-soft)] bg-[var(--page-bg)] px-3 py-2"
          >
            <div className="text-[13px] font-semibold text-[var(--text)]">{n.label}</div>
            {n.sub ? (
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{n.sub}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArchitectureMindmap() {
  return (
    <div
      className="w-full p-4 md:p-5"
      role="img"
      aria-label="Akashic Record architecture: Ingest, Memory, Reuse, and Evolve around a CJR hub"
    >
      <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-3">
        Data flow
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {FLOW.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`px-3 py-2 rounded border text-[12px] font-medium ${
                step === "Memory"
                  ? "border-[var(--brand)] bg-[rgba(5,31,91,0.08)] text-[var(--text)] font-semibold"
                  : "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--text)]"
              }`}
            >
              {step}
            </div>
            {i < FLOW.length - 1 ? (
              <span className="text-[var(--border-strong)] text-sm" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-5 items-stretch mb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 order-2 lg:order-1">
          <BranchCard {...BRANCHES[0]} />
          <BranchCard {...BRANCHES[3]} />
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center py-2">
          <div className="w-full max-w-[220px] aspect-square rounded-full border-2 border-[var(--brand)] bg-[var(--surface)] flex flex-col items-center justify-center text-center px-4 ring-8 ring-[var(--page-bg)]">
            <div className="text-[13px] font-semibold text-[var(--text)]">Akashic Record</div>
            <div className="text-xl font-bold text-[var(--brand)] mt-1">CJR</div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">Judgment Memory</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 order-3">
          <BranchCard {...BRANCHES[1]} />
          <BranchCard {...BRANCHES[2]} />
        </div>
      </div>

      <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-3">
        Structure · independently replaceable
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {STRUCTURE.map((layer) => (
          <div
            key={layer.name}
            className="border-t border-[var(--border-soft)] pt-2"
          >
            <div className="text-[13px] font-semibold text-[var(--text)]">{layer.name}</div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">{layer.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
