import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import unoCSS from 'unocss/vite'
// import jsxScoped from '@10coding/vite-plugin-jsx-scoped'
import sassDts from 'vite-plugin-sass-dts'

// https://vite.dev/config/
export default defineConfig({
  base: '/mangosteen-fe-vue-1-publish/',
  plugins: [
    // jsxScoped({ warnMultiScopedImport: true }),
    unoCSS(),
    vue(),
    vueJsx(),
    vueDevTools(),
    sassDts(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
