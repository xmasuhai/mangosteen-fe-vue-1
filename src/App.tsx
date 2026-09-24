import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

/*
 * @Author: xmasuhai
 * @Email: xmasuhai@163.com
 * @Date: 2026-09-22 14:46:46
 * @Last Modified by: xmasuhai xmasuhai@163.com
 * @Last Modified time: 2026-09-22 17:47:04
 */
export const App = defineComponent({
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  },
})

export default App
