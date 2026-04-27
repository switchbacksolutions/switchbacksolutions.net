import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `---
title: "Trail Websites — Built for Discovery and Donor Conversion"
description: "Websites built for trail discovery and donor conversion. Filterable trail browsing, fundraising-first structure, and low hosting costs for land conservancies and trail advocacy groups."
url: "https://www.switchbacksolutions.net/trail-websites"
---

# Websites Built for Trail Discovery — and Donor Conversion

Most trail org websites bury the trails. We build sites where browsing is front and center — and fundraising is woven throughout from the start.

[Start a Conversation](https://www.switchbacksolutions.net/contact)

## Built for How Your Visitors Actually Use Your Site

Visitors dig through PDFs and generic park pages just to answer "where can I ride this weekend?" That's a missed opportunity — and a missed ask.

We build sites where trail browsing is front and center — filterable by difficulty, activity type, and feature — so visitors find what they're looking for fast. That trust translates directly into membership signups and donations.

The fundraising structure isn't bolted on afterward. Membership asks, donation prompts, and volunteer calls-to-action are placed where they actually convert, informed by the content visitors are already engaging with.

Hosting is designed for nonprofit budgets. Static site architecture means fast load times and a cost profile that won't require a board vote to renew.

## Features

- **Trail browsing**: Filterable by difficulty, activity, and feature
- **Fundraising-first structure**: Membership and donation pathways built in, not bolted on
- **Low hosting cost**: Predictable, minimal ongoing costs designed for nonprofit budgets
- **Staff-editable**: Update trails, events, and news without a developer
- **Mobile-first**: Fast and usable on the trail, not just the desktop
- **Grant-friendly content**: Structured to surface the impact stories funders want to see

## Examples

- **Live**: [opentrailsca.org](https://opentrailsca.org)
- **Forthcoming**: MVTA website

## How We Work

1. **Discovery call**: We talk through your trails, your audience, and what's not working about your current site. No commitment required.
2. **Proposal & scope**: I send a written scope: what we'll build, what it'll cost, and a realistic timeline. Fixed-price, no surprises.
3. **Build & review**: We build in rounds with your feedback at each stage. You see the site taking shape before it's done.
4. **Launch & handoff**: You get full access, documentation, and the ability to manage your own content from day one.

## Get Started

[Start a Conversation](https://www.switchbacksolutions.net/contact)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
