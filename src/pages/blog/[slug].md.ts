import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { post } = props;
  const { data, body } = post;

  const tags = data.tags?.length
    ? `tags: [${data.tags.map((t: string) => `"${t}"`).join(', ')}]`
    : null;

  const frontmatter = [
    '---',
    `title: "${data.title}"`,
    `description: "${data.description}"`,
    `publishedDate: ${data.publishedDate.toISOString().split('T')[0]}`,
    `author: ${data.author}`,
    tags,
    '---',
  ].filter(Boolean).join('\n');

  return new Response(`${frontmatter}\n\n${body}`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
