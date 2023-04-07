<template>
    <div>
        <article class="my-3" id="FeedList">
            <div class="row">
                <div class="col-sm-1" style="margin-left:-20px;" >
                    <!--개인 프로필로 가는 링크-->
                    <a href="/main/mypage" ><img :src="item.profile_image"  width="50" height="50" class="rounded-circle" alt="user_profile" > </a>
                </div>

                    <!--개인 프로필로 가는 링크-->
                <div class="col-sm-11" style="margin-left:15px">
                    <div class="d-flex w-50 justify-content-between" id="GoUserprofile">
                        <a href="/main/mypage"><p class="FeedList_username">{{item.user_nick}}
                        <small class="FeedList_regdate">{{item.post_date}}</small></p></a>
                    </div>

                    <div class="FeedList_contents">
                        <!-- video-embed start -->
                        <div v-show=showYoutube>
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
                                <a class="btn"  @on-click="fn_pushInsite()">
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
   

</template>

<script>
import CommentView from '@/components/CommentView.vue'

export default {
    components:{
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
      showYoutube: false
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.getThisPostDetail()
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
        this.item = res.data
        if (this.item.post_link === '' || this.item.post_link === null === this.item.post_link === undefined) {
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
    color: #ed5c9d;
}
#GoUserprofile a {
    text-decoration: none;
}
.FeedList_username {
    color:black;
    margin: 0 0 0 33px;
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
#yotube-frame {
  width: 90%;
  height: 100%;
 }
</style>
