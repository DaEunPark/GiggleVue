
<template>
    <router-link to="/"></router-link>
    <div class="background">

<!-- 아이디찾기 Modal 시작 -->
<div class="modal fade" id="findId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onclick="location.href='/'"></button>
            </div>
            <!--modal body-->
        <findIdBody>
            <input type="text" class="form-control" v-model="find_phone" ref="phone" maxlength="20" placeholder="핸드폰번호"
            @keyup="this.find_phone=this.find_phone.replace(/[^0-9]/g,'');"/>
            <div class="form-floating">
                <input type="date" class="form-control" v-model="find_birth" ref="birth" placeholder="생년월일" id="date"/>
                <label for="find_birth">Birthday</label>
            </div>
            <button type="submit" class="btn btn-m btn-success" id="findIdBtn" @click="searchId()"
            v-bind:disabled="(this.find_phone.length < 8 || this.find_birth == '')">확인</button>
            <hr/>
            <!-- <p v-if="findId" class="idInfo">{{ this.user_joindate }}에 가입하신 아이디가 있습니다.</p> -->
            <p v-if="this.findId == 1" id="idInfo">가입 하신 이메일 아이디</p>
            <p v-if="this.findId == 1" id="idInfo2"> {{ this.find_email }}</p>
            <p v-if="this.findId == 2" id="idInfo">가입 정보가 없습니다.</p>
            <p v-if="this.findId == 2" id="idInfo">회원 가입을 진행해주세요.</p>
            <p v-if="this.findId == 2" id="idInfo">
                <button type="button" id="join" class="btn btn-sm" onclick="location.href='/register'">
                    <span>회원가입</span>
                </button>
            </p>
            <!-- <p v-if="this.findId == 2" id="idInfo2">
                <button type="button" id="join" class="btn btn-sm" onclick="location.href='/register'">
                    <span>회원가입</span>
                </button>
            </p> -->
        </findIdBody>
        </div>
    </div>
</div>
<!-- 아이디찾기 Modal 끝 -->

<!-- 비밀번호찾기 Modal 시작 -->
<div class="modal fade" id="findPwd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onclick="location.href='/'"></button>
            </div>
            <!--modal body-->
        <findPwdBody>
            <input type="email" class="form-control" id="email" v-model.trim="find_email" aria-describedby="email" placeholder="ex)giggle@giggle.com"
            maxlength="45" @input="find_email" required >
            <input type="text" class="form-control" v-model="find_phone" ref="phone" maxlength="20" placeholder="핸드폰번호"
            @keyup="this.find_phone=this.find_phone.replace(/[^0-9]/g,'');"/>
            <div class="form-floating">
                <input type="date" class="form-control" v-model="find_birth" ref="birth" placeholder="생년월일" id="date"/>
                <label for="find_birth">Birthday</label>
            </div>
            <button type="submit" class="btn btn-m btn-success" id="findIdBtn" @click="searchPwd()"
            v-bind:disabled="(this.find_phone.length < 8 || this.find_birth == '' || !this.find_email.includes('@')
            || !this.find_email.includes('.'))">확인</button>
            <hr/>
            <p v-if="this.findPwd == 1" id="idInfo">가입 하신 계정의 비밀번호</p>
            <p v-if="this.findPwd == 1" id="idInfo2"> {{ this.find_pwd }}</p>
            <p v-if="this.findPwd == 2" id="idInfo">가입 정보가 없습니다.</p>
        </findPwdBody>
        </div>
    </div>
</div>
<!-- 비밀번호찾기 Modal 끝 -->

        <div class="card border-primary mb-3" style="max-width: 400px;">

            <div class="card-header login_card-header"></div>

                <div class="card-body">
                        <div class="form">
                            <form>
                                <div class="sm-3">
                                    <input type="email" class="form-control" id="email" v-model.trim="user_email" aria-describedby="email" placeholder="ex)giggle@giggle.com"
                                    maxlength="45" v-on:keydown.enter="login()" @keydown="checkEmail()" @input="user_email" required >
                                    <p v-if="!checkEmail()" id="emailErrorMsg">{{ emailErrorMsg }}</p>
                                    <!-- <i class="fa fa-exclamation-circle" aria-hidden="true" color="red"></i> -->
                                </div>
                                <div class="sm-3">
                                    <input type="password" class="form-control" id="pwd" v-model.trim="user_pwd" aria-describedby="password" placeholder="영문, 숫자, 특수문자 4-15글자"
                                    maxlength="15" v-on:keydown.enter="login()" @keydown="checkPwd()" @input="user_pwd" required>
                                    <p id="pwdErrorMsg">{{ pwdErrorMsg }}</p>
                                </div>
                                <div class="mb-2 form-check" v-if="this.$store.state.checked!='0' && this.$store.state.checked!='1'">
                                    <input type="checkbox" class="form-check-input" id="remember" v-if="this.$store.state.checked!='0' && this.$store.state.checked!='1'">
                                    <label class="form-check-label" for="check">remember</label>
                                </div>
                                <div class="mb-2 form-check" v-if="this.remember=='0'">
                                    <input type="checkbox" class="form-check-input" id="remember" v-if="this.remember == '0'">
                                    <label class="form-check-label" for="check">remember</label>
                                </div>
                                <div class="mb-2 form-check" v-if="this.remember==1">
                                    <input type="checkbox" class="form-check-input" id="remember" v-if="this.remember == 1" checked>
                                    <label class="form-check-label" for="check">remember</label>
                                </div>
                                <button type="button" @click="login()" class="btn btn-primary" id="submit"
                                v-bind:disabled="!this.user_email.includes('@') || !this.user_email.includes('.')
                                                || this.user_pwd.length<4">Login</button>
                            </form>
                            <hr/>
                            <div class="social mb-2">
                            <GLogin1></GLogin1>
                            <NaverLogin></NaverLogin></div>

                            <div class="bottomWrap">
                              <div class="findWrap">
                                <button type="button" id="findId" class="btn btn-link find_btn" onclick="location.href='#findId'"
                                    data-bs-toggle="modal"
                                    data-bs-target="#findId">
                                    <p class="mb-0">아이디</p>
                                </button>
                                <p class="mb-0">/</p>
                                <button type="button" id="findPwd" class="btn btn-link find_btn" onclick="location.href='#findPwd'"
                                    data-bs-toggle="modal"
                                    data-bs-target="#findPwd">
                                    <p class="mb-0">비밀번호 찾기</p>
                                </button>
                              </div>
                                <button type="button" id="join" class="btn btn-link find_btn btn-sm" onclick="location.href='/register'">
                                    <p>아직 Giggle의 회원이 아니신가요?</p>
                                </button>
                            </div>
                        </div>
                </div>
        </div>
    </div>

</template>

<script>
import NaverLogin from '../components/NaverLogin.vue'
import GLogin1 from './GLogin1.vue'

export default {
  data () {
    return {
      emailErrorMsg: '',
      pwdErrorMsg: '',
      user_email: '',
      user_pwd: '',
      user_name: '',
      user_birth: '',
      user_phone: '',
      user_joindate: '',
      findId: '',
      findPwd: '',
      find_email: '',
      find_pwd: '',
      find_name: '',
      find_birth: '',
      find_phone: '',
      find_joindate: '',
      remember: ''
    }
  },
  components: {
    NaverLogin, GLogin1
  },
  mounted () {
    // vuex에 로그인 정보가 있으면 로그아웃 한다.
    if (this.$store.state.loginUserDTO !== null) {
      this.$store.commit('logoutUser')
      console.log('로그인 정보: ')
      console.log(this.$store.state.loginUserDTO)
    }
    // eslint-disable-next-line eqeqeq
    if (this.$store.state.checked == 1) {
      this.remember = 1
      this.user_email = this.$store.state.rememberUserEmail
      this.user_pwd = this.$store.state.rememberUserPwd
    // eslint-disable-next-line eqeqeq
    } else if (this.$store.state.checked == 0) {
      this.remember = 0
    }

    console.log('google_token = ' + this.$store.state.google_token)
  },
  methods: {
    checkEmail () {
      // 한글 입력시 제거
      if (this.user_email.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g)) {
        this.user_email = this.user_email.substring(1, 2)
        // email이 공백이거나 '@', '.'을 포함하지 않을 시 errorMsg보여주기
      } else if ((!this.user_email.includes('@') || !this.user_email.includes('.')) &&
                        this.user_email.length > 0) {
        this.emailErrorMsg = '형식을 올바르게 입력해주세요.'
      } else if (this.user_email.includes('@') && this.user_email.includes('.')) {
        this.emailErrorMsg = ''
      // eslint-disable-next-line eqeqeq
      } else if (this.user_email == '') {
        this.emailErrorMsg = ''
      }
    },
    checkPwd () {
      if (this.user_pwd.length > 0 && this.user_pwd.length < 4) {
        this.pwdErrorMsg = '비밀번호를 4자리 이상 입력해주세요.'
      } else if ((this.user_pwd.length >= 4 && this.user_pwd.length <= 15)) {
        this.pwdErrorMsg = ''
      // eslint-disable-next-line eqeqeq
      } else if (this.user_pwd.length == 0) {
        this.pwdErrorMsg = ''
      }
    },
    login () {
      // eslint-disable-next-line no-undef
      if ((remember).checked) {
        this.$store.commit('rememberUserEmail', this.user_email)
        this.$store.commit('rememberUserPwd', this.user_pwd)
        this.$store.commit('checked', 1)
      } else {
        this.$store.commit('deleteUserEmail', this.$store.state.rememberUserEmail)
        this.$store.commit('deleteUserPwd', this.$store.state.rememberUserPwd)
        this.$store.commit('checked', 0)
      }

      const data = { email: this.user_email, pwd: this.user_pwd }

      // eslint-disable-next-line eqeqeq
      if (this.user_email != '' && this.user_pwd != '') {
        if (this.user_email.includes('@') && this.user_email.includes('.') && this.user_pwd.length >= 4) {
          this.$axios.post(this.$serverUrl + '/login', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            if (res.data.user_email != null) {
              this.$router.push({
                path: '/main/mainhome'
              })
              this.$store.commit('addLoginUser', res.data)
            } else if (res.data.user_email == null) {
              alert('일치하는 회원 정보가 없습니다.')
              if (confirm('회원가입을 진행 하시겠습니까?') === true) {
                this.$router.push({
                  path: '/register'
                })
              } else {
                // eslint-disable-next-line no-unused-expressions
                stop
              }
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          // eslint-disable-next-line no-unused-expressions
          stop
        }
      // eslint-disable-next-line eqeqeq
      } else if (this.user_email == '' && this.user_pwd == '') {
        // eslint-disable-next-line no-unused-expressions
        stop
      // eslint-disable-next-line eqeqeq
      } else if (this.user_email == '' && this.user_pwd != '') {
        // eslint-disable-next-line no-unused-expressions
        stop
      // eslint-disable-next-line eqeqeq
      } else if (this.user_email != '' && this.user_pwd == '') {
        // eslint-disable-next-line no-unused-expressions
        stop
      }
    },
    join () {
      this.$router.push({
        path: '/register'
      })
    },
    searchId () {
      const data = { phone: this.find_phone, birth: this.find_birth }

      if (this.find_phone.includes('-')) {
        this.find_phone = this.find_phone.replaceAll('-', '')
      } else if (this.find_phone.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g)) {
        this.find_phone = this.find_phone.substring(1, 2)
      // eslint-disable-next-line no-empty
      } else if (this.find_phone.match()) {

      }

      this.$axios.post(this.$serverUrl + '/searchId', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.data.user_email != null) {
          this.find_email = res.data.user_email
          // this.user_joindate = res.data.user_joindate;
          this.findId = 1
        } else if (res.data.user_email == null) {
          this.findId = 2
        }
      }).catch(error => {
        console.log(error)
      })
    },
    searchPwd () {
      const data = { email: this.find_email, phone: this.find_phone, birth: this.find_birth }

      if (this.find_phone.includes('-')) {
        this.find_phone = this.find_phone.replaceAll('-', '')
      } else if (this.find_phone.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g)) {
        this.find_phone = this.find_phone.substring(1, 2)
      // eslint-disable-next-line no-empty
      } else if (this.find_phone.match()) {

      }

      this.$axios.post(this.$serverUrl + '/searchPwd', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.data.user_pwd != null) {
          this.find_pwd = res.data.user_pwd
          // this.user_joindate = res.data.user_joindate;
          this.findPwd = 1
        } else if (res.data.user_pwd == null) {
          this.findPwd = 2
        }
      }).catch(error => {
        console.log(error)
      })
    },
    pushGoogle () {
      this.$router.push({
        path: '/GLogin1'
      })
    }
  }
}
</script>

<style>

.background{
    height: 100vh;
    overflow: hidden;
    margin:0;
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
}

.login_card-header {
    height:100px;
    background-image: url("../assets/Glogo.png");
    background-position: center;
    background-size:30%;
    background-repeat: no-repeat;
    margin: 0;
}
.form-control {
    border-color: #fff;
    color:  #000;
}
.card {
    margin:6% auto;
}
.findWrap {
  display : flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
}
.bottomWrap{
  display : flex;
  flex-direction: column;
  justify-content: center;
}
#email, #password, #loginService, #google {
    margin:    5% 0%;
}
#submit {
    padding:    4% 45%;
}
#findId, #findPwd, #join {
    color:  black;
    text-decoration: none;
    font-weight: bold;
    margin: 0 10px;
    padding : 0;
    font-size : 13px;
    font-weight: 900;
}
#findId:hover, #findPwd:hover, #join:hover {
    color:  #ed5c9d ;
}
#emailErrorMsg {
    color:  black;
    font-weight:    bold;
}
#pwdErrorMsg {
    color:  black;
    font-weight:    bold;
}
.black-bg {
    width: 100%; height:100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
}
.white-bg {
    width: 30%;
    height: 80%;
    background: white;
    border-radius: 8px;
    margin: 10% 33%;
}
.modal {
    --bs-modal-width: 100%;
    --bs-modal-height: 80%;
    color:  black;
}
.modal-backdrop {
    position: 50% !important;
}
.modal-dialog {
    width: 50%;
    height: 90%;
}
.modal-content {
    background-color: #fff;
    width: 100%;
    height: 70%;
    z-index: 7;
}
.modal-header {
    border-bottom: 1px solid #ccc;
    text-align: center;
}
.modal-header > button {
    margin: 0;
}
.modal-body {
    padding: 0px 20px 10px 20px;
    height: 100%;
}
.form-control-modal {
    background-color:#fff;
    border:    none;
    border-radius: 6px;
    margin: 2% 10%;
    width:  380px;
    height: 40px;
    color:  black;
}
#findIdBtn {
    margin: 4% 40%;
}
#idInfo {
    color:  black;
    font-size:25px;
    text-align:center;
}
#idInfo2 {
    color:  black;
    font-size:30px;
    text-align:center;
}
.social {
    margin:0 18%;
    padding: 0px 20px;
}
#G_OAuth_btn {
  z-index: 7;
  background-color: transparent;
}
</style>
