// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isVercel = !!process.env.VERCEL; // Vercel setzt diese Env-Variable automatisch

export default defineConfig({
  base: isVercel ? '/' : '/yogawitholga/', // Vercel=/ ; GitHub Pages=/yogawitholga/
  plugins: [react()],
})
