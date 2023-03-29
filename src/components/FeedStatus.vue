<template>
    <div>
        <article class="my-3" id="FeedList">
                    <div  v-for="(row , idx) in FeedList" :key="idx" class="list-group list-group-flush" id="FeedList_GF">
                        <!--게시글피드로 가는링크-->
                        <a href="/게시글피드" class="list-group-item" id="FeedList_GI">

                         <div class="row">
                            <div class="col-sm-1" style="margin-left:-20px; position: fixed;" >
                                <!--개인 프로필로 가는 링크-->
                                <a href="/main/mypage" ><img :src=row.user_image  width="50" height="50" class="rounded-circle" alt="user_profile" > </a>
                            </div>

                                <!--개인 프로필로 가는 링크-->
                            <div class="col-sm-11" style="margin-left:15px">
                            <div class="d-flex w-50 justify-content-between" id="GoUserprofile">
                                <a href="/main/mypage"><p class="FeedList_username">{{row.nickname}}
                                <small class="FeedList_regdate">{{row.data}}</small></p></a>
                            </div>

                            <div class="FeedList_contents">
                                <p style="color: black;" class="mb-1">{{row.contents}} </p>
                            </div>
                            <!--댓글창 , 좋아요 -->
                            <div class="FeedList_activeicont">
                                <div class="row">
                                    <div class="col-sm-3" id="FL_spancomment">
                                       <a class="btn" href="/댓글">
                                        <font-awesome-icon icon="fa-regular fa-comment"/>
                                        <span>{{ row.comment }}</span>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="FL_spanlike">
                                        <a class="btn" href="/좋아요">
                                        <font-awesome-icon  icon="fa-regular fa-heart"/>
                                        <span>{{ row.like }}</span>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="FL_spanshare">
                                        <a class="btn" href="/공유">
                                        <font-awesome-icon icon="fa-regular fa-share-from-square"/>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="FL_spanchart">
                                        <a class="btn" href="/인사이트">
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
</template>

<script>
export default {
    data() {
        return {
            FeedList: {},
        }
    },
     mounted () {
    this.fnGetFeedList()
  },
  methods: {
    fnGetFeedList() {
      this.FeedList = [
        {
          nickname: 'user_jungha',
          user_image: require('../assets/profile.jpg'),
          data: '1시간 전',
          contents: '어느날 머리에서 뿔이 자랐다',
          comment: '3',
          like: '4034'
        },
        {
          nickname: 'user_jungha',
          user_image: require('../assets/profile.jpg'),
          data: '2시간 전',
          contents: '이세계에서 환생한 내가 어쩌다 sss급',
          comment: '3',
          like: '4422'
        },
        {
          nickname: '안녕하세요반가워요',
          user_image: require('../assets/giggle1.png'),
          data: '3시간 전',
          contents: '이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여',
          comment: '3',
          like: '4'
        },
        {
          nickname: 'user_4',
          user_image: require('../assets/profile02.jpg'),
          data: '4시간 전',
          contents: '귀엽다',
          comment: '3',
          like: '42'
        },
        {
          nickname: 'user_5',
          user_image: require('../assets/logo.png'),
          data: '3월 22일',
          contents: '스벅',
          comment: '3',
          like: '14'
        },
        {
          nickname: 'user_6',
          user_image: require('../assets/profile.jpg'),
          data: '1일 전',
          contents: '맛있다',
          comment: '3',
          like: '4334'
        },
        {
          nickname: 'user_7',
          user_image: require('../assets/profile.jpg'),
          data: '14초',
          contents: '오늘의 아아',
          comment: '3',
          like: '324'
        }
      ]
    }
  }
}
</script>

<style>

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
</style>