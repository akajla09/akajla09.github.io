import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/posts" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        publishDate: z.union([z.string(), z.date()]),
        description: z.string(),
        keywords: z.string(),
        image: z.string(),
    }),
});

export const collections = { posts };
