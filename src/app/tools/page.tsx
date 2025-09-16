import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Link from "next/link";
import { tools } from "@/lib/config/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tools(){
  return (
    <>
      <Nav />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-semibold">Tools</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our suite of AI-powered tools designed to enhance your strategic decision-making process.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(t => (
            <Link 
              key={t.slug} 
              href={t.href} 
              target="_blank" 
              rel="noopener"
              className="group"
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {t.name}
                  </CardTitle>
                  <CardDescription>
                    {t.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Click to explore →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Coming Soon</h2>
          <p className="text-muted-foreground">
            We're constantly expanding our toolkit. Stay tuned for more powerful tools.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}