<template>
  <div style="background-color: #fff;"  class="overflow-auto">
      <!-- :style="{ backgroundImage: `url(${this.$store.state.loginUserDTO.back_image})` }"-->
              <!--프로필 부분-->
                      <!-- <div class="user_profile_box"> -->
      <div class="notMyTop">
        <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
          <h3 class ="list-group-item text-dark border-primary my-2">
            <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" /> {{ this.$store.state.otherUserDTO.user_nick }}
          </h3>
        </button>
        <button class="btn btn-sm btn-light" id="blockBtn" @click="userBlock()" v-if="this.block_user=='N'">
          <span class="text-nowrap" id="blockSpan" v-if="this.block_user=='N'">차단하기</span>
        </button>
        <button class="btn btn-sm btn-light" id="blockBtn2" @click="userBlockCancle()" v-if="this.block_user=='Y'">
          <span class="text-nowrap" id="blockSpan2" v-if="this.block_user=='Y'">차단해제</span>
        </button>
      </div>

            <div class="backimg">
                <img v-bind:src="`${this.$store.state.otherUserDTO.back_image}`" id="backimg"/>
            </div>
            <div class="user_profile_box" id="profile_box">
            <div class="user_img_box">
                <img class="img_circle user_img" name="프로필" v-bind:src="`${this.$store.state.otherUserDTO.profile_image}`">
            </div>
            <div class="user_info_box">
                    <div class="user_name">
                    <p id="user_name_title">{{ this.$store.state.otherUserDTO.user_nick }}</p>&nbsp;&nbsp;&nbsp;
                    <font-awesome-icon icon="fa-solid fa-ban" style="color: #e82167;" v-if="this.block_user=='Y'" id="blockIcon"/>
                    <!-- <div class="user_setting_box"> -->

                        <div v-if="following === 'N' && this.block_user==='N' && this.blocked==='N'" class="user_follow_btn" @click="user_follow()"> <span class="text-nowrap">팔로우</span></div>
                        <div v-if="following === 'Y' && this.block_user==='N' && this.blocked==='N'" class="user_following_btn" @click="user_follow()"> <span class="text-nowrap">팔로잉</span></div>
                        <div v-if="this.block_user==='Y'" class="user_following_btn"  id="blocking"> <span class="text-nowrap" disabled>차단됨</span></div>
                        <!-- <div onclick="user_setting_modal_on()">
                            <button type="button" id="settingButton" @click="pushSetting()"><img src="@/assets/icon_setting.png" id="settingImg"/></button>
                        </div> -->

<!-- </div> -->
                </div>
                <div class="item_cnt">
                  <div class="cntWrap">
                    <div class="item profileCnt">게시물</div>
                    <div class="cnt_item">{{ postCount }}</div>
                  </div>
                  <div class="cntWrap">
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(0)">팔로워</div>
                    <div class="cnt_item">{{ followerCount }}</div>
                  </div>
                  <div class="cntWrap">
                    <div class="item btn_pointer profileCnt" onclick="user_follow_modal_on(1)">팔로잉</div>
                    <div class="cnt_item">{{ followCount }}</div>
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
                 <div class="tabItems" v-if="this.block_user=='N' && this.blocked=='N'">
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
                <div class="block_page" v-if="(this.block_user=='Y' && this.blocked=='N')">
                  <p id="info1">{{ this.$store.state.otherUserDTO.user_nick }}님은 차단되어 있습니다.</p>
                  <p id="info2">{{ this.$store.state.otherUserDTO.user_nick }}님의 글을 보려면 차단을 해제해주세요.</p>
                </div>
                <div class="blocked_page" v-if="(this.blocked=='Y' && this.block_user == 'N')">
                  <p id="info3">{{ this.$store.state.otherUserDTO.user_nick }}님의 글을 열람할 수 없습니다.</p>
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
      user_no: '',
      feedmei: false,
      likemei: false,
      block_user: 'N',
      follow: {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: this.$store.state.otherUserDTO.user_no
      },
      blocked: ''
    }
  },
  computed: {
    following () {
      console.log('NotMyPage following() computed: ' + this.followResult)
      if (this.followResult.includes(this.follow.follow_user)) {
        return 'Y'
      } else {
        return this.followResult
      }
    },
    postCount () {
      console.log('NotMyPage postCount() computed: ' + this.post_cnt)
      return this.post_cnt
    },
    followerCount () {
      console.log('NotMyPage followerCnt() computed: ' + this.post_cnt)
      return this.follower_cnt
    },
    followCount () {
      console.log('NotMyPage followCnt() computed: ' + this.post_cnt)
      return this.follow_cnt
    }

  },
  mounted () {
    this.userBlockCheck()
    this.blockedCheckSlow()

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

    // eslint-disable-next-line no-unused-expressions, no-sequences
    this.GetmyfeedList(),
    this.GetmyLikefeedList()
  },
  methods: {
    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    },
    pushSetting () {
      this.$router.push({
        path: '/main/setting/'
      })
    },
    GetmyfeedList () {
      this.user_no = this.$store.state.otherUserDTO.user_no
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
      this.user_no = this.$store.state.otherUserDTO.user_no
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
    },
    user_follow () {
      this.user_follow_create(this.follow)
    },
    userBlock () {
      if (confirm(`${this.$store.state.otherUserDTO.user_nick}님을 차단하시겠습니까?`) === true) {
        this.block_user = 'Y'

        const data = {
          myUser_no: this.$store.state.loginUserDTO.user_no,
          blockUser_no: this.$store.state.otherUserDTO.user_no
        }
        this.$axios.post(this.$serverUrl + '/userBlock', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log('유저 블락')

          const data = { user_no: this.$store.state.otherUserDTO.user_no }

          this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            this.$store.commit('addOtherUser', res.data)
            console.log(this.$store.state.otherUserDTO)

            location.reload()
          })
        })
      } else {
        // eslint-disable-next-line no-unused-expressions
        stop
      }
    },
    userBlockCancle () {
      const data = {
        myUser_no: this.$store.state.loginUserDTO.user_no,
        blockUser_no: this.$store.state.otherUserDTO.user_no
      }
      this.$axios.post(this.$serverUrl + '/userBlockCancle', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.block_user = 'N'
      })
    },
    userBlockCheck () {
      const data = {
        myUser_no: this.$store.state.loginUserDTO.user_no,
        blockUser_no: this.$store.state.otherUserDTO.user_no
      }
      this.$axios.post(this.$serverUrl + '/userBlockCheck', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data == 'Y') {
          this.block_user = 'Y'
          console.log('this.block_user = ' + this.block_user)
        } else {
          this.block_user = 'N'
          console.log('this.block_user = ' + this.block_user)
        }
      })
    },
    amIBlockCheck () {
      console.log('해당 메서드 실행..')
      const data = {
        myUser_no: this.$store.state.loginUserDTO.user_no,
        blockUser_no: this.$store.state.otherUserDTO.user_no

      }
      this.$axios.post(this.$serverUrl + '/amIBlockCheck', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data == 'Y') {
          this.blocked = 'Y'
          console.log('this.blocked =' + res.data)
        // eslint-disable-next-line eqeqeq
        } else if (res.data == 'N') {
          this.blocked = 'N'
          console.log('this.blocked =' + res.data)
        }
      })
    },
    blockedCheckSlow () {
      window.setTimeout(this.amIBlockCheck, 100)
    }
  },
  mixins: [Follow]
}
</script>
<style scoped>
  * {-webkit-text-fill-color: black;}
/*
  .user_main_body{
    width: 100%;
    height: 1000px;
    margin: 90px auto 0 auto;
    padding: 30px 20px 0px;
} */
  .notMyTop{
    width : 100%;
    height : fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
}
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
#blockBtn[data-v-5bdfab44] {
    /* margin-left: 59%; */
    background-color: transparent;
    color: gray;
    text-align: center;
    align-content: center;
    font-size: 15px;
    font-weight: bold;
    width: 90px;
    height: 40px;
    border: 3px solid #e8e8e8;
    border-radius: 50px;
    cursor: pointer;
}
#blockBtn:hover {
  background-color: deeppink;
}
#blockBtn *[data-v-5bdfab44]:hover {
  -webkit-text-fill-color:white;
}
#blockBtn2 {
  background-color: deeppink;
  color: gray;
  text-align: center;
  align-content: center;
  font-size: 15px;
  font-weight: bold;
  width: 90px;
  height: 40px;
  border: 3px solid #e8e8e8;
  border-radius: 50px;
  cursor: pointer;
  /* margin-left: 59%; */
}
#blockBtn2 *[data-v-5bdfab44] {
  -webkit-text-fill-color:white;
}
/* #blockBtn2:hover {
  background-color: transparent;
}
#blockBtn2 *[data-v-5bdfab44]:hover {
  -webkit-text-fill-color:black;
} */
#info1 {
  font-size : 20px;
  font-weight: bold;
  text-align: center;
}
#info2 {
  text-align: center;
  color: gray;
}
.block_page {
  background-color: lightyellow;
  margin: 0;
  padding-top: 5%;
  padding-bottom: 20%;
}
#blockIcon {
  width: 25px;
  height: 25px;
  padding-top: 1%;
}
#blocking {
  background-color: gray;
}
#info3 {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: black;
}
.blocked_page {
  background-color: lightyellow;
  margin: 0;
  padding-top: 5%;
  padding-bottom: 20%;
  border-top: gray 3px solid;
}
</style>
