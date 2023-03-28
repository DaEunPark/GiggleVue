import { createRouter, createWebHistory } from 'vue-router'
import MainContents from '../views/MainContentsView.vue'
import MainHomeView from '../views/MainHomeView.vue'
import BootstrapTestVue from '../views/ExamplePopoverTooltip.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Mypage from '../views/MyPage.vue'
import SearchView from '../views/SearchView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import UpLoad from '../views/UpLoad.vue'
import GoogleLoginView from '../views/GoogleLogin.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    components: {
      rhome: MainHomeView
    },
    children: [
      {
        path: 'mainhome',
        components: {
          rmain: MainContents
        }
      },
      {
        path: 'bootstraptest',
        name: 'bootstraptest',
        components: {
          rmain: BootstrapTestVue
        }
      },
      {
        path: 'mypage',
        name: 'MyPage',
        components: {
          rmain: Mypage
        }
      },
      {

        path: 'search',
        name: 'search',
        components: {
          rmain: SearchView
        }
      },
      {
        path: 'search/:id',
        name: 'searchresult',
        components: {
          rmain: SearchResultView
        }
      },
      {
        path: 'upload',
        name: 'UpLoad',
        components: {
          rmain: UpLoad
        }
      }

    ] // MainHomeView children
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
    component: GoogleLoginView
    // component: () => import(/* webpackChunkName: "LoginGroup" */'../views/GoogleLogin.vue')
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
