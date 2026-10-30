---
title: "Unattended Issue Dispatch for Coding Agents"
client: "Switchback Solutions (Internal Tooling)"
description: "A set of Hermes agent skills that move ready GitHub issues through a coding agent to draft pull requests on a cron tick, with a human still merging every PR."
fullDescription: "Well-defined GitHub issues often sit idle because starting a coding agent needs a person at the keyboard, while Claude and ChatGPT subscription windows go unused overnight and between work sessions. We built a set of skills for the Hermes agent framework that runs on a cron tick, takes the next ready issue through a build step with the Claude Code CLI, opens a draft PR, advances the issue's phase label, and reports one line to Telegram. It is how we keep lean teams moving: the agents work the backlog unattended, and the humans review and merge."
categories:
  - AI/ML
  - Automation
  - Development
  - DevOps
industries:
  - Tech
  - Developer Tools
technologies:
  - Python
  - Claude Code
  - Codex
  - GitHub CLI
  - Hermes Agent
  - Cron
  - Telegram
year: "2026"
featured: false
---

## Key Achievements

### From Ready Issue to Draft PR, Unattended

On each cron tick, the dispatcher:

- Picks the next ready GitHub issue
- Runs a build step with the **Claude Code** CLI, with **Codex** specified as a second provider for the next version
- Opens a draft pull request
- Advances the issue's phase label
- Reports one line to **Telegram**

A human still merges every PR.

### Deterministic Code Makes the Decisions

Models are called only for the work that needs judgment. Everything else is plain code:

- All decisions are made by deterministic **Python** (standard library only, Python 3.11+)
- Each tick prints exactly one line: `REPORT` or `SILENT`
- The Claude run executes in a detached worker process under a timebox, and a later tick reaps the result from disk
- State is written as atomic JSON

### Safety and Recovery

Unattended work has to fail safely. The dispatcher includes:

- Outcome classification with fixed precedence: timeout, usage limit, marker, transient, fail
- Bounded retries for transient failures and resume after a timeout
- A cooldown when a provider hits its usage limit
- A `needs-human` label after the maximum number of attempts
- Pause and stop controls
- Adaptive pacing and a per-window attempt cap
- Phase labels that never regress
- No pushes to main, enforced by a pre-push hook
- Optional usage pacing through a local Headroom server, which can only withhold work

### A Full Audit Trail

Every run leaves a handoff document, transcripts, and tool-call logs.

### Companion Skills

- **Milestone monitor** — tracks milestone progress with zero model calls
- **Review gate** — deterministically admits one PR head per review round before a senior reviewer agent runs

### Tested Without Live Tools

Tests never invoke the real `claude`, `gh`, or `hermes` binaries. Each one is substituted through environment variables.

## Impact

The dispatcher puts idle subscription time to work on a predefined backlog while keeping people in charge of what ships:

- Ready issues move forward overnight and between work sessions
- Failures stop safely and ask for a person instead of looping
- Every change arrives as a draft PR that a human reviews and merges
