import { createApp } from 'vue'
import App from './MainApp.vue'
import router from './router'
import store from '@/store/index.js'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootswatch/dist/quartz/bootstrap.min.css'
// import 'bootstrap'
import './assets/bootswatch/dist/custom/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.esm.min.js'
// import 'jquery/src/jquery.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import Popper from 'vue-popperjs'
// import 'vue-popperjs/dist/vue-popper.css'
// import { createPopper } from '@popperjs/core'
import mitt from 'mitt'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Embed from 'v-video-embed'
import GoogleSignInPlugin from 'vue3-google-signin'

import './assets/css/common.css'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App).use(router)
const emitter = mitt()
library.add(fas, far, fab)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$serverUrl = '//localhost:8086'
app.config.globalProperties.$emitter = emitter

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).use(Embed).mount('#app')
app.use(GoogleSignInPlugin, {
  clientId: 'CLIENT ID OBTAINED FROM GOOGLE API CONSOLE'
})
