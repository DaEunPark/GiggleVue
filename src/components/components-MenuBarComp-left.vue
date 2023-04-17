<!-- eslint-disable vue/no-parsing-error -->
<template>
    <aside class="sidebar">
      <header class="sidebar-header  mb-1">
        <!-- <div class="user_img_box"> -->
            <!-- <img class="img_circle user_img" name="profile" id="profic" v-bind:src="`${this.$store.state.loginUserDTO.profile_image}`"> -->
          <!-- </div> -->
          <!-- <img src="@/assets/Glogo.png" class="menu_logo" id="glogo"/> -->
          <img src="@/assets/Glogo.png" class="menu_logo" id="glogo" onclick="location.href='/main/mainhome'" role="button"/>
      </header>
      <nav>
        <button type="button" @click="getProfile()">
          <span>
              <img class="img" width="24" height="24" name="profi" id="profile" v-bind:src="`${this.$store.state.loginUserDTO.profile_image}`"
                  >
            <span> {{ this.$store.state.loginUserDTO.user_nick }}</span>
          </span>
        </button>
        <button type="button" onclick="location.href='/main/mainhome' ">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor=#black" d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8Zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"/></svg>
            <span>HOME</span>
          </span>
        </button>

        <button type="button" @click="openAlarm" onclick="location.href='#notification'"
            data-bs-toggle="modal"
            data-bs-target="#notification">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor=#black" d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84Zm-1.41 7.46l-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 .08 6Z"/></svg>

            <span>NOTIFICATIONS</span>
            <p v-if="this.alarm_yn == 'Y'" class="badge bg-primary YN">N</p>
          </span>
        </button>

        <button type="button" @click="openMessage" onclick="location.href='#directMessage'"
            data-bs-toggle="modal"
            data-bs-target="#directMessage">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor=#black" d="M21.15 2.86a2.89 2.89 0 0 0-3-.71L4 6.88a2.9 2.9 0 0 0-.12 5.47l5.24 2a.93.93 0 0 1 .53.52l2 5.25A2.87 2.87 0 0 0 14.36 22h.07a2.88 2.88 0 0 0 2.69-2l4.73-14.17a2.89 2.89 0 0 0-.7-2.97ZM20 5.2l-4.78 14.18a.88.88 0 0 1-.84.62a.92.92 0 0 1-.87-.58l-2-5.25a2.91 2.91 0 0 0-1.67-1.68l-5.25-2A.9.9 0 0 1 4 9.62a.88.88 0 0 1 .62-.84L18.8 4.05A.91.91 0 0 1 20 5.2Z"/></svg>

            <span>MESSAGES</span>
            <p v-if="this.message_yn == 'Y'" class="badge bg-primary YN">N</p>
          </span>
        </button>

<!-- <a href="#editorview"
data-bs-toggle="modal"
data-bs-target="#editorview"
class="hover-change-color EditorBtn"
@click="clearAllSearchWords">
    <span class="badge rounded-pill bg-success" style="padding: 8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi editorbtn bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
    </span>
</a> -->

<!-- Editor Modal 시작 -->
<!-- <div
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
                >
                </button>
            </div> -->
            <!--modal body-->
          <!-- <editor-view></editor-view>
        </div>
    </div>
</div> -->

        <button type="button" @click="logout()">

          <span>
            <i class="uil uil-bars"> </i>
            <span>
              <span><font-awesome-icon icon="fa-solid fa-right-to-bracket" style="color: #000000;" />&nbsp;&nbsp;Logout</span>
            </span>
          </span>
        </button>
      </nav>
    </aside>

    <!-- 알림 Modal 시작 -->
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
            <AlarmBody :alarmList="alarmList"></AlarmBody>
        </div>
      </div>
    </div>
    <!-- 알림 Modal 끝 -->

    <!-- DM Modal 시작 -->
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
            <DMBody :chatRoomList="chatRoomList"></DMBody>
        </div>
        </div>
    </div>
    <!-- DM Modal 끝 -->

  <!-- <footer>
    <div class="altmenu">
      <center>
      <ul>
        <li><a @click="getProfile()"><span class="fa fa-user"></span></a></li>
        <li><a @click="getSearch()"><span class="fa fa-search"></span></a></li>
        <li><a href="/main/mainhome"><span class="fa fa-home"></span></a></li>
        <li>        <a @onclick="location.href='#notification'"
            data-bs-toggle="modal"
            data-bs-target="#notification"><span class="fa fa-bell"></span></a></li>
        <li>        <a @click="openMessage" onclick="location.href='#directMessage'"
            data-bs-toggle="modal"
            data-bs-target="#directMessage"><span class="fa fa-envelope" ></span></a></li>
      </ul>
    </center>
    </div>
 </footer> -->

</template>

<script>
import DMBody from './DirectMessage.vue'
import AlarmBody from './AlarmMessage.vue'
// import EditorBody from './EditorModal.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      alarmList: [],
      chatRoomList: [],
      alarm_yn: '',
      message_yn: ''
    }
  },
  components: { DMBody, AlarmBody/*, EditorBody */ },
  mounted () {
    console.log('메세지 유무: ' + this.$store.state.loginUserDTO.message_yn)
    this.getAlarmList()
    this.getChatRoomList()
    this.getAlarmYN()
    this.getMessageYN()
  },
  methods: {
    logout () {
      if (confirm('로그아웃 하시겠습니까?') === true) {
        this.$router.push({
          path: '/'
        })
        // eslint-disable-next-line no-undef
        this.$store.commit('logoutUser', res.data)
        this.$store.commit('google_token_out', this.$store.state.google_token)
      } else {
        // eslint-disable-next-line no-unused-expressions
        stop
      }
    },
    getAlarmList () {
      this.$axios.get(this.$serverUrl + '/mj/alarmList/' + this.$store.state.loginUserDTO.user_no)
        .then(res => {
          if (res.data !== '') {
            this.alarmList = res.data
          }
        })
        .catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
    },
    getChatRoomList () {
      this.$axios.get(this.$serverUrl + '/mj/chatRoomList/' + this.$store.state.loginUserDTO.user_no)
        .then(res => {
          if (res.data !== '') {
            console.log('채팅방 있음' + res.data[0].user_nick)
            this.chatRoomList = res.data
          } else {
            console.log('채팅방 없음')
          }
        })
    },
    getProfile () {
      this.$router.push({
        path: '/main/mypage'
      })
      // this.$emit('refresh-sidebar')
    },

    getSearch () {
      this.$router.push({
        path: '/main/search'
      })
    },

    getMessageYN () {
      // 회원번호에 해당하는 새로운 메세지 유무 상태를 가져온다(마운트 될 때마다 새롭게 업데이트 되도록)
      this.$axios.get(this.$serverUrl + '/mj/getUserMessageYN/' + this.$store.state.loginUserDTO.user_no)
        .then(res => {
          this.message_yn = res.data
          console.log('메세지유무: ' + this.message_yn)
        })
    },

    openMessage () {
      // 새로운 메세지 유무 상태를 바꿔준다.
      this.$axios.get(this.$serverUrl + '/mj/updateUserMessageYN/' + this.$store.state.loginUserDTO.user_no)
        .then(res => {
          this.message_yn = 'N'
        })
    },
    getAlarmYN () {
      // 회원번호에 해당하는 새로운 알람 유무 상태를 가져온다(마운트 될 때마다 새롭게 업데이트 되도록)
      this.$axios.get(this.$serverUrl + '/mj/getUserAlarmYN/' + this.$store.state.loginUserDTO.user_no)
        .then(res => {
          this.alarm_yn = res.data
          console.log('알람 유무: ' + this.alarm_yn)
        })
    },
    openAlarm () {
      // 새로운 알람 유무 상태를 바꿔준다.
      this.$axios.get(this.$serverUrl + '/mj/updateUserAlarmYN/' + this.$store.state.loginUserDTO.user_no)
        .then(res => {
          this.alarm_yn = 'N'
        })
    }
  },
  computed: {
    ...mapGetters(['loginUserDTO'])
  }

}

</script>
<style scoped>

footer{
  margin: 0;
  padding: 0;
}
/*
.altmenu {
  width: 100%;
  background: transparent;
  position: fixed;
  bottom:0px;
  left:0px;
  border-top: 1px solid #aba;
}
.altmenu ul {
  padding: 0;
  margin: 0;
}
.altmenu ul li {
  display: inline-block;
  width: 20.04%;
  margin-left: -4px;
}
.altmenu ul li a {
  position: relative;
  display: block;
  padding: 10px 80px;
  text-align: center;
  font-size: 30px;
  color:#000;
  background: #fff;

  transition: 300ms;
}
.altmenu ul li a:hover {
  color: teal;
}
@media (max-width< 500px) {
  .altmenu ul li a {
    padding: 10px 10px;
  }
} */

/*===================================*/
/*
.EditorBtn {
    position : fixed;
    right : 50px;
    bottom : 50px;
}
.editorbtn{
    width:50px;
    height:50px;
}

.list-group > * {
  color: #000;
}
.list-group-item-action:focus, .list-group-item-action:hover {
  color: #000;
} */
/*.sidebar-left {border-radius: 0%; background-color: #eeeeee;}*/

span {-webkit-text-fill-color: black;}
/*
.user_img_box {
    width: 30%;
    height: 100%;

}

.user_img_box > .user_img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: auto;
    /*display: block;
    border-radius: 50%;

}

.hover-change-color:hover span {
    background-color: deeppink !important;
} */

* {
    box-sizing: border-box;
  }

  /* body {
    margin: 0;
    background: #fafafa;
    color: #262626;
    /*-family: sans-serif;
  } */

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width : inherit;
    height: 100%;
    padding: 0 10px 30px 10px;
    background: #ffffff;
    border-right: 1px solid #dbdbdb;
    transition: 0.3s;
  }
  .sidebar-header {
    width: 100%;
    height : fit-content;
    display : flex;
    align-items : center;
    justify-content: left;
  }
  .menu_logo{
    width :30%;
    height : auto;
    margin-left : 10px;
  }
  .sidebar button {
    height: 45px;
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

  /* @media (max-width < 80%){  */
   /*  .logo-img {
      display: none;
    }

    .logo-icon {
      display: block;
    } */

    /* * {
      display : none;
    } */

    /* .sidebar button > span {
      width: 50px;
    }

    .sidebar button > span > span {
      opacity: 0;
      visibility: hidden;
    } */
  /* } */

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
  align-items: center;
}
.modal-header > button {
  margin: 0;
}
.modal-header > button {
  position:absolute;
  right : 0;
  transform: translateX(-50%);
}
.modal-body {
  padding: 0px 20px 10px 20px;
  height: 80%;
}
#profic {
  margin-left: 100%;
}
.YN {
  color: #FFF;
  /* margin-top: 5%;
  margin-left: 45%; */
  font-size: 12px;
  position: absolute;
  right : 10%;
  margin : auto 0;
}
/*
@media screen and (max-width: 320px) {
  .nav__name {
    display: none;
  }
}
@media screen and (min-width: 576px) {
  .nav__list {
    justify-content: center;
    column-gap: 3rem;
  }
}
@media screen and (min-width: 767px) {
  .nav {
    height: 4.5rem;
  }
  .nav__img {
    display: none;
  }
  .nav__icon {
    display: none;
  }
  .nav__name {
    font-size: .938rem;
  }
  .nav__link:hover {
    color: hsl(174, 63%, 40%);
  }
} */

</style>
