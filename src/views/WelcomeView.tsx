import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import s from './WelcomeView.module.scss'
import logo from '@/assets/icons/mangosteen.svg'
import { cn } from 'cn'

export const WelcomeView = defineComponent({
  setup: (/* props, context */) => {
    return () => (
      <div class={s.wrapper}>
        <header class={s.title}>
          <img src={logo} alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main
          class={cn([
            'bg-welcomeCardBg mb-62px ml-16px mr-16px rounded-lg',
            'flex flex-col flex-grow items-center justify-around',
          ])}>
          <RouterView />
        </main>
      </div>
    )
  },
})
