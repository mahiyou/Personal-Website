// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/views/Portfolio.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
