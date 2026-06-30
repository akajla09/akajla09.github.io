import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({
        pattern: "*.md",
        base: "./src/posts",
        generateId: ({ data, entry }) =>
            typeof data.slug === "string" ? data.slug : entry.replace(/\.md$/, ""),
    }),
    schema: z.object({
        title: z.string(),
        publishDate: z.coerce.date(),
        description: z.string(),
        keywords: z.string(),
        image: z.string(),
    }),
});

export const collections = { posts };
