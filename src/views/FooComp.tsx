import { defineComponent } from 'vue'

export const FooComp = defineComponent({
  setup: (/* props, context */) => {
    return () => <div>Foo</div>
  },
})
