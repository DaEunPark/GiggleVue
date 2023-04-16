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
import SettingUnregister from '../views/settings/SettingUnregister.vue'
import Mypage from '../views/MyPage.vue'
import SearchView from '../views/SearchView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import gCallback from '../views/gCallback.vue'
// eslint-disable-next-line no-unused-vars
import NaverLoginCallback from '../components/NaverLoginCallback.vue'
import PostDetailView from '../views/PostDetailView.vue'
import NotMyPage from '../views/NotMyPage.vue'
import recommendFollow from '../views/recommendFollow.vue'
import GLogin1 from '../views/GLogin1.vue'
import ModifyView from '../views/ModifyView.vue'
import FollowView from '../views/FollowView.vue'

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
        path: 'setting/security/unregister',
        name: 'unregister',
        components: {
          rmain: SettingUnregister
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
      },
      {
        path: 'mypage',
        name: 'MyPage',
        components: {
          rmain: Mypage
        }
      },
      // {
      //   path: 'notmypage',
      //   name: 'notmypage',
      //   components: {
      //     rmain: NotMyPage
      //   }
      // },
      {
        path: 'notmypage/:user_nick',
        name: 'notmypage',
        components: {
          rmain: NotMyPage
        }
      },
      {
        path: 'myfriend',
        name: 'myfriend',
        components: {
          rmain: FollowView
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

      {
        path: 'postdetail',
        name: 'postdetail',
        components: {
          rmain: PostDetailView

        },
        meta: {
          reload: true
        }
      },
      {

        path: 'recommendFollow',
        name: 'recommendFollow',
        components: {
          rmain: recommendFollow
        }
      },
      {
        path: 'modifypost',
        name: 'modifypost',
        components: {
          rmain: ModifyView

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
    path: '/register',
    name: 'register',
    components: {
      rhome: RegisterView
    }
  },
  {
    path: '/naverLoginCallback',
    name: 'naverLoginCallback',
    components: {
      rhome: NaverLoginCallback
    }
  },
  {
    path: '/google-login',
    name: 'gCallback',
    components: {
      rhome: gCallback
    }
  },
  {
    path: '/GLogin1',
    name: 'GLogin1',
    components: {
      rhome: GLogin1
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
