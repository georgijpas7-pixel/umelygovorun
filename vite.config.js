import { defineConfig } from 'vite'
import { telegramDevPlugin } from './vite/telegram-dev.js'
import imagemin from 'vite-plugin-imagemin'

// GitHub Pages base path: set GITHUB_PAGES=true for subpath deployment (username.github.io/repo-name)
// For custom domain on root (username.github.io or custom domain), leave empty
const base = process.env.GITHUB_PAGES ? '/umeliy-govorun/' : '/'

export default defineConfig({
  base,
  plugins: [
    telegramDevPlugin(),
    imagemin({
      webp: { quality: 80 },
      avif: { quality: 70 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.8] },
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
})