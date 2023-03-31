<!-- eslint-disable vue/no-parsing-error -->
<template>
    <aside class="sidebar">
      <header class="sidebar-header">
        <div class="user_img_box">
            <img class="img_circle user_img" name="profile" src="../assets/profile02.jpg">
        </div>
      </header>
      <nav>

        <button type="button" onclick="location.href='/main/mainhome' ">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor=#black" d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8Zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"/></svg>
            <span>HOME</span>
          </span>
        </button>

        <button type="button" onclick="location.href='#notification'"
            data-bs-toggle="modal"
            data-bs-target="#notification">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor=#black" d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84Zm-1.41 7.46l-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 .08 6Z"/></svg>

            <span>NOTIFICATIONS</span>
          </span>
        </button>

        <button type="button" onclick="location.href='#directMessage'"
            data-bs-toggle="modal"
            data-bs-target="#directMessage">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor=#black" d="M21.15 2.86a2.89 2.89 0 0 0-3-.71L4 6.88a2.9 2.9 0 0 0-.12 5.47l5.24 2a.93.93 0 0 1 .53.52l2 5.25A2.87 2.87 0 0 0 14.36 22h.07a2.88 2.88 0 0 0 2.69-2l4.73-14.17a2.89 2.89 0 0 0-.7-2.97ZM20 5.2l-4.78 14.18a.88.88 0 0 1-.84.62a.92.92 0 0 1-.87-.58l-2-5.25a2.91 2.91 0 0 0-1.67-1.68l-5.25-2A.9.9 0 0 1 4 9.62a.88.88 0 0 1 .62-.84L18.8 4.05A.91.91 0 0 1 20 5.2Z"/></svg>

            <span>MESSAGES</span>
          </span>
        </button>

<a href="#editorview" data-bs-toggle="modal"
            data-bs-target="#editorview" class="hover-change-color" @click="clearAllSearchWords"><span class="badge rounded-pill bg-success" style="padding: 8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></span></a>

        <button>
          <span>
            <i class="uil uil-bars"> </i>
            <span>More</span>
          </span>
        </button>
      </nav>
    </aside>

<!-- 예전 왼쪽 사이드바 시작 -->
<!--div class="sidebar-left">

   <div class="list-group list-group-flush" id="list-tab" role="tablist" ><hr><hr>
        <div class="user_img_box">
            <img class="img_circle user_img a" name="프로필" src="../assets/profile02.jpg">
        </div>
    <br>
        <a link to="mypage" class="user_hover" style="text-align:center;">
            <span class="badge rounded-pill bg-success text-nowrap" style="padding: 8px 20px 8px 20px; font-size:25px;">USER</span></a>

        <hr>
      <router-link to="/main/mainhome" class="list-group-item list-group-item-action fw-bold" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home  </router-link><br>
      <a href="#notification" data-bs-toggle="modal" data-bs-target="#notification"  class="nav-link list-group-item list-group-item-action fw-bold" id="list-profile-list" data-toggle="list" role="tab" aria-controls="profile">Notification <span class="badge badge-primary badge-pill" style="background-color:#B00D23;">4</span> </a><br>
      <a href="#directMessage" data-bs-toggle="modal" data-bs-target="#directMessage" class="nav-link list-group-item list-group-item-action fw-bold" id="list-messages-list" data-toggle="list"  role="tab" aria-controls="messages">Messages <span class="badge badge-primary badge-pill" style="background-color:#B00D23;">5</span> </a><br>
      <router-link to="#" class="list-group-item list-group-item-action fw-bold" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings </router-link><br>

    </div>

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

            <DMBody></DMBody>
        </div>
        </div>
    </div>
</div>

    <hr>
    <router-link to="/main/mainhome" class="list-group-item list-group-item-action fw-bold" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor=#000000" class="bi bi-house" viewBox="0 1 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>
                HOME
    </router-link>
    <br>
    <router-link to="mypage" class="list-group-item list-group-item-action fw-bold" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor=#000000" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
                NOTIFICATIONS
                    <span class="badge badge-primary badge-pill" style="background-color:#B00D23;">4</span>
    </router-link>
    <br>
    <router-link to="directMessage" class="list-group-item list-group-item-action fw-bold" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor=#000000" class="bi bi-envelope" viewBox="0 1 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                MESSAGES
                    <span class="badge badge-primary badge-pill" style="background-color:#B00D23;">5</span>
    </router-link>
    <br>
    <router-link  to="#directMessage" class="list-group-item list-group-item-action fw-bold" id="list-settings-list"
                  data-bs-toggle="modal" data-bs-target="#directMessage" role="tab" aria-controls="settings">Settings </router-link><br>
    <hr>

   <a href="#" class="hover-change-color" @click="clearAllSearchWords"><span class="badge rounded-pill bg-success" style="padding: 8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></span></a>
<hr>-
    </div>
 </div> -->
<!-- 예전 왼쪽 사이드바 끝 -->

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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
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

<!-- Editor Modal -->
      <div
      class="modal fade"
      id="editorview"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
      >
      <div class="modal-content">
      <div class="modal-header">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
  </svg>
  <button
    type="button"
    class="btn-close btn-close-white"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>
            <!--modal body-->
            <EditorBody></Editorbody>
        </div>
        </div>
    </div>

  </div>
</template>

<script>
import DMBody from './DirectMessage.vue'
import AlarmBody from './AlarmMessage.vue'
import EditorBody from './EditorModal.vue'

export default {
  components: { DMBody, AlarmBody, EditorBody }

}

</script>
<style scoped>

.list-group > * {
  color: #000;
}
.list-group-item-action:focus, .list-group-item-action:hover {
  color: #000;
}
/*.sidebar-left {border-radius: 0%; background-color: #eeeeee;}*/

span {-webkit-text-fill-color: black;}

.user_img_box {
    width: 30%;
    height: 100%;

}

.user_img_box > .user_img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: auto;
    /*display: block;*/
    border-radius: 50%;

}

.hover-change-color:hover span {
    background-color: deeppink !important;
}

* {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #fafafa;
    color: #262626;
    /*-family: sans-serif;*/
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    height: 100%;
    padding: 40px 10px 30px 10px;
    background: #ffffff;
    border-right: 1px solid #dbdbdb;
    transition: 0.3s;
  }

  .sidebar-header {
    width: 100%;
    margin-bottom: 44px;
  }

  .logo-icon {
    display: none;
    font-size: 28px;
    height: 35px;
    width: 51px;
    text-align: center;
  }

  .logo-img {
    margin-left: 14px;
    height: 32px;
  }

  .sidebar button {
    height: 60px;
    background: transparent;
    border: 0;
    padding: 0;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }

  .sidebar button > span {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 48px;
    padding: 0 12px;
    border-radius: 24px;
    line-height: 1;
  }

  .sidebar button:hover > span {
    background: #f2f2f2;
  }

  .sidebar button:hover > span :is(i, img) {
    scale: 1.05;
  }

  .sidebar button > span > span {
    transition: 0.3s;
  }

  @media (width < 580px) {
    .logo-img {
      display: none;
    }

    .logo-icon {
      display: block;
    }

    .sidebar {
      width: 72px;
    }

    .sidebar button > span {
      width: 50px;
    }

    .sidebar button > span > span {
      opacity: 0;
      visibility: hidden;
    }
  }

  .sidebar button i {
    position: relative;
    font-size: 28px;
    transition: 0.2s;
  }

  .sidebar button img {
    width: 28px;
    height: 28px;
    transition: 0.2s;
  }

  .sidebar button i > span {
    display: grid;
    place-items: center;
    height: 20px;
    padding: 0 4px;
    border-radius: 10px;
    position: absolute;
    top: -5px;
    right: -10px;
    border: 1px solid #ffffff;
    background: #ff2f40;
    color: #f9f9f9;
    font-size: 12px;
    font-family: BlinkMacSystemFont;
    font-style: normal;
  }

  .sidebar button i > em {
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    position: absolute;
    top: 2px;
    right: -1px;
    border: 1px solid #ffffff;
    background: #ff2f40;
    color: #f9f9f9;
    font-size: 12px;
    font-family: BlinkMacSystemFont;
    font-style: normal;
  }

  .sidebar button span {
    font-size: 17px;
  }

  .sidebar > nav {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .sidebar > nav button:last-child {
    margin-top: auto;
  }

 modal 공통 css
.modal {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
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
