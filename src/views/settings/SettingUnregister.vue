<template>
    <div class="container">
        <form class="card bg-primary border-round-radious">
            <div class="settingSecurity list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" /></a>회원탈퇴</h3>
                </div>
                <div class="security__password px-4 mb-2">
                    <div class="card text-white bg-secondary mb-3" id="myprofile">
                        <div class="card-body row">
                            <div class="col-sm-4">
                                <img id="myprofileImg" v-bind:src="this.$store.state.loginUserDTO.profile_image"/>
                                <p>{{this.$store.state.loginUserDTO.user_nick}}</p>
                            </div>
                            <div class="col-sm-8">
                                <p>{{this.$store.state.loginUserDTO.user_email}}</p>
                                <p>생년월일: {{this.$store.state.loginUserDTO.user_birth}}</p>
                                <p>가입일: {{this.$store.state.loginUserDTO.user_joindate.substr(0, 10)}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4 mb-2">
                    <div class="unregister__pwd">
                        <label for="unregister__pwd" class="col-form-label col-form-label-sm security__newPassword">비밀번호 확인</label>
                        <input v-model="unregister__pwd" type="password" class="form-control form-control-sm security__newPassword" id="unregister__pwd" placeholder="비밀번호를 다시 입력해주세요.">
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="security__account px-4 mb-2">
                    <h5>확인해주세요!</h5>
                    <div>
                        <p>Giggle 서비스를 탈퇴하면 회원님의 프로필과 계정 상세 정보 및 이용 기록은 삭제됩니다. 삭제된 정보는 복구 가능하지 않습니다.</p>
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="security__withdrawal px-4 mb-2">
                    <div class="security__withdrawalBtn">
                        <button @click="unregister" type="button" class="btn btn-secondary btn-rg security__withdrawalBtn mt-2">탈퇴하기</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default ({
  data () {
    return {
      unregister__pwd: '',
      user_no: this.$store.state.loginUserDTO.user_no,
      user_pwd: this.$store.state.loginUserDTO.user_pwd
    }
  },
  methods: {
    unregister () {
      // 비밀번호를 입력했는지 확인한다.
      if (this.unregister__pwd === '') {
        alert('비밀번호 확인을 입력해주세요.')
        document.getElementById('unregister__pwd').focus()
        return false
      } else {
        // 비밀번호가 회원정보와 일치하는지 확인한다.
        if (this.unregister__pwd !== this.user_pwd) {
          alert('비밀번호가 일치하지 않습니다.')
          document.getElementById('unregister__pwd').focus()
          return false
        } else {
          if (confirm('해당 회원 정보를 삭제합니다.')) {
            // 회원번호로 회원 정보를 삭제한다.
            axios
              .get(this.$serverUrl + '/mj/unregister/' + this.user_no)
              .then(res => {
                this.$router.push({
                  name: 'login'
                })
              })
          }
        }
      }
    }
  }
})
</script>

<style scoped>
.container {
    height : 100vh;
    margin : 0;
}
.setting__bar{
width:550px;
margin : 0 auto;
color : gray;
}
.security__withdrawalBtn{
    display: flex;
    justify-content: left;
    margin-bottom: 10px;
}
#myprofile {
    max-width: 50%;
}
.col-sm-4 {
    text-align: center;
}
.col-sm-4 p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: bold;
}
.col-sm-8 {
    padding-left: 15px;
}
.col-sm-8 p {
    font-size: 13px;
}
#myprofileImg {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>
