import { defineComponent } from 'vue'

export const WelCome1stPage = defineComponent({
  setup: (/* props, context */) => {
    return () => (
      <div
        class="bg-white h-full mb-62px ml-16px
        mr-16px border-3px border-solid border-red">
        <div class="description"></div>
        <div class="go-next"></div>
      </div>
    )
  },
})
