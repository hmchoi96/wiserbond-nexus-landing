import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NexusDetail(){
  return (
    <>
      <Nav />
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">Core Tool</Badge>
          <h1 className="text-4xl font-semibold">Nexus</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Akashic Record SLM · Macro→Micro reasoning · Then vs Now comparison
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Nexus?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Traditional decision-making relies on current data and recent experiences. 
                Nexus connects your organization&apos;s historical wisdom with present conditions, 
                enabling more informed strategic decisions.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Access to historical decision patterns</li>
                <li>• Context-aware risk assessment</li>
                <li>• Pattern recognition across time</li>
                <li>• Reduced decision fatigue</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <div className="font-medium">Historical Analysis</div>
                    <div className="text-sm text-muted-foreground">Akashic Record processes past decisions and outcomes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <div className="font-medium">Current Context</div>
                    <div className="text-sm text-muted-foreground">Real-time data integration and condition analysis</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <div className="font-medium">Then vs Now</div>
                    <div className="text-sm text-muted-foreground">Comparative analysis with actionable insights</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Architecture & Security</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">On-Premise SLM</div>
                  <div className="text-muted-foreground">Your data stays within your infrastructure</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Hybrid Processing</div>
                  <div className="text-muted-foreground">Local reasoning with cloud-scale analytics</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">API-First Design</div>
                  <div className="text-muted-foreground">Seamless integration with existing tools</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Data Sovereignty</div>
                  <div className="text-muted-foreground">Complete control over your information</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Encryption</div>
                  <div className="text-muted-foreground">End-to-end encryption for all communications</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Compliance Ready</div>
                  <div className="text-muted-foreground">SOC 2, GDPR, and industry standards</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Experience Nexus?</h2>
          <p className="text-muted-foreground">
            See how Nexus can transform your strategic decision-making process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/demo" 
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Demo
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