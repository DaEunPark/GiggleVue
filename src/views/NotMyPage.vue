<template>
  <div style="background-color: #fff;"  class="overflow-auto">
      <!-- :style="{ backgroundImage: `url(${this.$store.state.loginUserDTO.back_image})` }"-->
              <!--프로필 부분-->
                      <!-- <div class="user_profile_box"> -->
        <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
          <h3 class ="list-group-item text-dark border-primary my-2">
            <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" /> {{ this.$store.state.otherUserDTO.user_nick }}
          </h3>
        </button>
            <div class="backimg">
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

                        <div v-if="following === 'N'" class="user_follow_btn" @click="user_follow()"> <span class="text-nowrap">팔로우</span></div>
                        <div v-if="following === 'Y'" class="user_following_btn" @click="user_follow()"> <span class="text-nowrap">팔로잉</span></div>
                        <!-- <div onclick="user_setting_modal_on()">
                            <button type="button" id="settingButton" @click="pushSetting()"><img src="@/assets/icon_setting.png" id="settingImg"/></button>
                        </div> -->

<!-- </div> -->
                </div>
                <div class="item_cnt">
                  <div class="cntWrap">
                    <div class="item profileCnt">게시물</div>
                    <div class="cnt_item">{{this.$store.state.otherUserDTO.count_post}}</div>
                  </div>
                  <div class="cntWrap">
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(0)">팔로워</div>
                    <div class="cnt_item">{{this.$store.state.otherUserDTO.follower_user}}</div>
                  </div>
                  <div class="cntWrap">
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(1)">팔로잉</div>
                    <div class="cnt_item">{{this.$store.state.otherUserDTO.follow_user}}</div>
                  </div>
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
                 <div class="tabItems">
                    <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#myfeedList" aria-selected="false" role="tab" tabindex="-1">feed</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#myLikefeedList"  aria-selected="true" role="tab">like</a>
                    </li>
                    </ul>
                    <div id="myTabContent" class="tab-content px-3">
                        <div class="tab-pane fade active show" id="myfeedList" role="tabpanel">
                          <div><FeedStatus :items="myfeedList"></FeedStatus></div>
                        </div>
                        <div class="tab-pane fade" id="myLikefeedList" role="tabpanel">
                          <div><FeedStatus :items="myLikefeedList"></FeedStatus></div>
                        </div>
                    </div>
                </div>
</template>

<script>
// import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.min.js'
import { Follow } from '../mixins/Follow'
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
import FeedStatus from '@/components/FeedStatus.vue'

export default {
  components: {
    FeedStatus
  },
  data () {
    return {
      myfeedList: {},
      myLikefeedList: {},
      user_no:''

      follow: {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: this.$store.state.otherUserDTO.user_no
      }
    }
  },
  computed: {
    following () {
      console.log('NotMyPage computed: ' + this.followResult)
      return this.followResult
    }
  },
  mounted () {
    this.isFollowing(this.follow)
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

    this.GetmyfeedList(),
    this.GetmyLikefeedList()
  },
  methods: {
    goBack(){
            this.$router.go(-1); [2]
        },
    pushSetting () {
      this.$router.push({
        path: '/main/setting/'
      })
    },
    GetmyfeedList () {
      this.user_no = this.$store.state.otherUserDTO.user_no
      this.$axios.post(this.$serverUrl + '/myfeedList/' + this.user_no )
       .then((res) => {
        //console.log("this.myfeedList = "+  this.user_no)
        this.user_no == res.data
        this.myfeedList = res.data
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    GetmyLikefeedList () {
      this.user_no = this.$store.state.otherUserDTO.user_no
      this.$axios.post(this.$serverUrl + '/mylikefeedList/' + this.user_no )
       .then((res) => {
        //console.log("this.myLikefeedList = "+  this.user_no) 
        this.user_no == res.data
        this.myLikefeedList = res.data
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
     },
    user_follow () {
      this.user_follow_create(this.follow)

    }
  },
  mixins: [Follow]
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

  .user_follow_btn, .user_following_btn {
      width: 15%;
      height: 40px;
      margin-left: auto;

      /* padding-top: 7px; */
      border: 3px solid #e8e8e8;
      border-radius: 50px;
      cursor: pointer;

      font-size: 16px;
      font-weight: bold;
      text-align: center;

      display: flex;
      justify-content: center;
      align-content: center;
  }

  .user_following_btn {
    background-color: deeppink;
  }
  .user_follow_btn {
    background-color: #41d7a7;
  }

  .user_following_btn span {
    color: #e8e8e8 !important;
    -webkit-text-fill-color: #e8e8e8 !important;
  }

  .user_following_btn span, .user_follow_btn span {
    text-size-adjust: auto;
    margin: auto;
    color: #e8e8e8 !important;
    -webkit-text-fill-color: #e8e8e8 !important;
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

  /* .user_info_box > .item_cnt {
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
  }
  .backimg{
    width: 100%;
  }
  #backimg {
  width : 100%;
  height : 200px;
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

  .item_cnt{
  width: 100%;
  display : flex;
  flex-direction : row;

  align-items: center;
  padding-right : 5%;
}
.cntWrap{
  text-align: center;
  margin-right:2em;
}
.cnt_item{
  font-size : 20px;
  font-weight: bold;

}
  </style>
