import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { DemoForm } from "@/components/site/CTAForms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Demo(){
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="/wiserbond logoo.png" 
              alt="Wiserbond Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-3xl font-semibold">Request a Demo</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See Nexus in action. Schedule a personalized demo to understand how our macro strategy 
            copilot can transform your decision-making process.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Demo</CardTitle>
              <CardDescription>
                Tell us about your team and use case, and we&apos;ll prepare a customized demonstration.
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
                <div className="font-medium">Akashic Record in Action</div>
                <div className="text-muted-foreground">How historical data enhances current decisions</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Then vs Now Analysis</div>
                <div className="text-muted-foreground">Real-time comparison with past scenarios</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Risk Assessment</div>
                <div className="text-muted-foreground">Context-aware risk evaluation</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Integration Capabilities</div>
                <div className="text-muted-foreground">How Nexus fits into your existing workflow</div>
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
                <div className="text-muted-foreground">Focused on your specific use cases</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Format: Live demonstration</div>
                <div className="text-muted-foreground">Interactive session with Q&A</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Participants: Up to 5 team members</div>
                <div className="text-muted-foreground">Include key decision makers</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Follow-up: Custom proposal</div>
                <div className="text-muted-foreground">Tailored to your organization&apos;s needs</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="text-muted-foreground">
            Can&apos;t wait for a demo? Join our waitlist to be among the first to access Nexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/waitlist" 
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Join Waitlist
            </a>
            <a 
              href="/pricing" 
              className="inline-flex px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}