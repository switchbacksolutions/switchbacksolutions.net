---
title: When to Build vs. Buy (and When to Borrow)
description: The build vs. buy decision is one of the most consequential calls a small team can make. Here's a framework that's served me well.
publishedDate: 2025-11-10
author: Alec
tags: [Strategy, Technical Decision-Making]
---

Early-stage teams spend a surprising amount of time debating whether to build something in-house or use an existing solution. It's a worthy debate — the wrong call either direction can cost months.

Here's the mental model I use, distilled from making this call dozens of times across very different projects.

## The Core Question

Before anything else, ask: **is this a differentiator?**

If the thing you're considering building is part of what makes your product unique — what customers are actually paying for — build it. If it's plumbing that every application needs, look for something to buy or borrow first.

Authentication is plumbing. Your domain-specific recommendation engine is a differentiator. Your billing logic might be plumbing; your pricing model might be a differentiator. The line isn't always clean, but the question focuses the discussion.

## When to Buy

Buy when:

- **The problem is well-understood and solved.** Why rebuild a PDF generation library, an email sending service, or a geocoder? Hundreds of teams have already done it, and the best solutions have battle-tested edge case handling you'd spend months discovering on your own.
- **The maintenance burden is real.** Every line of code you write is a line of code you own forever. Third-party solutions outsource that maintenance to people whose entire job is maintaining it.
- **Speed matters more than perfect fit.** Getting something working in a day beats spending a sprint on something bespoke.

## When to Build

Build when:

- **You've tried what's available and it doesn't fit.** This sounds obvious, but teams often jump to building before genuinely evaluating alternatives. Do the evaluation first.
- **The vendor risk is unacceptable.** If the solution you're considering is a single-founder SaaS that could disappear next year, and this is core to your product, that's a real risk to factor in.
- **You need to understand the internals.** Sometimes building a thing — even if you'll eventually replace it — is how you learn what you actually need.

## The Third Option: Borrow

There's a middle path that doesn't get enough attention: open-source solutions you host yourself.

You get the benefits of not building from scratch (the hard problems are solved, there's a community, the code is auditable) with more control than a managed service. The tradeoff is operational overhead — you're running it, so you're responsible for it.

For teams with some infrastructure comfort, this is often the best of both worlds.

## The Honest Answer

The honest answer is that this decision is always a judgment call, and it should be made quickly. Spend an afternoon evaluating, pick a direction, and revisit in six months if the choice isn't working.

The teams that get stuck are the ones optimizing for the perfect answer rather than a good-enough answer made fast.
