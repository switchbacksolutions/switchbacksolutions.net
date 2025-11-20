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
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "nonprofit-platform-redesign",
    title: "Nonprofit Platform Redesign",
    client: "Poets.org",
    description: "Complete redesign and development of the internet's most popular repository of poetry.",
    fullDescription: "Led a comprehensive redesign and development effort for a mission-critical platform serving thousands of users. Migrated from legacy systems to modern, accessible architecture with improved performance and user experience. The project involved extensive user research, content strategy, and technical migration.",
    categories: ["Strategy", "Design", "Development"],
    industries: ["Nonprofit"],
    technologies: ["Drupal", "PHP", "JavaScript", "Docker"],
    year: "2023",
    screenshot: "/images/work/nonprofit-platform.jpg"
  },
  {
    id: "healthcare-data-platform",
    title: "Healthcare Data Platform",
    client: "Mayo Clinic",
    description: "Built a secure, HIPAA-compliant data platform for managing patient information and analytics.",
    fullDescription: "Developed a secure, HIPAA-compliant data platform for managing patient information and analytics. Focused on performance, security, and maintainability. The platform handles sensitive healthcare data with robust access controls and audit logging.",
    categories: ["Development", "Strategy"],
    industries: ["Healthcare"],
    technologies: ["Laravel", "Vue", "Node", "DevOps"],
    year: "2023",
    screenshot: "/images/work/healthcare-platform.jpg"
  },
  {
    id: "higher-ed-cms-migration",
    title: "Higher Education CMS Migration",
    client: "Stanford University",
    description: "Migrated multiple university websites to a unified CMS platform.",
    fullDescription: "Migrated multiple university websites to a unified CMS platform, improving content management workflows and reducing maintenance overhead. The project involved content strategy, user training, and technical migration across multiple departments.",
    categories: ["Development", "Strategy"],
    industries: ["Higher Ed"],
    technologies: ["Drupal", "WordPress", "PHP", "Docker"],
    year: "2022",
    screenshot: "/images/work/higher-ed-migration.jpg"
  },
  {
    id: "financial-services-app",
    title: "Financial Services Application",
    client: "Goldman Sachs",
    description: "Developed a native desktop application for financial data analysis.",
    fullDescription: "Developed a native desktop application for financial data analysis with real-time updates and secure data handling. The application provides advanced analytics capabilities with a focus on user experience and data visualization.",
    categories: ["Development", "Design"],
    industries: ["Finance"],
    technologies: ["Electron", "JavaScript", "Node", "Vue"],
    year: "2022",
    screenshot: "/images/work/financial-app.jpg"
  },
  {
    id: "open-source-project",
    title: "Lando",
    client: "Open Source Community",
    description: "Created and maintained a popular open source tool used by thousands of developers.",
    fullDescription: "Created and maintained Lando, a popular open source local development tool used by thousands of developers. Focused on developer experience and documentation. The project has become a standard tool in the development workflow for many teams.",
    categories: ["Development"],
    industries: ["Tech"],
    technologies: ["JavaScript", "Node", "Docker", "Lando"],
    year: "2021",
    screenshot: "/images/work/open-source.jpg",
    url: "https://lando.dev"
  },
  {
    id: "agency-training",
    title: "Agency Training Program",
    client: "Acquia",
    description: "Developed and delivered comprehensive training programs for development teams.",
    fullDescription: "Developed and delivered comprehensive training programs for development teams, covering modern workflows, best practices, and tooling. The program helped teams improve their development velocity and code quality.",
    categories: ["Strategy", "Development"],
    industries: ["Tech"],
    technologies: ["Docker", "DevOps", "Lando"],
    year: "2021",
    screenshot: "/images/work/agency-training.jpg"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    client: "Patagonia",
    description: "Built a custom e-commerce solution with focus on performance and user experience.",
    fullDescription: "Built a custom e-commerce solution with focus on performance and user experience. Integrated with multiple payment and shipping providers. The platform handles high traffic volumes with optimized performance.",
    categories: ["Design", "Development"],
    industries: ["Tech"],
    technologies: ["Laravel", "Vue", "Nuxt", "PHP"],
    year: "2020",
    screenshot: "/images/work/ecommerce.jpg"
  },
  {
    id: "content-strategy-migration",
    title: "Content Strategy & Migration",
    client: "NPR",
    description: "Led content strategy and technical migration for a large media organization.",
    fullDescription: "Led content strategy and technical migration for a large media organization, improving content workflows and site performance. The project involved extensive content auditing, strategy development, and technical implementation.",
    categories: ["Strategy", "Design"],
    industries: ["Nonprofit"],
    technologies: ["WordPress", "PHP", "JavaScript"],
    year: "2020",
    screenshot: "/images/work/content-migration.jpg"
  }
];

export function getPortfolioItem(id: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.id === id);
}

