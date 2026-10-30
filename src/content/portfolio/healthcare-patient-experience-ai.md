---
title: "Early-Stage AI Infrastructure for a Health Tech Startup"
client: "Health Tech Startup"
description: "Helped a health tech startup decide where AI actually helps its patient outreach program, then built the PHI-safe data and AI foundation underneath it."
fullDescription: "A health tech startup runs patient outreach through care navigators. We started by working with the team to decide where AI actually helps that program and where it doesn't. Then we built it: a PHI-safe data pipeline with deterministic, auditable patient-selection rules, optional LLM-assisted review of clinical notes through a BAA-covered API, and call logging automation that connects Dialpad, AWS Lambda, and the navigators' Google Sheets workflow."
categories:
  - Strategy
  - AI/ML
  - Development
  - Infrastructure
  - Data
industries:
  - Healthcare
technologies:
  - AWS Lambda
  - Terraform
  - Dialpad API
  - Google Apps Script
  - Google Sheets
  - TypeScript
  - Node.js
  - SQL
  - LLM APIs
year: "2026"
featured: true
---

## Key Achievements

### Deciding Where AI Actually Helps

Before building anything, we worked with the founding team to look at the outreach program as it really runs: who the navigators call, how those patients get selected, and where time goes. That made it clear which parts needed deterministic rules, which could benefit from an LLM, and which just needed better plumbing.

### A PHI-Safe, Auditable Data Pipeline

Patient selection had to be explainable and repeatable, so we kept it out of the model and in code:

- SQL exports from the clinic's EHR feed a **TypeScript** transformation layer
- Patient-selection rules are deterministic and kept in version-controlled code
- Each run writes a manifest with the code revision, rule version, rule hash, input versions, and timestamp
- A non-patient criteria report is generated from the same code the evaluator runs, so the rules can't drift from their description

### LLM-Assisted Note Review, Applied Carefully

Where clinical notes add context the structured data can't, we added an optional LLM pass:

- Runs only after deterministic selection, never in place of it
- Uses a BAA-covered API
- Excludes structured identifiers by default
- Caches results by input fingerprints, so unchanged inputs aren't re-sent

### Call Logging Automation

Navigators were logging calls by hand. We connected their phone system to the tools they already use:

- **Dialpad** call-ended and transcript-ready webhooks trigger **AWS Lambda** functions
- Functions are **Terraform**-managed, with separate staging and production environments and JWT-verified webhooks
- Calls are matched against the patient roster and land, with transcripts, in the navigators' Google Sheets call logger
- **Apps Script** reconciles automated entries with the navigators' existing manual logging

### The Call Logger Workbook

The workbook itself became a small, dependable system:

- Apps Script tooling built around a header-driven workbook
- The interaction log is the authoritative record
- Derived call lists are rebuilt from it rather than edited by hand

### Engineering Practice for PHI

- PHI rules enforced in repository instructions and ignore rules
- Git checkpoints before every production change
- GitHub Issues for tracking work and decisions

## Impact

The startup came away with a clear answer to where AI fits in its outreach program and a working foundation under it:

- Patient selection that can be explained, reproduced, and audited
- AI applied where it adds context, behind deterministic rules and PHI safeguards
- Less manual call logging for navigators, without replacing the workflow they already trust
