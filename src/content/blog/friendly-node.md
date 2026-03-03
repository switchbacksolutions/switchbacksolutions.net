---
title: "Friendly Node: A Business Strategy Framework for the AI Era"
description: A framework for analyzing businesses as networks of nodes — and how understanding information flow can reveal where AI creates the most value.
publishedDate: 2026-03-03
author: Alec
tags: [AI, Strategy, Business]
---

We're all trying to get our brain stems wrapped around AI. In a previous blog post, I described our migration from "Ye Olde Worlde" to the New World of AI-enhanced business. Some of us are already on board the ships en route to this New World, but even we are seeing it imperfectly. We're visitors from a foreign land with outdated assumptions; just like the first colonists to the Americas, we need new words and new frameworks to adapt to our New World. Enter Friendly Node.

Friendly Node is an attempt to start analyzing businesses to prepare them for success in the AI-dominated New World. It bills itself as a company "operating system"…if you're an individual of the non-technical persuasion (read: you don't geek out about software), don't let this analogy put you off. Friendly Node looks at companies both as a node within a greater network of companies in the economy, and as a network internally.

<figure style="margin: 2.5rem 0; padding: 1.5rem 1rem; background: #f7faf8; border-radius: 8px; text-align: center;">
<svg viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;" role="img" aria-label="Animated diagram showing a business as a node in the economic network, with orange dots representing Requests for Value flowing in and green dots representing Returns of Value flowing out to customers, suppliers, partners, and regulators.">
  <defs>
    <marker id="fn-arr-rfv" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#C46827"/>
    </marker>
    <marker id="fn-arr-rov" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2E5D47"/>
    </marker>
    <path id="fn-rfv-cust" d="M 297 100 L 297 145"/>
    <path id="fn-rfv-supp" d="M 120 207 L 235 207"/>
    <path id="fn-rfv-part" d="M 480 213 L 365 213"/>
    <path id="fn-rfv-regs" d="M 303 320 L 303 275"/>
    <path id="fn-rov-cust" d="M 303 145 L 303 100"/>
    <path id="fn-rov-supp" d="M 235 213 L 120 213"/>
    <path id="fn-rov-part" d="M 365 207 L 480 207"/>
    <path id="fn-rov-regs" d="M 297 275 L 297 320"/>
  </defs>

  <!-- Connection lines — bidirectional, slightly offset -->
  <line x1="297" y1="100" x2="297" y2="143" stroke="#C46827" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rfv)"/>
  <line x1="303" y1="143" x2="303" y2="100" stroke="#2E5D47" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rov)"/>
  <line x1="120" y1="207" x2="233" y2="207" stroke="#C46827" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rfv)"/>
  <line x1="233" y1="213" x2="120" y2="213" stroke="#2E5D47" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rov)"/>
  <line x1="480" y1="213" x2="367" y2="213" stroke="#C46827" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rfv)"/>
  <line x1="367" y1="207" x2="480" y2="207" stroke="#2E5D47" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rov)"/>
  <line x1="303" y1="320" x2="303" y2="277" stroke="#C46827" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rfv)"/>
  <line x1="297" y1="277" x2="297" y2="320" stroke="#2E5D47" stroke-width="1.5" stroke-opacity="0.35" marker-end="url(#fn-arr-rov)"/>

  <!-- Inline labels on customer connection -->
  <text x="312" y="124" font-size="9" fill="#C46827" font-family="sans-serif" opacity="0.85">RFV</text>
  <text x="288" y="124" font-size="9" fill="#2E5D47" font-family="sans-serif" opacity="0.85" text-anchor="end">ROV</text>

  <!-- External nodes -->
  <circle cx="300" cy="60" r="40" fill="#EEF5F1" stroke="#2E5D47" stroke-width="2"/>
  <text x="300" y="55" text-anchor="middle" font-size="10" font-weight="700" fill="#2E5D47" font-family="sans-serif">CUSTOMERS</text>
  <text x="300" y="70" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">orders, inquiries</text>

  <circle cx="80" cy="210" r="40" fill="#EEF5F1" stroke="#2E5D47" stroke-width="2"/>
  <text x="80" y="205" text-anchor="middle" font-size="10" font-weight="700" fill="#2E5D47" font-family="sans-serif">SUPPLIERS</text>
  <text x="80" y="220" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">materials, data</text>

  <circle cx="520" cy="210" r="40" fill="#EEF5F1" stroke="#2E5D47" stroke-width="2"/>
  <text x="520" y="205" text-anchor="middle" font-size="10" font-weight="700" fill="#2E5D47" font-family="sans-serif">PARTNERS</text>
  <text x="520" y="220" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">channels, intel</text>

  <circle cx="300" cy="360" r="40" fill="#EEF5F1" stroke="#2E5D47" stroke-width="2"/>
  <text x="300" y="354" text-anchor="middle" font-size="10" font-weight="700" fill="#2E5D47" font-family="sans-serif">REGULATORS</text>
  <text x="300" y="369" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">filings, taxes</text>

  <!-- Center node pulse ring -->
  <circle cx="300" cy="210" r="65" fill="none" stroke="#2E5D47" stroke-width="2">
    <animate attributeName="r" values="65;83;65" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Center business node -->
  <circle cx="300" cy="210" r="65" fill="#2E5D47"/>
  <text x="300" y="204" text-anchor="middle" font-size="11" font-weight="700" fill="white" letter-spacing="2" font-family="sans-serif">YOUR</text>
  <text x="300" y="219" text-anchor="middle" font-size="11" font-weight="700" fill="white" letter-spacing="2" font-family="sans-serif">BUSINESS</text>
  <text x="300" y="236" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.6)" font-family="sans-serif">receives &amp; processes</text>

  <!-- Animated RFV dots (orange, incoming) -->
  <circle r="5" fill="#E8884A"><animateMotion dur="2s" repeatCount="indefinite" begin="0s"><mpath href="#fn-rfv-cust"/></animateMotion></circle>
  <circle r="5" fill="#E8884A"><animateMotion dur="2.3s" repeatCount="indefinite" begin="0.7s"><mpath href="#fn-rfv-supp"/></animateMotion></circle>
  <circle r="5" fill="#E8884A"><animateMotion dur="2.1s" repeatCount="indefinite" begin="1.4s"><mpath href="#fn-rfv-part"/></animateMotion></circle>
  <circle r="5" fill="#E8884A"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.4s"><mpath href="#fn-rfv-regs"/></animateMotion></circle>

  <!-- Animated ROV dots (light green, outgoing) -->
  <circle r="5" fill="#7BC5A0"><animateMotion dur="2s" repeatCount="indefinite" begin="1s"><mpath href="#fn-rov-cust"/></animateMotion></circle>
  <circle r="5" fill="#7BC5A0"><animateMotion dur="2.3s" repeatCount="indefinite" begin="1.7s"><mpath href="#fn-rov-supp"/></animateMotion></circle>
  <circle r="5" fill="#7BC5A0"><animateMotion dur="2.1s" repeatCount="indefinite" begin="0.4s"><mpath href="#fn-rov-part"/></animateMotion></circle>
  <circle r="5" fill="#7BC5A0"><animateMotion dur="2.5s" repeatCount="indefinite" begin="1.4s"><mpath href="#fn-rov-regs"/></animateMotion></circle>

  <!-- Legend -->
  <circle cx="135" cy="418" r="5" fill="#E8884A"/>
  <text x="146" y="422" font-size="11" fill="#555" font-family="sans-serif">Request for Value (RFV)</text>
  <circle cx="335" cy="418" r="5" fill="#7BC5A0"/>
  <text x="346" y="422" font-size="11" fill="#555" font-family="sans-serif">Return of Value (ROV)</text>
</svg>
<figcaption style="margin-top: 0.75rem; font-size: 0.85rem; color: #888; font-style: italic;">Your business as a node in the economic network — receiving Requests for Value (orange) and returning value (green) to customers, suppliers, partners, and regulators.</figcaption>
</figure>

## Information is Processed into Value

In these systems, we're looking at information being the core currency passed between nodes. A node receives, processes, and transmits information. Raw information is processed into decisions that produce value via products and services.

Nodes receive "Requests for Value" (RFV), information coming into the node demanding transformation into a "Return of Value" (ROV). The most direct RFV is a customer order: a direct request to transform the request into a valuable product or service. However, nodes also receive RFVs that are less direct: potential customer questions, government requests for taxes and filings, requests for employment, partnership inquiries, etc. Each business has an internal network of nodes to provide ROVs for these RFVs.

Over time, inefficient nodes wither and are eliminated. Nodes that efficiently receive information and create value are rewarded.

## Startup Founders Identify Inefficient Nodes in the Economy

Startups are a chance to replace inefficient nodes in the economy with alternative, more efficient nodes.

An "inefficient" node might be one that's poorly connected to other nodes; for example, a company that lacks partnerships or sales acumen to adequately distribute an otherwise great product. Or it might be a node that poorly processes information, like a business with bad product-market fit.

Successful startup founders are geniuses at finding these inefficient nodes and replacing or bypassing them with new, efficient businesses.

## What Are Your External Connections to Other Nodes?

Identifying your business's position within the greater network of the economy requires understanding what other nodes you're connected to. Namely…

- Who are your customers?
- Who are your suppliers?
- Who are your partners?
- What information do they send to your company?
- What channels do they use to transmit that information?

## Optimizing Your Business's Network of Nodes

A core principle of Friendly Node is that, in addition to being a node within the network of the greater economy, your business is a network itself.

The nodes within your business also respond to RFVs (requests for value) with ROVs (returns of value). For example, an e-commerce business receives an RFV in the form of a customer order. That RFV goes through several internal nodes which might include…

- Ecommerce website
- Sales
- Fulfillment/Inventory
- Customer success/satisfaction
- Product feedback/development

These nodes are usually task-based. You can start by identifying general node "buckets": for example, sales. But ideally you can break these general nodes into more granular responsibilities: sales might include prospecting, RFP responses, and maintaining existing customer relationships.

By atomizing your business into nodes, we can identify weak points or spot opportunities for further automation. Of course the million dollar question of the day is…

## What Nodes Can Be Optimized by AI?

By looking at your business as a network of nodes, we can identify nodes that can be replaced or augmented by AI. The key to optimizing your network is understanding what "friendly" means within the Friendly Node framework.

In network design, "friendliness" is how well you're improving the speed and quality of a node's processing while minimizing the direct cost of the node and network debt. To quote the Friendly Node website, "Friendly operations are those that maintain or strengthen network connections over time rather than degrading them."

## Making Nodes Friendly

Consider your CRM. If you've ever taken over a legacy CRM with a variety of non-standardized tags, duplicate records, and poor connections to the other nodes in your organization, you've experienced an "unfriendly" node. Chances are it was difficult for that CRM to respond to common RFVs, like generating a list of sales prospects for a campaign or finding the history of a specific prospect or customer.

The pain you're experiencing may be partially the direct cost of the CRM (a costly Salesforce contract, for example), but the greater cost is network debt. Over time, bad decisions have accumulated to degrade the node's ability to process requests for value.

Making the CRM node friendlier could take a variety of forms. You might consider…

- Adopting a new CRM
- Standardizing records and deduplicating
- Augmenting existing records with information from other nodes
- Finding better integration pathways with other nodes

All of these efforts should either reduce the direct cost of running the system or reduce the network debt that degrades the node's performance over time.

## A Telescope to the AI-Native World

As we continue our journey to the AI New World, Friendly Node offers us a "telescope" to start seeing that new landscape and adapting our businesses to it. Nodes are solution agnostic: our goal is making them friendlier (processing greater value at lower cost). Once we identify the nodes and target our most inefficient ones, we can find opportunities for deploying AI.

I'll be producing some case studies of my first real-world applications of the Friendly Node framework in the coming months, but if you're interested in using it now, [get in touch](/contact)!
