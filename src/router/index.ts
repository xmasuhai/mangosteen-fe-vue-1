import { createRouter } from 'vue-router'
import { routes } from '@/router/routes';
import { routerHistory } from '@/router/routerHistory';

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
