"use client";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./FadeIn";
import DeepModeShowcase from "./DeepModeShowcase";

export default function Sections(){
  return (
    <>
      {/* Problem Section */}
      <FadeIn>
        <section id="problem" className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">The Problem</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Corporate Amnesia:</strong> The &ldquo;why&rdquo; behind decisions gets buried in documents and disappears when people leave.
              </p>
              <p>
                Teams waste hours re-researching context that already exists somewhere, scattered across emails, notes, and forgotten files.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Solution Section */}
      <FadeIn>
        <section id="solution" className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center space-y-6 mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-2xl border border-black/5 shadow-sm p-6 text-center">
                <CardContent className="pt-4 space-y-2">
                  <div className="text-3xl mb-2">📋</div>
                  <h3 className="font-semibold">CJR Structuring</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert past decisions into structured, searchable judgment records (Context-Judgment-Reasoning).
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border border-black/5 shadow-sm p-6 text-center">
                <CardContent className="pt-4 space-y-2">
                  <div className="text-3xl mb-2">🧭</div>
                  <h3 className="font-semibold">Decision Navigation</h3>
                  <p className="text-sm text-muted-foreground">
                    Ask a question, get relevant past cases and a structured decision framework. Not more raw documents.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border border-black/5 shadow-sm p-6 text-center">
                <CardContent className="pt-4 space-y-2">
                  <div className="text-3xl mb-2">🔒</div>
                  <h3 className="font-semibold">Offline-First</h3>
                  <p className="text-sm text-muted-foreground">
                    Runs locally on your machine. Your judgment data never leaves your network. Full data sovereignty.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Deep Mode Showcase */}
      <FadeIn>
        <DeepModeShowcase />
      </FadeIn>

      {/* Who Section */}
      <FadeIn>
        <section id="for" className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Built For</h2>
            <p className="text-lg text-muted-foreground">
              Investment teams, strategy groups, and risk committees who need to preserve and reuse judgment, not just store documents.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* CTA Reminder Section */}
      <FadeIn>
        <section id="contact" className="bg-slate-50 py-16">
          <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl font-semibold">Interested?</h2>
            <p className="text-muted-foreground">
              We&apos;re looking for teams who want to pilot judgment memory in their workflow.<br />
              15-minute conversation. No pitch deck, just questions.
            </p>
            <a 
              href="/waitlist" 
              className="inline-flex px-6 py-3 rounded-lg text-white font-medium transition-colors"
              style={{ background: "var(--brand)" }}
            >
              Request a 15-min Interview
            </a>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
