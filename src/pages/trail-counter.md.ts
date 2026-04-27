import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `---
title: "Trak Count — Affordable Trail Counters"
description: "Trak Count is a battery-powered, privacy-first trail counter built on open hardware. Affordable trail usage data for grants, maintenance, and stewardship reporting."
url: "https://www.switchbacksolutions.net/trail-counter"
---

# Know Who's Using Your Trails — Without Breaking the Budget

Trail usage data is how you win grants, justify maintenance, and make the case for new infrastructure. Trak Count makes it affordable.

[Become a Pilot Partner](https://www.switchbacksolutions.net/contact)

## About Trak Count: Affordable Data. Formats You Can Actually Use.

Commercial trail counters cost $500–$1,500 per unit, and the data is usually locked in a proprietary dashboard you have to keep paying for.

Trak Count is built on affordable, open hardware — battery-powered, weather-resistant, and deployable by volunteers. It detects and logs trail user counts without capturing any personally identifiable information.

The data comes to you in formats you can actually use: spreadsheets, simple dashboards, grant-ready reports.

## Features

- **Grant-ready data**: Usage counts, seasonal patterns, and trend reports built for funding applications
- **Stewardship evidence**: Demonstrate trail demand to justify maintenance, signage, and infrastructure investment
- **Battery-powered**: No wiring or power source required — deployable by volunteers anywhere on the trail
- **IP67 waterproof**: Fully sealed enclosure withstands rain, mud, and submersion — built to stay in the field year-round
- **Privacy-first**: Anonymous counts only — no photos, no tracking, no personally identifiable information
- **Fraction of the cost**: Open hardware keeps unit cost well below commercial alternatives
- **Always connected**: Built-in cellular modem transmits counts in realtime — no manual retrieval, no site visits to pull data
- **Mounts anywhere**: Multiple mounting points and a range of mount options — attach to posts, trees, signs, or trail infrastructure of any size

## How It Works

1. **Deploy**: A volunteer mounts the weatherproof unit at the trailhead. Battery-powered — no wiring, no power source needed.
2. **Count**: The sensor detects passing trail users and logs anonymous counts with timestamps. No photos, no tracking.
3. **Report**: Data syncs to a simple dashboard. Export usage summaries, seasonal trends, and peak-use charts whenever you need them.

## Pilot Program

Now seeking pilot partners. We're looking for 2–3 organizations to deploy units on real trails — in exchange for early access pricing and direct input on the product roadmap.

[Become a Pilot Partner](https://www.switchbacksolutions.net/contact)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
