
<template>
    <router-link to="/"></router-link>
    <div class="background">
        <div class="card border-primary mb-3" style="max-width: 400px;">
            <div class="card-header"></div>
                <div class="card-body">
                        <div class="form">
                            <form>
                                <div class="sm-3">
                                    <input type="email" class="form-control" id="email" v-model.trim="user_email" aria-describedby="email" placeholder="ex)giggle@giggle.com" 
                                    maxlength="45" v-on:keydown.enter="login()" @keydown="checkEmail()" required >
                                    <p v-if="!checkEmail()" id="emailErrorMsg">{{ emailErrorMsg }}</p>
                                    <!-- <i class="fa fa-exclamation-circle" aria-hidden="true" color="red"></i> -->
                                </div>
                                <div class="sm-3">
                                    <input type="password" class="form-control" id="pwd" v-model.trim="user_pwd" aria-describedby="password" placeholder="영문, 숫자, 특수문자 4-15글자" 
                                    maxlength="15" v-on:keydown.enter="login()" @keydown="checkPwd()" required>
                                    <p id="pwdErrorMsg">{{ pwdErrorMsg }}</p>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="remember">
                                    <label class="form-check-label" for="check">remember</label>
                                </div>
                                <button type="button" @click="login()" class="btn btn-primary" id="submit" 
                                v-bind:disabled="!this.user_email.includes('@') || !this.user_email.includes('.')
                                                || this.user_pwd.length<4">Login</button>
                            </form>
                            <hr/>
                            <div class="g-signin2" data-onsuccess="onSignIn" id="google" data-width="340" data-height="50" data-longtitle="true"></div>
                            <a href="#" id="findId">아이디찾기</a>
                            <font-awesome-icon icon="fa-regular fa-circle-exclamation" style="color: #e01515;" />
                            <a href="#" id="findPwd">비밀번호찾기</a>
                            <router-link class="text-info" to="/register">회원가입</router-link>
                        </div>
                </div>
        </div>
    </div>
</template>
<script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"/>
export default {
    data() {
        return {
            emailErrorMsg: '',
            pwdErrorMsg: '',
            user_email : '',
            user_pwd : ''
        }
    },
    methods: {
        checkEmail() {
            // 한글 입력시 제거
            if (this.user_email.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g)) {
                this.user_email = this.user_email.substring(1, 2);
            // email이 공백이거나 '@', '.'을 포함하지 않을 시 errorMsg보여주기
            } else if((!this.user_email.includes("@") || !this.user_email.includes(".")) && this.user_email != '') {
                this.emailErrormsg="형식을 올바르게 입력해주세요.";

            } else if(this.user_email.includes("@") && this.user_email.includes(".")) {
                this.emailErrorMsg="";
            } else if(this.user_email == '') {
                this.emailErrorMsg="";
            } 
        },
        checkPwd() {
            if(0 < this.user_pwd.length && this.user_pwd.length < 4) {
                this.pwdErrorMsg="❗️비밀번호를 4자리 이상 입력해주세요.";
            } else if((4<=this.user_pwd.length && this.user_pwd.length <=15)) {
                this.pwdErrorMsg="";
            } else if(this.user_pwd.length == 0) {
                this.pwdErrorMsg="";
            } 
        },
        login() {
                let data = { email: this.user_email, pwd: this.user_pwd };

                if(this.user_email != "" && this.user_pwd != "") {
                    if(this.user_email.includes("@") && this.user_email.includes(".") && this.user_pwd.length >= 4) {
                        this.$axios.post(this.$serverUrl + "/login", JSON.stringify(data), {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then((res)=>{
                            console.log(res);
                            if(res.data.user_email != null) {
                                this.$router.push({
                                    path: '/main/mainhome'
                                })
                        } else if(res.data.user_email == null) {
                            alert('일치하는 회원 정보가 없습니다.');
                        }
                    }).catch(error=>{
                        console.log(error);
                        throw new Error(error);
                    });
                } else {
                    stop;
                }
            } else if(this.user_email == "" && this.user_pwd == "") {
                stop;
            } else if(this.user_email == "" && this.user_pwd != "") {
                stop;
            } else if(this.user_email != "" && this.user_pwd == "") {
                stop;
            }
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
#emailErrorMsg {
    color:  black;
    font-weight:    bold;
}
#pwdErrorMsg {
    color:  black;
    font-weight:    bold;
}
</style>