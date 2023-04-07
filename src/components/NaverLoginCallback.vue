<template>
    <div>
    </div>
</template>
<script>
import axios from 'axios'
export default ({
  data () {
    return {
      accessToken: window.location.href
    }
  },
  mounted () {
    console.log(this.accessToken)
    // 주소에서 토큰 주소를 뽑아낸다
    this.accessToken = this.accessToken.replace('http://localhost:8080/naverLoginCallback#access_token=', '')
    this.accessToken = this.accessToken.replace('&token_type=bearer&expires_in=3600', '')
    console.log(this.accessToken)

    // 토큰에 해당하는 데이터가 db에 있으면
    axios
      .get(this.$serverUrl + '/mj/naverLogin/' + this.accessToken)
      .then(res => {
        console.log('토큰 확인 결과: ' + res.data)
        if (res.data !== '') {
          // 해당 정보를 vuex에 담고 main으로 넘긴다.
          this.$store.commit('addLoginUser', res.data)
          console.log('vuex에 담은 정보: ' + this.$store.state.loginUserDTO)
          this.$router.replace('/main/mainhome')
        } else {
          // 없으면 토큰 값을 가지고 회원가입 페이지로 넘어간다.
          this.$store.commit('addNaverToken', this.accessToken)
          alert('네이버 등록이 완료 되었습니다.\n나머지 정보입력을 위해 회원가입 창으로 넘어갑니다.')
          this.$router.replace('/register')
        }
      })
  }
})
</script>
