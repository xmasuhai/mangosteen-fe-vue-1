import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
// import jsxScoped from '@10coding/vite-plugin-jsx-scoped'

// https://vite.dev/config/
export default defineConfig({
  base: '/mangosteen-fe-vue-1-publish/',
  plugins: [
    // jsxScoped({ warnMultiScopedImport: true }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
