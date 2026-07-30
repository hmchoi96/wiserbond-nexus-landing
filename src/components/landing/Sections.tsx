import Image from "next/image";
import FadeIn from "./FadeIn";
import ArchitectureMindmap from "./ArchitectureMindmap";
import { CALENDLY_URL } from "@/lib/config/calendly";

function SectionKicker({ children }: { children: string }) {
  return (
    <div className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-2.5">
      {children}
    </div>
  );
}

function ProductShot({
  src,
  alt,
  caption,
  priority,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  width: number;
  height: number;
}) {
  return (
    <figure className="m-0">
      <div className="relative overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-muted)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={95}
          sizes="(max-width: 1024px) 94vw, 900px"
          priority={priority}
          className="w-full h-auto block"
        />
      </div>
      <figcaption className="mt-3 text-sm text-[var(--text-secondary)] leading-snug max-w-xl">
        {caption}
      </figcaption>
    </figure>
  );
}

function FeatureRow({
  kicker,
  title,
  body,
  src,
  alt,
  caption,
  flip,
  priority,
  width,
  height,
}: {
  kicker: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  caption: string;
  flip?: boolean;
  priority?: boolean;
  width: number;
  height: number;
}) {
  const copy = (
    <div className="md:w-[38%] pt-1">
      <SectionKicker>{kicker}</SectionKicker>
      <h2 className="font-serif text-2xl md:text-[26px] font-medium text-[var(--brand)] tracking-tight leading-snug mb-3">
        {title}
      </h2>
      <p className="text-sm md:text-[15px] leading-relaxed text-[var(--text-secondary)] m-0">
        {body}
      </p>
    </div>
  );
  const shot = (
    <div className="md:flex-1">
      <ProductShot
        src={src}
        alt={alt}
        caption={caption}
        priority={priority}
        width={width}
        height={height}
      />
    </div>
  );

  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-12 items-start py-14 border-t border-[var(--border-soft)]">
      {flip ? (
        <>
          {shot}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {shot}
        </>
      )}
    </section>
  );
}

export default function Sections() {
  return (
    <div className="max-w-[960px] mx-auto px-4 md:px-7">
      <FadeIn>
        <section id="cjr" className="py-14 border-t border-[var(--border-soft)]">
          <SectionKicker>Core unit</SectionKicker>
          <h2 className="font-serif text-2xl md:text-[28px] font-medium text-[var(--brand)] tracking-tight mb-2.5">
            CJR — how a decision is deconstructed
          </h2>
          <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-xl mb-7">
            A decision is not one blob of text. Akashic Record breaks it into Condition,
            Judgment, and Reasoning — so the structure can be stored, compared, and reused
            when a similar situation returns.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {(
              [
                [
                  "C · Condition",
                  "The situation you observed — constraints, signals, and assumptions at the time.",
                ],
                [
                  "J · Judgment",
                  "The call you made under those conditions — what to do, defer, or refuse.",
                ],
                [
                  "R · Reasoning",
                  "Why that judgment followed — the logic you would reuse or revise later.",
                ],
              ] as const
            ).map(([title, body]) => (
              <div
                key={title}
                className="rounded border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <div className="text-xs font-bold tracking-wide text-[var(--brand)] mb-2">
                  {title}
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] m-0">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <div id="product">
          <FeatureRow
            kicker="Capture"
            title="Structure the decision before the debate"
            body="Decision context, conditions, evidence, and initial reasoning become a CJR candidate — Condition, Judgment, Reasoning."
            src="/product/deep-mode-02-filled.png"
            alt="Akashic Record Deep Mode input with a filled decision scenario"
            caption="Input is the decision on the table, not a search query."
            priority
            width={2838}
            height={1576}
          />
          <FeatureRow
            flip
            kicker="Reuse"
            title="Past judgment is a starting point"
            body="Material differences, conflicting evidence, and a draft for humans to confirm. AI proposes; people decide what becomes memory."
            src="/product/deep-mode-04-result.png"
            alt="Akashic Record Deep Mode IC brief with applicable precedent"
            caption="IC Brief with applicable precedent and draft judgment."
            width={2838}
            height={4262}
          />
        </div>
      </FadeIn>

      <FadeIn>
        <section id="architecture" className="py-14 border-t border-[var(--border-soft)]">
          <SectionKicker>Architecture</SectionKicker>
          <h2 className="font-serif text-2xl md:text-[28px] font-medium text-[var(--brand)] tracking-tight mb-2.5">
            This is our architecture
          </h2>
          <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-xl mb-7">
            Documents enter as candidates. Humans confirm. CJR is the reusable unit —
            searched, compared, and improved over time.
          </p>
          <div className="rounded border border-[var(--border)] bg-[var(--page-bg)] overflow-hidden">
            <ArchitectureMindmap />
          </div>
          <div className="flex flex-wrap gap-8 md:gap-10 mt-7">
            {(
              [
                ["AI proposes", "never writes truth alone"],
                ["Human confirms", "Inbox → confirmed CJR"],
                ["Memory compounds", "reuse beats re-debate"],
              ] as const
            ).map(([t, d]) => (
              <div key={t} className="min-w-[160px]">
                <div className="text-sm font-semibold text-[var(--brand)]">{t}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{d}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="contact"
          className="py-16 md:py-20 border-t border-[var(--border-soft)] text-center"
        >
          <h2 className="font-serif text-2xl md:text-[28px] font-medium text-[var(--brand)] mb-3">
            Pilot with your team
          </h2>
          <p className="text-sm md:text-[15px] text-[var(--text-secondary)] mb-6">
            Fifteen minutes. No pitch deck — questions about how you preserve decisions.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-md text-white text-sm font-semibold transition-colors hover:bg-[var(--brand-hover)]"
            style={{ background: "var(--brand)" }}
          >
            Request a 15-min Interview
          </a>
        </section>
      </FadeIn>
    </div>
  );
}
