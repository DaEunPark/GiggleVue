<template>
    <div class="container mt-3">
        <article class="followWrap px-2" id="followList">
            <div  v-for="(item , idx) in items" :key="{idx}" class="followListWrap">
                <div class="user_row mb-2 px-3"   @click="intoProfile(`${item.user_no}`)">
                    <div class="profileWrap">
                        <div class="profile-img">
                            <img :src="`${ item.profile_image }`"  width="50" height="50" class="follow_profileImage rounded-circle my-1" style="margin-right:10px;">
                        </div>
                        <div class="profile-nick text-dark text-nowrap fw-bold" style="overflow: hidden; width: 7.4em;">
                            {{ item.user_nick }}
                        </div>
                        <div class="profile-status">
                            {{ item.status_message }}
                        </div>
                    </div>
                    <!-- <div v-if="following === 'N'" class="user_follow_btn" @click="followThisUser(item.user_no)"> <span class="text-nowrap + `{idx}`">팔로우</span></div>
                    <div v-if="following === 'Y'" class="user_following_btn" @click="followThisUser(item.user_no)"> <span class="text-nowrap">팔로잉</span></div> -->
                </div>
            </div>
        </article>
    </div>
</template>
<script>
// import { Follow } from '../mixins/Follow'
export default {
  data () {
    return {
      // follow: {
      // user_no: this.$store.state.loginUserDTO.user_no,
      // follow_user: this.$store.state.otherUserDTO.user_no
      // }
    }
  },
  props: { // MainContentsView 의 자식컴포넌트로 사용됨
    items: { type: Object, default: null }
  },
  // computed: {
  //     following () {
  //         console.log('FollowList following() computed: ' + this.followResult)
  //         if (this.followResult.includes(this.follow.follow_user)) {
  //             return 'Y'
  //         } else {
  //             return this.followResult
  //         }
  //     }
  // },
  methods: {
    // user_follow (user_no) {
    //     console.log("user_follow에서 user_no = "+ user_no)
    //     this.user_follow_create(this.follow)
    // },
    // followThisUser (item) {
    //     const follow = {
    //         user_no: this.$store.state.loginUserDTO.user_no,
    //         follow_user: item
    //     }
    //     // alert('follow this user: ' + item)
    //     this.user_follow_create(follow)
    // },
    intoProfile (item) {
      // alert(user)
      const data = { user_no: item }

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
    }
  }
  // mixins: [Follow]
}
</script>

<style scoped>
.user_row{
    display : flex;
    flex-direction : row;
    align-items: center;
}
.profileWrap {
    display : flex;
    flex-direction: row;
    align-items: center;
}
.followListWrap :hover{
    background-color: #f2f2f2;
    border-radius: 2em;
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
    background-color: deeppink !important;
  }
  .user_follow_btn {
    background-color: #41d7a7 !important;
  }

  .user_following_btn span {
    color: #e8e8e8 !important;
    -webkit-text-fill-color: #e8e8e8 !important;
    background-color: deeppink !important;
  }
  .user_follow_btn span {
    color: #e8e8e8 !important;
    -webkit-text-fill-color: #e8e8e8 !important;
    background-color: #41d7a7 !important;
  }

  .user_following_btn span, .user_follow_btn span {
    text-size-adjust: auto;
    margin: auto;
    color: #e8e8e8 !important;
    -webkit-text-fill-color: #e8e8e8 !important;
  }

</style>
