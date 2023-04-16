<template>

  <!-- <div class="container" style="padding:0;">
      <div class="myFriend border-round-radious">
          <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
              <h3 class ="list-group-item text-dark border-primary my-2">
                  <font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" />My Friend
              </h3>
          </button>
          <div class="tabItems">
              <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                      <a class="nav-link active" data-bs-toggle="tab" href="#following" aria-selected="false" role="tab" tabindex="-1">팔로잉</a>
                  </li>
                  <li class="nav-item" role="presentation">
                      <a class="nav-link" data-bs-toggle="tab" href="#follow" aria-selected="true" role="tab">팔로우</a>
                  </li>
              </ul>
              <div id="myTabContent" class="tab-content px-2">
                  <div class="tab-pane fade active show mb-3" id="following" role="tabpanel"> -->
                      <!-- <myfriend :items="allFollowingList" style="color:black;"></myfriend> -->

    <div class="container" style="padding:0;">
        <div class="myFriend border-round-radious">
            <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
                <h3 class ="list-group-item text-dark border-primary my-2">
                    <font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" />My Friend
                </h3>
            </button>
            <div class="tabItems">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#following" aria-selected="false" role="tab" tabindex="-1">팔로잉</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#follower" aria-selected="true" role="tab">팔로우</a>
                    </li>
                </ul>
                <div id="myTabContent" class="tab-content px-2">
                    <div class="tab-pane fade active show mb-3" id="following" role="tabpanel">
                        <myfriend :items="allFollowingList" style="color:black;"></myfriend>

                    </div>
                    <div class="tab-pane fade mb-3" id="follower" role="tabpanel">
                        <myfriend :items="allFollowerList" style="color:black;"></myfriend>

                    </div>
                </div>
            </div>
          </div>
                  <div class="tab-pane fade mb-3" id="follow" role="tabpanel">

                  </div>
              </div>
          <!-- </div>
      </div>
  </div> -->
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
      user_no: this.$store.state.loginUserDTO.user_no
    }
  },
  mounted () {
    this.getFollowingList()
    this.getFollowerList()
    // this.$forceUpdate()
  },
  watch: {
    $route (to, from) {
      console.log(to)
      console.log(from)
      //   console.log(this.thisURL)
      // this.$forceUpdate()
    }
  },
  methods: {
    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
      // this.$forceUpdate()
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
    }
    // intoProfile (item) {
    // // alert(user)
    //     const data = { user_no: item }

    //     console.log('user_nick = ' + data)

    //     this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     }).then((res) => {
    //         this.$store.commit('addOtherUser', res.data)
    //         console.log(this.$store.state.otherUserDTO)
    //         location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
    //     })
    // }
  }
  // intoProfile (item) {
  // // alert(user)
  //     const data = { user_no: item }

  //     console.log('user_nick = ' + data)

  //     this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
  //         headers: {
  //         'Content-Type': 'application/json'
  //         }
  //     }).then((res) => {
  //         this.$store.commit('addOtherUser', res.data)
  //         console.log(this.$store.state.otherUserDTO)
  //         location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
  //     })
  // }
}

</script>
<style>
.nav-tabs{
  width:100%;
  display: flex;
  justify-content: center;
}
.nav-item{
  width: 45%;
  text-align: center;
}
.nav-item :active {
  font-weight: bolder;
  color : hotpink;
}
</style>
