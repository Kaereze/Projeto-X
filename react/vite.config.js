import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado como subpasta estática do GitHub Pages já existente
// (https://kaereze.github.io/Projeto-X/react-app/), sem precisar de CI.
export default defineConfig({
  plugins: [react()],
  base: '/Projeto-X/react-app/',
  build: {
    outDir: '../react-app',
    emptyOutDir: true,
  },
})
