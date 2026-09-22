import { createRouter, createWebHistory } from 'vue-router'
import { FooComp } from '@/views/FooComp'
import { BarComp } from '@/views/BarComp';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/foo'
    },
    {
      path: '/foo',
      component: FooComp,
    },
    {
      path: '/bar',
      component: BarComp,
    },
  ],
})

export default router
