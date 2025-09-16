"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "./FadeIn";

export default function Sections(){
  return (
    <>
      {/* Why Section */}
      <FadeIn>
        <section id="why" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-semibold">Why Nexus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Markets rarely repeat, but conditions rhyme. Nexus restores your organization’s judgment memory
              and connects “what we decided then” to “what we face now” for calmer, faster decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 min-w-0">
            <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  Akashic Record Memory
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>On-prem SLM summarizes and normalizes past judgment logs into reusable cases.</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Judgment Logs</Badge>
                  <Badge variant="outline">Normalization</Badge>
                  <Badge variant="outline">Reusable Cases</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Then vs Now in minutes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Find analogous macro setups, contrast differences, and surface likely outcomes in under five minutes.</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Similarity Match</Badge>
                  <Badge variant="outline">Differences</Badge>
                  <Badge variant="outline">Actionable Hints</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Recap and Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Auto-recap at 3, 6, and 12 months to compare forecasts with realized outcomes and reduce bias.</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">3·6·12m Recap</Badge>
                  <Badge variant="outline">Outcome Tracking</Badge>
                  <Badge variant="outline">Bias Control</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>

      {/* Product / How It Works */}
      <FadeIn>
        <section id="product" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-semibold">How it works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A compact pipeline that restores organizational memory and explains differences between past and present.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 min-w-0">
              <div className="text-center space-y-4 rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Ingest and Normalize</h3>
                <p className="text-muted-foreground">
                  Internal judgment logs are summarized on-prem and converted into structured cases.
                </p>
              </div>

              <div className="text-center space-y-4 rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Match current conditions</h3>
                <p className="text-muted-foreground">
                  Hybrid retrieval finds analogous cases using vector search and keyword FTS, then overlays external data only when needed.
                </p>
              </div>

              <div className="text-center space-y-4 rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Compare and explain</h3>
                <p className="text-muted-foreground">
                  Then vs Now cards summarize commonalities, differences, and implications in your company’s template and tone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Architecture & Security */}
      <FadeIn>
        <section id="architecture" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-semibold">Architecture and Security</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Local by default, modular by design. Company specialization without forking the core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 min-w-0">
            <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle>Architecture</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                {/* 3열 그리드: 배지 / 제목(max-content) / 설명(남은폭) */}
                <div className="grid grid-cols-1 md:grid-cols-[auto_max-content_1fr] items-start gap-x-3 gap-y-4 min-w-0">
                  <Badge variant="outline" className="w-fit">On-prem SLM</Badge>
                  <div className="font-medium">Memory layer</div>
                  <div className="text-muted-foreground break-words">Summarization and Q&A run locally for judgment logs.</div>

                  <Badge variant="outline" className="w-fit">Hybrid search</Badge>
                  <div className="font-medium">Vector + Keyword</div>
                  <div className="text-muted-foreground break-words">Qdrant with BM25/FTS for recall and precision.</div>

                  <Badge variant="outline" className="w-fit">Core vs Company</Badge>
                  <div className="font-medium">Templates and tone</div>
                  <div className="text-muted-foreground break-words">Shared engine with company-specific output modules.</div>

                  <Badge variant="outline" className="w-fit">Update Pack</Badge>
                  <div className="font-medium">Controlled delivery</div>
                  <div className="text-muted-foreground break-words">Offline cache and signed updates for pilots.</div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="grid grid-cols-1 md:grid-cols-[auto_max-content_1fr] items-start gap-x-3 gap-y-4 min-w-0">
                  <Badge variant="outline" className="w-fit">Local first</Badge>
                  <div className="font-medium">Default isolation</div>
                  <div className="text-muted-foreground break-words">Internal data does not leave your network by default.</div>

                  <Badge variant="outline" className="w-fit">Function scoping</Badge>
                  <div className="font-medium">External overlay</div>
                  <div className="text-muted-foreground break-words">External calls are explicit and separated by module.</div>

                  <Badge variant="outline" className="w-fit">Serial key</Badge>
                  <div className="font-medium">Ed25519 control</div>
                  <div className="text-muted-foreground break-words">PoC 15 days plus 2-day grace with signed keys.</div>

                  <Badge variant="outline" className="w-fit">Compliance</Badge>
                  <div className="font-medium">SOC 2 roadmap</div>
                  <div className="text-muted-foreground break-words">Evidence during pilots, apply post-pilot.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>

      {/* Use Cases */}
      <FadeIn>
        <section id="security" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-semibold">Use cases</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Practical entry points where Then vs Now saves time and reduces noise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
              <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Macro team pre-brief</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    One-page brief before the meeting: analogous cases, differences, and risks in five minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Strategy and policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Compare impacts of rate, FX, and policy shifts across industries with your company templates.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-black/5 shadow-sm p-6 min-w-0 break-words transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Risk and onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Capture judgment context for audit and accelerate onboarding with searchable case memory.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
