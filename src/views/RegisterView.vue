<template>
  <div id="registerBox">
    <div class="container register">
      <div id="registerSec01">
        <div id="registerTitle">
          <a href="/"><img alt="Vue logo" src="../assets/Glogo.png" /></a>
          <h5>지금 가입해서 나에게 맞춤 설정된</h5>
          <h5>타임라인을 만들어 보세요!</h5>
        </div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="user_email"
            placeholder="name@example.com"
          />
          <label for="user_email">이메일 주소</label>
        </div>

        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="user_pwd"
            placeholder="비밀번호"
          />
          <label for="user_pwd">비밀번호</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="user_nick"
            placeholder="닉네임"
          />
          <label for="user_nick">닉네임</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="user_birth"
            placeholder="생년월일"
          />
          <label for="user_birth">생년월일</label>
        </div>

        <p id="agreeLine">
          가입하기 버튼을 클릭하면 Giggle의 약관, 개인정보처리방침 및 쿠키
          정책에 동의하게 됩니다. Giggle로부터 SMS 알림을 받을 수 있으며 알림은
          언제든지 옵트 아웃할 수 있습니다.
        </p>
        <button type="button" class="btn btn-info">가입</button>
      </div>
      <div id="registerSec02">
        <p>계정이 있으신가요?</p>
        <a href="/login">로그인</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#registerBox {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
}
.register {
  width: 23%;
  margin: auto;
  text-align: center;
}
#registerSec01 {
  border: 1px solid #ccc;
  padding: 20px 40px 30px 40px;
  background-color: #fff;
}
#registerTitle {
  margin-bottom: 20px;
}
#registerTitle img {
  width: 70%;
  margin-bottom: 15px;
}
h5 {
  margin: 0px;
  color: #8e8e8e;
  font-size: 15px;
  font-weight: bold;
}
.form-floating > input {
  width: 100%;
  margin-top: 8px;
  height: 40px;
  padding: 13px 20px 24px 24px;
  border: 1px solid #a8a8a8;
  border-radius: 3px;
  background-color: #fafafa;
  color: #000;
}
.form-floating > label {
  font-size: 12px;
  color: #a8a8a8;
  padding-top: 13px;
}
input:focus {
  outline: none;
}
#agreeLine {
  margin: 5px auto;
  font-size: 5px;
  color: #8e8e8e;
}
button {
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}
#registerSec02 {
  border: 1px solid #ccc;
  padding: 15px 30px;
  margin-top: 10px;
  background-color: #fff;
}
p {
  display: inline-block;
  font-size: 15px;
  margin: 0;
  color: #000;
}
a {
  display: inline-block;
  font-size: 15px;
  margin-left: 5px;
  color: #4cb5f9;
}
</style>

<script></script>
