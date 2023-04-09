<template>
  <div>
    <div id="commentContent">
      <table>
        <tr>
          <td style="width: 80%;" id="contentBox">
            <textarea style="width: 100%;"  rows="5" cols="100" placeholder="댓글을 입력해주세요" v-model="comment_content" ref="content" ></textarea>
          </td>
          <td>
            <button class="btn btn-primary btn-mb" @click="getCommentRegister" id="upload">등록하기</button>
          </td>
          </tr>
        </table>
    </div>

    <div v-for="(comment, idx) in commentList" :key="idx" class="list-group list-group-flush" id="commentList">
      <table>
        <tr id="commentDetail">
          <td>{{ comment.user_nick }}</td>
          <td>{{comment.comment_date}}</td>
          <a href="/main/mypage" ><img :src="comment.profile_image"  width="50" height="50" class="rounded-circle" alt="user_profile" ></a>

          <td class="txt_left">{{comment.comment_content}}</td>
          <td><button @click="getCommetnDelete">삭제</button></td>
         </tr>
      </table>
    </div>
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
        alert(res.data)
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
}
#contentBox{
  background-color: white;
}
#commentDetail{
  color: black;
}
</style>
