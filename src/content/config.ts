import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    fullDescription: z.string().optional(),
    categories: z.array(z.string()),
    industries: z.array(z.string()),
    technologies: z.array(z.string()),
    year: z.string().optional(),
    screenshot: z.string().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  portfolio,
};


