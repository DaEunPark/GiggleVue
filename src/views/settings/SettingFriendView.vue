<template>
    <div class="container" style="padding:0;">
        <div class="myFriend border-round-radious">
            <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
                <h3 class ="list-group-item text-dark border-primary my-2">
                    <font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" />My Friend
                </h3>
            </button>
            <hr class="setting__bar mb-2">
            <div class="tabItems">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item setting_friendNav" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#following" aria-selected="false" role="tab" tabindex="-1">팔로잉</a>
                    </li>
                    <li class="nav-item setting_friendNav" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#follower" aria-selected="true" role="tab">팔로우</a>
                    </li>
                    <li class="nav-item setting_friendNav" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#block" aria-selected="true" role="tab">차단</a>
                    </li>

                </ul>
                <div id="myTabContent" class="tab-content px-3">
                    <div class="tab-pane fade active show" id="following" role="tabpanel">
                        <myfriend :items="allFollowingList" style="color:black;"></myfriend>
                    </div>
                    <div class="tab-pane fade" id="follower" role="tabpanel">
                        <myfriend :items="allFollowerList" style="color:black;"></myfriend>
                    </div>
                    <div class="tab-pane fade" id="block" role="tabpanel">
                        <!-- <p>내가 차단한 목록</p> -->
                        <myfriend :items="allBlockList" style="color:black;"></myfriend>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myfriend from '@/components/FollowList.vue'

export default {
  components: {
    myfriend
  },
  data () {
    return {
      allFollowingList: {},
      allFollowerList: {},
      allBlockList: {},
      user_no: this.$store.state.loginUserDTO.user_no
    }
  },
  mounted () {
    this.getFollowingList()
    this.getFollowerList()
    this.getBlockList()
  },
  methods: {
    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    },
    getFollowingList () {
      this.$axios.get(this.$serverUrl + '/followingList/' + `${this.user_no}`, {
        // params: this.requestBody,
        // headers: {},
        params: {
          user_no: this.user_no
        }
      }).then((res) => {
        this.allFollowingList = res.data
        // 데이터 주체 확인용 console.log("this.allfeddList = "+   this.allfeedList[1].post_no)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    getFollowerList () {
      this.$axios.get(this.$serverUrl + '/followerList/' + `${this.user_no}`, {
        // params: this.requestBody,
        // headers: {},
        params: {
          user_no: this.user_no
        }
      }).then((res) => {
        this.allFollowerList = res.data
        // 데이터 주체 확인용 console.log("this.allfeddList = "+   this.allfeedList[1].post_no)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    getBlockList () {
      this.$axios.get(this.$serverUrl + '/blockList/' + `${this.user_no}`, {
        // params: this.requestBody,
        // headers: {},
        params: {
          user_no: this.user_no
        }
      }).then((res) => {
        this.allBlockList = res.data
        // 데이터 주체 확인용 console.log("this.allfeddList = "+   this.allfeedList[1].post_no)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    }
  }
}
</script>
<style>
.nav-tabs{
    width:100%;
    display: flex;
    justify-content: center;
}
.setting_friendNav{
    width: 30% !important;
    text-align: center;
}

.hover-change-color:hover span {
          /* color:orangered; */
    background-color: deeppink !important;
}

#profileBtn {
    background-color: transparent;
    border: none;
}
.setting__bar{

width:100%;
margin : 0 auto;
color : gray;
}
</style>
