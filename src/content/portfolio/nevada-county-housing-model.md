---
title: "Nevada County Housing Model"
client: "Independent Research"
description: "An econometric model of how population growth in Nevada County, California changes typical home values in Grass Valley and Nevada City."
fullDescription: "Local housing debates often turn on one question: what happens to home values if the county grows? This independent research project estimates how population growth in Nevada County, California changes typical home values in Grass Valley and Nevada City, and runs 10-year population scenarios. The method, its limits, and an interactive scenario explorer are published openly."
categories:
  - Data
  - Research
  - Development
industries:
  - Housing
  - Civic
technologies:
  - Python
  - Econometrics
  - GitHub Pages
  - GitHub Actions
year: "2026"
url: "https://switchbacksolutions.github.io/nevada-county-housing-model/"
featured: false
---

## Key Achievements

### A Two-Stage Method

- **County panel** — a 55-county California panel regression (2001–2024) of real home-price growth on population growth, with county and year fixed effects
- **City pass-through** — a second regression on Zillow data (2002–2025) that carries the county effect down to Grass Valley and Nevada City

### Scenarios, Not Forecasts

Scenario results isolate the population effect by comparing each 10-year population path against a flat-population path. They are explicitly not market forecasts.

### Documented Limits

The model is upfront about what it can't do, including:

- Simultaneity between population and prices
- The assumption that effects are symmetric for growth and decline
- The gap in Census intercensal estimates

### Interactive Scenario Explorer

An interactive explorer published on **GitHub Pages** lets anyone try different population scenarios and see the estimated effect.

## Impact

The project gives local residents and decision-makers a transparent, reproducible way to reason about one piece of the housing question, with its assumptions in plain view.
