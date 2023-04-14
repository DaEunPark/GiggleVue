<template>
    <div class="container">
        <form class="card bg-primary border-round-radious">
            <div class="settingSecurity list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" /></a>친구</h3>
                </div>
                <div class="tabItems">
                    <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#following" aria-selected="false" role="tab" tabindex="-1" @click="state0Change()">팔로잉</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#follow" aria-selected="true" role="tab" @click="state1Change()">팔로우</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#block" aria-selected="true" role="tab" @click="state2Change()">차단</a>
                    </li>
                    </ul>
                    <div id="myTabContent" class="tab-content px-3">
                        <div class="tab-pane fade active show" id="following" role="tabpanel">
                            <p>내가 팔로우 하는 목록</p>
                        </div>
                        <div class="tab-pane fade" id="follow" role="tabpanel">
                            <p>나를 팔로우 하는 목록</p>
                        </div>
                        <div class="tab-pane fade" id="block" role="tabpanel">
                            <p>내가 차단한 목록</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <!--내가 팔로우한 사람들 목록-->
    <div class="followingList list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" v-for="(user, user_nick) in followList" :key="user_nick" :items="followList" id="tempButton">
                <div class="profile-wrapper" v-if='this.state==0 && !this.state==1 && !this.state==2' >
                <button type="button" id="profileBtn"  @click="intoProfile(`${user.user_no}`)">
                <div class="profile-box">
                <img :src="`${ user.profile_image }`" id="recUserProfile" >
                </div>
                </button>
                </div>
                <div class="profile-user-name">
                <div class="mb-1 text-dark d-inline-block text-truncate text-nowrap fw-bold">
                    {{ user.user_nick }}</div>
                <div id="status">{{ user.status_message }}</div>
            </div>
            <!-- <a href="#" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-success text-nowrap text-size-custom">팔로우</span></a> -->
    </div>

    <!--나를 팔로우한 사람들 목록-->
    <div class="followuser list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" v-for="(followuser, user_nick) in followerList" :key="user_nick" :items="followerList" id="tempButton">
            <div class="profile-wrapper" v-if='!this.state==0 && this.state==1 && !this.state==2' >
                <button type="button" id="profileBtn"  @click="intoProfile(`${followuser.user_no}`)">
                <div class="profile-box">
                <img :src="`${ followuser.profile_image }`" id="recUserProfile" >
                </div>
                </button>
                </div>
                <div class="profile-user-name">
                <div class="mb-1 text-dark d-inline-block text-truncate text-nowrap fw-bold">
                    {{ followuser.user_nick }}</div>
                <div id="status">{{ followuser.status_message }}</div>
            </div>
            <!-- <a href="#" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-success text-nowrap text-size-custom">팔로우</span></a> -->

    </div>

    <!--내가 차단한 사람들 목록-->
    <div class="blockList list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" v-for="(blockList, user_nick) in blockList" :key="user_nick" :items="blockList" id="tempButton">
            <div class="profile-wrapper" v-if='!this.state==0 && !this.state==1 && this.state==2' >
                <button type="button" id="profileBtn"  @click="intoProfile(`${blockList.user_no}`)">
                <div class="profile-box">
                <img :src="`${ blockList.profile_image }`" id="recUserProfile" >
                </div>
                </button>
                </div>
                <div class="profile-user-name">
                <div class="mb-1 text-dark d-inline-block text-truncate text-nowrap fw-bold">
                    {{ blockList.user_nick }}</div>
                <div id="status">{{ blockList.status_message }}</div>
            </div>
            <!-- <a href="#" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-success text-nowrap text-size-custom">팔로우</span></a> -->

    </div>
</template>

<script>
import MenuBar from '../../components/components-MenuBarComp-left.vue'
import SideBar from '../../components/rightsidebars/SideBarComp.vue'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { MenuBar, SideBar },
  data() {
    return {
        user_no : this.$store.state.loginUserDTO.user_no,
        followList: {},
        state: 0,
        followerList: {},
        blockList: {}
    }
  },
  mounted() {
    this.getFollowingList()
  },
  methods: {
    getFollowingList() {
        this.followerList = {}
        this.blockList = {}
        
        const data= { user_no : this.user_no }

        this.$axios.post(this.$serverUrl + '/followingList', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            console.log("res = " + res)
            this.state = 0
            this.followList = res.data
          })
    },
    getFollowList() {

    },
    getBlockList() {

    },
    followThisUser () {
      const data = {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: this.$store.state.loginUserDTO.follow_user
      }

      this.$axios.post(this.$serverUrl + '/follow', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log("팔로우합니다.")
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
    state0Change() {
        this.getFollowingList()
    },
    state1Change() {  
        this.followList = {}
        this.blockList = {}
        const data= { user_no : this.user_no }

        this.$axios.post(this.$serverUrl + '/followerList', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            console.log("res = " + res.data)
            this.state = 1
            this.followerList = res.data
          })       
    },
    state2Change() {  
        this.followList = {}
        this.followerList = {}

        const data= { user_no : this.user_no }

        this.$axios.post(this.$serverUrl + '/blockList', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            console.log("res = " + res.data)
            this.state = 2
            this.blockList = res.data
          })       
    },   
  }

}
</script>
<style>
.nav-tabs{
    width:100%;
    display: flex;
    justify-content: center;
}
.nav-item{
    width: 30%;
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
</style>
