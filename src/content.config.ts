import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  author: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: postSchema,
});

const drafts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/drafts' }),
  schema: postSchema,
});

export const collections = { posts, drafts };
