# Akashic public website

Product-facing website operated by Wiserbond Technologies Inc. The main site
introduces shared memory for connected agents. Earlier Akashic Record V1 material
is retained under `/archive/akashic-v1`, with its research and evidence URLs intact.

## Run and build

```sh
npm ci
npm run dev
npm run build
```

Development uses port 3001. Production is the existing Vercel project connected to
this repository; updating the PR branch creates a preview, and merging to main
triggers the production deployment. Preview access may require Vercel sign-in.

## Product and domain configuration

- `src/lib/site.ts`: product working name, legal operator, setup URL and site origin.
- `NEXT_PUBLIC_SITE_URL`: canonical marketing-site origin; defaults to
  `https://www.wiserbond.com`. Changing it does not configure DNS or migrate hosting.
- `NEXT_PUBLIC_GA_ID`: optional existing analytics integration.
- `NEXT_PUBLIC_ROBOTS=noindex`: opt out of indexing in a preview environment.

## Agent-facing discovery

- `/agents`: visible operating guide for agents and integrators.
- `/llms.txt`: readable plain-text description and workflow.
- `/agent.json`: product-specific discovery metadata, not an A2A or MCP standard.
- `src/lib/agent-guide.ts`: shared source for the text/JSON documents and tool list.

The authenticated MCP catalog and account policy are authoritative for runtime
behavior. These public pages contain no account memory or credentials. Do not add
claims of guaranteed automatic invocation, operator-blind encryption, benchmarks,
or endorsements without corresponding evidence. A tool receipt proves execution,
not real-world truth of stored statements.
