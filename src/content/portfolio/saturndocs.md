---
title: "SaturnDocs"
client: "SaturnDocs (Co-Founded Product)"
description: "Co-founded a documentation platform where AI agents write, publish, and maintain the docs while the customer supplies context, direction, and approval."
fullDescription: "Alec co-founded SaturnDocs with Sean Knight to answer a practical question: what does documentation look like when AI agents do the work? Customers supply product context, direction, and approval. The agents write, publish, and maintain the docs. Alec works hands-on across the platform architecture, the Cloudflare infrastructure that builds and serves customer docs sites, and the agent workflows that run both the product and the company. It is our AI-first methodology applied to building a product from zero."
categories:
  - Product
  - AI/ML
  - Development
  - Infrastructure
industries:
  - Tech
  - Developer Tools
technologies:
  - TypeScript
  - Cloudflare Workers
  - D1
  - R2
  - Astro
  - MCP
  - Claude Code
  - GitHub Actions
year: "2026"
url: "https://saturndocs.com"
featured: true
---

## Key Achievements

### Agents Do the Work, People Stay in Charge

SaturnDocs flips the usual documentation workflow. Instead of handing writers a tool, it hands the writing to agents and keeps people in the decisions that matter:

- Customers provide product context and direction, and approve every change before it publishes
- Agents write, publish, and maintain the docs over time
- Docs stay in portable plain files, so customers are never locked in

### Fast, Agent-Ready Docs Sites

The platform builds and serves documentation sites on `*.saturndocs.net` through a hosting and publishing service paired with a site renderer:

- Renderer output is published as static releases from **R2**
- Dynamic routes for auth, API, and MCP run on **Cloudflare Workers**
- **D1** holds platform data
- Readers and agents get answers linked back to source pages, with the same access rules across the site, search, and assistant

### Machine-Readable Surfaces for Agents

Docs are increasingly read by agents as often as by people, so every site exposes surfaces built for them:

- `llms.txt` for agent discovery
- Markdown mirrors of every page
- An MCP server so agents can query docs directly

### Sidecar Projects

Several supporting projects grew out of the core platform:

- **Documentation auditor** — a browser extension, CLI, and web app that share one engine and grade a docs site's AI-agent readiness, with evidence for each finding
- **docs-reader-bench** — a public benchmark that scores AI-generated docs by whether a reader agent with only the docs can complete tasks, verified by the project's own code, with no judge model in the scoring path
- **Operator agent and shared skills** — the agent tooling we use to run the company day to day

## Impact

SaturnDocs is where we practice what we recommend to clients. Building it from zero has meant:

- Putting AI agents in the production path while keeping a human approval step on every change
- Designing infrastructure around what agents need to read, not only what people need to see
- Measuring agent output against verifiable tasks instead of subjective scoring
