<template>
    <div>
        <article class="my-3" id="userFeedList">
            <div class="row row-cols-auto">
                <div  v-for="(item , idx) in items" :key="{idx}" class="list-group list-group-flush" id="userFeedList_GF">

                         <div class="col">
                            <button type="button" class="pro_btn" @click="Gouserpage(item.user_no)">
                              <img :src="item.profile_image"  width="70" height="70" class="rounded-circle" alt="user_profile">
                            <p class="FeedList_username" style="margin:auto">{{item.user_nick}}</p></button>
                     </div>

                </div>
            </div>
        </article>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
export default {
  props: {
    items: { type: Object, default: null }
  },
  methods: {
    // eslint-disable-next-line camelcase
    Gouserpage (user_no) {
      const data = { user_no: user_no }
      // eslint-disable-next-line camelcase
      // console.log('Data=' + user_no)
      this.$axios.post(this.$serverUrl + '/Gouserpage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        // console.log('res.data.user_no = ' + res.data.user_no)
        // eslint-disable-next-line eqeqeq
        if (this.$store.state.loginUserDTO.user_no != res.data.user_no) {
          const data = { user_no: res.data.user_no }
          // console.log('const data=' + data)
          this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            this.$store.commit('addOtherUser', res.data)
            // console.log(this.$store.state.otherUserDTO)

            location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
          }).catch(error => {
            console.log(error)
          })
        // // eslint-disable-next-line eqeqeq, eqeqeq, eqeqeq
        } else if (this.$store.state.loginUserDTO.user_no === res.data.user_no) {
          this.$router.push({
            path: '/main/mypage'
          })
        }
      })
    }
  }
}
</script>

<style>
#userFeedList {
    margin : auto;
    padding: 12px 8px;
}
#userFeedList_GF {
    /* backdrop-filter: blur(1000px); */
    box-shadow: none;
    /* margin-bottom: 100px; */
}
#userFeedList_GI:hover {
    background-color: #efefef;
}
.FeedList_username {
    font-weight: bold;
    color:black;
}

.pro_btn {
    border: none;
    background-color: transparent;
}
</style>
