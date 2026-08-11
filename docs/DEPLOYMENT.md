# Deployment guide

Step-by-step instructions for deploying this Astro site to GitHub Pages and pointing a custom domain managed on Squarespace.

## Prerequisites

- Repository: [`gltavares/website`](https://github.com/gltavares/website)
- `main` branch is the deploy branch
- Workflow file: `.github/workflows/deploy.yml`

---

## Checklist: GitHub Pages (Actions)

- [ ] **1. Enable GitHub Pages with Actions**
  - Repo → **Settings → Pages**
  - Under **Build and deployment → Source**, select **GitHub Actions**

- [ ] **2. Push to `main`**
  - Every push to `main` runs the deploy workflow automatically
  - You can also trigger it manually from **Actions → Deploy to GitHub Pages → Run workflow**

- [ ] **3. Confirm the deployment**
  - Open **Actions** and wait for both `build` and `deploy` jobs to succeed
  - The deploy job prints the live URL (e.g. `https://gltavares.github.io/website/`)

- [ ] **4. (Optional) Preview on the `github.io` URL before a custom domain**
  - If the site is served at `https://gltavares.github.io/website/`, temporarily set in `astro.config.mjs`:
    ```js
    base: '/website',
    ```
  - Rebuild and redeploy. **Revert to `base: '/'` before going live on a custom domain.**

---

## Checklist: Custom domain (Squarespace DNS → GitHub Pages)

This site uses the apex domain **`gltavares.com`**, served from GitHub Pages (`gltavares.github.io`).

The repo side is already configured: `public/CNAME` pins `gltavares.com`, and `astro.config.mjs` sets `site: 'https://gltavares.com'` with `base: '/'`.

- [ ] **1. Confirm the custom domain in GitHub**
  - Repo → **Settings → Pages → Custom domain**
  - It should read `gltavares.com` (the committed `CNAME` sets it automatically on deploy). If empty, enter `gltavares.com` and Save.
  - Wait for DNS check; enable **Enforce HTTPS** once verification completes

- [ ] **2. (Already done in the repo) `astro.config.mjs`**
  ```js
  export default defineConfig({
    site: 'https://gltavares.com',
    base: '/',
    // …
  });
  ```

- [ ] **3. Configure DNS in Squarespace**

  Log in to Squarespace → **Settings → Domains → [your domain] → DNS Settings**.

  **For the apex domain (`gltavares.com`):** add four **A** records and four **AAAA** records:

  | Type | Host / Name | Value |
  |------|-------------|-------|
  | A | `@` | `185.199.108.153` |
  | A | `@` | `185.199.109.153` |
  | A | `@` | `185.199.110.153` |
  | A | `@` | `185.199.111.153` |
  | AAAA | `@` | `2606:50c0:8000::153` |
  | AAAA | `@` | `2606:50c0:8001::153` |
  | AAAA | `@` | `2606:50c0:8002::153` |
  | AAAA | `@` | `2606:50c0:8003::153` |

  **For `www`:** add a **CNAME** record:

  | Type | Host / Name | Value |
  |------|-------------|-------|
  | CNAME | `www` | `gltavares.github.io` |

  > Squarespace may label the host field as "Host" or "Name". Use `@` for the apex domain root.

- [ ] **4. Remove conflicting Squarespace records**
  - Delete or update any old A/CNAME records that pointed the domain elsewhere (e.g. Squarespace's default parking records)

- [ ] **5. Wait for DNS propagation**
  - Can take from a few minutes up to 24–48 hours
  - Verify with `dig gltavares.com +noall +answer` or an online DNS checker
  - GitHub Pages should show the domain as verified under **Settings → Pages**

- [ ] **6. Confirm HTTPS**
  - Once DNS is verified, enable **Enforce HTTPS** in GitHub Pages settings
  - If HTTPS does not provision within a few hours, remove and re-add the custom domain to trigger certificate issuance

---

## Troubleshooting

### `base` path vs custom domain

| Scenario | `site` | `base` |
|----------|--------|--------|
| Custom domain at root (`https://gltavares.com`) | `https://gltavares.com` | `'/'` |
| Raw GitHub Pages project URL (`https://gltavares.github.io/website/`) | `https://gltavares.github.io` | `'/website'` |

**Symptoms of a wrong `base`:**

- CSS, fonts, or images 404 (broken styling)
- Internal links go to the wrong path
- Site works on the custom domain but breaks on `github.io`, or vice versa

**Fix:** Match `base` to where the site is actually hosted. For production on a custom domain, always use `base: '/'`.

### Build fails in GitHub Actions

- Check the **Actions** log for the `build` job
- Ensure `package-lock.json` is committed and `npm run build` succeeds locally
- The workflow uses Node 22 (`node-version: 22` in `withastro/action@v3`)

### Custom domain not verifying

- Confirm all four A and four AAAA records are present for the apex domain
- For `www`, the CNAME must point to `gltavares.github.io` (not the repo name `website`)
- Remove wildcard DNS records — they can cause security issues and verification failures
- See [GitHub's troubleshooting guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

### DNS values reference

These values come from [GitHub's official documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) (verified August 2025). If deployment fails after following this guide, check that page in case GitHub has updated the IP addresses.
