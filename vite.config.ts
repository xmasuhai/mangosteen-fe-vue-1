import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import unoCSS from 'unocss/vite'
import jsxScoped from '@10coding/vite-plugin-jsx-scoped'
import sassDts from 'vite-plugin-sass-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    unoCSS(),
    // 注意顺序：jsxScoped 必须先于 vueJsx()，它要在 JSX 尚未被
    // @vue/babel-plugin-jsx 编译成 createVNode 之前注入 scope 属性、
    // 改写 *.scoped.* 导入并提取内联 <style scoped>。
    jsxScoped({ warnMultiScopedImport: true }),
    sassDts(),
    vueJsx(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
