import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    caption: z.string(),
    image: image(),
    alt: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    gridSlot: z.enum(['g1','g2','g3','g4','g5','g6','g7','g8','g9','g10']),
    beforeImage: image().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    location: z.string().optional(),
    project: z.string().optional(),
    order: z.number(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, testimonials, faqs };
