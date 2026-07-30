/** Akashic Record architecture mindmap — cream/navy, English */

const C = {
  page: "#FAF6F0",
  white: "#FFFFFF",
  muted: "#F1ECE5",
  navy: "#051F5B",
  text: "#18233B",
  secondary: "#4F5B70",
  faint: "#6F7888",
  border: "#C9C1B6",
  soft: "#D8D1C7",
  strong: "#AEB7C8",
  tint: "rgba(5,31,91,0.08)",
} as const;

const W = 1100;
const H = 720;
const CX = 550;
const CY = 360;

const BRANCHES: Array<{
  key: string;
  title: string;
  angle: number;
  accent: boolean;
  nodes: Array<{ label: string; sub?: string }>;
}> = [
  {
    key: "ingest",
    title: "Ingest",
    angle: -150,
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
    angle: -40,
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
    angle: 35,
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
    angle: 140,
    accent: false,
    nodes: [
      { label: "Outcome", sub: "CJRO" },
      { label: "Principles", sub: "extract · approve" },
      { label: "Retention", sub: "status · version" },
      { label: "Lineage", sub: "supersede" },
    ],
  },
];

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function Hub() {
  const r = 78;
  return (
    <g>
      <circle cx={CX} cy={CY} r={r + 10} fill="none" stroke={C.soft} strokeWidth={1} />
      <circle cx={CX} cy={CY} r={r} fill={C.white} stroke={C.navy} strokeWidth={2} />
      <text x={CX} y={CY - 14} textAnchor="middle" fill={C.text} fontSize={15} fontWeight={600}>
        Akashic Record
      </text>
      <text x={CX} y={CY + 8} textAnchor="middle" fill={C.navy} fontSize={18} fontWeight={700}>
        CJR
      </text>
      <text x={CX} y={CY + 28} textAnchor="middle" fill={C.faint} fontSize={11}>
        Judgment Memory
      </text>
    </g>
  );
}

function Branch({
  title,
  angle,
  nodes,
  accent,
}: {
  title: string;
  angle: number;
  nodes: Array<{ label: string; sub?: string }>;
  accent: boolean;
}) {
  const stroke = accent ? C.navy : C.strong;
  const nodeW = 118;
  const nodeH = 44;
  const gap = 58;
  const startR = 175;
  const titlePos = polar(CX, CY, 130, angle);
  const positions = nodes.map((_, i) => polar(CX, CY, startR + i * gap, angle));
  const hubEdge = polar(CX, CY, 88, angle);

  return (
    <g>
      <line
        x1={hubEdge.x}
        y1={hubEdge.y}
        x2={positions[0].x}
        y2={positions[0].y}
        stroke={stroke}
        strokeWidth={1.5}
        opacity={0.7}
      />
      {positions.slice(0, -1).map((p, i) => (
        <line
          key={`${title}-e-${i}`}
          x1={p.x}
          y1={p.y}
          x2={positions[i + 1].x}
          y2={positions[i + 1].y}
          stroke={stroke}
          strokeWidth={1.25}
          opacity={0.55}
        />
      ))}
      <text
        x={titlePos.x}
        y={titlePos.y}
        textAnchor="middle"
        fill={accent ? C.navy : C.secondary}
        fontSize={12}
        fontWeight={700}
        letterSpacing={1.2}
      >
        {title.toUpperCase()}
      </text>
      {nodes.map((n, i) => {
        const p = positions[i];
        return (
          <g key={`${title}-${n.label}`}>
            <rect
              x={p.x - nodeW / 2}
              y={p.y - nodeH / 2}
              width={nodeW}
              height={nodeH}
              rx={2}
              fill={C.white}
              stroke={stroke}
              strokeWidth={1.25}
            />
            <text x={p.x} y={p.y - 4} textAnchor="middle" fill={C.text} fontSize={12} fontWeight={600}>
              {n.label}
            </text>
            {n.sub ? (
              <text x={p.x} y={p.y + 12} textAnchor="middle" fill={C.faint} fontSize={10}>
                {n.sub}
              </text>
            ) : null}
          </g>
        );
      })}
    </g>
  );
}

function FlowStrip() {
  const steps = ["Document", "Extract", "Confirm", "Memory", "Reuse", "Learn"];
  const y = 48;
  const startX = 80;
  const stepW = 150;

  return (
    <g>
      <text x={40} y={28} fill={C.faint} fontSize={11} fontWeight={600} letterSpacing={1.4}>
        DATA FLOW
      </text>
      {steps.map((s, i) => {
        const x = startX + i * stepW;
        const isHub = i === 3;
        return (
          <g key={s}>
            <rect
              x={x}
              y={y}
              width={112}
              height={36}
              rx={2}
              fill={isHub ? C.tint : C.muted}
              stroke={isHub ? C.navy : C.border}
              strokeWidth={isHub ? 1.5 : 1}
            />
            <text
              x={x + 56}
              y={y + 23}
              textAnchor="middle"
              fill={C.text}
              fontSize={12}
              fontWeight={isHub ? 700 : 500}
            >
              {s}
            </text>
            {i < steps.length - 1 ? (
              <path
                d={`M ${x + 118} ${y + 18} L ${x + stepW - 6} ${y + 18}`}
                stroke={C.strong}
                strokeWidth={1.25}
                markerEnd="url(#landing-ar-arrow)"
              />
            ) : null}
          </g>
        );
      })}
    </g>
  );
}

function StructureRail() {
  const layers = [
    { name: "Product", detail: "CJR · Brain · Principles" },
    { name: "Storage", detail: "JSON → Postgres later" },
    { name: "Inference", detail: "Ollama · OpenRouter" },
    { name: "Deploy", detail: "Local → BYOC" },
  ];
  const y = H - 70;
  const startX = 80;
  const gap = 250;

  return (
    <g>
      <text x={40} y={y - 18} fill={C.faint} fontSize={11} fontWeight={600} letterSpacing={1.4}>
        STRUCTURE · independently replaceable
      </text>
      {layers.map((L, i) => {
        const x = startX + i * gap;
        return (
          <g key={L.name}>
            <line x1={x} y1={y} x2={x + 200} y2={y} stroke={C.soft} strokeWidth={1} />
            <text x={x} y={y + 18} fill={C.text} fontSize={13} fontWeight={600}>
              {L.name}
            </text>
            <text x={x} y={y + 36} fill={C.faint} fontSize={11}>
              {L.detail}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export default function ArchitectureMindmap() {
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Akashic Record architecture: Ingest, Memory, Reuse, and Evolve around a CJR hub"
      className="block max-w-full h-auto"
    >
      <defs>
        <marker
          id="landing-ar-arrow"
          viewBox="0 0 10 10"
          refX={8}
          refY={5}
          markerWidth={6}
          markerHeight={6}
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={C.strong} />
        </marker>
      </defs>
      <line
        x1={CX}
        y1={110}
        x2={CX}
        y2={H - 100}
        stroke={C.soft}
        strokeWidth={1}
        strokeDasharray="3 6"
        opacity={0.7}
      />
      <line
        x1={120}
        y1={CY}
        x2={W - 120}
        y2={CY}
        stroke={C.soft}
        strokeWidth={1}
        strokeDasharray="3 6"
        opacity={0.7}
      />
      <FlowStrip />
      {BRANCHES.map((b) => (
        <g key={b.key}>
          <Branch title={b.title} angle={b.angle} nodes={b.nodes} accent={b.accent} />
        </g>
      ))}
      <Hub />
      <StructureRail />
    </svg>
  );
}
