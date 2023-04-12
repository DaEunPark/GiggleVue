<!-- eslint-disable eqeqeq -->
<template>
  <div>
    <div id='G_OAuth_btn'></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'App',
  data () {
    return {
      user: {},
      user_email: ''
    }
  },
  components: {
  },
  mounted () {
    const google = window.google
    google.accounts.id.initialize({
      client_id: '196854062269-nl9v00805p2kt359tpaqb0lrjtt8lrch.apps.googleusercontent.com',
      callback: this.handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('G_OAuth_btn'),
      { theme: 'outline', size: 'medium' }
    )
  },
  methods: {
    handleCallbackResponse (res) {
      console.log('Encoded JWT ID token: ' + res.credential)

      const userObject = VueJwtDecode.decode(res.credential)
      console.log(userObject)
      this.user = userObject

      console.log('gmail = ' + this.user.email)

      const data = { google_token: this.user.email }

      this.$axios.post(this.$serverUrl + '/googlelogin', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.google_token == this.user.email) {
          this.$router.push({
            path: '/main/mainhome'
          })
          this.$store.commit('addLoginUser', res.data)
        // eslint-disable-next-line eqeqeq
        } else if (res.data.google_token != this.user.email) {
          alert('일치하는 회원 정보가 없습니다.')
          // eslint-disable-next-line eqeqeq
          if (confirm('회원가입을 진행 하시겠습니까?') == true) {
            this.$store.commit('google_token', this.user.email)
            this.$router.push({
              path: '/register'
            })
          } else {
            // eslint-disable-next-line no-unused-expressions
            stop
          }
        }
      })

      document.querySelector('#G_OAuth_btn').hidden = true
    },
    handleSignOut () {
      this.user = {}
      document.querySelector('#G_OAuth_btn').hidden = false
    }
  }
}
</script>
