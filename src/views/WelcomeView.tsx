import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { wrapper, title } from '@/modules/welcome/Welcome.module.scss'

export const WelcomeView = defineComponent({
  setup: (/* props, context */) => {
    return () => (
      <div class={wrapper}>
        <header class={title}>
          <h1 class="text-blue">山竹记账</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    )
  },
})
