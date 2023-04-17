<template>
    <div>
        <article class="mx-3" id="FeedList">
            <div  v-for="(item , idx) in items" :key="{idx}" class="list-group list-group-flush" id="FeedList_GF">

                <div class="feed_row px-1">
                    <div class="feed_profile" style="margin-right : 20px">
                        <!--개인 프로필로 가는 링크-->
                        <!-- <a @click="whichProfile(item.post_no)" ><img :src="item.profile_image"  width="50" height="50" class="rounded-circle" alt="user_profile" > </a> -->
                        <button type="button" class="pro_btn" @click="whichProfile(item.post_no)"><img :src="item.profile_image"  width="50" height="50" class="rounded-circle" alt="user_profile" ></button>
                    </div>

                    <!--개인 프로필로 가는 링크-->
                    <div class="feed_contents">
                      <div class="feed_text">
                        <div class="d-flex w-50 justify-content-between" id="GoUserprofile">
                            <button type="button" class="pro_btn" @click="whichProfile(item.post_no)">
                              <div class ="content_top">
                                <p class="FeedList_username" style="margin-right:10px" id="userNick">{{item.user_nick}}</p>
                                <small class="FeedList_regdate">{{item.post_date}}</small>
                              </div>
                            </button>
                        </div>
                        <a  @click="getPostDetail(item.post_no)" role="button" id="FeedList_GI">
                            <div class="FeedList_contents">
                                <p class="my-1">{{item.text_content}} </p>
                            </div>
                        </a>

                        <!--댓글창 , 좋아요 , 게시글공유 , 인사이트 -->
                        <div class="FeedList_activeicont mt-2">
                                <div class="bottom_btn" id="FL_spancomment">
                                    <a class="btn"  @on-click="fn_pushComment()" @click="getPostDetail(item.post_no)">
                                    <font-awesome-icon icon="fa-regular fa-comment"/>
                                    <span class="bottom_cnt">{{ item.comment_cnt}}</span>
                                    </a>
                                </div>
                                <div v-if="this.activate == '1'">
                                    <ul>
                                        <li>"코멘트 테스트!"</li>
                                    </ul>
                                </div>
                                <div class="bottom_btn">
                                  <a v-if="item.isLike == 'Y'" @click="fn_pushLike(item.post_no)" role="button">
                                    <font-awesome-icon  icon="fa-solid fa-heart" style="color:#ed5c9d ;"/>
                                    <span class="bottom_cnt">{{ item.like_cnt }}</span>
                                  </a>
                                  <a v-else @click="fn_pushLike(item.post_no)" role="button">
                                    <font-awesome-icon  icon="fa-regular fa-heart" style="color:#ed5c9d ;"/>
                                    <span class="bottom_cnt">{{ item.like_cnt }}</span>
                                  </a>
                                </div>
                                <div class="bottom_btn" id="FL_spanshare">
                                    <a class="btn" @click="sharebtn()">
                                    <font-awesome-icon icon="fa-regular fa-share-from-square"/>
                                    </a>
                                </div>
                                <div class="bottom_btn" id="FL_spanchart">
                                    <!--<a class="btn"  @on-click="fn_pushInsite()">-->
                                    <!-- <a href="#postInsite"
                                        class = "btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#postInsite"
                                        @on-click = "fn_pushInsite()">
                                        <font-awesome-icon icon="fa-solid fa-chart-simple"/>
                                    </a> -->
                                    <a class="btn" v-show="item.imgCnt > 0" style="pointer-events: none;">
                                      <font-awesome-icon icon="fa-regular fa-images" />
                                      <span class="bottom_cnt">{{ item.imgCnt }}</span>
                                    </a>
                                    <a class="btn" v-show="item.imgCnt <= 0" style="pointer-events: none; opacity: 0;">
                                      <font-awesome-icon icon="fa-regular fa-images" />
                                      <span class="bottom_cnt">{{ item.imgCnt }}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-2" style="color:#b0b0b0; margin : 0;">

            </div>
        </article>
    </div>
    <!--postInsite 시작-->
    <div class="modal fade" id="postInsite" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="headerWrap">
                        <h3 style="font-size:32px; margin:auto;">게시물 인사이트</h3>
                    </div>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                    </button>
                </div>
                <div class="modal-body">
                    <!-- <postAnalitics></postAnalitics> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import postAnalitics from './postAnalitics.vue'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default {
  data () {
    return {
      activate: '0'
    }
  },
  props: { // MainContentsView 의 자식컴포넌트로 사용됨
    items: { type: Array, default: null }
  },
  computed: {
    showImgIcon () {
      return this.item.imgCnt > 0
    }
  },
  methods: {
    // eslint-disable-next-line camelcase
    getPostDetail (post_no) {
      this.$router.push({ path: '/main/postdetail', query: { post_no: post_no } })
    },
    // eslint-disable-next-line camelcase
    whichProfile (post_no) {
      const data = { post_no: post_no }
      // eslint-disable-next-line camelcase
      console.log('Data=' + post_no)
      this.$axios.post(this.$serverUrl + '/whichProfile', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log('res.data.user_no = ' + res.data.user_no)
        // eslint-disable-next-line eqeqeq
        if (this.$store.state.loginUserDTO.user_no != res.data.user_no) {
          const data = { user_no: res.data.user_no }

          console.log('const data=' + data)

          this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            this.$store.commit('addOtherUser', res.data)
            console.log(this.$store.state.otherUserDTO)
            location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
          }).catch(error => {
            console.log(error)
          })
        // eslint-disable-next-line eqeqeq
        } else if (this.$store.state.loginUserDTO.user_no == res.data.user_no) {
          this.$router.push({
            path: '/main/mypage'
          })
        }
      })
    },
    fn_pushComment () {
      // eslint-disable-next-line eqeqeq, no-unused-expressions
      this.activate == '1'
      // eslint-disable-next-line no-unused-expressions
      stop
    },

    sharebtn () {
      console.log('url주소 = ' + location.href)
    },

    // eslint-disable-next-line camelcase
    fn_pushLike (postNo) {
      console.log(postNo)

      // 게시글 번호로 게시글 리스트에서 현재 게시글 데이터를 찾고, isLike를 반대로 바꿔준다. (like_cnt도 증가시킨다.)
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].post_no === postNo) {
          if (this.items[i].isLike === 'Y') {
            // eslint-disable-next-line vue/no-mutating-props
            this.items[i].isLike = 'N'
            // eslint-disable-next-line vue/no-mutating-props
            this.items[i].like_cnt = this.items[i].like_cnt - 1
            console.log('좋아요 취소~~')
          } else {
            // eslint-disable-next-line vue/no-mutating-props
            this.items[i].isLike = 'Y'
            // eslint-disable-next-line vue/no-mutating-props
            this.items[i].like_cnt = this.items[i].like_cnt + 1
            console.log('좋아요~~')
          }
        }
      }

      // 게시글 번호와 로그인 유저 번호로 좋아요 데이터를 추가/삭제한다.
      this.$axios.post(this.$serverUrl + '/pushLike', {
        user_no: this.$store.state.loginUserDTO.user_no,
        post_no: postNo

      }).then(res => {
        console.log(res.data)
      })
    },
    likeCount (like) {
      this.$axios.get(`${this.$serverUrl}/likeCount`, {
        params: {
          user_no: like.user_no,
          post_no: like.post_no

        }
      }).then(res => {
        this.likeResult = res.data
        console.log(`Like.js liked: ${this.likeResult}`)
      }).catch(err => {
        console.log(err.data)
      })
    }
  }
}

</script>

<style scoped>

#FeedList_GF {
    /* backdrop-filter: blur(1000px); */
    box-shadow: none;
    /* margin-bottom: 100px; */
}
#FeedList_GI:hover {
    /* background-color: #efefef; */
    pointer-events: auto;
    /* color: #a532e8; */
}

#FeedList_GI .FeedList_contents p{
    color: black;
}

#FeedList_GI:hover .FeedList_contents p{
    color: darkslategray;
    /* background-color: #a532e8; */
}

#GoUserprofile a:hover .FeedList_username {
    /* text-decoration:underline; */
    color: #ed5c9d;
}
#GoUserprofile a {
    text-decoration: none;
}
.feed_contents{
  width : 100%;
}
.feed_text{
  display: flex;
  flex-direction: column;
  width : 100%;
}
.feed_row{
  padding : 0 20px;
  display: flex;
  flex-direction: row;
  width : 100%;
}
.content_top{
  display : flex;
  flex-direction : row;
  width : 100%;
}
.FeedList_username {
    color:black;
}
.FeedList_contents{
  padding : 0;
  margin : 0;
}
.FeedList_regdate {
    color:rgb(126, 126, 126);
    font-size: small;
}
.FeedList_activeicont{
  display:flex;
  flex-direction: row;
  justify-content: space-between;

}
.bottom_btn > a{
  padding : 0;
  margin : 0;
}
.bottom_cnt{
  margin-left : 5px;
}
.FeedList_activeicont #FL_spancomment a ,
.FeedList_activeicont #FL_spanlike a ,
.FeedList_activeicont #FL_spanshare a,
.FeedList_activeicont #FL_spanchart a {
    border-style:none;
    color: #b0b0b0;
}
.FeedList_activeicont span {
    color: #b0b0b0;
    /* position:   fixed; 화면 롤 오류발생 */
}
.FeedList_activeicont #FL_spancomment a:hover ,
.FeedList_activeicont #FL_spancomment a:hover span  {
    /* text-decoration:underline; */
    color: #41d7a7;
}
.FeedList_activeicont #FL_spanlike a:hover ,
.FeedList_activeicont #FL_spanlike a:hover span {
    color:  #ed5c9d ;
}
.FeedList_activeicont #FL_spanshare a:hover {
    color:  #3266e8;
}
.FeedList_activeicont #FL_spanchart a:hover {
    color:  #a532e8;
}
.modal {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
}
.modal-backdrop {
  position: unset !important;
}
.modal-dialog {
  width: 50%;
  height: 90%;
}
.modal-content {
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 100%;
  /* z-index: 7; */

}

.modal-header {
  margin:32px;
  text-align: center;
  display:flex;
  position: relative;
}
.headerWrap {
  position:absolute;
  left:50%;
  transform: translateX(-50%);
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.modal-header > button {
  position:absolute;
  right : 0;
  transform: translateX(-50%);
}
.modal-body {
    border-top: 1px solid #ccc;
  padding: 0px 20px 10px 20px;
  height: 100%;
}
.pro_btn {
    border: none;
    background-color: transparent;
    margin : 0;
    padding : 0;
}
#userNick {
    font-weight: bold;
    margin : 0;
    padding : 0;
}
</style>
