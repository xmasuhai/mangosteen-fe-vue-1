import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import s from '@/modules/welcome/Welcome.module.scss'

export const WelcomeView = defineComponent({
  setup: (/* props, context */) => {
    console.log('WelcomeView', s)

    return () => (
      <div class={s.wrapper}>
        <header class={s.title}>
          <h1 class="text-blue">山竹记账</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    )
  },
})
