// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { componentTagger } from 'lovable-tagger'

const isVercel = !!process.env.VERCEL; // Vercel setzt diese Env-Variable automatisch

export default defineConfig(({ mode }) => ({
  base: isVercel ? '/' : '/yogawitholga/', // Vercel=/ ; GitHub Pages=/yogawitholga/
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
}))
