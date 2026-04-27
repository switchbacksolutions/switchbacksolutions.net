import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `---
title: "About Alec Reynolds — Switchback Solutions"
description: "Technical architect and AI engineer with 15+ years building software, scaling teams, and helping companies figure out what to build — and how to build it well."
url: "https://www.switchbacksolutions.net/about"
---

# About Alec Reynolds

I'm a technical architect and AI engineer who has spent the last fifteen-plus years building software, scaling teams, and helping companies figure out what to build — and how to build it well.

## Background

My career started in the San Francisco startup scene, where I learned what it looks like when technology and product thinking are firing on all cylinders — and what it costs when they're not. That experience shaped everything I've built since: two revenue-funded consultancies scaled to seven-figure annual revenue, a decade of leading multidisciplinary teams through complex web application challenges in healthcare, finance, education, and beyond.

More recently, I've been building [Lando](https://lando.dev) — a developer experience platform built on Docker and Node.js that makes local development dramatically simpler. With over 13,000 active monthly users, it's become a standard part of the development workflow for teams around the world. Building Lando deepened my understanding of developer needs at scale and reinforced something I already believed: the right tooling multiplies what a lean team can accomplish.

Today, my focus is AI-first software development. The tools available to engineering teams have fundamentally shifted, but the strategic question of *what* to build with them — and where AI actually moves the needle — still requires experienced judgment. I work with early-stage founders and forward-thinking companies as their drop-in technical leader: shaping product decisions, architecting systems, and building alongside teams that are ready to move.

My goal has always been to distribute the lessons of the SF startup world more broadly. The way those teams think about product, speed, and technical leverage shouldn't be locked inside a few zip codes.

## By the Numbers

- **2** revenue-funded consultancies scaled to 7-figure annual revenue
- **13K+** active monthly users of Lando, an open source developer tool I created
- **15+** years building software across startups, agencies, and enterprise
- **6+** industries including healthcare, finance, insurance, education, and nonprofits

## Technical Background

Full-stack fluency across Node.js, Python, PHP (Laravel, Symfony, Drupal), and the infrastructure that runs it all (Docker, AWS). I've designed and built HIPAA-compliant systems for healthcare platforms, architected pipelines for AI/ML workloads, and set up DevOps foundations that let small teams punch well above their weight.

## Get in Touch

[Contact Alec](https://www.switchbacksolutions.net/contact)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
