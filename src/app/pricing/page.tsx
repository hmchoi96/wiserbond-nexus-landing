import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Pricing(){
  return (
    <>
      <Nav />
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your organization&apos;s needs. All plans include access to our core Nexus platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>PoC</CardTitle>
                <Badge variant="secondary">Free</Badge>
              </div>
              <CardDescription>
                Perfect for evaluation and small teams
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold">$0</div>
              <ul className="space-y-2 text-sm">
                <li>✓ 15 days + 2 days grace period</li>
                <li>✓ Up to 5 team members</li>
                <li>✓ Basic Akashic Record access</li>
                <li>✓ Standard support</li>
                <li>✓ Core &ldquo;Then vs Now&rdquo; features</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="relative border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle>Early Access</CardTitle>
              <CardDescription>
                For organizations ready to scale
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold">$2,500<span className="text-sm font-normal">/month</span></div>
              <ul className="space-y-2 text-sm">
                <li>✓ Up to 5 users per organization</li>
                <li>✓ Full Akashic Record access</li>
                <li>✓ Advanced macro reasoning</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ API access</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                Custom solutions for large organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold">Custom</div>
              <ul className="space-y-2 text-sm">
                <li>✓ Unlimited users</li>
                <li>✓ On-premise deployment</li>
                <li>✓ Custom SLM training</li>
                <li>✓ Dedicated support</li>
                <li>✓ SLA guarantees</li>
                <li>✓ White-label options</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Need help choosing? Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:hmchoi@sfu.ca" 
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Sales
            </a>
            <a 
              href="/demo" 
              className="inline-flex px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}