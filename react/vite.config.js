import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado como o site principal do GitHub Pages
// (https://kaereze.github.io/Projeto-X/). O build escreve direto na
// raiz do repositório (outDir: '..'), SEM emptyOutDir — nunca apaga
// nada ali, só grava/sobrescreve index.html, assets/ e os arquivos
// públicos (favicon, imagens).
//
// base: './' (caminho relativo, não fixo em "/Projeto-X/") faz os
// arquivos gerados funcionarem tanto no GitHub Pages quanto abrindo
// direto pelo Live Server (127.0.0.1:5500) — com caminho absoluto fixo,
// o Live Server pedia os arquivos no lugar errado e a página ficava em
// branco.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})
