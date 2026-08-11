// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from the custom domain gltavares.com (pointed from
// Squarespace to GitHub Pages), so it lives at the root path. The custom
// domain is pinned by public/CNAME. If you ever preview the raw GitHub Pages
// project URL (https://gltavares.github.io/website/) before the custom domain
// is active, temporarily set `base: '/website'` below.
export default defineConfig({
  site: 'https://gltavares.com',
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
