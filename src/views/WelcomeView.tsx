import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import '@/modules/welcome/WelcomeView.scoped.scss'
// [@10coding/vite-plugin-jsx-scoped] 仅支持相对/绝对路径的 scoped 样式导入(已跳过 scoped 化)
// import '../modules/welcome/WelcomeView.scoped.scss'
import logo from '@/assets/icons/mangosteen.svg'
import { cn } from 'cn'

export const WelcomeView = defineComponent({
  setup: (/* props, context */) => {
    return () => (
      <div class="wrapper">
        <header class="title">
          <img src={logo} alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main
          class={cn([
            'welcome-card bg-welcomeCardBg mb-62px ml-16px mr-16px rounded-lg',
            'flex flex-col flex-grow items-center justify-around',
          ])}>
          <RouterView />
        </main>
      </div>
    )
  },
})
