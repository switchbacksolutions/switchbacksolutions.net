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
<div style="max-width: 600px; margin: 0 auto;">
  <canvas id="fn-diagram" width="600" height="420" style="width: 100%; height: auto; display: block;"
    aria-label="Animated diagram showing a business as a node in the economic network, with orange dots representing Requests for Value flowing in and green dots representing Returns of Value flowing out to customers, suppliers, partners, and regulators."></canvas>
</div>
<figcaption style="margin-top: 0.75rem; font-size: 0.85rem; color: #888; font-style: italic;">Your business as a node in the economic network — receiving Requests for Value (orange) and returning value (green) to customers, suppliers, partners, and regulators.</figcaption>
<script>
(function () {
  var canvas = document.getElementById('fn-diagram');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');

  var W = 600, H = 420;
  var GREEN = '#2E5D47', GREEN_BG = '#EEF5F1', ORANGE = '#E8884A', TEAL = '#7BC5A0';

  var center = { x: 300, y: 205, r: 65 };
  var nodes = [
    { x: 300, y:  60, r: 38, label: 'CUSTOMERS',  sub: 'orders, inquiries' },
    { x:  80, y: 205, r: 38, label: 'SUPPLIERS',   sub: 'materials, data'  },
    { x: 520, y: 205, r: 38, label: 'PARTNERS',    sub: 'channels, intel'  },
    { x: 300, y: 360, r: 38, label: 'REGULATORS',  sub: 'filings, taxes'   },
  ];

  // Compute endpoints from edge of external node to edge of center node
  function ep(node) {
    var dx = center.x - node.x, dy = center.y - node.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    return {
      x1: node.x + dx / d * node.r, y1: node.y + dy / d * node.r,
      x2: center.x - dx / d * center.r, y2: center.y - dy / d * center.r,
    };
  }

  function lerp(e, t) {
    return { x: e.x1 + (e.x2 - e.x1) * t, y: e.y1 + (e.y2 - e.y1) * t };
  }

  // Two dots per connection: one inward (RFV, orange), one outward (ROV, teal)
  var dots = [];
  nodes.forEach(function (n, i) {
    dots.push({ i: i, t: (i * 0.25) % 1,       speed: 0.0042, color: ORANGE, inward: true  });
    dots.push({ i: i, t: (i * 0.25 + 0.5) % 1, speed: 0.0038, color: TEAL,   inward: false });
  });

  var pulse = 0, raf;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Connection lines
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(46, 93, 71, 0.18)';
    nodes.forEach(function (node) {
      var e = ep(node);
      ctx.beginPath();
      ctx.moveTo(e.x1, e.y1);
      ctx.lineTo(e.x2, e.y2);
      ctx.stroke();
    });

    // External nodes
    nodes.forEach(function (node) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = GREEN_BG;
      ctx.fill();
      ctx.strokeStyle = GREEN;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = GREEN;
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, node.x, node.y - 7);
      ctx.fillStyle = '#666';
      ctx.font = '9px sans-serif';
      ctx.fillText(node.sub, node.x, node.y + 8);
    });

    // Pulse ring behind center node
    pulse = (pulse + 0.003) % 1;
    ctx.beginPath();
    ctx.arc(center.x, center.y, 65 + pulse * 20, 0, Math.PI * 2);
    ctx.strokeStyle = GREEN;
    ctx.lineWidth = 2;
    ctx.globalAlpha = (1 - pulse) * 0.4;
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Center node
    ctx.beginPath();
    ctx.arc(center.x, center.y, center.r, 0, Math.PI * 2);
    ctx.fillStyle = GREEN;
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('YOUR', center.x, center.y - 8);
    ctx.fillText('BUSINESS', center.x, center.y + 8);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '8px sans-serif';
    ctx.fillText('receives & processes', center.x, center.y + 26);

    // Animated dots
    dots.forEach(function (dot) {
      dot.t = (dot.t + dot.speed) % 1;
      var e = ep(nodes[dot.i]);
      var pos = dot.inward
        ? lerp(e, dot.t)
        : lerp({ x1: e.x2, y1: e.y2, x2: e.x1, y2: e.y1 }, dot.t);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
    });

    // Legend
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = '11px sans-serif';

    ctx.beginPath();
    ctx.arc(125, 407, 5, 0, Math.PI * 2);
    ctx.fillStyle = ORANGE;
    ctx.fill();
    ctx.fillStyle = '#555';
    ctx.fillText('Request for Value (RFV)', 136, 407);

    ctx.beginPath();
    ctx.arc(335, 407, 5, 0, Math.PI * 2);
    ctx.fillStyle = TEAL;
    ctx.fill();
    ctx.fillStyle = '#555';
    ctx.fillText('Return of Value (ROV)', 346, 407);

    raf = requestAnimationFrame(draw);
  }

  draw();

  // Cancel animation loop when navigating away
  window.addEventListener('pagehide', function () { cancelAnimationFrame(raf); }, { once: true });
})();
</script>
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
