<template>
    <div>
        <article class="my-3" id="FeedList">
            <div  v-for="(item , idx) in items" :key="{idx}" class="list-group list-group-flush" id="FeedList_GF">
                <!--게시글피드로 가는링크-->
                <a :href="item.post_link/{post_no}" class="list-group-item" id="FeedList_GI">

                    <div class="row">
                        <div class="col-sm-1" style="margin-left:-20px; position: fixed;" >
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
                                        <a class="btn" @on-click="fn_pushLink()" :href="item.post_no">
                                        <font-awesome-icon icon="fa-regular fa-share-from-square"/>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="FL_spanchart">
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
                            </div>
                        </div>
                    </div>
                </a>

                <hr style="color:#b0b0b0; margin:0px;">

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
                    <postAnalitics></postAnalitics>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import postAnalitics from './postAnalitics.vue'

export default {
  props: { // MainContentsView 의 자식컴포넌트로 사용됨
    items: { type: Object, default: null }
  },
  components:{
    postAnalitics
  },
  methods: {
    // eslint-disable-next-line camelcase
    getPostDetail (post_no) {
      this.$router.push({ path: '/main/postdetail', query: { post_no: post_no } })
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
    position:   fixed;
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
</style>
