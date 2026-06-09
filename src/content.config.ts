import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    logo: z.string(),
    banner: z.string(),
    startDate: z.coerce.date(),
    dueDate: z.coerce.date().optional(),
  }),
});


const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});


export const collections = {
  blog, products
};

