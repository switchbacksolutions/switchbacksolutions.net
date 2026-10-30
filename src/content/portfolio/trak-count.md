---
title: "Trak Count Trail Counter"
client: "Switchback Solutions (Internal Product)"
description: "A battery-powered, privacy-first trail counter that classifies trail users on-device and reports counts to a web dashboard."
fullDescription: "Trail organizations need usage data for grants and maintenance planning, but commercial counters cost $500–$1,500 per unit. Trak Count is our answer: a battery-powered, privacy-first counter that runs detection and classification on the device itself, so no personally identifiable images ever leave it. Counts flow to a web dashboard that trail organizations can use to make their case. We are currently seeking pilot partners."
categories:
  - Product
  - Hardware
  - AI/ML
  - Development
industries:
  - Outdoor Recreation
  - Nonprofit
technologies:
  - ESP32-S3
  - ESP-IDF
  - C
  - Edge AI
  - MQTT
  - Supabase
  - Next.js
  - TypeScript
  - Fastify
year: "2026"
screenshot: "/images/trails/trail-counter-natural.png"
url: "https://switchbacksolutions.net/trail-counter"
featured: false
---

## Key Achievements

### On-Device Detection and Classification

Firmware for an **ESP32-S3** board with an OV5640 camera does the counting where the trail is:

- Detects and classifies trail users as pedestrians, cyclists, or equestrians
- Triggers on PIR motion, on a schedule, or from external input
- Keeps every image on the device, so no personally identifiable images leave it

### Connectivity for Remote Trails

Trailheads rarely have good coverage, so the counter supports several ways to report:

- WiFi
- CAT1 LTE
- Long-range HaLow

### Dashboard and Data Pipeline

A dashboard monorepo turns raw counts into something a trail organization can use:

- Counts arrive over **MQTT** and are stored in **Supabase**
- A **Fastify** API serves the data to a **Next.js** dashboard
- Test coverage with Vitest, Playwright, Supertest, and Testcontainers

## Impact

Trak Count aims to give trail organizations the usage data they need for grants and maintenance at a fraction of what commercial counters cost. We are looking for pilot partners. Learn more on the [trail counter page](/trail-counter).
