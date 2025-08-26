// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { componentTagger } from 'lovable-tagger'

// Wichtig: "base" muss exakt dein Repo-Name mit führendem und abschließenden Slash sein.
export default defineConfig(({ mode }) => ({
  base: '/yogawitholga/',

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
