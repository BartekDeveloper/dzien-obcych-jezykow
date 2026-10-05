import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/dzien-obcych-jezykow/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    cssMinify: 'esbuild', // lightning scala @font-face do 1 ciężaru; esbuild zostawia wszystkie
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        hiszpania: resolve(root, 'hiszpania.html'),
        meksyk: resolve(root, 'meksyk.html'),
        gry: resolve(root, 'gry.html')
      }
    }
  }
})
