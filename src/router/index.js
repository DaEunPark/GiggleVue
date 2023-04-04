import { createRouter, createWebHistory } from 'vue-router'
import MainContents from '../views/MainContentsView.vue'
import MainHomeView from '../views/MainHomeView.vue'
import BootstrapTestVue from '../views/ExamplePopoverTooltip.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SettingView from '../views/settings/SettingView.vue'
import SettingProfileView from '../views/settings/SettingProfileView.vue'
import SettingSecurityView from '../views/settings/SettingSecurityView.vue'
import SettingFriendView from '../views/settings/SettingFriendView.vue'
import SettingAnaliticsView from '../views/settings/SettingAnaliticsView.vue'
import Mypage from '../views/MyPage.vue'
import SearchView from '../views/SearchView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import UpLoad from '../views/UpLoad.vue'
import GoogleLogin from '../views/GoogleLogin.vue'

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

        path: 'setting',
        name: 'setting',
        components: {
          rmain: SettingView
        }
      },
      {
        path: 'setting/profile',
        name: 'profile',
        components: {
          rmain: SettingProfileView
        }
      },
      {
        path: 'setting/security',
        name: 'security',
        components: {
          rmain: SettingSecurityView
        }
      },
      {
        path: 'setting/friend',
        name: 'friend',
        components: {
          rmain: SettingFriendView
        }
      },
      {
        path: 'setting/analitics',
        name: 'analitics',
        components: {
          rmain: SettingAnaliticsView
        }
      }, {
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
        path: 'search/:keyword',
        name: 'searchresult',
        components: {
          rmain: SearchResultView
        }
      },
      {  //upload.vue 파일 miancontentsview.vue 로 옮겨짐 삭제해도됨 
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
    component: GoogleLogin
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
