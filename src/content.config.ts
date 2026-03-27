import { defineCollection, z } from "astro:content";

const packages = defineCollection({
  schema: z.object({
    name: z.string(),
    repo: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    adapters: z.array(z.string()).default([]),
    components: z.array(z.string()).default([]),
    maintainer: z.string(),
    latestVersion: z.string(),
    homepage: z.string().url().optional()
  })
});

export const collections = { packages };
