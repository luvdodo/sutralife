# Deploy to GitHub Pages and Custom DNS

This app is set up for GitHub Pages and custom domain (DNS).

## Build

```bash
npm install
npm run build
```

Output is in `dist/`. The build includes a `404.html` copy of `index.html` so direct links to routes (e.g. `/products`, `/pricing`) work on GitHub Pages.

## GitHub Pages

### Option A: Custom domain (e.g. opensutra.ai)

1. **Build with root base** (default):
   ```bash
   npm run build
   ```

2. **Push to GitHub** and enable Pages:
   - Repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` (or your default), folder: **/ (root)** or **/dist** depending on how you deploy

3. **Custom domain**:
   - In Pages settings, set **Custom domain** to your domain (e.g. `opensutra.ai` or `www.opensutra.ai`)
   - The repo includes `public/CNAME` with `opensutra.ai`. Edit it to match your domain (e.g. `www.opensutra.ai` if you use www)
   - At your DNS provider, add:
     - **A records** to GitHub: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - Or **CNAME** for `www`: `yourusername.github.io`

4. **Enforce HTTPS** in Pages settings after DNS propagates.

### Option B: Project site (username.github.io/OS)

1. **Build with repo base path**:
   ```bash
   BASE_PATH=/OS/ npm run build
   ```
   (Replace `OS` with your repo name.)

2. Deploy the `dist/` folder to the `gh-pages` branch or use GitHub Actions to build and deploy from `main`.

## GitHub Actions (optional)

To build and deploy on push, add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: opensutra.ai
```

For a **project site** (username.github.io/OS), set `BASE_PATH` in the build step:

```yaml
- run: BASE_PATH=/OS/ npm run build
```

And omit or adjust `cname` if not using a custom domain.

## Summary

- **Base path**: Default `base: '/'` for custom domain. Use `BASE_PATH=/YourRepoName/` for project site.
- **404.html**: Copied from `index.html` at build time so SPA routes work on GitHub Pages.
- **CNAME**: `public/CNAME` is copied to `dist/`; set your domain for custom DNS.
