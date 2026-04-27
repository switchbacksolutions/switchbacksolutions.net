import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `---
title: "Trails — Technology for Trail Organizations"
description: "Technology built for trail organizations — affordable trail usage counters and websites designed for discovery and donor conversion."
url: "https://www.switchbacksolutions.net/trails"
---

# Technology Built for the Trails You Steward

Two products, one focus: helping land conservancies, mountain bike groups, and trail advocates do more with less.

## Products

### [Trak Count — Trail Counter](https://www.switchbacksolutions.net/trail-counter)

Affordable, battery-powered trail counters built on open hardware. Privacy-first usage data for grants, maintenance reporting, and stewardship evidence — at a fraction of the cost of commercial units.

Features: Battery-powered · IP67 waterproof · Cellular connected · Grant-ready reports

### [Trail Websites](https://www.switchbacksolutions.net/trail-websites)

Websites where trail browsing is front and center — filterable, searchable, and mobile-friendly. Fundraising-first structure with membership and donation pathways built in from day one.

Features: Filterable trails · Fundraising-first · Staff-editable · Low hosting cost

## Get in Touch

Not sure which fits your needs? We're happy to have a no-pressure conversation about what technology could do for your organization.

[Get in Touch](https://www.switchbacksolutions.net/contact)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
