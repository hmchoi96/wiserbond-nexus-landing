import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { WaitlistForm } from "@/components/site/CTAForms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { canonicalFor } from "@/lib/url";

export const metadata: Metadata = {
  title: "Join Waitlist",
  description:
    "Be among the first to experience Nexus. Get early access to our macro strategy copilot and help shape the future of strategic decision-making. Priority access and special pricing.",
  alternates: { canonical: canonicalFor("/waitlist") },
  openGraph: {
    title: "Join Waitlist | Wiserbond Nexus",
    description:
      "Be among the first to experience Nexus. Get early access to our macro strategy copilot and help shape the future of strategic decision-making.",
  },
  twitter: {
    title: "Join Waitlist | Wiserbond Nexus",
    description:
      "Be among the first to experience Nexus. Get early access to our macro strategy copilot and help shape the future of strategic decision-making.",
  },
};

export default function Waitlist(){
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Join Waitlist</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience Nexus. Get early access to our macro strategy copilot 
            and help shape the future of strategic decision-making.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get Early Access</CardTitle>
              <CardDescription>
                Join our waitlist to be notified when Nexus becomes available.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WaitlistForm />
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Early Access Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>✓ Priority access to new features</div>
              <div>✓ Direct feedback channel to our team</div>
              <div>✓ Special pricing for early adopters</div>
              <div>✓ Exclusive beta testing opportunities</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What to Expect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• Regular updates on development progress</div>
              <div>• Early access to documentation</div>
              <div>• Invitation to private demos</div>
              <div>• Community access for early users</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• Q1 2024: Private beta launch</div>
              <div>• Q2 2024: Early access program</div>
              <div>• Q3 2024: General availability</div>
              <div>• Ongoing: Feature updates</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Questions?</h2>
          <p className="text-muted-foreground">
            Have questions about Nexus or our waitlist? We&apos;d love to hear from you.
          </p>
          <a 
            href="mailto:hmchoi@sfu.ca" 
            className="inline-flex px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}