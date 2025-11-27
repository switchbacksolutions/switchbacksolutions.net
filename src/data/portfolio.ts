import { getCollection, type CollectionEntry } from 'astro:content';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  description: string;
  fullDescription?: string;
  categories: string[];
  industries: string[];
  technologies: string[];
  year?: string;
  screenshot?: string;
  url?: string;
  featured?: boolean;
  content?: string; // Markdown content
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const portfolioEntries = await getCollection('portfolio');
  
  return portfolioEntries
    .map((entry: CollectionEntry<'portfolio'>): PortfolioItem => ({
      id: entry.id,
      title: entry.data.title,
      client: entry.data.client,
      description: entry.data.description,
      fullDescription: entry.data.fullDescription,
      categories: entry.data.categories,
      industries: entry.data.industries,
      technologies: entry.data.technologies,
      year: entry.data.year,
      screenshot: entry.data.screenshot,
      url: entry.data.url,
      featured: entry.data.featured,
      content: entry.body, // Markdown content
    }))
    .sort((a: PortfolioItem, b: PortfolioItem) => {
      // Sort by year (newest first), then by title
      if (a.year && b.year) {
        return b.year.localeCompare(a.year);
      }
      if (a.year) return -1;
      if (b.year) return 1;
      return a.title.localeCompare(b.title);
    });
}

export async function getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find(item => item.id === id);
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  const items = await getPortfolioItems();
  return items.filter(item => item.featured);
}
