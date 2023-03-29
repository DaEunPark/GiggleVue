<template>

<div class="sidebar-left">
   <div class="list-group list-group-flush" id="list-tab" role="tablist" ><hr><hr>
        <div class="user_img_box">
            <img class="img_circle user_img a" name="프로필" src="../assets/profile02.jpg">
        </div><br>
        <a link to="/main/mypage" class="user_hover" style="text-align:center;">
            <span class="badge rounded-pill bg-success text-nowrap" style="padding: 8px 20px 8px 20px; font-size:25px;">USER</span></a>
        <hr>
      <router-link to="/main/mainhome" class="list-group-item list-group-item-action fw-bold" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home  </router-link><br>
      <a href="#notification" data-bs-toggle="modal" data-bs-target="#notification"  class="nav-link list-group-item list-group-item-action fw-bold" id="list-profile-list" data-toggle="list" role="tab" aria-controls="profile">Notification <span class="badge badge-primary badge-pill" style="background-color:#B00D23;">4</span> </a><br>
      <a href="#directMessage" data-bs-toggle="modal" data-bs-target="#directMessage" class="nav-link list-group-item list-group-item-action fw-bold" id="list-messages-list" data-toggle="list"  role="tab" aria-controls="messages">Messages <span class="badge badge-primary badge-pill" style="background-color:#B00D23;">5</span> </a><br>
      <router-link to="#" class="list-group-item list-group-item-action fw-bold" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings </router-link><br>
    
    </div>

    <!-- 알림 Modal -->
    <div
      class="modal fade"
      id="notification"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"

    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
            <AlarmBody/>
        </div>
      </div>
    </div>

    <!-- DM Modal -->
    <div
      class="modal fade"
      id="directMessage"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
            <!--modal body-->
            <DMBody></DMBody>
        </div>
        </div>
    </div>
</div>

<!-- <div class="bg-light sticky-top" id="menubar" style="text-align: center; border-radius: 2rem;">
    <hr>
    <a href="#" class="align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <br>
    <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
         alt="user_image" width="120" height="120" class="rounded-circle align-center" >

    <br><span class="fs-4">USER</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto" style="text-align: left;">
    <li class="nav-item">

        <router-link to="mainhome" class="nav-link active" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
        Home
        </router-link>

    </li>
    <li>

        <router-link to="#" class="nav-link link-dark">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
        Notification
        <span class="badge badge-primary" style="border-radius:50%; background-color:#B00D23; ">5</span>

        </router-link>

    </li>
    <li>

        <router-link to="#" class="nav-link link-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
        DM
        <span class="badge badge-primary" style="margin-left:59px; border-radius:50%; background-color:#B00D23; ">5</span>

        </router-link>
    </li>
    </ul> -->
    <!-- <hr> -->

<!-- </div> -->

</template>
<script>
import DMBody from './DirectMessage.vue'
import AlarmBody from './AlarmMessage.vue'
export default {
  components: { DMBody, AlarmBody }

}
</script>
<style scoped>
.sidebar-left {border-radius: 0%; background-color: #eeeeeede;}
* {-webkit-text-fill-color: black; }
span {-webkit-text-fill-color: white;}

.user_img_box {
    width: 30%;
    height: 100%;
    padding: 20px 0 0 90px ;

}

.user_img_box > .user_img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: auto;
    display: block;
      border-radius: 50%;

}
/* 알람, DM modal 공통 css */
.modal {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
}
.modal-backdrop {
  position: unset !important;
}
.modal-dialog {
  width: 50%;
  height: 90%;
}
.modal-content {
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 100%;
  z-index: 7;
}
.modal-header {
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.modal-header > svg {
  margin: auto;
  margin-left: 338px;
}
.modal-header > button {
  margin: 0;
}
.modal-body {
  padding: 0px 20px 10px 20px;
  height: 100%;
}
</style>
