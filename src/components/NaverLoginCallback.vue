<template>
        <div id="naverIdLogin"></div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      naverLogin: null
    }
  },
  mounted () {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'ZeRmZROeKlCY4IdIqK1b', // 개발자 센터에 등록한 clientId
      callbackUrl: 'http://localhost:8080/naverLoginCallback', // 등록한 callback Url
      isPopup: false, // 팝업을 통한 연동처리 여부
      loginButton: {
        color: 'white', type: 3, height: 40
      } // 로그인 버튼의 타입 지정
    })

    // 설정 정보를 초기화 하고 연동을 준비
    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      if (status) { // 연동 상태일 때
        console.log('연동 상태: ' + status)
        console.log(this.naverLogin.user)
        console.log('id: ' + this.naverLogin.user.id)
        console.log('이메일: ' + this.naverLogin.user.email)
        // 필수적으로 받아야 하는 정보가 있다면 callback 처리 시점에 체크한다.
        const email = this.naverLogin.user.getEmail()
        if (email === undefined || email === null) {
          alert('이메일은 필수 정보입니다. 정보 제공에 동의해주세요.')
          // 재동의를 위해 다시 동의 페이지로 이동
          this.naverLogin.reprompt()
        } else {
          // 받아온 id 값으로 userDTO를 검색한다.
          axios
            .get(this.$serverUrl + '/mj/naverLogin/' + this.naverLogin.user.id)
            .then(res => {
              console.log('네이버 로그인 id 확인 결과: ' + res.data)
              if (res.data !== '') { // 데이터가 있으면
              // 해당 정보를 vuex에 담고 main으로 넘긴다.
                this.$store.commit('addLoginUser', res.data)
                console.log('vuex에 담은 정보: ' + this.$store.state.loginUserDTO)
                this.$router.replace('/main/mainhome')
              } else {
              // 없으면 id 값, email 을 가지고 회원가입 페이지로 넘어간다.
                const userDTO = {
                  user_email: this.naverLogin.user.email,
                  naver_token: this.naverLogin.user.id
                }
                // console.log("객체 검사: " + userDTO.user_email)
                this.$store.commit('addLoginUser', userDTO)
                alert('네이버 등록이 완료 되었습니다.\n추가 정보입력을 위해 회원가입 창으로 넘어갑니다.')

                // 넘어가기 전 연동 상태를 끊어준다.
                // this.naverLogin.logout();
                location.href = '/register'
              }
            })
        }
      } else { // 연동 상태가 아닐 때
        console.log('네이버 로그인 연동 상태가 아닙니다.')
      }
    })
  }
}
</script>
<style scoped>
#naverIdLogin {
  display: none;
}
</style>
