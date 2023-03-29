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
                              <div class="form-floating">
                                <input type="email" class="form-control"  id="user_email" placeholder="name@example.com"/>
                                <label for="user_email">Email</label>
                              </div>
                          </div>
                          <div class="sm-3">
                              <div class="form-floating">
                                <input type="password" class="form-control" id="user_pwd" placeholder="비밀번호"/>
                                <label for="user_pwd">Password</label>
                              </div>
                          </div>
                          <div class="sm-3">
                              <div class="form-floating">
                                <input type="text" class="form-control" id="user_nick" placeholder="닉네임"/>
                                <label for="user_nick">Nickname</label>
                              </div>
                          </div>
                          <div class="sm-3">
                            <div class="form-floating">
                              <input type="text" class="form-control" id="user_birth" placeholder="생년월일"/>
                              <label for="user_birth">Birthday</label>
                            </div>
                          </div>
                          <p id="agreeLine">
                            가입하기 버튼을 클릭하면 Giggle의 약관, 개인정보처리방침 및 쿠키
                            정책에 동의하게 됩니다. Giggle로부터 SMS 알림을 받을 수 있으며 알림은
                            언제든지 옵트 아웃할 수 있습니다.
                          </p>
                          <button type="submit" class="btn btn-primary" id="submit">가입</button>
                      </form>
                      
                      <hr/>
                      <div class="g-signin2" data-onsuccess="onSignIn" id="google" data-width="340" data-height="50" data-longtitle="true"></div>
                      <div id="registerSec02">
                        <p>계정이 있으신가요?</p>
                        <a href="/login">로그인</a>
                      </div>
                  </div>
                </div>
        </div>
  </div>
</template>

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
#agreeLine {
  margin: 10px;
  font-size: 10px;
}
.card-body button {
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
</style>
