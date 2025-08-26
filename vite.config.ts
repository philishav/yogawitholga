// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'

const isVercel = !!process.env.VERCEL; // Vercel setzt diese Env-Variable automatisch

export default defineConfig({
  base: isVercel ? '/' : '/yogawitholga/', // Vercel=/ ; GitHub Pages=/yogawitholga/
  plugins: [react()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
