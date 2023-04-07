<template>
<div class="background"></div>
</template>
<script>

export default ({
  data () {
    return {
      accessToken: window.location.href
    }
  },
  mounted () {
    console.log('accessToken' + this.accessToken)

    const indexno = this.accessToken.lastIndexOf('authuser=')
    console.log('indexno = ' + indexno)
    this.accessToken = this.accessToken.substring(indexno)

    console.log('accessToken = ' + this.accessToken)

    const indexno2 = this.accessToken.indexOf('=')
    console.log('indexno2 = ' + indexno2)

    const accessToken2 = this.accessToken.substring(indexno2 + 1)
    console.log('accessToken2 = ' + accessToken2)

    const indexno3 = accessToken2.indexOf('&')
    console.log('index3 = ' + indexno3)

    const accessToken3 = accessToken2.substring(0, indexno3)

    console.log('accessToken = ' + accessToken3)

    const data = { token: accessToken3 }
    this.$axios.post(this.$serverUrl + '/googleAuth', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      // eslint-disable-next-line eqeqeq
      if (res.data.user_email != this.user_email) {
        this.$store.commit('addLoginUser', res.data)
        this.$router.push({
          path: '/main/mainhome'
        })
      } else if (res.data.google_token == null) {
        this.$router.push({
          path: '/register'
        })
        alert('일치하는 회원 정보가 없습니다.')
      }
    }).catch(error => {
      console.log(error)
    })
  }
})
</script>
<style scoped>
.background{
    height: 100vh;
    overflow: hidden;
    margin:0;
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
}
</style>
