<template>
        <div id="naverIdLogin"></div>
</template>
<script>
// import axios from 'axios'
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
        color: 'white', type: 1, height: 40
      } // 로그인 버튼의 타입 지정
    })

    // 설정 정보를 초기화 하고 연동을 준비
    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      if (status) { // 연동 상태일 때
        console.log('연동 상태: ' + status)
        console.log(this.naverLogin.user)
        console.log('토큰: ' + this.naverLogin.user.id)
        console.log('이메일: ' + this.naverLogin.user.email)
        // 필수적으로 받아야 하는 정보가 있다면 callback 처리 시점에 체크한다.
        const email = this.naverLogin.user.getEmail()
        if (email === undefined || email === null) {
          alert('이메일은 필수 정보입니다. 정보 제공에 동의해주세요.')
          // 재동의를 위해 다시 동의 페이지로 이동
          this.naverLogin.reprompt()
        } else {
          // 회원가입이면 토큰을 db에 저장해준다.

          // 로그인이면 해당 토큰으로 userDTO를 가져와서 vuex에 담아준다.
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
  display: inline-block;
}
</style>
