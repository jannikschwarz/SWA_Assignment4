import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/register.vue'
import Login from '../components/Login.vue'
import Highscore from '../components/highscore.vue'
import Sidebar from '../components/sidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home/:token',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/highscore',
      name: 'highscore',
      component: Highscore
    }
  ]
})

export default router
