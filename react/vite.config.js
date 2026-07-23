import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado como o site principal do GitHub Pages
// (https://kaereze.github.io/Projeto-X/). O build escreve direto na
// raiz do repositório (outDir: '..'), SEM emptyOutDir — nunca apaga
// nada ali, só grava/sobrescreve index.html, assets/ e os arquivos
// públicos (favicon, imagens).
export default defineConfig({
  plugins: [react()],
  base: '/Projeto-X/',
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})
