import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import path from 'path'

// For GitHub Pages project site use: base: '/OS/' (or your repo name)
// For custom domain use: base: '/'
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'copy-404-for-github-pages',
      closeBundle() {
        const outDir = path.resolve(__dirname, 'dist')
        const index = path.join(outDir, 'index.html')
        const fallback = path.join(outDir, '404.html')
        if (existsSync(index)) {
          copyFileSync(index, fallback)
        }
      },
    },
  ],
  resolve: {
    alias: { '@': './src' },
  },
})
