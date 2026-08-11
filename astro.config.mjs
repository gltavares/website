// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from a custom domain (pointed from Squarespace), so it
// lives at the root path. If you preview the raw GitHub Pages project URL
// (https://gltavares.github.io/website/) before the custom domain is active,
// temporarily set `base: '/website'` below.
export default defineConfig({
  site: 'https://gabrieltavares.design',
  base: '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
