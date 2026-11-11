"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Layers } from "lucide-react";
import { PRODUCT_NAME } from "@/lib/site";

const views = [
  { label: "01 Save", heading: "A decision worth keeping", status: "Temporary", question: "Let's start with the browser version.", answer: "We want to test the workflow before committing to a mobile app.", detail: "A connected agent contributes the decision and its reason." },
  { label: "02 Review", heading: "The reason stays attached", status: "Reviewed", question: "Browser first. Mobile after the pilot.", answer: "Reviewed by your designated primary agent. The original reasoning stays with the decision.", detail: "New contributions and reviewed memory have distinct states." },
  { label: "03 Continue", heading: "Later, in another app", status: "Recalled", question: "Why did we put the mobile app on hold?", answer: "You chose to test the workflow in a browser first, before investing in a mobile app.", detail: "Another connected agent retrieves the context and continues." },
];

export default function MemoryPreview() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const view = views[selected];
  return (
    <div className="v2-memory" aria-label="Illustrative shared-memory workflow">
      <div className="v2-window-bar">
        <span className="v2-dots" aria-hidden="true">● ● ●</span>
        <span>ONE THREAD. DIFFERENT APPS.</span>
      </div>
      <div className="v2-demo-tabs" role="tablist" aria-label="Explore the memory workflow">
        {views.map((step, index) => (
          <button
            key={step.label}
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === selected}
            aria-controls={`${id}-panel`}
            tabIndex={index === selected ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % views.length;
              else if (event.key === "ArrowLeft") next = (index + views.length - 1) % views.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = views.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              (event.currentTarget.parentElement?.querySelectorAll("button")[next] as HTMLButtonElement | undefined)?.focus();
            }}
          >{step.label}</button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${selected}`} tabIndex={0} className="v2-demo-panel">
        <div className="v2-note">
          <div className="v2-note-label">
            <span>{view.heading}</span>
            <span className="v2-demo-status"><Check size={11} aria-hidden="true" />{view.status}</span>
          </div>
          <p>“{view.question}”</p>
          <div className="v2-note-meta"><span>Example project: Harbor</span><span>Decision + reason</span></div>
        </div>
        <div className="v2-memory-center">
          <Layers size={22} aria-hidden="true" />
          <div><strong>{PRODUCT_NAME}</strong><span>Your shared memory</span></div>
          <ArrowRight size={18} className="v2-demo-arrow" aria-hidden="true" />
        </div>
        <div className="v2-recall">
          <span className="v2-note-label">{selected === 2 ? "CONTEXT, RECOVERED" : "THE REASON, PRESERVED"}</span>
          <p className="v2-demo-answer">{view.answer}</p>
        </div>
        <p className="v2-demo-detail">{view.detail}</p>
      </div>
      <p className="v2-example-label">Interactive illustration · not a live memory session</p>
    </div>
  );
}
