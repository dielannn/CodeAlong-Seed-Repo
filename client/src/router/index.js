import { createRouter, createWebHistory } from 'vue-router'
import menu from "../components/menu.vue"
import q3 from "../components/q3/q3.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: menu
    },
    {
      path: "/q3",
      component: q3
    }
  ],
})

export default router
