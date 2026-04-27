import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const portfolioEntries = await getCollection('portfolio');
  return portfolioEntries.map((entry) => ({
    params: { id: entry.slug },
    props: { entry },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { entry } = props;
  const { data, body } = entry;

  const categories = data.categories?.length
    ? `categories: [${data.categories.map((c: string) => `"${c}"`).join(', ')}]`
    : null;

  const industries = data.industries?.length
    ? `industries: [${data.industries.map((i: string) => `"${i}"`).join(', ')}]`
    : null;

  const technologies = data.technologies?.length
    ? `technologies: [${data.technologies.map((t: string) => `"${t}"`).join(', ')}]`
    : null;

  const frontmatter = [
    '---',
    `title: "${data.title}"`,
    `client: "${data.client}"`,
    `description: "${data.description}"`,
    data.year ? `year: ${data.year}` : null,
    categories,
    industries,
    technologies,
    data.url ? `url: "${data.url}"` : null,
    '---',
  ].filter(Boolean).join('\n');

  const fullDesc = data.fullDescription
    ? `\n## Overview\n\n${data.fullDescription}\n`
    : '';

  return new Response(`${frontmatter}${fullDesc}\n${body}`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
