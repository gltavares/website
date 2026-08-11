import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const texts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/texts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['pt-br', 'en']),
    kind: z.string().default('Artigo'),
    description: z.string().optional(),
    // If set, the entry links straight to an external publication instead of
    // rendering a local article page.
    external: z.string().url().optional(),
    // Shared id linking the PT-BR and EN versions of the same article, so the
    // language switcher can jump between translations.
    translationKey: z.string().optional(),
  }),
});

export const collections = { texts };
