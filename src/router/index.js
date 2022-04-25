import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PharmacistsList from '../views/pharmacists/PharmacistsList.vue'
import ViewPharmacist from '../views/pharmacists/ViewPharmacist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pharmacists',
      component: PharmacistsList
    },
    {
      path: '/pharmacists/:id',
      name: 'viewPharmacist',
      component: ViewPharmacist,
      props: true
    }
  ]
})

export default router
