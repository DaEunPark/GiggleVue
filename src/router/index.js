import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainContents from '../views/MainContentsView.vue'
import MainHomeView from '../views/MainHomeView.vue'
import AboutView from '../views/ExamplePopoverTooltip.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    components: {
      rhome: MainHomeView
    },
    children: [
      {
        path: '/main/mainhome',
        components: {
          rmain: MainContents
        }
      },
      {
        path: '/main/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
          rmain: AboutView
        }
      }

    ]
  },
  {
    path: '/',
    name: 'login',
    alias: ['/', '/login'],
    components: {
      rhome: LoginView
    }
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import(/* webpackChunkName: "LoginGroup" */'../views/GoogleLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    components: {
      rhome: RegisterView
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
