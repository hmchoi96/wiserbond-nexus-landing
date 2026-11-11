import { agentDiscovery } from "@/lib/agent-guide";
export const dynamic = "force-static";
export function GET() {
  return Response.json(agentDiscovery, { headers: { "Cache-Control": "public, max-age=300", "X-Content-Type-Options": "nosniff" } });
}
