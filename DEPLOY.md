# Deploy to GitHub Pages

Checklist for deploying with and without a custom domain.

---

## Phase 1: Without Custom Domain (Project Site)

**URL:** `https://YOUR_USERNAME.github.io/sutralife/` (or your repo name)

### Before push

- [x] `vite.config.ts` uses `BASE_PATH` from env (default `/`)
- [x] `BrowserRouter` uses `basename` for project site
- [x] `404.html` copied at build (SPA fallback)
- [x] `.github/workflows/deploy.yml` builds with `BASE_PATH=/${{ github.event.repository.name }}/`

### Push & enable

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Settings → Pages**:
   - Source: **GitHub Actions**
   - Workflow: Deploy to GitHub Pages

3. After the workflow runs, site is at `https://YOUR_USERNAME.github.io/sutralife/`

---

## Phase 2: With Custom Domain

**URL:** `https://yourdomain.com` or `https://www.yourdomain.com`

### Switch workflow to custom domain

1. Edit `.github/workflows/deploy.yml` – change the build step:
   ```yaml
   - run: npm run build
     # Remove env: BASE_PATH for custom domain
   ```
   Or explicitly: `env: { BASE_PATH: '/' }`

2. Push the change.

3. **Settings → Pages**:
   - Custom domain: enter `yourdomain.com` or `www.yourdomain.com`
   - Save

4. At your DNS provider, add:
   - **Apex (yourdomain.com):** A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www:** CNAME record → `YOUR_USERNAME.github.io`

5. Wait for DNS and enable **Enforce HTTPS**.

---

## Summary

| Phase   | BASE_PATH in workflow | GitHub Pages URL                         |
|---------|------------------------|------------------------------------------|
| Project site | `/${{ github.event.repository.name }}/` | `username.github.io/repo-name/` |
| Custom domain | Remove or `'/'`                | `yourdomain.com` or `www.yourdomain.com` |
