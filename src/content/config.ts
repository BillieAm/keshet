import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string()
  })
});

const sectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string()
  })
});

export const collections = {
  services: servicesCollection,
  sections: sectionsCollection
};
