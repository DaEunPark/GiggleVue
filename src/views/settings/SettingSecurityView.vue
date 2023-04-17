<template>
    <div class="container">
      <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
        <h3 class ="list-group-item text-dark border-primary my-2">
          <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" /> Security
        </h3>
      </button>
      <hr class="setting__bar mb-2">
        <form class="border-round-radious" style="color:black;">
            <div class="settingSecurity border-round-radious">
                <div class="security__password px-4 mb-2">
                    <h5>비밀번호 변경</h5>
                    <div class="security__newPassword">
                        <label for="newPassword" class="col-form-label col-form-label-sm security__newPassword" >{{checkPwdMsg}}</label>
                        <input type="password" v-model="password" @keyup="checkPwd" class="form-control security__newPassword" style="background-color:#dbdbdb;" id="security__orginPassword" placeholder="현재 비밀번호를 입력해주세요.">
                    </div>
                    <div class="security__newPasswordAgain">
                        <label for="newPasswordAgain" class="col-form-label  security__newPasswordAgain mt-2">비밀번호 재입력</label>
                        <input type="password" v-model="newPwd" class="form-control security__newPasswordAgain" style="background-color:#dbdbdb;" id="security__newPasswordAgain" placeholder="변경할 비밀번호를 입력해주세요.">
                    </div>
                    <div class="security__passwordBtn">
                        <button @click="changePassWord" type="button" class="btn btn-success btn-rg security__passwordBtn mt-2">OK</button>
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="security__account px-4 mb-2">
                    <h5>계정 공개 설정</h5>
                    <div class="security__accountOpen">
                        <input class="form-check-input mr-1" type="checkbox" value="" id="flexCheckDefault" style="background-color:#dbdbdb;">
                        <label class="form-check-label col-form-label-sm mx-1" for="flexCheckDefault">
                        내 계정을 친구들에게만 공개합니다.
                        </label>
                    </div>
                    <div class="security__accountBtn">
                        <button type="button" class="btn btn-success btn-rg security__accountBtn mt-2">OK</button>
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="security__withdrawal px-4 mb-2">
                    <h5>회원 탈퇴</h5>
                    <div class="security__withdrawalBtn">
                        <a href='/main/setting/security/unregister' type="button" class="btn btn-primary  btn-rg security__withdrawalBtn mt-2">탈퇴하기</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      password: '',
      newPwd: '',
      checkPwdMsg: '비밀번호',
      checkPwdState: 0
    }
  },
  methods: {

    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    },
    checkPwd () {
      if (this.password !== '') {
        if (this.password !== this.$store.state.loginUserDTO.user_pwd) {
          this.checkPwdMsg = '비밀번호가 일치하지 않습니다!'
          this.checkPwdState = 0
        } else {
          this.checkPwdMsg = '비밀번호가 일치합니다.'
          this.checkPwdState = 1
        }
      }
    },
    changePassWord () {
      if (this.checkPwdState === 0) {
        // 비밀번호를 알맞지 않게 입력했거나 입력값이 없는 경우
        alert('현재 비밀번호를 알맞게 입력해주세요.')
        document.getElementById('security__orginPassword').focus()
      } else {
        if (this.newPwd === '') {
          // 새로운 비밀번호 값이 없는 경우
          alert('변경하실 비밀번호를 입력해주세요.')
          document.getElementById('security__newPasswordAgain').focus()
        } else {
          if (!this.isPwdOk(this.newPwd)) {
            alert('비밀번호는 영문, 숫자, 특수문자 포함 8자 이상이어야 합니다.')
          } else {
            axios.post(this.$serverUrl + '/mj/chagePwd', {
              user_no: this.$store.state.loginUserDTO.user_no,
              user_pwd: this.newPwd
            })
              .then(res => {
                if (res.data !== 0) {
                  this.$store.commit('updatePwd', this.newPwd)
                  alert('비밀번호를 변경을 완료했습니다.')
                  location.reload()
                }
              })
          }
        }
      }
    },
    isPwdOk (pwd) {
      // 비밀번호 유효성 검사하는 함수
      console.log('비밀번호 유효성 검사')
      const checkPwdTool = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,15}$/
      return checkPwdTool.test(pwd)
    }
  }
}
</script>

<style scoped>
.container {
    height : 100vh;
    margin : 0;
}
.setting__bar{

width:100%;
margin : 0 auto;
color : gray;
}
.security__passwordBtn, .security__accountBtn, .security__withdrawalBtn{
    display: flex;
    justify-content: right;
}
</style>
