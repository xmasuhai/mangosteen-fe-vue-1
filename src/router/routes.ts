import type { RouteRecordRaw } from "vue-router"
import { WelcomeView } from '@/views/WelcomeView'
import { WelCome1stPage } from "@/modules/welcome/WelCome1stPage"
import { Welcome2ndPage } from "@/modules/welcome/Welcome2ndPage"
import { Welcome3rdPage } from "@/modules/welcome/Welcome3rdPage"
import { Welcome4thPage } from "@/modules/welcome/Welcome4thPage"

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/welcome/1',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', component: WelCome1stPage, },
      { path: '2', component: Welcome2ndPage, },
      { path: '3', component: Welcome3rdPage, },
      { path: '4', component: Welcome4thPage, },
    ],
  },
] as const
