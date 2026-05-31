import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publicationCollection = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.string(),
    doi: z.string().optional(),
    repo: z.string().optional(),
    tags: z.array(z.string()),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number()
  })
});

const projectCollection = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    highlight: z.string(),
    repo: z.string().optional(),
    paper: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number()
  })
});

const newsCollection = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    date: z.string(),
    text: z.string(),
    order: z.number()
  })
});

export const collections = {
  publications: publicationCollection,
  projects: projectCollection,
  news: newsCollection
};
