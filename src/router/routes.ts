import type { RouteRecordRaw } from "vue-router";
import { BarComp } from "@/views/BarComp";
import { FooComp } from "@/views/FooComp";

export const routes: RouteRecordRaw[] = [
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
] as const
