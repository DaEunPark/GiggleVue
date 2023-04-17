<template>
    <div>

<div class="bottom_btn" id="FL_spanlike">
<a class="btn"  @click="fn_pushLike()">
   <!-- <div v-if="getLikeList === 'N'"  @click="fn_pushLike()"> <span class="text-nowrap">라잌</span></div>
   <div v-if="getLikeList === 'Y'"  @click="fn_pushLike()"> <span class="text-nowrap">언랔</span></div> -->
<font-awesome-icon  icon="fa-regular fa-heart" style="color:red;"/>
<!-- <span class="bottom_cnt">{{ item.like_cnt }}</span> -->
</a>
</div>

    <div v-for="(like, idx) in likeList" :key="idx" style="" class="list-group list-group-flush" id="likeList">
      <table id="likeListDetail" style="width: 100%; border-width:1px;">
        <tr id="likeDetail">
          <p style="margin-right:10px" id="user_nick">{{ like.like_no }}</p>
          <p style="margin-right:10px" id="user_nick">{{ like.user_no }}</p>
          <small class="comment_date" text-align="right">{{like.post_no}}</small>
          <small class="comment_date" text-align="right">{{like.like_cnt}}</small>
        </tr>
      </table>

        <div id="like_no_delete">
          <button id="deletebtn" class="btn btn-mb" @click="getunLike(`${like.like_no}`)" v-if="this.$store.state.loginUserDTO.user_no == like.user_no" >삭제</button>
         </div>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    post_no: Number,
    like_no: Number
  },
  data () {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      like_no: 0,
      likeList: []
    }
  },
  mounted () {
    this.getLikeList()
  },
  computed () {
    this.getLikeList()
    return this.likeList
  },
  methods: {
    getLikeList () {
      this.$axios.get(this.$serverUrl + '/likeList/' + this.post_no)
        .then((res) => {
          this.likeList = res.data
        })
    },
    fn_pushLike () {
      alert('!!!')
      console.log(this.like_no)
      console.log(this.likeList)
      // eslint-disable-next-line no-unused-vars
      const data = { content: this.like_no }

      this.$axios.post(this.$serverUrl + '/pushLike', {
        user_no: this.$store.state.loginUserDTO.user_no,
        post_no: this.post_no,
        like_no: this.like_no
      }).then(res => {
        console.log(res.data)
        // eslint-disable-next-line no-unused-expressions
        res.data
        // this.likeResult = res.data
        // console.log(`Like.js ${this.likeResult}`)
      }).catch(err => {
        console.log(err.data)
      })
    } /*
    islikeCount () {
      this.$axios.get(`${this.$serverUrl}/likeCount`+ this.post_no, {
        params: {
          user_no: like.user_no,
          post_no: like.post_no,
          like_no: like.like_no
        }
      }).then(res => {
        this.likeResult = res.data
        console.log(`likr: ${this.likeResult}`)
      }).catch(err => {
        console.log(err.data)
      })
    },/*
     getUnLike(lno) {
      alert(lno)
      alert(this.like_no)
      console.log(this.like_no)
      // eslint-disable-next-line no-unused-vars
      const data = { like_no: this.like_no }
      this.$axios.post(this.$serverUrl + '/like/likeDelete', {
        like_no: lno
      }).then((res) => {
        alert(res.data)
      })

    }, */
    //     isLikeCheck () {
    //   // eslint-disable-next-line eqeqeq, no-unused-expressions
    //   this.activate == 'N'
    //   // eslint-disable-next-line no-unused-expressions
    //   stop
    // },
  }

}
</script>
