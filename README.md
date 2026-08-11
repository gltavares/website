# Gabriel Tavares — website

Personal portfolio and texts site for UX/product designer Gabriel Tavares. Built with [Astro 5](https://astro.build) as a static site and deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions.

## Local development

**Requirements:** Node 18+ (this project is developed with Node 22).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
.
├── src/
│   ├── pages/              # Routes (PT-BR at root, EN under /en/)
│   ├── layouts/
│   │   └── Base.astro      # Shared page shell
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HomeView.astro  # Hero + bento grid
│   │   ├── Bento.astro
│   │   ├── TextsList.astro
│   │   ├── ArticleView.astro
│   │   └── LangSwitcher.astro
│   ├── content/
│   │   └── texts/          # Markdown articles
│   ├── content.config.ts   # Texts collection schema
│   ├── data/
│   │   └── work.ts         # Bento work items
│   ├── i18n/               # UI strings + helpers
│   └── styles/
│       ├── global.css      # Design tokens + layout
│       └── fonts.css
└── public/
    ├── fonts/              # Self-hosted Beni font (demo version)
    └── work/               # Placeholder SVG artwork
```

## How to add a text / article

Create a markdown file in `src/content/texts/` with this frontmatter:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | Article title |
| `date` | yes | Publication date (`YYYY-MM-DD`) |
| `lang` | yes | `pt-br` or `en` |
| `kind` | yes | e.g. `Artigo`, `Article`, `Podcast` |
| `description` | no | Short summary for the list |
| `external` | no | URL — when set, the list links straight to this URL instead of rendering a local article page |

Example:

```markdown
---
title: My article title
date: 2025-01-15
lang: pt-br
kind: Artigo
description: Optional summary.
---

Article body in markdown…
```

The texts list is sorted reverse-chronologically by `date` automatically.

## How to add a work item

1. Edit `src/data/work.ts` — add an entry to the `getWork()` array with `title`, `meta`, `media`, and `cls` (grid span classes). Optional fields: `light`, `href`.
2. Drop the artwork SVG into `public/work/` (filename must match the `media` path, e.g. `my-project.svg`).

## Fonts

The Beni display font in `public/fonts/` is the **demo/trial** version. To use the licensed font, replace those files keeping the same filenames — no code changes needed.

## i18n

- **PT-BR** is the default locale, served at `/`.
- **English** is served under `/en/`.
- UI strings live in `src/i18n/ui.ts`.

## Design rules

- Content is centered in a max **1080px** column.
- Near-white background (`#f2f2f0`) with black ink.
- Single blue accent `#1e6ffc`, used subtly for interaction states.

## Deployment

Pushes to `main` trigger an automatic build and deploy via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

**One-time setup:** In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

For a detailed checklist (including custom domain setup), see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Custom domain: `gltavares.com` (Squarespace → GitHub Pages)

The custom domain is already wired on the repo side:

- `public/CNAME` contains `gltavares.com` (copied to `dist/CNAME` on every build, which pins the Pages custom domain).
- `astro.config.mjs` sets `site: 'https://gltavares.com'` with `base: '/'`.

Remaining one-time steps:

1. **GitHub:** Settings → Pages → **Custom domain** — confirm it shows `gltavares.com` (the committed `CNAME` sets this automatically on deploy). Leave **Enforce HTTPS** off until DNS verifies.
2. **Squarespace DNS** — Settings → Domains → `gltavares.com` → DNS Settings → add these Custom Records:

   **Apex (`gltavares.com`):**

   | Type | Host | Value |
   |------|------|-------|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |

   **`www` → apex redirect:**

   | Type | Host | Value |
   |------|------|-------|
   | CNAME | `www` | `gltavares.github.io` |

3. **Remove Squarespace's default parking records** for `@` and `www` so they don't conflict. Keep unrelated records (e.g. MX for email).
4. Wait for DNS to propagate (`dig gltavares.com +short` should return the four `185.199.x.153` IPs), then enable **Enforce HTTPS**.

**Previewing before the custom domain is live:** if you open the raw project URL (`https://gltavares.github.io/website/`), temporarily set `base: '/website'` in `astro.config.mjs`; revert to `base: '/'` once the domain is active.

DNS propagation can take up to 24 hours. Enable **Enforce HTTPS** in GitHub Pages settings after the domain verifies.
