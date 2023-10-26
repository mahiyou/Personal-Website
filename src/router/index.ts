// Composables
import { createRouter, createWebHistory } from 'vue-router'
import defaultLayout from '@/layouts/default/Default.vue'
import home from '@/views/Home.vue'
import about from '@/views/About.vue'
import portfolio from '@/views/Portfolio.vue'
import contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    component: defaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: home,
      },
      {
        path: '/about',
        name: 'about',
        component: about,
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: portfolio,
      },
      {
        path: '/contact',
        name: 'contact',
        component: contact,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
