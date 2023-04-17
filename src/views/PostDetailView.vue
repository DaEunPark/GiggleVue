<template>
  <div>
    <article class="mb-3" id="FeedList">
      <div class="setting__title align-items-center">
        <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
          <h3 class ="list-group-item text-dark border-primary my-2">
            <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" />POST
          </h3>
        </button>
      </div>
      <hr class="mb-1" style="color:#b0b0b0; margin:0;">
      <div class="feed_row px-1">

        <!--개인 프로필로 가는 링크-->
        <div class="feed_contents">
          <!--개인 프로필로 가는 링크-->
          <div class="d-flex justify-content-between" id="GoUserprofile">
            <!-- <button type="button" class="pro_btn" @click="whichProfile(item.post_no)"> -->
              <div class ="content_top mt-1">
                <div class="feed_profile" style="margin-right : 20px">
                  <button type="button" class="pro_btn" @click="whichProfile(item.post_no)"><img :src="item.profile_image"  width="50" height="50" class="rounded-circle" alt="user_profile" > </button>
                </div>
                <div class="feed_text">
                  <div class="feed_usernick mt-1">
                    <h5 class="FeedList_username" style="margin-right:10px" id="userNick">{{item.user_nick}}</h5>
                    <small class="FeedList_regdate">{{item.post_date}}</small>
                    <span class="FeedList_update" v-if="isMine">
                      <a role="button" class="text-dark" id="modify-post" @click="modifyPost()">수정</a>
                      <a role="button" class="text-dark" id="delete-post" @click="deletePost()">삭제</a>
                    </span>
                  </div>

                  <div class="FeedList_contents">
                    <div id="imageuploadarea">
                      <div class="wrap" v-if="postImgList.length > 0">
                        <img class="uploadimage" :src="imgurl.imagepath" v-for="(imgurl, index) in postImgList" :key="imgurl" role="button" data-bs-toggle="modal" data-bs-target="#gallaryModal" @click="thisImageActive(index)">
                      </div>
                      <!-- <img :src="imgurltest" style="width: 80%; height: 80%;"> -->
                    </div>
                      <!-- video-embed start -->
                    <div class="ytarea" v-show=showYoutube>
                      <div class="ratio ratio-16x9">
                      <!-- <video-embed src="https://youtu.be/7T8F7ZF52lo"></video-embed> -->
                        <div v-if="rightYTID">
                          <iframe id="yotube-frame" :src="youtubeURL" title="YouTube video player" frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div v-else>
                          <a :href="youtubeURL">{{ youtubeURL }}</a>
                        </div>
                      </div>
                      <br/>
                    </div>
                    <!-- video-embed end -->
                    <p style="color: black;" class="mb-1">{{item.text_content}} </p>
                  </div>
                </div>
              </div>
            <!-- </button> -->
            </div>
                </div>
            </div>

        <hr class="mt-1" style="color:#b0b0b0; margin:0px;">
        <!--댓글창 , 좋아요 , 게시글공유 , 인사이트 -->
        <div class="FeedList_activeicont">
          <div class="bottom_btn" id="FL_spancomment">
              <a class="btn"  @on-click="fn_pushComment()">
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
          <div v-if="this.activate == '1'">
              <ul>
                  <li>"likuyrte 테스트!"</li>
              </ul>
          </div>
          <div class="bottom_btn" id="FL_spanshare">
              <a class="btn" @on-click="fn_pushLink()" :href="item.post_no">
              <font-awesome-icon icon="fa-regular fa-share-from-square"/>
              </a>
          </div>
          <div class="bottom_btn" id="FL_spanchart">
              <!--<a class="btn"  @on-click="fn_pushInsite()">-->
              <a href="#postInsite"
                  class = "btn"
                  data-bs-toggle="modal"
                  data-bs-target="#postInsite"
                  @on-click = "fn_pushInsite()">
                  <font-awesome-icon icon="fa-solid fa-chart-simple"/>
              </a>
          </div>
        </div>
      <hr style="color:#b0b0b0; margin:0px;">
      <CommentView :post_no="post_no"></CommentView>
       <!-- <HeartView :post_no="post_no"></HeartView> -->
    </article>
  </div>
   <!--postInsite 시작-->
   <div class="modal modal-postInsite fade" id="postInsite" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog-postInsite modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content-postInsite modal-content">
                <div class="modal-header-postInsite modal-header">
                    <div class="headerWrap-postInsite headerWrap">
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
                <div class="modal-body-postInsite modal-body">
                    <div class="postAnalitics border-round-radious">
                        <div class="postAnaliticsWrap px-4 ">
                            <div class="analitics__post mb-2">
                                <div class="card analitics__card border-primary mb-3" style="max-width: 20rem;">
                                <div class="card-header">Like</div>
                                <div class="card-body analitics__cardBody">
                                    <h4 class="card-title analitics__cardTitle">{{ item.like_cnt }}</h4>
                                </div>
                                </div>
                                <div class="card analitics__card border-primary mb-3">
                                    <div class="card-header">Comment</div>
                                    <div class="card-body analitics__cardBody">
                                        <h4 class="card-title analitics__cardTitle">{{ item.comment_cnt }}</h4>
                                    </div>
                                </div>
                                <div class="card analitics__card border-primary mb-3">
                                    <div class="card-header">Share</div>
                                    <div class="card-body analitics__cardBody">
                                        <h4 class="card-title analitics__cardTitle">{{ item.share_cnt }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="setting__bar mb-2">
                        <div class="analitics__postWrap px-4 ">
                            <h5>내 게시물을 본 사람</h5>
                            <img src="@/assets/linechart.jpg" style="width: 95%; height: 100%; margin-left: 20px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- GallaryModal -->
    <div class="modal fade" id="gallaryModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen" role="document">
          <div class="modal-content">
            <div class="modal-header bg-secondary">
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-secondary">
              <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-touch="false" data-bs-interval="false">
              <div class="carousel-inner" style="margin: 0; padding: 0;">
                <div class="carousel-item" v-bind:class="{active: index === this.activeIndex}" v-for="(img, index) in postImgList" :key="img.imagepath">
                      <img :src="img.imagepath" class="d-block w-100 gallaryImage" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
import CommentView from '@/components/CommentView.vue'
import HeartView from '@/components/HeartView.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CommentView, HeartView
  },
  //   props: {
  //     item: { type: Object, default: null }
  //   },
  data () {
    return {
      post_no: this.$route.query.post_no,
      item: {},
      rightYTID: false,
      youtubeURL: '',
      showYoutube: false,
      postImgList: [],
      activeIndex: 0

    }
  },
  mounted () {
    window.scrollTo(-10, 0)
  },
  created () {
    this.postDetail()
  },
  beforeUpdate () {
    // this.postDetail()
  },
  computed: {
    isMine () {
      return this.item.user_no === this.$store.state.loginUserDTO.user_no
    }
  },
  methods: {

    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    },
    postDetail () {
      this.getThisPostDetail()
    },
    async getThisPostDetail () {
      await this.$axios.get(`${this.$serverUrl}/post/postdetail`, {
        params: {
          post_no: this.post_no,
          user_no: this.$store.state.loginUserDTO.user_no
        }
      }).then(res => {
        console.log(`Query: ${this.post_no}`)
        this.item = res.data.post
        this.postImgList = res.data.postImages
        console.log('images : ' + res.data.postImages.length)
        if (this.item.post_link === '' || this.item.post_link === null || this.item.post_link === undefined) {
          this.showYoutube = false
        } else {
          this.showYoutube = true
          this.youtubeURL = this.parseYoutubeUrl(this.item.post_link)
        }
      }).catch(err => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    parseYoutubeUrl (url) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      const matchResult = url.match(regExp)
      if (matchResult && (matchResult[2].length === 11)) {
        // console.log(`${matchResult[2]}`)
        this.rightYTID = true
        return `https://www.youtube.com/embed/${matchResult[2]}`
      } else {
        this.rightYTID = false
        return url
      }
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
            this.$router.push({
              path: `/main/notmypage/${this.$store.state.otherUserDTO.user_nick}`
            })
            // location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
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
    // eslint-disable-next-line camelcase
    deletePost () {
      // eslint-disable-next-line camelcase
      this.$axios.delete(`${this.$serverUrl}/post/deletepost/${this.post_no}`)
        .then(res => {
          console.log(res.data)
          if (res.data === 'Y') {
            alert('포스트를 삭제했습니다.')
            this.$router.replace('/main/mainhome')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    modifyPost () {
      this.$router.push({ path: '/main/modifypost', query: { post_no: this.post_no } })
    },
    sharebtn () {
      console.log('url주소 = ' + location.href)
      alert(location.href + '                         주소가 복사되었습니다')
    },
    thisImageActive (index) {
      this.activeIndex = index
    },
    fn_pushLike (postNo) {
      console.log(postNo)

      // 게시글의 좋아요 상태를 바꿔준다.
      if (this.item.isLike === 'Y') {
        // 좋아요를 누른 상태일 때
        this.item.isLike = 'N'
        this.item.like_cnt = this.item.like_cnt - 1
        console.log('좋아요 취소~~')
      } else {
        // 좋아요를 누르지 않은 상태일 때
        this.item.isLike = 'Y'
        this.item.like_cnt = this.item.like_cnt + 1
        console.log('좋아요~~')
      }

      // 게시글 번호와 로그인 유저 번호로 좋아요 데이터를 추가/삭제한다.
      this.$axios.post(this.$serverUrl + '/pushLike', {
        user_no: this.$store.state.loginUserDTO.user_no,
        post_no: postNo

      }).then(res => {
        console.log(res.data)
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
    background-color: #efefef;
}
#GoUserprofile {
  width: 90% !important;
}
#GoUserprofile a:hover .FeedList_username {
    /* text-decoration:underline; */
    color: #ed5c9d !important;
}
#GoUserprofile a {
    text-decoration: none !important;
}
.feed_contents{
  width : 100%;

}
.feed_text{
  display: flex;
  flex-direction: column;
  width : 100%;
  justify-content: left;
  text-align: left;
}
.feed_row{
  padding : 0 20px;
  display: flex;
  flex-direction: row;
  width : 100%;
}
.feed_usernick{
  display: flex;
  flex-direction: row;
  width : 100%;
  align-items: center;
}
.content_top{
  display : flex;
  flex-direction : row;
  width : 100%;
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
.FeedList_username {
    color:black;
}
/* .FeedList_contents{
  padding : 0;
  margin : 0;
} */
.FeedList_regdate {
    color:rgb(126, 126, 126);
    font-size: small;
    flex-grow: 1;
}
.FeedList_activeicont{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin : 10px 30px;

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
    /* position:   fixed; */
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
.modal-postInsite {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
}
.modal-dialog-postInsite {
  width: 50%;
  height: 90%;
}
.modal-content-postInsite {
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 100%;
  z-index: 7;
}

.modal-header-postInsite {
  margin:32px;
  text-align: center;
  display:flex;
  position: relative;
}
.headerWrap-postInsite {
  position:absolute;
  left:50%;
  transform: translateX(-50%);
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.modal-header-postInsite > button {
  position:absolute;
  right : 0;
  transform: translateX(-50%);
}
.modal-body-postInsite {
    border-top: 1px solid #ccc;
    padding: 0px 20px 10px 20px;
    height: 100%;
}
.setting__bar{

width:550px;
margin : 0 auto;
color : gray;
}
.analitics__account{
display:flex;
flex-direction: row;
justify-content: space-between;
}
.analitics__post{
display:flex;
flex-direction: row;
justify-content: space-between;
}
.analitics__card{
width: 30%;
}
.analitics__cardBody{
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-header{
text-align: center;
}
.analitics__cardTitle{
    color : black;
    margin : 0;
}
#yotube-frame {
  width: 100%;
  height: 100%;
 }
 .ytarea {
  margin: 1em 1em 1.4em 1em;
 }

 .tcarea {
  margin-left: 1em;
  margin-right: 1em;
 }

 .wrap {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 480px));
  grid-auto-rows: minmax(158px, 220px);
  grid-gap: 0.5em;
  /* height: 270px; */
}
.uploadimage {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#imageuploadarea {
  margin: 1em 1em 1.4em 1em;
}

#modify-post {
  margin-right: 10px;
}

.FeedList_update {
  margin-left: 20px;
}

.FeedList_update a {
  color: slategray !important;
}

.FeedList_update a:hover {
  color: deeppink !important;
}

.gallaryImage {
        width: 1200px;
        max-height: 800px;
        height: auto;
        object-fit: contain;
}
</style>
