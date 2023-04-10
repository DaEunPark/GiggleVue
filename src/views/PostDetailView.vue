<template>
    <div>
        <article class="my-3" id="FeedList">
            <div class="row">
            <div class="col-sm-1" style="margin-left:-20px;" >
                <!--개인 프로필로 가는 링크-->
                <button type="button" class="btn" @click="whichProfile(item.post_no)"><img :src="item.profile_image"  width="80" height="80" class="rounded-circle" alt="user_profile" > </button>
            </div>

                <!--개인 프로필로 가는 링크-->
            <div class="col-sm-11" style="margin-left:15px">
                <div class="d-flex w-60 justify-content-between" id="GoUserprofile">
                    <button type="button" class="btn" @click="whichProfile(item.post_no)"><p class="FeedList_username">{{item.user_nick}}
                    <small class="FeedList_regdate">{{item.post_date}}</small></p></button>
                    <span class="FeedList_update" v-if="isMine">
                      <a role="button" class="text-dark" id="modify-post" >수정</a>
                      <a role="button" class="text-dark" id="delete-post" >삭제</a>
                  </span>
                </div>

                    <!-- 개인 프로필로 가는 링크
                <div class="col-sm-11" style="margin-left:15px">
                    <div class="d-flex w-50 justify-content-between" id="GoUserprofile">
                        <a href="/main/mypage"><p class="FeedList_username">{{item.user_nick}}
                        <small class="FeedList_regdate">{{item.post_date}}</small></p></a>
                    </div> -->

                    <div class="FeedList_contents">
                      <div>
                        <div id="imageuploadarea">
                          <div>
                            <div class="wrap">
                              <img class="uploadimage" :src="imgurl.imagepath" v-for="(imgurl, i) in postImgList" :key="i" >
                            </div>
                          </div>
                          <!-- <img :src="imgurltest" style="width: 80%; height: 80%;"> -->
                        </div>
                      </div>
                        <!-- video-embed start -->
                        <div class="ytarea" v-if=showYoutube>
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
                        <p style="color: black;" class="tcarea mb-1">{{item.text_content}} </p>
                    </div>

                    <!--댓글창 , 좋아요 , 게시글공유 , 인사이트 -->
                    <div class="FeedList_activeicont">
                        <div class="row">
                            <div class="col-sm-3" id="FL_spancomment">
                                <a class="btn"  @on-click="fn_pushComment()">
                                <font-awesome-icon icon="fa-regular fa-comment"/>
                                <span>{{ item.comment_cnt}}</span>
                                </a>
                            </div>
                            <div class="col-sm-3"  id="FL_spanlike">
                                <a class="btn"  @on-click="fn_pushLike()">
                                <font-awesome-icon  icon="fa-regular fa-heart"/>
                                <span>{{ item.like_cnt }}</span>
                                </a>
                            </div>
                            <div class="col-sm-3"  id="FL_spanshare">
                                <a class="btn" @on-click="fn_pushLink()" :href="item.post_link">
                                <font-awesome-icon icon="fa-regular fa-share-from-square"/>
                                </a>
                            </div>
                            <div class="col-sm-3"  id="FL_spanchart">
                                <a href="#postInsite"
                                    class = "btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#postInsite"
                                    @on-click = "fn_pushInsite(item.post_no)">
                                    <font-awesome-icon icon="fa-solid fa-chart-simple"/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr style="color:#b0b0b0; margin:0px;">
            <CommentView :post_no="post_no"></CommentView>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommentView from '@/components/CommentView.vue'
export default {
  components: {
    CommentView
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
      postImgList: []

    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.getThisPostDetail()
  },
  computed: {
    isMine () {
      return this.item.user_no === this.$store.state.loginUserDTO.user_no
    }
  },
  methods: {
    getThisPostDetail () {
      this.$axios.get(`${this.$serverUrl}/post/postdetail/${this.post_no}`,
        {
          params: {
            post_no: this.post_no
          }
        }).then(res => {
        console.log(`Query: ${this.post_no}`)
        this.item = res.data.post
        this.postImgList = res.data.postImages
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
              path: '/main/notmypage'
            })
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
    deletePost (post_no) {
      // eslint-disable-next-line camelcase
      this.$axios.delete(`${this.$serverUrl}/post/deletepost/${post_no}`)
      .then(res => {
          console.log(res.data)
          if (res.data === 'Y') {
            this.$router.replace('/main/mainhome')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
}
</script>

<style scoped>
#FeedList {
    margin : auto;
    padding: 12px 8px;
}
#FeedList_GF {
    /* backdrop-filter: blur(1000px); */
    box-shadow: none;
    /* margin-bottom: 100px; */
}
#FeedList_GI:hover {
    background-color: #efefef;
}

#GoUserprofile a:hover .FeedList_username {
    /* text-decoration:underline; */
    color: #ed5c9d !important;
}
#GoUserprofile a {
    text-decoration: none !important;
}
.FeedList_username {
    color:black;
    margin: 0 0 0 33px;
    font-weight: bold;
}
.FeedList_regdate {
    color:rgb(126, 126, 126);
    font-size: small;

}
.FeedList_contents {
    margin-top: 10px;
    margin-left: 6%;
}

.FeedList_activeicont #FL_spancomment,
.FeedList_activeicont #FL_spanlike,
.FeedList_activeicont #FL_spanshare,
.FeedList_activeicont #FL_spanchart {
    width:  15%;
    /* height: 10%; */
    margin:0 0 0 5%;
}

.FeedList_activeicont #FL_spancomment a ,
.FeedList_activeicont #FL_spanlike a ,
.FeedList_activeicont #FL_spanshare a,
.FeedList_activeicont #FL_spanchart a {
    border-style:none;
    color: #b0b0b0;
    margin-left: -20px;

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
.modal {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
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
  z-index: 7;
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
  grid-gap: 1em;
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

.FeedList_update a {
  color: slategray !important;
}

.FeedList_update a:hover {
  color: deeppink !important;
}
</style>
