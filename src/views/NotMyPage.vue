<template>
    <div style="background-color: #fff;"  class="overflow-auto">
        <br/><br/><br/>
        <!-- :style="{ backgroundImage: `url(${this.$store.state.loginUserDTO.back_image})` }"-->
                <!--프로필 부분-->
                        <!-- <div class="user_profile_box"> -->
            <div>
                <img v-bind:src="`${this.$store.state.otherUserDTO.back_image}`" id="backimg"/>
            </div>
            <div class="user_profile_box" id="profile_box">
            <div class="user_img_box">
                <img class="img_circle user_img" name="프로필" v-bind:src="`${this.$store.state.otherUserDTO.profile_image}`">
            </div>
            <div class="user_info_box">
                    <div class="user_name">
                    <p id="user_name_title">{{ this.$store.state.otherUserDTO.user_nick }}</p>
                    <!-- <div class="user_setting_box"> -->

                        <div class="user_follow_btn" onclick="user_follow_create()">팔로우</div>
                        <!-- <div onclick="user_setting_modal_on()">
                            <button type="button" id="settingButton" @click="pushSetting()"><img src="@/assets/icon_setting.png" id="settingImg"/></button>
                        </div> -->

<!-- </div> -->
                </div>
                <div class="item_cnt">
                    <div class="item">게시물 <span style="font-weight: 500;"></span>{{this.$store.state.otherUserDTO.count_post}}</div>
                    <div class="item btn_pointer" onclick="user_follow_modal_on(0)">팔로워 <span style="font-weight: 500;">{{this.$store.state.otherUserDTO.follower_user}}</span></div>
                    <div class="item btn_pointer" onclick="user_follow_modal_on(1)">팔로잉 <span style="font-weight: 500;">{{this.$store.state.otherUserDTO.follow_user}}</span></div>
                <!-- <img src="@/assets/icon_setting.png" id="setting" @click="setting()"> -->
                    </div>
                    <!-- <button type="button" id="settingButton" @click="pushSetting()"><img src="@/assets/icon_setting.png" id="settingImg"/></button> -->
                    <hr id="hr"/>
                <div class="user_nickname">
                    <!-- {{user_info['Name']}} -->
                    <div class="status_message">{{ this.$store.state.otherUserDTO.status_message }}</div>
                    </div>
                <div>
                    <div class="user_location"><font-awesome-icon icon="fa-solid fa-location-dot" style="color: #e8264d;" />&nbsp;{{ this.$store.state.otherUserDTO.user_location }}</div>
                </div>
                <div>
                  <div class="user_birth"><font-awesome-icon :icon="['fas', 'birthday-cake']" style="color: #e66751;" />&nbsp;&nbsp;{{ this.$store.state.otherUserDTO.user_birth }}</div>
                </div>
            </div>
            </div>
    </div>

    </template>

<script>
// import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.min.js'
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  mounted () {
    if (this.$store.state.otherUserDTO.back_image == null) {
      this.$store.state.otherUserDTO.back_image = 'https://i.ibb.co/Mgtq0YC/backdefault.png'
    } else {
      // eslint-disable-next-line no-self-assign
      this.$store.state.otherUserDTO.back_image = this.$store.state.otherUserDTO.back_image
    }

    if (this.$store.state.otherUserDTO.user_location == null) {
      this.$store.state.otherUserDTO.user_location = this.$store.state.otherUserDTO.user_nick + '님의 위치'
    }
    // inti Popover
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
      // .forEach(popoverNode => this.$data.$popover(popoverNode))
    Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
      .forEach(popoverNode => new Tooltip(popoverNode))
      // .forEach(popoverNode => this.$data.$tooltip(popoverNode))
    // eslint-disable-next-line no-unused-vars
    const exampleModal = document.getElementById('exampleModal')
    // exampleModal.addEventListener('show.bs.modal', function (event) {
    // // Button that triggered the modal
    //   const button = event.relatedTarget
    //   // Extract info from data-bs-* attributes
    //   const recipient = button.getAttribute('data-bs-whatever')
    //   // If necessary, you could initiate an AJAX request here
    //   // and then do the updating in a callback.
    //   //
    //   // Update the modal's content.
    //   const modalTitle = exampleModal.querySelector('.modal-title')
    //   const modalBodyInput = exampleModal.querySelector('.modal-body input')

    //   modalTitle.textContent = 'New message to ' + recipient
    //   modalBodyInput.value = recipient
    // })
  },
  methods: {
    pushSetting () {
      this.$router.push({
        path: '/main/setting/'
      })
    },
    user_follow_create () {

    }
  }
}
</script>
<style scoped>
  * {-webkit-text-fill-color: black;}

  .user_main_body{
      width: 975px;
      height: 1000px;
      margin: 90px auto 0 auto;
      padding: 30px 20px 0px;
  }

  .user_profile_box {
      width: 100%;
      height: auto;
      margin-bottom: 44px;
      padding-top: 20px;

      display: flex;
      flex-direction: row;
      align-items: normal;
      justify-content: space-between;

  }

  .user_img_box {
      width: 30%;
      height: 100%;

  }

  .user_img_box > .user_img {
      width: 170px;
      height: 170px;
      object-fit: cover;
      margin: 15% auto;
      display: block;
        border-radius: 50%;

  }

  .user_follow_btn {
      width: 15%;
      height: 40px;
      margin-left: auto;

      padding-top: 7px;
      border: 3px solid #e8e8e8;
      border-radius: 50px;
      cursor: pointer;

      font-size: 16px;
      font-weight: bold;
      text-align: center;
  }

  .user_info_box {
      width: 65%;
      height: 100%;
  }

  .user_info_box > .user_name {
      width: 100%;
      height: 40px;
      margin-bottom: 20px;

      font-size: 28px;
      font-weight: 300;

      display: flex;
      flex-direction: row;
      align-items: normal;
  }

  .user_info_box > .user_name  > .user_setting_box {
      width: 80px;
      margin-left: 15%;
      padding-top: 10px;

      cursor: pointer;
  }

  .user_info_box > .item_cnt {
      width: 100%;
      height: 20px;
      margin-bottom: 20px;

      display: flex;
      flex-direction: row;
      align-items: normal;
      justify-content: left;
  }

  .user_info_box > .item_cnt > .item {
      width: 72px;
      font-size: 16px;
      margin-right: 40px;
  }

  .user_info_box > .user_nickname {
      width: 100%;
      height: 20px;

      font-size: 16px;
      font-weight: 500;
  }
  #user_name_title {
    font-weight: bold;
    font-size: 25px;
  }
  #hr {
    border-color: black;
    border-width: 1px;
  }
  .user_location {
    margin-top: 8%;
  }
  #backimg {
    width: 90%;
    height: 200px;
  }
  #settingButton {
    border:none;
    background-color: white;
    margin-left: 40%;
  }
  #settingImg {
    width: 22px;
    height: 22px;
  }
  #profile_box {
    width: 90%;
    padding-bottom: 35px;
  }
  .status_message {
    font-size: 20px;
  }
  </style>
