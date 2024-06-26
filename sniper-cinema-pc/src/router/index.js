import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
          children: [
            {
              path: '/detail',
              name: 'detail',
              component: () => import('@/views/home/detail.vue')
            },
          ]
        },
        {
          path: '/movie',
          name: 'movie',
          component: () => import('@/views/movie/index.vue')
        },
        {
          path: '/drama',
          name: 'drama',
          component: () => import('@/views/drama/index.vue')
        },
        {
          path: '/variety',
          name: 'variety',
          component: () => import('@/views/variety/index.vue')
        },
        {
          path: '/anime',
          name: 'anime',
          component: () => import('@/views/anime/index.vue')
        },
        {
          path: '/documentary',
          name: 'documentary',
          component: () => import('@/views/documentary/index.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about/index.vue')
    }
  ]
})

export default router
