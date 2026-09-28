import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import pig from '@/assets/icons/pig.svg'

export const WelCome1stPage = defineComponent({
  inheritAttrs: false,
  setup: ( _props, _context ) => {
    console.log('WelCome1stPage_______________________')
    console.log("%c 2 --> Line: 9||WelCome1stPage.tsx\n _props: ","color:#0f0;", _props);
    console.log("%c 3 --> Line: 6||WelCome1stPage.tsx\n _context: ","color:#ff0;", _context);
    console.log('_______________________WelCome1stPage')
    return () => (
      <>
        <img src={pig} alt="pig" class="w-128px h-130px mt-25%" />
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
