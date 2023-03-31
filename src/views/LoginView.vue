
<template>
    <router-link to="/"></router-link>
    <div class="background">
        <div class="card border-primary mb-3" style="max-width: 400px;">
            <div class="card-header"></div>
                <div class="card-body">
                        <div class="form">
                            <form>
                                <div class="sm-3">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                                    <input type="email" class="form-control" id="email" v-model="email" aria-describedby="email" placeholder="Email">
                                </div>
                                <div class="sm-3">
                                    <input type="password" class="form-control" id="pwd" v-model="pwd" aria-describedby="password" placeholder="Password">
=======
                                    <input type="email" class="form-control" id="email" v-model="user_email" aria-describedby="email" placeholder="ex)giggle@giggle.com" maxlength="45" @keydown="checkEmail()" required >
                                    <p v-if="!checkEmail()" id="errorMsg">{{ errorMsgEmail }}</p>
                                </div>
                                <div class="sm-3">
                                    <input type="password" class="form-control" id="pwd" v-model="user_pwd" aria-describedby="password" placeholder="영문, 숫자, 특수문자 4-15글자" maxlength="15" v-on:keydown.enter="login()" required>
>>>>>>> Stashed changes
=======
                                    <input type="email" class="form-control" id="email" v-model="user_email" aria-describedby="email" placeholder="ex)giggle@giggle.com" maxlength="45" @keydown="checkEmail()" required >
                                    <p v-if="!checkEmail()" id="errorMsg">{{ errorMsgEmail }}</p>
                                </div>
                                <div class="sm-3">
                                    <input type="password" class="form-control" id="pwd" v-model="user_pwd" aria-describedby="password" placeholder="영문, 숫자, 특수문자 4-15글자" maxlength="15" v-on:keydown.enter="login()" required>
>>>>>>> Stashed changes
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="remember">
                                    <label class="form-check-label" for="check">remember</label>
                                </div>
                                <button type="button" @click="login()" class="btn btn-primary" id="submit">Login</button>
                                <router-link class="text-info" to="/main/mainhome">(임시)메인화면으로</router-link>
                            </form>
                            <hr/>
                            <div class="g-signin2" data-onsuccess="onSignIn" id="google" data-width="340" data-height="50" data-longtitle="true"></div>
                            <a href="#" id="findId">아이디찾기</a><a href="#" id="findPwd">비밀번호찾기</a><router-link class="text-info" to="/register">회원가입</router-link>
                        </div>
                </div>
        </div>
    </div>
</template>
<script>

export default {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  methods: {
    login () {
      this.$axios.post(this.$serverUrl + '/login', {
        params: {
          email: document.getElementById('email'),
          pwd: document.getElementById('pwd')
=======
=======
>>>>>>> Stashed changes
    data() {
        return {
            errorMsg: '',
            user_email : '',
            user_pwd : ''
        }
    },
    methods: {
        checkEmail() {
            if((!this.user_email.includes("@") || !this.user_email.includes(".")) && this.user_email != '') {
                this.errorMsg="❗️형식을 올바르게 입력해주세요.";
            } else if(this.user_email.includes("@") && this.user_email.includes(".")) {
                this.errorMsg="";
            } else if(this.user_email == '') {
                this.errorMsg="";
            }
        },
        login() {

            let data = { email: this.user_email, pwd: this.user_pwd };

            this.$axios.post(this.$serverUrl + "/login", JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res)=>{
                if(res.data == 1) {
                    this.$router.push({
                    name: 'main'
                    })
                } else if(res.data == 0) {
                    alert('일치하는 회원 정보가 없습니다.');
                }


            }).catch(error=>{
                console.log(error);
                throw new Error(error);
            });
>>>>>>> Stashed changes
        }

      }).then((res) => {
        console.log(res)
      }).catch(error => {
        console.log(error)
        throw new Error(error)
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
}
.card-header {
    height:100px;
    background-image: url("../assets/Glogo.png");
    background-size:150px;
    background-repeat: no-repeat;
    background-position: center;
}
.form-control {
    border-color: black;
}
.card {
    margin:5% auto;
}
#email, #password, #loginService, #google {
    margin:    5% 0%;
}
#submit {
    padding:    4% 45%;
}

#findId, #findPwd, #join {
    color:  black;
    margin: 5%  5%;
    text-decoration: none;
}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
#errorMsg {
    color:  red;
    font-weight:    bold;
}

>>>>>>> Stashed changes
</style>
