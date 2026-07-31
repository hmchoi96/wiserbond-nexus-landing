import Image from "next/image";
import FadeIn from "./FadeIn";
import ArchitectureMindmap from "./ArchitectureMindmap";
import ReuseWalkthrough from "./ReuseWalkthrough";
import { CALENDLY_URL } from "@/lib/config/calendly";

function SectionKicker({ children }: { children: string }) {
  return (
    <div className="text-xs md:text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
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
          sizes="(max-width: 1200px) 94vw, 1100px"
          priority={priority}
          className="w-full h-auto block"
        />
      </div>
      <figcaption className="mt-3.5 text-[15px] text-[var(--text-secondary)] leading-snug max-w-2xl">
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
    <div className="md:w-[36%] pt-1">
      <SectionKicker>{kicker}</SectionKicker>
      <h2 className="font-serif text-[28px] md:text-[34px] font-medium text-[var(--brand)] tracking-tight leading-snug mb-4">
        {title}
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] m-0">
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
    <section className="flex flex-col md:flex-row gap-10 md:gap-14 items-start py-16 md:py-20 border-t border-[var(--border-soft)]">
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
    <div className="max-w-[1120px] mx-auto px-5 md:px-10">
      <FadeIn>
        <section id="cjr" className="py-16 md:py-20 border-t border-[var(--border-soft)]">
          <SectionKicker>Core unit</SectionKicker>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[var(--brand)] tracking-tight mb-3">
            CJR — how a decision is deconstructed
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-8">
            A decision is not one blob of text. Akashic Record breaks it into Condition,
            Judgment, and Reasoning — so the structure can be stored, compared, and reused
            when a similar situation returns.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
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
                className="rounded border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
              >
                <div className="text-sm font-bold tracking-wide text-[var(--brand)] mb-2.5">
                  {title}
                </div>
                <p className="text-[15px] md:text-base leading-relaxed text-[var(--text-secondary)] m-0">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div id="product">
        <FadeIn>
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
        </FadeIn>
        <ReuseWalkthrough />
      </div>

      <FadeIn>
        <section id="architecture" className="py-16 md:py-20 border-t border-[var(--border-soft)]">
          <SectionKicker>Architecture</SectionKicker>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[var(--brand)] tracking-tight mb-3">
            This is our architecture
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-8">
            Documents enter as candidates. Humans confirm. CJR is the reusable unit —
            searched, compared, and improved over time.
          </p>
          <div className="rounded border border-[var(--border)] bg-[var(--page-bg)] overflow-hidden">
            <ArchitectureMindmap />
          </div>
          <div className="flex flex-wrap gap-10 md:gap-14 mt-8">
            {(
              [
                ["AI proposes", "never writes truth alone"],
                ["Human confirms", "Inbox → confirmed CJR"],
                ["Memory compounds", "reuse beats re-debate"],
              ] as const
            ).map(([t, d]) => (
              <div key={t} className="min-w-[180px]">
                <div className="text-base font-semibold text-[var(--brand)]">{t}</div>
                <div className="text-sm text-[var(--text-muted)] mt-1.5">{d}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="contact"
          className="py-20 md:py-24 border-t border-[var(--border-soft)] text-center"
        >
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[var(--brand)] mb-4">
            Pilot with your team
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            Fifteen minutes. No pitch deck — questions about how you preserve decisions.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-7 py-3.5 rounded-md text-white text-base font-semibold transition-colors hover:bg-[var(--brand-hover)]"
            style={{ background: "var(--brand)" }}
          >
            Request a 15-min Interview
          </a>
        </section>
      </FadeIn>
    </div>
  );
}
