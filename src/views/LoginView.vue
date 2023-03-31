
<template>
    <router-link to="/"></router-link>
    <div class="background">
        <div class="card border-primary mb-3" style="max-width: 400px;">
            <div class="card-header"></div>
                <div class="card-body">
                        <div class="form">
                            <form>
                                <div class="sm-3">
                                    <input type="email" class="form-control" id="email" v-model="email" aria-describedby="email" placeholder="Email">
                                </div>
                                <div class="sm-3">
                                    <input type="password" class="form-control" id="pwd" v-model="pwd" aria-describedby="password" placeholder="Password">
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
  methods: {
    login () {
      this.$axios.post(this.$serverUrl + '/login', {
        params: {
          email: document.getElementById('email'),
          pwd: document.getElementById('pwd')
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
</style>
