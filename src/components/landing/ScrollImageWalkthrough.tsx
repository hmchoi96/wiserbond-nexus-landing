"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Set true while tuning focal points; must stay false in production. */
export const DEBUG_SCROLL_SCENES = false;

const NAV_OFFSET = 66; // h-16 nav + 2px scroll progress bar

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type WalkthroughScene = {
  id: string;
  focalX: number;
  focalY: number;
  scale: number;
  eyebrow: string;
  heading: string;
  body: string;
  /** Hold duration in timeline units after arriving at this scene. */
  hold?: number;
};

export type ScrollImageWalkthroughProps = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  scenes: WalkthroughScene[];
  mobileScenes?: WalkthroughScene[];
  sectionClassName?: string;
  ariaLabel?: string;
  /** Pin scroll length as a multiple of viewport height. Default 5.2. */
  scrollLengthVh?: number;
  moveDuration?: number;
  fadeDuration?: number;
  defaultHold?: number;
  /** Multiplier applied to zoomed scene scales on tablet. Default 0.82. */
  tabletScaleFactor?: number;
};

type Transform = { x: number; y: number; scale: number };

function computeTransform(
  vw: number,
  vh: number,
  iw: number,
  ih: number,
  scene: Pick<WalkthroughScene, "focalX" | "focalY" | "scale">
): Transform {
  const baseScale = Math.min(vw / iw, vh / ih);
  const scale = baseScale * scene.scale;
  const scaledW = iw * scale;
  const scaledH = ih * scale;

  let x = vw / 2 - scene.focalX * scaledW;
  let y = vh / 2 - scene.focalY * scaledH;

  if (scaledW <= vw) {
    x = (vw - scaledW) / 2;
  } else {
    x = Math.min(0, Math.max(vw - scaledW, x));
  }

  if (scaledH <= vh) {
    y = (vh - scaledH) / 2;
  } else {
    y = Math.min(0, Math.max(vh - scaledH, y));
  }

  return { x, y, scale };
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function SceneCopy({ scene }: { scene: WalkthroughScene }) {
  return (
    <>
      <div className="text-xs md:text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
        {scene.eyebrow}
      </div>
      <h3 className="font-serif text-[24px] md:text-[30px] font-medium text-[var(--brand)] tracking-tight leading-snug mb-4">
        {scene.heading}
      </h3>
      <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] m-0">
        {scene.body}
      </p>
    </>
  );
}

function ProgressDots({ total, active }: { total: number; active: number }) {
  return (
    <div className="flex flex-col gap-2 shrink-0" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className="block w-1.5 h-1.5 rounded-full transition-opacity duration-300"
          style={{
            background: "var(--brand)",
            opacity: i === active ? 1 : 0.22,
          }}
        />
      ))}
    </div>
  );
}

function ProgressIndex({ active, total }: { active: number; total: number }) {
  return (
    <div
      className="text-[12px] font-medium tracking-[0.06em] tabular-nums text-[var(--text-muted)]"
      aria-live="polite"
    >
      {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  );
}

function StaticFallback({
  scenes,
  mode,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
}: {
  scenes: WalkthroughScene[];
  mode: "reduced" | "mobile";
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}) {
  if (mode === "reduced") {
    const scene = scenes[0];
    return (
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        <div className="md:w-[36%] pt-1">
          <SceneCopy scene={scene} />
        </div>
        <figure className="m-0 md:flex-1">
          <div className="relative overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-muted)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              quality={95}
              sizes="(max-width: 1200px) 94vw, 1100px"
              className="w-full h-auto block"
            />
          </div>
        </figure>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {scenes.map((scene) => (
        <div key={scene.id} className="flex flex-col gap-5">
          <SceneCopy scene={scene} />
          <div className="relative overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-muted)] aspect-[4/5] max-h-[70vh]">
            <Image
              src={imageSrc}
              alt={`${imageAlt}: ${scene.heading}`}
              width={imageWidth}
              height={imageHeight}
              quality={95}
              sizes="94vw"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: `${scene.focalX * 100}% ${scene.focalY * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopWalkthrough({
  scenes,
  layout,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  scrollLengthVh,
  moveDuration,
  fadeDuration,
  defaultHold,
  ariaLabel,
}: {
  scenes: WalkthroughScene[];
  layout: "side" | "stack";
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  scrollLengthVh: number;
  moveDuration: number;
  fadeDuration: number;
  defaultHold: number;
  ariaLabel: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [debugInfo, setDebugInfo] = useState<(Transform & { id: string }) | null>(
    null
  );
  const [imageReady, setImageReady] = useState(false);

  const markImageReady = (el: HTMLImageElement) => {
    imageRef.current = el;
    if (el.naturalWidth > 0) {
      setImageReady(true);
    }
  };

  // Some browsers report naturalWidth before `complete` flips true on large PNGs.
  useEffect(() => {
    if (imageReady) return;
    const id = window.setInterval(() => {
      const el = imageRef.current;
      if (el && el.naturalWidth > 0) {
        setImageReady(true);
        window.clearInterval(id);
      }
    }, 200);
    return () => window.clearInterval(id);
  }, [imageReady, imageSrc]);

  useEffect(() => {
    if (!imageReady) return;

    const section = sectionRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const img = imageRef.current;
    if (!section || !stage || !viewport || !img) return;
    if (img.offsetWidth < imageWidth * 0.9) return;

    gsap.registerPlugin(ScrollTrigger);

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const sceneTransform = (scene: WalkthroughScene) => {
      const iw = img.offsetWidth || imageWidth;
      const ih = img.offsetHeight || imageHeight;
      return computeTransform(
        viewport.clientWidth,
        viewport.clientHeight,
        iw,
        ih,
        scene
      );
    };

    const ctx = gsap.context(() => {
      const first = sceneTransform(scenes[0]);
      gsap.set(img, {
        x: first.x,
        y: first.y,
        scale: first.scale,
        transformOrigin: "0 0",
        force3D: true,
      });

      copyRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          autoAlpha: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 14,
        });
      });

      setActiveIndex(0);
      if (DEBUG_SCROLL_SCENES) {
        setDebugInfo({ ...first, id: scenes[0].id });
      }

      // Dev-only: expose triggers for multi-pin diagnostics
      if (process.env.NODE_ENV === "development") {
        (
          window as unknown as {
            __walkthroughTriggers: ReturnType<typeof ScrollTrigger.getAll>;
          }
        ).__walkthroughTriggers = ScrollTrigger.getAll();
      }

      const MOVE = moveDuration;
      const FADE = fadeDuration;
      const HOLD = defaultHold;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: `walkthrough-${scenes[0]?.id ?? "scene"}`,
          trigger: section,
          start: `top top+=${NAV_OFFSET}`,
          end: () => `+=${Math.round(window.innerHeight * scrollLengthVh)}`,
          pin: stage,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const n = scenes.length;
            const idx = Math.min(
              n - 1,
              Math.max(0, Math.round(self.progress * (n - 1)))
            );
            setActiveIndex(idx);
            if (DEBUG_SCROLL_SCENES) {
              const t = sceneTransform(scenes[idx]);
              setDebugInfo({ ...t, id: scenes[idx].id });
            }
          },
        },
      });

      tl.to({}, { duration: scenes[0].hold ?? HOLD });

      for (let i = 1; i < scenes.length; i++) {
        const prevCopy = copyRefs.current[i - 1];
        const nextCopy = copyRefs.current[i];
        const scene = scenes[i];

        if (prevCopy) {
          tl.to(
            prevCopy,
            { autoAlpha: 0, y: -10, duration: FADE, ease: "power1.out" },
            "+=0.02"
          );
        }

        tl.to(
          img,
          {
            x: () => sceneTransform(scene).x,
            y: () => sceneTransform(scene).y,
            scale: () => sceneTransform(scene).scale,
            duration: MOVE,
            ease: "none",
            force3D: true,
          },
          prevCopy ? "<0.08" : "+=0.02"
        );

        if (nextCopy) {
          tl.fromTo(
            nextCopy,
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: FADE, ease: "power1.out" },
            ">-0.12"
          );
        }

        tl.to({}, { duration: scene.hold ?? HOLD });
      }
    }, section);

    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    window.addEventListener("resize", debouncedResize);

    // Multi-walkthrough pages need a deferred refresh so later pins
    // recalculate after earlier pin-spacers are in the document flow.
    const refreshTimers = [50, 250, 600].map((ms) =>
      window.setTimeout(() => ScrollTrigger.refresh(), ms)
    );

    return () => {
      clearTimeout(resizeTimer);
      refreshTimers.forEach((id) => clearTimeout(id));
      window.removeEventListener("resize", debouncedResize);
      ctx.revert();
    };
  }, [
    scenes,
    imageReady,
    layout,
    imageWidth,
    imageHeight,
    scrollLengthVh,
    moveDuration,
    fadeDuration,
    defaultHold,
  ]);

  const isSide = layout === "side";

  return (
    <section
      ref={sectionRef}
      className="relative"
      aria-label={ariaLabel}
    >
      <div
        ref={stageRef}
        className={`flex ${
          isSide
            ? "flex-row items-center gap-8 lg:gap-12"
            : "flex-col justify-center gap-5"
        }`}
        style={{ height: `calc(100svh - ${NAV_OFFSET}px)` }}
      >
        <div
          className={`relative ${
            isSide
              ? "w-[34%] max-w-[380px] shrink-0 self-center"
              : "w-full max-w-xl shrink-0"
          }`}
        >
          <div className="relative min-h-[180px] md:min-h-[200px]">
            {scenes.map((scene, i) => (
              <div
                key={scene.id}
                ref={(el) => {
                  copyRefs.current[i] = el;
                }}
                className={
                  i === 0 ? "relative" : "absolute inset-0 top-0 left-0 right-0"
                }
              >
                <SceneCopy scene={scene} />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <ProgressIndex active={activeIndex} total={scenes.length} />
          </div>
        </div>

        <div
          ref={viewportRef}
          className={`relative overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-muted)] ${
            isSide ? "flex-1 min-w-0 h-full" : "w-full flex-1 min-h-0"
          }`}
          style={isSide ? { flex: "1 1 64%", maxWidth: "68%" } : undefined}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              quality={98}
              unoptimized
              sizes={`${imageWidth}px`}
              className="max-w-none block"
              style={{
                transformOrigin: "0 0",
                width: imageWidth,
                height: "auto",
                willChange: "transform",
              }}
              ref={(el) => {
                if (!el) return;
                markImageReady(el);
              }}
              onLoad={(e) => {
                markImageReady(e.currentTarget);
              }}
            />
          </div>

          {DEBUG_SCROLL_SCENES && debugInfo && (
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute inset-0 border-2 border-red-500/40" />
              <div className="absolute left-1/2 top-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-red-500" />
              <div className="absolute left-3 top-3 rounded bg-[var(--brand)] text-white text-[11px] px-2.5 py-1.5 font-mono leading-relaxed">
                {debugInfo.id}
                <br />
                fx {scenes[activeIndex]?.focalX.toFixed(2)} fy{" "}
                {scenes[activeIndex]?.focalY.toFixed(2)}
                <br />
                scale {scenes[activeIndex]?.scale.toFixed(2)}
                <br />
                x {debugInfo.x.toFixed(0)} y {debugInfo.y.toFixed(0)} s{" "}
                {debugInfo.scale.toFixed(3)}
              </div>
            </div>
          )}
        </div>

        {isSide && <ProgressDots total={scenes.length} active={activeIndex} />}
      </div>
    </section>
  );
}

export default function ScrollImageWalkthrough({
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  scenes,
  mobileScenes,
  sectionClassName = "",
  ariaLabel = "Product walkthrough",
  scrollLengthVh = 5.2,
  moveDuration = 0.85,
  fadeDuration = 0.28,
  defaultHold = 1.05,
  tabletScaleFactor = 0.82,
}: ScrollImageWalkthroughProps) {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1199px)"
  );
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedMobile =
    mobileScenes ??
    scenes.filter((_, i) => i === 0 || i === scenes.length - 1 || i % 2 === 1).slice(0, 5);

  const tabletScenes = scenes.map((s) => ({
    ...s,
    scale:
      s.scale > 1.3
        ? Number((s.scale * tabletScaleFactor).toFixed(2))
        : s.scale,
  }));

  let body: ReactNode;
  if (!mounted) {
    body = (
      <div
        className="rounded border border-[var(--border)] bg-[var(--surface-muted)]"
        style={{ height: `calc(100svh - ${NAV_OFFSET}px)`, maxHeight: 820 }}
        aria-hidden
      />
    );
  } else if (prefersReducedMotion) {
    body = (
      <StaticFallback
        scenes={scenes}
        mode="reduced"
        imageSrc={imageSrc}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        imageAlt={imageAlt}
      />
    );
  } else if (isDesktop) {
    body = (
      <DesktopWalkthrough
        scenes={scenes}
        layout="side"
        imageSrc={imageSrc}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        imageAlt={imageAlt}
        scrollLengthVh={scrollLengthVh}
        moveDuration={moveDuration}
        fadeDuration={fadeDuration}
        defaultHold={defaultHold}
        ariaLabel={ariaLabel}
      />
    );
  } else if (isTablet) {
    body = (
      <DesktopWalkthrough
        scenes={tabletScenes}
        layout="stack"
        imageSrc={imageSrc}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        imageAlt={imageAlt}
        scrollLengthVh={scrollLengthVh * 0.85}
        moveDuration={moveDuration}
        fadeDuration={fadeDuration}
        defaultHold={defaultHold}
        ariaLabel={ariaLabel}
      />
    );
  } else {
    body = (
      <StaticFallback
        scenes={resolvedMobile}
        mode="mobile"
        imageSrc={imageSrc}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        imageAlt={imageAlt}
      />
    );
  }

  return <div className={sectionClassName}>{body}</div>;
}
