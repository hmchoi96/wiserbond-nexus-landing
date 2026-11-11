import { agentText } from "@/lib/agent-guide";
export const dynamic = "force-static";
export function GET() {
  return new Response(agentText(), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=300", "X-Content-Type-Options": "nosniff" } });
}
