import { defineComponent } from 'vue'
import '@/modules/welcome/welcome.scoped.scss'
import { RouterView } from 'vue-router'

export const WelcomeView = defineComponent({
  setup: (/* props, context */) => {
    return () => (
      <div class="wrapper">
        <header class="wrapper__tip">
          <h1>山竹记账</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    )
  },
})
