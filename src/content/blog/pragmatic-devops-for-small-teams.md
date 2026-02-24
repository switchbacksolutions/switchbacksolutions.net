---
title: Pragmatic DevOps for Small Teams
description: You don't need a platform engineering department to ship software reliably. Here's a lean DevOps setup that punches well above its weight.
publishedDate: 2026-02-20
author: Alec
tags: [DevOps, Infrastructure, Small Teams]
---

Most DevOps content is written for companies with dedicated platform teams, multi-cluster Kubernetes setups, and the kind of headcount that small teams only dream about. This post is for everyone else.

If you're a team of two to ten people trying to ship software reliably without burning half your week on infrastructure, this is the setup I come back to time and again.

## The Goal: Boring Reliability

The best infrastructure is infrastructure you don't think about. It just works — deployments go out cleanly, errors get surfaced before customers notice, and rollbacks take seconds, not hours.

That doesn't require complexity. It requires discipline in a few key areas.

## Start with a Managed Platform

Pick one. Fly.io, Render, Railway, or good old Heroku-style platforms are all excellent choices for most small teams. You trade some flexibility for a massive reduction in operational overhead — no EC2 instances to patch, no load balancers to configure, no SSL certificates to renew.

If your workload genuinely needs raw cloud infrastructure, go with a single cloud provider and commit to it. Don't let "multi-cloud" become a source of complexity before you've even shipped version one.

## CI/CD from Day One

Every project I touch gets a working CI/CD pipeline before anything else goes in. The discipline this enforces — writing tests, keeping the main branch clean, having deployable artifacts at every commit — is worth far more than the time it takes to set up.

For most small teams, GitHub Actions is the right choice. It's where your code already lives, the free tier covers most needs, and the ecosystem of actions is mature.

A minimal pipeline looks like this:

1. Run tests on every PR
2. Deploy to a staging environment on merge to `main`
3. Promote to production with a manual approval gate

That's it. You can build from there as you scale.

## Observability Without the Overhead

You need three things: logs, metrics, and alerting. You don't need a dedicated observability platform to start.

- **Logs**: Structured JSON logs shipped to a managed log aggregator (Logtail, Papertrail, or your cloud provider's native solution). Search should take seconds.
- **Metrics**: Application-level health checks and a dashboard showing error rate, response time, and throughput. Grafana Cloud has a generous free tier.
- **Alerting**: One alert per failure mode that actually matters. Alert fatigue is real — five noisy alerts are worse than none.

## The One Rule

Here's the rule I try to live by with infrastructure: **if a junior developer can't understand and modify it in 30 minutes, it's too complex**.

Documentation and simplicity aren't nice-to-haves. They're the difference between a system your team owns and a system that owns your team.

---

If you're putting together a DevOps setup for a small team and want a second opinion, [get in touch](/work). I'm happy to take a look at what you're working with.
