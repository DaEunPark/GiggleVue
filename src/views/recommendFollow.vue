<!-- eslint-disable no-irregular-whitespace -->
<template>
                <div id="recommendfollow">
                <div class="recommendfollowWrap mb-2 border-round-radius">
                    <div class="list-group">
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <!-- <font-awesome-icon icon="fa-solid fa-paw" style="color: #ed357f;" id="pageIcon"/> -->
                            <!-- <font-awesome-icon icon="fa-solid fa-cat" style="color: #eab33e;" id="pageIcon"/> -->
                            <p id="top">🛸　　　 　🌎　　　　°　　🌓　•　　.°   •　　　🚀　　　 ✯　　　★ 　*　　　°　　　🛰 °     ·   🪐.    　　　•　° ★ 　　　　•  ☄</p>
                        </div>

                        <!-- <button type="button" v-for="(user, user_nick) in recommendUser" :key="user_nick" :items="recommendUser" class="list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" id="tempButton" @click="intoProfile(`${user.user_no}`)"> -->
                          <button type="button" v-for="(user, user_nick) in recommendUser" :key="user_nick" :items="recommendUser" class="list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" id="tempButton" >
                            <div class="profile-wrapper" @click="intoProfile(`${user.user_no}`)">
                                <div class="profile-box">
                                    <img :src="`${ user.profile_image }`" id="recUserProfile">
                                </div>
                            </div>
                            <div class="profile-user-name" @click="intoProfile(`${user.user_no}`)">
                                <div class="mb-1 text-dark d-inline-block text-truncate text-nowrap fw-bold" style="overflow: hidden; width: 7.4em;">
                                  {{ user.user_nick }}</div>
                                  <div id="status">{{ user.status_message }}</div>
                            </div>
                            <a role="button" v-if="following(user.user_no) === 'N'" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-success text-nowrap text-size-custom" style="padding: 8px;">팔로우</span></a>
                            <a role="button" v-if="following(user.user_no) === 'Y'" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-primary text-nowrap text-size-custom" style="padding: 8px;">팔로잉</span></a>

                        </button>

                    </div>
                </div> <!-- <div class="card bg-light mb-3"> -->
            </div>
</template>

<script>
import { Follow } from '../mixins/Follow'
export default {
  data () {
    return {
      requestBody: {},
      allfeedList: {},
      no: '',
      keyword: '',
      isExistSearchWord: true,
      thisURL: window.location.href,
      recentSearchList: ['솜인형 공구', '순두부 열라면', '코돌비', '컬러리움'],
      top1: '',
      top2: '',
      top3: '',
      top4: '',
      top5: '',
      recommendUser: {},
      isFollowingArr: []
    }
  },
  computed: {
    showURL () {
      return !this.thisURL.includes('search')
    },
    following () {
      // console.log('NotMyPage following() computed: ' + this.followResult)
      // if (this.followResult.includes(item)) {
      //   return 'Y'
      // } else {
      //   return this.followResult
      // }
      // return this.followResult
      // return (item) => {
      //   if (this.followResult.includes(item)) {
      //     return 'Y'
      //   } else {
      //     return 'N'
      //   }
      // }
      return (item) => {
        const idx = this.isFollowingArr.findIndex((element, index, array) => element.user === item)
        return this.isFollowingArr[idx].isFollowing
      }
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
      console.log(from)
      this.thisURL = window.location.href
      //   console.log(this.thisURL)
    }
  },
  mounted () {
    this.recommendFollowAll()
  },
  methods: {

    recommendFollowAll () {
      const data = {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: this.$store.state.loginUserDTO.follow_user
      }

      this.$axios.post(this.$serverUrl + '/recommendFollowAll', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.recommendUser = res.data
        for (let i = 0; this.recommendUser.length; i++) {
          const data = { user: this.recommendUser[i].user_no, isFollowing: 'N' }
          this.isFollowingArr.push(data)
        }
      })
    },
    intoProfile (user) {
      // alert(user)
      const data = { user_no: user }

      console.log('user_nick = ' + data)

      this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.$store.commit('addOtherUser', res.data)
        console.log(this.$store.state.otherUserDTO)
        location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
      })
    },
    followThisUser (item) {
      const follow = {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: item
      }
      // alert('follow this user: ' + item)
      this.user_follow_create(follow)
      const idx = this.isFollowingArr.findIndex((element, index, array) => element.user === item)
      this.isFollowingArr[idx].isFollowing = this.isFollowingArr[idx].isFollowing === 'N' ? 'Y' : 'N'
    }
  },
  mixins: [Follow]
}
</script>
  <style scoped>
      .sidebar {
          /* height: inherit; */
          /* display: flex; */
          top: 0;
          right : 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width : 350px;
          height: 100%;
          padding : 0;
          background: #ffffff;
          border-left: 1px solid #dbdbdb;
      }

      .hover-change-color:hover span {
          /* color:orangered; */
          background-color: deeppink !important;
      }
      .list-group {
          border-radius: 1em;
          width : 100%;
          box-shadow: none;
      }

      img, svg {
      vertical-align: middle;
      width: 80px;
      height: 80px;
      border-radius: 50%;
  }
  #recommendfollow[data-v-e9fc843a] {
    width: 100%;
}
#tempButton {
    border: 1px dotted lightgray;
    border-right: none;
    border-left: none;
}
#tempButton:hover {
    background-color: lightpink;
}
#pageIcon {
    width: 6%;
    height: 6%;
    margin: 4% 3% 3% 48%;
}
#status {
    color: darkgray;
    text-align: center;
}
#top {
  color: orange;
}
.text-size-custom {
        text-size-adjust: auto;
}
  </style>
