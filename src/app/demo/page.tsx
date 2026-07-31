import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { DemoForm } from "@/components/site/CTAForms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See Akashic Record in action. Schedule a short session on how judgment memory preserves past investment decisions and retrieves transferable precedents.",
  alternates: { canonical: canonicalFor("/demo") },
  openGraph: {
    title: "Request a Demo | Wiserbond",
    description:
      "See Akashic Record in action. Schedule a short session on how judgment memory preserves past investment decisions and retrieves transferable precedents.",
  },
  twitter: {
    title: "Request a Demo | Wiserbond",
    description:
      "See Akashic Record in action. Schedule a short session on how judgment memory preserves past investment decisions and retrieves transferable precedents.",
  },
};

export default function Demo() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Request a Demo</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See Akashic Record in action — how Wiserbond&apos;s judgment memory
            system preserves why your firm made past decisions, and when that
            judgment should or should not be reused.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Demo</CardTitle>
              <CardDescription>
                Tell us about your team and use case, and we&apos;ll prepare a
                customized demonstration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DemoForm />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>What You&apos;ll See</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Condition–Judgment–Reasoning</div>
                <div className="text-muted-foreground">
                  How past decisions are structured as reusable memory
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Precedent Retrieval</div>
                <div className="text-muted-foreground">
                  Matching current deal conditions to historical judgments
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Transfer Caution</div>
                <div className="text-muted-foreground">
                  When a historical precedent should not be reused
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">On-Prem Deployment</div>
                <div className="text-muted-foreground">
                  How Akashic Record fits an offline-first workflow
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Demo Format</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Duration: 30-45 minutes</div>
                <div className="text-muted-foreground">
                  Focused on your specific use cases
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Format: Live demonstration</div>
                <div className="text-muted-foreground">
                  Interactive session with Q&amp;A
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Participants: Up to 5 team members</div>
                <div className="text-muted-foreground">
                  Include key decision makers
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Follow-up: Pilot discussion</div>
                <div className="text-muted-foreground">
                  Whether an offline pilot fits your team
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Prefer a shorter conversation?</h2>
          <p className="text-muted-foreground">
            Request a 15-minute interview about piloting judgment memory — no
            pitch deck required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/waitlist"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Interview
            </a>
            <a
              href="/pilot"
              className="inline-flex px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Pilot Deployment
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
