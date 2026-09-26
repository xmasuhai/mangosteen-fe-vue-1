import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import pig from '@/assets/icons/pig.svg'

export const WelCome1stPage = defineComponent({
  setup: (/* props, context */) => {
    return () => (
      <>
        <img src={pig} alt="icon" class="w-128px h-130px mt-25%" />
        <div class="description flex flex-col items-center text-[2em]">
          <h2>会挣钱</h2>
          <h2>还要会省钱</h2>
        </div>
        <div class="go-next text-primaryColor mb-84px text-[2em] font-bold">
          <RouterLink to="/welcome/2">下一页</RouterLink>
        </div>
      </>
    )
  },
})
