# Deploy to GitHub Pages and Custom Domain

Step-by-step guide to deploy this app from GitHub to your own domain (e.g. `opensutra.ai` or `www.yoursite.com`).

---

## Step-by-step: Custom domain from GitHub

### Step 1 — Set your custom domain in the repo

1. Open **`public/CNAME`** and replace the content with your domain **only** (no `https://`).
   - **Apex domain**: `yourdomain.com`
   - **www subdomain**: `www.yourdomain.com`
2. Save the file. The build copies this into `dist/`, so GitHub Pages will serve your site at that domain.

### Step 2 — Push your code to GitHub

1. If the repo isn’t on GitHub yet, create a new repository on [github.com](https://github.com/new).
2. From your project folder:
   ```bash
   git add .
   git commit -m "Deploy setup for custom domain"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
   (Use your GitHub username, repo name, and branch name if different from `main`.)

### Step 3 — Enable GitHub Pages and choose source

1. On GitHub: open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source**: choose **GitHub Actions** (recommended) or **Deploy from a branch**.
   - If you use **Deploy from a branch**:
     - Branch: `main` (or your default branch).
     - Folder: **/ (root)** if you’ll push the built `dist/` contents to that branch, or use the **gh-pages** branch and set folder to **/ (root)** after adding a workflow that deploys `dist/` to `gh-pages`.

### Step 4 — Add the deploy workflow (recommended)

Using GitHub Actions builds and deploys on every push so you don’t deploy `dist/` manually.

1. Create the workflow file:
   - In your repo create: **`.github/workflows/deploy.yml`**
2. Paste the workflow below. Replace `opensutra.ai` in `cname` with your domain from `public/CNAME`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - id: deploy
        uses: actions/deploy-pages@v4
```

3. In **Settings → Pages**, set **Source** to **GitHub Actions** and choose the **Deploy to GitHub Pages** workflow if prompted.
4. Commit and push the new file:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deploy"
   git push
   ```
   After the workflow runs, your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` until you add a custom domain.

### Step 5 — Add your custom domain in GitHub

1. Again: **Settings** → **Pages**.
2. Under **Custom domain**, type your domain (e.g. `opensutra.ai` or `www.opensutra.ai`) and click **Save**.
3. Wait for DNS to propagate (see Step 6). When GitHub can verify the domain, the checkbox for **Enforce HTTPS** will become available—enable it.

### Step 6 — Configure DNS at your domain provider

Go to where your domain is registered (Cloudflare, Namecheap, GoDaddy, Google Domains, etc.) and add one of the following.

**Option A — Apex domain (e.g. `yourdomain.com`):**

| Type | Name/Host | Value/Answer        |
|------|-----------|---------------------|
| A    | `@`       | `185.199.108.153`   |
| A    | `@`       | `185.199.109.153`   |
| A    | `@`       | `185.199.110.153`   |
| A    | `@`       | `185.199.111.153`   |

**Option B — www subdomain (e.g. `www.yourdomain.com`):**

| Type  | Name/Host | Value/Answer           |
|-------|-----------|------------------------|
| CNAME | `www`     | `YOUR_USERNAME.github.io` |

Use your actual GitHub username. You can also set up both apex + www if your provider supports it (e.g. CNAME flattening for apex).

### Step 7 — Wait and turn on HTTPS

1. DNS can take from a few minutes up to 48 hours. Check status under **Settings → Pages** (Custom domain).
2. When the domain shows as verified, enable **Enforce HTTPS**.
3. Visit `https://yourdomain.com` (or `https://www.yourdomain.com`). Your app should load from your custom domain.

---

## Build (local)

```bash
npm install
npm run build
```

Output is in **`dist/`**. The build includes **`404.html`** (copy of `index.html`) so SPA routes like `/products` and `/pricing` work on GitHub Pages.

---

## Manual deploy (no GitHub Actions)

If you don’t use the workflow:

1. Run `npm run build` locally.
2. Push the contents of **`dist/`** to the branch and folder that Pages uses (e.g. a `gh-pages` branch or the root of `main` if you’re using that).
3. Keep **`public/CNAME`** set to your custom domain so each build still has the right CNAME in `dist/`.

---

## Project site (username.github.io/REPO_NAME)

To serve the site at **`https://username.github.io/OS/`** instead of a custom domain:

1. Build with a base path: `BASE_PATH=/OS/ npm run build` (replace `OS` with your repo name).
2. In the workflow, add that env before the build step:  
   `run: BASE_PATH=/OS/ npm run build`
3. Remove or leave empty **`public/CNAME`** and don’t set a custom domain in Pages.

---

## Summary

| Item        | Custom domain              | Project site              |
|------------|----------------------------|---------------------------|
| **Base path** | `base: '/'` (default)      | `BASE_PATH=/YourRepoName/` |
| **CNAME**  | `public/CNAME` = your domain | Omit or empty             |
| **DNS**    | A records or CNAME (www)   | Not needed                |
| **404.html** | Copied at build for SPA routes | Same                     |
