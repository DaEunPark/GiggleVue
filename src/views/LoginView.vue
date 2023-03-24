<template>
    <router-link to="/"></router-link>
    <div class="background">
        <div class="loginForm">
        <form class="form-group">
            <p id="id">&nbsp;&nbsp;&nbsp;이메일 &nbsp;&nbsp;&nbsp;<input type="text" class="input"/></p>
            <p id="pwd">비밀번호 &nbsp;&nbsp;&nbsp;<input type="password" class="input"/></p>
            <p id="loginSubmit"><router-link class="text-info" to="/main/mainhome">로그인</router-link></p>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <p id="loginNaver">네이버</p>
            <p id="loginFacebook">페이스북</p>
            <p id="loginApple">애플</p>
            <p id="loginService">
                아이디찾기 |
                비밀번호찾기 |
                <router-link class="text-info" to="/register">회원가입</router-link>
            </p>
        </form>

        </div>
    </div>
</template>
<script>

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
#id, #pwd, #loginSubmit, #loginService {
   font-weight: bold;
}
.form-group {
    text-align: center;
    margin-top: 10%;
    color:  black;
}
#loginSubmit {
    margin-left: 12%;
}
</style>
