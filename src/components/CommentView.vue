<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <div id="commentContent">
      <table>
        <tr>
          <td style="padding-right: 10%; padding-left: 10%; padding-top: 10px;" id="contentBox">
            <textarea style="width: 100%;" rows="5" cols="100" placeholder="
            🛸　　　 　🌎　°　　🌓　•　　.°•　　　🚀 ✯.　　　•　° ★　•  ☄
             　　　★　*　　　　　°　　　　🛰 　°·　　   🪐 　　　★　*　　　　🛰
           .　　　•　° ★　•  ☄🛸　　　 　🌎　°　　🌓　•　　.°•　　　🚀 ✯"
    v-model="comment_content" ref="content" ></textarea>
          </td>
          <td>
            <button class="btn btn-primary btn-mb" @click="getCommentRegister" id="upload"><small>등록</small></button>
          </td>
          </tr>
        </table>
    </div>

    <div v-for="(comment, idx) in commentList" :key="idx" style="" class="list-group list-group-flush" id="commentList">
      <table id="commentListDetail" style="width: 100%; border-width:1px;">
        <tr id="commentDetail">
          <a href="/main/mypage" v-if="this.$store.state.loginUserDTO.user_no == comment.user_no" ><img :src="comment.profile_image"  width="50" height="50" class="rounded-circle" id="profileimage" alt="user_profile" ></a>
          <a href="#" @click="otherUser(comment.user_no)" v-else><img :src="comment.profile_image"  width="50" height="50" class="rounded-circle" id="profileimage" alt="user_profile" ></a>

          <p style="margin-right:10px" id="user_nick">{{ comment.user_nick }}</p>
          <small class="comment_date" text-align="right">{{comment.comment_date}}</small>
        </tr>
</table>
        <div id="commentcontent_delete">
          <p class="txt_left" id="comment_content" style=" rows: 5; cols:100; white-space:pre-line; overflow: hidden; text-overflow: ellipsis; ">{{comment.comment_content}}</p>
          <button id="deletebtn" class="btn btn-outline-dark btn-sm" @click="getCommentDelete(`${comment.comment_no}`)" v-if="this.$store.state.loginUserDTO.user_no == comment.user_no" >삭제</button>
         </div>
    </div>
    <p style="width: 100%; " id="line" ></p>
  </div>
</template>

<script>

export default {

  props: {
    post_no: Number

  },
  data () {
    return {
      comment_content: '',
      commentList: []
    }
  },
  mounted () {
    this.getCommentList()
  },

  methods: {
    getCommentList () {
      this.$axios.get(this.$serverUrl + '/comment/commentList/' + this.post_no)
        .then((res) => {
          this.commentList = res.data
        })
    },
    getCommentRegister () {
      console.log(this.comment_content)
      // eslint-disable-next-line no-unused-vars
      const data = { content: this.comment_content }
      this.$axios.post(this.$serverUrl + '/comment/commentRegister', {
        user_no: this.$store.state.loginUserDTO.user_no,
        post_no: this.post_no,
        comment_content: this.comment_content
      }).then((res) => {
        // alert(res.data)
      })
      location.reload()
    },
    getCommentDelete (cno) {
      // alert(cno)
      // alert(this.comment_no)
      console.log(this.comment_no)
      // eslint-disable-next-line no-unused-vars
      const data = { comment_no: this.comment_no }
      this.$axios.post(this.$serverUrl + '/comment/commentDelete', {
        comment_no: cno,
        post_no: this.post_no
      }).then((res) => {
        // alert(res.data)
      })
      location.reload()
    },
    otherUser (userno) {
      const data = { user_no: userno }

      this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.$store.commit('addOtherUser', res.data)
        console.log(this.$store.state.otherUserDTO)
        this.$router.push({
          path: `/main/notmypage/${this.$store.state.otherUserDTO.user_nick}`
        })
        // location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>
<style scoped>
#commentContent {
  width: 100%;

}
#commentContent table {
  width: 100%;
  border-width: 1px;
}
#contentBox{
  background-color: white;
  border-width: 1px;
  border-right-style: hidden;
}
#commentDetail{
  color: black;
  float: left;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 10px;

}
textarea {
  resize: none;
  background-color: white;
  color: black;
  border: none;
}
#commentListDetail{
  background-color: white;
  border-width: 1px;

}
#commentList{
  padding-top: 10px;
  border-width:1px;
  padding-left:10%;
  padding-right:10%;
}
div{
  box-shadow: none;

}
table{

  border-style: solid;
  border-right-style: hidden;
  border-left-style: hidden;
  border-top-style: 1px;
  border-bottom-style: hidden;
  width: 1px;
  border-color: rgb(228, 227, 227);
}
#user_nick{
  float: left;
  padding-left: 20px;

}
.comment_date{
  color: rgb(126, 126, 126);
  font-size: small;
  float: right;
  padding-left: 5px;
}
#profileimage{
  float: left;
}
#commentcontent_delete{
  color:black;
  margin-left: 7%;

}
#deletebtn{
  float:right;
  font-size: small;
}

</style>
