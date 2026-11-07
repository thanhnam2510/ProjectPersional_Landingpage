import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const src = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  // GitHub Pages serves the site from /<repo>/, not from the domain root.
  base: '/ProjectPersional_Landingpage/',
  plugins: [react()],
  resolve: {
    alias: { '@': src },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Lets every component write `@use 'tokens'` and `@use 'mixins'`.
        loadPaths: [`${src}/styles`],
      },
    },
  },
})
