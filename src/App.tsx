import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { useCounterStore } from './stores/counter'

export const App = defineComponent({
  setup() {
    const { count } = storeToRefs(useCounterStore())
    const { increment } = useCounterStore()

    return () => (
      <>
        <h1>count {count.value}</h1>
        <button onClick={() => increment()}>+ 1</button>
      </>
    )
  },
})

export default App
