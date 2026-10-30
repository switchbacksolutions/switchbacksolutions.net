---
title: "Supabase on AWS"
client: "Open Source"
description: "Terraform and Packer configuration for running self-hosted Supabase on AWS."
fullDescription: "An open source Terraform and Packer configuration for running self-hosted Supabase on AWS, adapted from the DigitalOcean reference project. This project is a work in progress."
categories:
  - Infrastructure
  - DevOps
  - Open Source
industries:
  - Tech
technologies:
  - Terraform
  - Packer
  - AWS
  - EC2
  - EBS
  - S3
  - Docker Compose
  - Supabase
year: "2025"
url: "https://github.com/reynoldsalec/supabase-on-aws"
featured: false
---

## Key Features

- Runs the Supabase stack (Kong, GoTrue, PostgREST, Realtime, Storage, postgres-meta, Postgres) via **Docker Compose** on **EC2**
- **EBS** for the database and **S3** for object storage
- SWAG for TLS and basic auth on Studio
- Configurable SMTP for auth email
- Work in progress
