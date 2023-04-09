<template>
  <div style="background-color: #fff;"  class="overflow-auto">
      <!-- :style="{ backgroundImage: `url(${this.$store.state.loginUserDTO.back_image})` }"-->
              <!--프로필 부분-->
                      <!-- <div class="user_profile_box"> -->
            <div class="backimg">
              <img v-bind:src="`${this.$store.state.loginUserDTO.back_image}`" id="backimg"/>
            </div>
            <div class="user_profile_box" id="profile_box">
            <div class="user_img_box">
                <img class="img_circle user_img" name="프로필" v-bind:src="`${this.$store.state.loginUserDTO.profile_image}`">
            </div>
            <div class="user_info_box">
                <div class="user_name">
                    <p id="user_name_title">{{ this.$store.state.loginUserDTO.user_nick }}</p>
                </div>
                <div class="item_cnt inline">
                    <div class="item profileCnt">게시물 <span style="font-weight: 500;"></span>{{this.post_cnt}}</div>
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(0)">팔로워 <span style="font-weight: 500;">{{this.follower_cnt}}</span></div>    
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(1)">팔로잉 <span style="font-weight: 500;">{{this.follow_cnt}}</span></div> 
                    <button class="profileCnt" type="button" id="settingButton" @click="pushSetting()"><img src="@/assets/icon_setting.png" id="settingImg"/></button>
                  </div>
                  <hr id="hr"/>
                <div class="user_nickname">
                    <div class="status_message">{{ this.$store.state.loginUserDTO.status_message }}</div>
                  </div>
                <div>
                  <div class="user_location"><font-awesome-icon icon="fa-solid fa-location-dot" style="color: e8264d;" />&nbsp;&nbsp;{{ this.$store.state.loginUserDTO.user_location }}</div>
                </div>
                <div>
                  <div class="user_birth"><font-awesome-icon :icon="['fas', 'birthday-cake']" style="color: #e66751;" />&nbsp;&nbsp;{{ this.$store.state.loginUserDTO.user_birth }}</div>
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
      post_cnt : '',
      follow_cnt : '',
      follower_cnt : ''
    }
  },
  mounted () {
    if (this.$store.state.loginUserDTO.back_image == null) {
      this.$store.state.loginUserDTO.back_image = 'https://i.ibb.co/Mgtq0YC/backdefault.png'
    } else {
      // eslint-disable-next-line no-self-assign
      this.$store.state.loginUserDTO.back_image = this.$store.state.loginUserDTO.back_image
    }
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))

    Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
      .forEach(popoverNode => new Tooltip(popoverNode))

      this.profileCnt()

  },
  methods: {
    pushSetting () {
      this.$router.push({
        path: '/main/setting/'
      })
    },
    profileCnt() {
      const data = {user_no : this.$store.state.loginUserDTO.user_no}
        this.$axios.post(this.$serverUrl + '/profileCnt', JSON.stringify(data), {
          headers: {
              'Content-Type': 'application/json'
            }
          })
        .then((res) => {
          this.post_cnt = res.data.count_post
          this.follow_cnt = res.data.follow_user
          this.follower_cnt = res.data.follower_user
        }).catch((err) => {
          console.log(err)
        })

    }
  }
}
</script>
<style scoped>
* {-webkit-text-fill-color: black;}

.user_main_body{
    width: 100%;
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
    margin-left: 65%;

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
    margin-right: 0px;
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
  margin-bottom: 1%;
}
.backimg{
  width : 100%;
}
#backimg {
  width: 100%;
  height: 200px;
}
#settingButton {
  border:none;
  background-color: white;
  margin-left: 40%;
}
#settingImg {
  width: 20px;
  height: 20px;
}
#profile_box {
  width: 100%;
  padding-bottom: 35px;
}
.status_message {
  font-size: 20px;
}

</style>
