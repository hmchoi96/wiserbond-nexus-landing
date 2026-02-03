import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { WaitlistForm } from "@/components/site/CTAForms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Request an Interview | Wiserbond",
  description:
    "Request a 15-minute conversation about piloting judgment memory for your team. No pitch deck, just questions.",
  alternates: { canonical: canonicalFor("/waitlist") },
  openGraph: {
    title: "Request an Interview | Wiserbond",
    description:
      "Request a 15-minute conversation about piloting judgment memory for your team. No pitch deck, just questions.",
  },
  twitter: {
    title: "Request an Interview | Wiserbond",
    description:
      "Request a 15-minute conversation about piloting judgment memory for your team. No pitch deck, just questions.",
  },
};

export default function Waitlist(){
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Request a 15-min Interview</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re looking for teams who want to pilot judgment memory in their workflow.<br />
            No pitch deck, just questions about how your team preserves decisions.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Leave your email and we&apos;ll reach out to schedule a short conversation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WaitlistForm />
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What We&apos;ll Discuss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• How your team currently preserves decision context</div>
              <div>• Pain points with re-researching past judgments</div>
              <div>• Whether an offline pilot makes sense for you</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What This Isn&apos;t</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• No sales pitch or demo pressure</div>
              <div>• No commitment required</div>
              <div>• Just a conversation to see if there&apos;s a fit</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Prefer Email?</h2>
          <p className="text-muted-foreground">
            You can also reach out directly. We&apos;d love to hear from you.
          </p>
          <a 
            href="mailto:hmchoi@sfu.ca" 
            className="inline-flex px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            hmchoi@sfu.ca
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}