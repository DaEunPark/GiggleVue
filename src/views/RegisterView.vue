<template>
  <div class="background">
    <div class="card border-primary mb-3" style="max-width: 400px;">
            <div class="card-header"></div>
                <div class="card-body">
                  <div id="registerTitle">
                    <h5>지금 가입해서 나에게 맞춤 설정된</h5>
                    <h5>타임라인을 만들어 보세요!</h5>
                  </div>
                  <div class="form">
                      <form>
                          <div class="sm-3">
                              <div class="row">
                                <div class="form-floating col-sm-9">
                                  <input type="text" class="form-control" v-model="user_email" ref="email" placeholder="name@example.com"/>
                                  <label for="user_email">Email</label>
                                </div>
                                <div class="col-sm-3">
                                  <button v-if="this.emailChecked == 'N'" @click="emailCheck" class="btn btn-primary btn-sm" type="button" id="emailCheckBtn">중복<br/>확인</button>
                                  <button v-if="this.emailChecked == 'Y'" @click="emailCheck" class="btn btn-success btn-sm" type="button" id="emailCheckBtn">중복<br/>확인</button>
                                  <input type="hidden" v-model="emailChecked"/>
                                </div>
                              </div>
                          </div>
                          <div class="sm-3">
                              <div class="form-floating">
                                <input type="password" class="form-control" v-model="user_pwd" ref="pwd" placeholder="비밀번호"/>
                                <label for="user_pwd">Password</label>
                              </div>
                          </div>
                          <div class="sm-3">
                              <div class="row">
                                <div class="form-floating col-sm-9">
                                  <input type="text" class="form-control" v-model="user_nick" ref="nick" maxlength="8" placeholder="닉네임"/>
                                  <label for="user_nick">Nickname</label>
                                </div>
                                <div class="col-sm-3">
                                  <button v-if="this.nickChecked == 'N'" @click="nickCheck" class="btn btn-primary" type="button" id="nickCheckBtn" value="N">중복<br/>확인</button>
                                  <button v-if="this.nickChecked == 'Y'" @click="nickCheck" class="btn btn-success" type="button" id="nickCheckBtn" value="N">중복<br/>확인</button>
                                  <input type="hidden" v-model="nickChecked"/>
                                </div>
                              </div>
                          </div>
                          <div class="sm-3">
                              <div class="form-floating">
                                <input type="text" class="form-control" @keyup="phoneCheck" id="userPhone" ref="phone" placeholder="휴대폰번호" maxlength="13"/>
                                <label for="user_pwd">Phone</label>
                              </div>
                          </div>
                          <div class="sm-3">
                            <div class="form-floating">
                              <input type="date" class="form-control" v-model="user_birth" ref="birth" placeholder="생년월일"/>
                              <label for="user_birth">Birthday</label>
                            </div>
                          </div>
                          <p id="agreeLine">
                            가입하기 버튼을 클릭하면 Giggle의 약관, 개인정보처리방침 및 쿠키
                            정책에 동의하게 됩니다. Giggle로부터 SMS 알림을 받을 수 있으며 알림은
                            언제든지 옵트 아웃할 수 있습니다.
                          </p>
                          <button type="button" id="submitBtn" class="btn btn-primary" @click="register()">가입</button>
                      </form>
                      <hr/>
                      <div id="registerSec02">
                        <p>계정이 있으신가요?</p>
                        <a href="/login">로그인</a>
                      </div>
                  </div>
                </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import NaverLogin from '../components/NaverLogin.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NaverLogin
  },
  data () {
    return {
      user_email: '',
      user_pwd: '',
      user_nick: '',
      user_birth: '',
      emailChecked: 'N',
      nickChecked: 'N',
      user_phone: '',
      // eslint-disable-next-line vue/no-dupe-keys
      naver_token: null,
      google_token: null
    }
  },
  mounted () {
    // 소셜 로그인으로 넘어온 경우
    if (this.$store.state.loginUserDTO !== null) {
      // 각각의 토큰값(구분값)을 세팅해준다
      /*
      if (this.$store.state.loginUserDTO.naver_token !== null) {
        // 네이버 토큰 값이 있을 경우
        // eslint-disable-next-line vue/no-mutating-props
        this.naver_token = this.$store.state.loginUserDTO.naver_token
        this.user_email = this.$store.state.loginUserDTO.user_email
      } else if (this.$store.state.loginUserDTO.google_token !== null) {
        // 구글 토큰 값이 있을 경우
        this.google_token = this.$store.state.loginUserDTO.google_token
        this.user_email = this.$store.state.loginUserDTO.user_email
      }
*/

      if (this.$store.state.loginUserDTO.google_token !== undefined) {
        // 구글 토큰 값이 있을 경우
        this.google_token = this.$store.state.loginUserDTO.google_token
        this.user_email = this.$store.state.loginUserDTO.user_email
      } else if (this.$store.state.loginUserDTO.naver_token !== undefined) {
        // 네이버 토큰 값이 있을 경우
        this.naver_token = this.$store.state.loginUserDTO.naver_token
        this.user_email = this.$store.state.loginUserDTO.user_email
      }
    }
    // 이메일 입력 칸에 넘어온 이메일 값을 뿌려준다.(편의를 위해)
    // this.user_email = this.$store.state.loginUserDTO.user_email
  },
  methods: {
    emailCheck () {
      // 해당 이메일 중복 확인을 한다.
      axios.get(this.$serverUrl + '/mj/emailCheck/' + this.user_email)
        .then(res => {
          console.log(res.data)
          if (res.data > 0) {
          // 이메일에 해당하는 건수가 0이상이면
            alert('이미 가입된 이메일입니다.\n다른 이메일을 사용해주시거나 로그인을 해주세요.')
            this.user_email = ''
            this.emailChecked = 'N'
            this.$refs.email.focus()
            return false
          } else {
          // emailChecked의 값을 Y로 바꿔준다.
            this.emailChecked = 'Y'
            console.log(this.emailChecked)
          }
        })
    },
    nickCheck () {
      // 해당 닉네임 중복 확인을 한다.
      axios.get(this.$serverUrl + '/mj/nickCheck/' + this.user_nick)
        .then(res => {
          console.log(res.data)
          if (res.data > 0) {
          // 닉네임에 해당하는 건수가 0이상이면
            alert('중복된 닉네임입니다. \n다른 닉네임을 사용해주세요.')
            this.user_nick = ''
            this.nickChecked = 'N'
            this.$refs.nick.focus()
            return false
          } else {
          // nickChecked의 값을 Y로 바꿔준다.
            this.nickChecked = 'Y'
          }
        })
    },
    phoneCheck () {
      // 휴대폰번호를 숫자만 입력 가능하록 하고 자동을 "-"를 넣어준다.
      const userPhone = document.getElementById('userPhone')
      const phoneNumber = userPhone.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
      let phone = ''
      if (phoneNumber === '') {
        userPhone.value = ''
      }
      if (phoneNumber.length < 4) {
        return phoneNumber
      } else if (phoneNumber.length < 8) {
        phone += phoneNumber.substr(0, 3)
        phone += '-'
        phone += phoneNumber.substr(3)
      } else {
        phone += phoneNumber.substr(0, 3)
        phone += '-'
        phone += phoneNumber.substr(3, 4)
        phone += '-'
        phone += phoneNumber.substr(7)
      }
      userPhone.value = phone
    },
    register () {
      console.log(this.user_email)
      console.log(this.$store.state.naverToken)
      console.log('data()의 naver_token: ' + this.naver_token)
      // 필수 입력 항목과 유효성 검사를 진행한다.
      if (this.user_email === '') {
        alert('이메일은 필수 입력 항목입니다.')
        this.$refs.email.focus()
        return false
      } else {
        // 이메일 유효성 검사를 한다.
        if (!this.checkEmail(this.user_email)) {
          alert('이메일 형식이 올바르지 않습니다.')
          this.$refs.email.focus()
          return false
        } else {
          // 이메일 중복 검사를 했는지 확인한다.
          if (this.emailChecked === 'N') {
            alert('이메일 중복 검사를 해주세요.')
            return false
          }
        }
      }

      // 비밀번호 검사
      if (this.user_pwd === '') {
        alert('비밀번호는 필수 입력 항목입니다.')
        this.$refs.pwd.focus()
        return false
      } else {
        // 비밀번호 유효성 검사를 한다.
        if (!this.checkPwd(this.user_pwd)) {
          alert('비밀번호는 영문, 숫자, 특수문자 포함 8자 이상이어야 합니다.')
          this.$refs.pwd.focus()
          return false
        }
      }

      // 닉네임 검사
      if (this.user_nick === '') {
        alert('Giggle에서 사용할 닉네임을 입력해주세요.')
        this.$refs.nick.focus()
        return false
      } else {
        // 닉네임 중복 검사를 했는지 확인한다.
        if (this.nickChecked === 'N') {
          alert('닉네임 중복 검사를 해주세요.')
          return false
        }
      }

      // 생년월일 검사
      if (this.user_birth === '') {
        alert('생년월일을 입력해주세요.')
        this.$refs.birth.focus()
        return false
      } else {
        // 현재 연도를 기준으로 10살 미만은 가입 불가 하도록 한다.
        const now = new Date()
        const nowYear = now.getFullYear()
        const maxYear = nowYear - 10
        const birthYear = this.user_birth.substr(0, 4)
        if (birthYear > maxYear) {
          alert('최소 가입 연령은 만 10세 입니다.')
          this.$refs.birth.focus()
          return false
        }
      }
      this.user_phone = document.getElementById('userPhone').value
      // 서버와 통신 한다.
      axios.post(this.$serverUrl + '/mj/register', {
        user_email: this.user_email,
        user_pwd: this.user_pwd,
        user_nick: this.user_nick,
        user_birth: this.user_birth,
        user_phone: this.user_phone,
        naver_token: this.naver_token,
        google_token: this.google_token
      })
        .then(res => {
          console.log(res.data.user_birth)
          // 반환값이 null 아니라면 회원 정보 등록에 성공!
          if (res.data !== null) {
            alert('회원 가입에 성공하셨습니다.')

            // 메인으로 이동 하기 전 해당 정보를 vuex에 저장해준다.
            this.$store.commit('addLoginUser', res.data)
            console.log(this.$store.state.loginUserDTO)
            // this.$router.push({
            //   name: 'main',
            //   params: {
            //     user_no: this.$store.state.loginUserDTO.user_no
            //   }
            // })
            this.$router.replace('/main/mainhome')
          } else {
            alert('회원 가입에 실패하셨습니다. |n나중에 다시 시도해주세요.')
          }
        })
    },
    checkEmail (email) {
      // 이메일 유효성 검사하는 함수
      const checkEmailTool = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
      return checkEmailTool.test(email)
    },
    checkPwd (pwd) {
      // 비밀번호 유효성 검사하는 함수
      const checkPwdTool = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,15}$/
      return checkPwdTool.test(pwd)
    }
  }
}
</script>

<style scoped>
.background{
    height: 100vh;
    overflow: hidden;
    margin:0;
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
.card {
  height: 80%;
}
.card-header {
    height:130px;
    background-image: url("../assets/Glogo.png");
    background-size:150px;
    background-repeat: no-repeat;
    background-position: center;
}
.card-body {
  overflow-y: scroll;
}
.card-body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.card-body::-webkit-scrollbar {
  width: 1px;
  background-color: #f5f5f5;
}
#registerTitle {
  margin-bottom: 20px;
  text-align: center;
}
.form input {
  margin-bottom: 10px;
}
h5 {
  margin: 0px;
  font-size: 15px;
  font-weight: bold;
}
#emailCheckBtn, #nickCheckBtn {
  font-size: 15px;
  padding: 5px 15px;
}
#agreeLine {
  margin: 10px;
  font-size: 10px;
}
#submitBtn {
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
  padding: 5px !important;
}
#registerSec02 {
  text-align: center;
}
#registerSec02 p {
  display: inline-block;
  font-size: 16px;
}
#registerSec02 a {
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  color: #4cb5f9;
}
.social {
    margin:0 30%;
    margin-top: 20px;
    padding: 0 5%;
}
</style>
