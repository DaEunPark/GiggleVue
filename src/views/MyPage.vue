<!-- eslint-disable no-unused-expressions -->
<!-- eslint-disable no-unused-expressions -->
<template>
  <div style="background-color: #fff;"  class="overflow-auto">
      <!-- :style="{ backgroundImage: `url(${this.$store.state.loginUserDTO.back_image})` }"-->
              <!--프로필 부분-->
                      <!-- <div class="user_profile_box"> -->
        <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
          <h3 class ="list-group-item text-dark border-primary my-2">
            <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" /> {{ this.$store.state.loginUserDTO.user_nick }}
          </h3>
        </button>
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
              <div class="info_mid">
                <div class="item_cnt">
                  <div class="cntWrap">
                    <div class="item profileCnt">게시물</div>
                    <div class="cnt_item">{{this.post_cnt}}</div>
                  </div>
                  <div class="cntWrap"  @click="pushFollowList()">
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(0)">팔로워</div>
                    <div class="cnt_item">{{this.follower_cnt}}</div>
                  </div>
                  <div class="cntWrap"  @click="pushFollowList()">
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(1)">팔로잉</div>
                    <div class="cnt_item">{{this.follow_cnt}}</div>
                  </div>
                </div>
                <button class="profileCnt settingBtn" type="button" id="settingButton" @click="pushSetting()"><img src="@/assets/icon_setting.png" id="settingImg"/></button>
              </div>
                  <hr id="hr"/>
                <div class="user_nickname">
                    <div class="status_message">{{ this.$store.state.loginUserDTO.status_message }}</div>
                  </div>
                <div>
                  <div class="user_location"><font-awesome-icon icon="fa-solid fa-location-dot" style="color: #e8264d;" />&nbsp;&nbsp;{{ this.$store.state.loginUserDTO.user_location }}</div>
                </div>
                <div>
                  <div class="user_birth"><font-awesome-icon :icon="['fas', 'birthday-cake']" style="color: #e66751;" />&nbsp;&nbsp;{{ this.$store.state.loginUserDTO.user_birth }}</div>
                </div>
            </div>
          </div>
  </div>
                <div class="tabItems">
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                          <a class="nav-link active" data-bs-toggle="tab" href="#myfeedList" aria-selected="false" role="tab" tabindex="-1">feed</a>
                      </li>
                      <li class="nav-item" role="presentation">
                          <a class="nav-link" data-bs-toggle="tab" href="#myLikefeedList" aria-selected="true" role="tab">like</a>
                      </li>
                    </ul>
                    <div id="myTabContent" class="tab-content px-3">
                        <div class="tab-pane fade active show" id="myfeedList" role="tabpanel">
                          <div> <FeedStatus :items="myfeedList"></FeedStatus>
                                <h6 v-show="feedmei" style="color:#e83283; text-align: center;" >게시글이 아직 없습니다.</h6>
                         </div>
                        </div>

                        <div class="tab-pane fade" id="myLikefeedList" role="tabpanel">
                          <div><FeedStatus :items="myLikefeedList"></FeedStatus>
                            <h6 v-show="likemei" style="color:#e83283; text-align: center;" >좋아요한 게시글이 아직 없습니다.</h6>
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
import FeedStatus from '@/components/FeedStatus.vue'

export default {
  components: {
    FeedStatus
  },
  data () {
    return {
      post_cnt: '',
      follow_cnt: '',
      follower_cnt: '',
      myfeedList: {},
      myLikefeedList: {},
      user_no: '',
      feedmei: false,
      likemei: false

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

    // eslint-disable-next-line no-unused-expressions, no-sequences
    this.profileCnt(),

    this.GetmyfeedList(),
    this.GetmyLikefeedList()
    if (localStorage.getItem('reloadedSideBar')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloadedSideBar')
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloadedSideBar', '1')
      this.$emit('refresh-sidebar')
    }
  },
  methods: {
    pushSetting () {
      this.$router.push({
        path: '/main/setting/'
      })
    },
    pushFollowList () {
      this.$router.push({
        path: '/main/myfriend/'
      })
    },
    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    },
    profileCnt () {
      const data = { user_no: this.$store.state.loginUserDTO.user_no }
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
    },
    GetmyfeedList () {
      this.user_no = this.$store.state.loginUserDTO.user_no
      this.$axios.post(this.$serverUrl + '/myfeedList/' + this.user_no)
        .then((res) => {
          // console.log( res.data)
          if (res.data[0] != null) {
            // eslint-disable-next-line no-unused-expressions, eqeqeq
            this.user_no == res.data
            this.myfeedList = res.data
            this.feedmei = false
          } else {
            this.feedmei = true
          }
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
    },
    GetmyLikefeedList () {
      this.user_no = this.$store.state.loginUserDTO.user_no
      this.$axios.post(this.$serverUrl + '/mylikefeedList/' + this.user_no)
        .then((res) => {
        // console.log("this.myLikefeedList = "+  this.user_no)
        // console.log(this.myLikefeedList)
        // console.log( res.data)
          // eslint-disable-next-line no-unused-expressions, eqeqeq
          if (res.data[0] != null) {
            // eslint-disable-next-line no-unused-expressions, eqeqeq
            this.user_no == res.data
            this.myLikefeedList = res.data
            this.likemei = false
          } else {
            this.likemei = true
          }
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
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
/*
.user_info_box > .user_name  > .user_setting_box {
    width: 80px;
    margin-left: 15%;
    padding-top: 10px;

    cursor: pointer;
} */
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
  /* margin-left: 40%; */
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

.nav-tabs{
    width:100%;
    display: flex;
    justify-content: center;
}
.nav-item{
    /* width: 30%; */
    width: 40%;
    margin-bottom: 50px;
    text-align: center;
}

.info_mid{
  width: 100%;
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  align-items: center;
  padding-right:5%;
}
.item_cnt{
  width: 100%;
  display : flex;
  flex-direction : row;
}
.cntWrap{
  width : 48px;
  text-align: center;
  margin-right:2em;
}
.cnt_item{
  font-size : 20px;
  font-weight: bold;
}

</style>
