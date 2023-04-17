<!-- eslint-disable vue/no-unused-components -->
<template>
    <div class="sidebar">
        <div id="search" class="sticky-top form-group" style="margin-bottom: 0px !important; padding-bottom: 0 !important;" v-show="showURL">
            <div class="input-group mb-2">
                <span class="input-group-text bg-primary"><font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color: #ffffff;" /></span>
                <input type="text" v-model="keyword"  class="form-control text-dark bg-white"
                    @keydown.enter="searchresultshow(keyword)" placeholder="검색어를 입력하세요"
                    aria-label="Recipient's username" aria-describedby="button-addon2" style="border-color: #e83283;"
                    data-bs-toggle="collapse" data-bs-target="#collapseSearch" href="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
            </div>

            <div class="collapse" id="collapseSearch"  v-show="showURL">

                <div v-show="isExistSearchWord">

                    <div class="card bg-light mb-3 border-round-radius" >
                        <div class="list-group" style="border-radius: 1em;">
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="text-dark fw-bold">최근 검색어</span>
                                <a href="#" class="hover-change-color" @click="clearAllSearchWords()"><span class="badge rounded-pill bg-success" style="padding: 8px;">모두 지우기</span></a>
                            </div>
                            <div class="recentSearchDiv list-group-item list-group-item-action text-info d-flex justify-content-between align-items-center " v-for="(recent ,i) in this.recentSearchList" :key="i">
                            <button type="button" id="recentBtn" @click="searchresultshow(recent)" >
                                <span class="d-inline-block text-truncate" style="margin-right: 20px;">{{ recent }}</span>
                              </button>
                              <a role="button" class="hover-change-color" @click="deleteThisSearchWord(i)"><font-awesome-icon class="" icon="fa-solid fa-xmark" size="lg" style="color: #6f52ff;" /></a>
                          </div>

                        </div><!-- <div class="list-group"> -->
                    </div> <!-- <div class="card bg-light mb-3"> -->
                </div> <!-- <div v-if="isExistSearchWord"> -->

                <div v-show="isExistSearchWord != true">
                    <div class="card bg-light mb-3">
                        <div class="card-header d-flex justify-content-between align-items-center" style="font-size: smaller;">
                            사용자, 화제, 키워드를 검색해보세요

                        </div> <!-- <div class="card bg-light mb-3"> -->
                    </div><!-- <div class="card bg-light mb-3"> -->
                </div> <!--<div v-show="!isExistSearchWord">-->
            </div><!--<div class="collapse" id="collapseSearch" style="margin-top: -20px !important; padding-top: 0 !important;">-->
        </div> <!-- <div id="search"> -->

        <!-- 트렌드 -->
        <div id="trend" v-show="showURL">
            <div class="trendWrap mb-2 border-round-radius" >
                <div class="list-group trandListWrap">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="text-dark fw-bold">나를 위한 트렌드</span>
                    </div>
                    <!-- <router-link to="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="i in 5" :key="i" :items="top(i)"> -->
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start trendBtnWrap" @click="goSearch1()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap" style="width: 16em;">{{ this.top1 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start trendBtnWrap" @click="goSearch2()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap" style="width: 16em;">{{ this.top2 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start trendBtnWrap" @click="goSearch3()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap" style="width: 16em;">{{ this.top3 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start trendBtnWrap" @click="goSearch4()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap" style="width: 16em;">{{ this.top4 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start trendBtnWrap" @click="goSearch5()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap" style="width: 16em;">{{ this.top5 }}</h6>
                    </button>
                    <a href="#" @click="replaceTo('/main/search')" class="list-group-item text-success" style="text-decoration: none;">더 보기</a>
                </div><!-- <div class="list-group"> -->
            </div> <!-- <div class="card bg-light mb-3"> -->
        </div>

        <!-- <div id="test1" class="sticky-top" v-show="showURLRecommendFollow"> -->
        <div id="stickyFollowFooter" class="sticky-top">
            <!-- 팔로우 추천 -->
            <div id="recommendfollow" v-show="showURLRecommendFollow">
                <div class="recommendfollowWrap mb-2 border-round-radius">
                    <div class="list-group">
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <span class="text-dark fw-bold">팔로우 추천</span>
                        </div>

                        <!-- <button type="button" v-for="(user, user_nick) in recommendUser" :key="user_nick" :items="recommendUser" class="list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" @click="intoProfile(`${user.user_no}`)"> -->
                          <button type="button" v-for="(user, user_nick) in recommendUser" :key="user_nick" :items="recommendUser" class="list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center recommendWrapBtn" >
                            <div class="profile-wrapper" @click="intoProfile(`${user.user_no}`)">
                                <div class="profile-box">
                                    <img :src="`${ user.profile_image }`" id="recUserProfile">
                                </div>
                            </div>
                            <div class="profile-user-name" @click="intoProfile(`${user.user_no}`)">
                                <div class="text-dark d-inline-block text-truncate text-nowrap fw-bold" style="overflow: hidden; width: 7.4em;">
                                  {{ user.user_nick }}</div>
                            </div>
                            <a role="button" v-if="following(user.user_no) === 'N'" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-success text-nowrap text-size-custom" style="padding: 8px;">팔로우</span></a>
                            <a role="button" v-if="following(user.user_no) === 'Y'" @click="followThisUser(user.user_no)" class="hover-change-color"><span class="badge rounded-pill bg-primary text-nowrap text-size-custom" style="padding: 8px;">팔로잉</span></a>
                          </button>

                        <a href="#" @click="pushRecommend()" class="list-group-item text-success" style="text-decoration: none;">더 보기</a>
                    </div>
                </div> <!-- <div class="card bg-light mb-3"> -->
            </div>

            <footer class="text-dark text-nowrap text-size-custom" style="font-size: xx-small;">
                <div class="d-flex flex-row footer_row">
                    <div>이용약관</div>
                    <div>개인정보 처리방침</div>
                    <div>쿠키 정책</div>
                    <div>접근성</div>
                </div>
                <div class="d-flex flex-row footer_row">
                    <div>광고 정보</div>
                    <div>더보기 ...</div>
                    <div>@2023 Giggle</div>
                </div>
            </footer>

        </div> <!-- <div id="test1" class="sticky-top"> -->

</div>
</template>

<script>
// import { throwStatement } from '@babel/types'
import EditorView from '../../views/EditorView.vue'
import { Follow } from '../../mixins/Follow'
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { EditorView },
  data () {
    return {
      requestBody: {},
      allfeedList: {},
      no: '',
      keyword: '',
      isExistSearchWord: true,
      thisURL: window.location.href,
      recentSearchList: this.$store.state.recentSearchList,
      top1: '',
      top2: '',
      top3: '',
      top4: '',
      top5: '',
      recommendUser: {},
      user_no: this.$store.state.loginUserDTO.user_no,
      isFollowingArr: []
    }
  },
  computed: {
    showURL () {
      return !this.thisURL.includes('search')
    },
    showURLRecommendFollow () {
      return !this.thisURL.includes('recommend')
    },
    following () {
      // console.log('NotMyPage following() computed: ' + this.followResult)
      // if (this.followResult.includes(item)) {
      //   return 'Y'
      // } else {
      //   return this.followResult
      // }
      // return this.followResult
      // return (item) => {
      //   if (this.followResult.includes(item)) {
      //     return 'Y'
      //   } else {
      //     return 'N'
      //   }
      // }
      return (item) => {
        const idx = this.isFollowingArr.findIndex((element, index, array) => element.user === item)
        return this.isFollowingArr[idx].isFollowing
      }
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
      console.log(from)
      this.thisURL = window.location.href
      //   console.log(this.thisURL)
      // this.$forceUpdate()
    }
  },
  mounted () {
    this.getTrend() // 실시간 트렌드 가져오기

    this.recommendFollow()

    this.getRecentSearch()

    console.log(this.recentSearchList)
  },
  methods: {
    getRecentSearch () {
      if (this.recentSearchList == null) {
        this.recentSearchList = ''
      }
    },
    searchresultshow (keyword) {
      // console.log("searchresultshow 결과화면으로 이동");

      this.keyword = ''

      const temp = keyword
      this.keyword = temp.replace('#', '')

      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword + '/userno/' + this.user_no).then((res) => {
        if (keyword !== '') {
          // this.$router.replace({ 스텍x
          this.$router.push({
            name: 'searchresult',
            params: {
              keyword: this.keyword,
              user_no: this.user_no
            }
          })
          console.log('"', keyword, '"' + '검색')
          this.allfeedList = res.data
        }

        // 최근 검색 추가한 부분
        const data = {
          keyword0: this.keyword,
          keyword1: this.recentSearchList[0],
          keyword2: this.recentSearchList[1],
          keyword3: this.recentSearchList[2],
          keyword4: this.recentSearchList[3]
        }
        this.$axios.post(this.$serverUrl + '/main/recentSearch', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.recentSearchList = res.data
          console.log('res.data = ' + res.data)
          console.log('recentSearchList = ' + this.recentSearchList)

          this.$store.commit('recentSearchList', this.recentSearchList)
          location.reload()
        })
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          // alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          alert('특수문자를 제외한 검색어를 입력해주세요')
        }
      })
    },
    clearAllSearchWords () {
      // 모두 지우기를 하면 따로 보여줄 거 정하기
      this.isExistSearchWord = !this.isExistSearchWord
      this.recentSearchList = {}
      this.$store.commit('recentSearchList', this.recentSearchList)
      console.log('this.$store.state.recentSearchList = ' + this.$store.state.recentSearchList)
    },
    deleteThisSearchWord (item) {
      // alert('delete ' + this.recentSearchList[item])
      this.recentSearchList.splice(item, 1)

      const data = {
        num: this.$store.state.recentSearchList[item],
        keyword0: this.recentSearchList[0],
        keyword1: this.recentSearchList[1],
        keyword2: this.recentSearchList[2],
        keyword3: this.recentSearchList[3],
        keyword4: this.recentSearchList[4]
      }

      this.$axios.post(this.$serverUrl + '/deleteThisSearchWord/', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.recentSearchList = res.data
        console.log('res.data = ' + res.data)
        console.log('recentSearchList = ' + this.recentSearchList)

        this.$store.commit('recentSearchList', this.recentSearchList)
        // eslint-disable-next-line no-undef
        router.go()
      })
    },
    followThisUser (item) {
      const follow = {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: item
      }
      // alert('follow this user: ' + item)
      this.user_follow_create(follow)
      const idx = this.isFollowingArr.findIndex((element, index, array) => element.user === item)
      this.isFollowingArr[idx].isFollowing = this.isFollowingArr[idx].isFollowing === 'N' ? 'Y' : 'N'
    },
    replaceTo (path) {
    // this.$route.replaceTo(path)
    //   if()
    //   console.log(`url test ${window.location.href}`)
    //   console.log(`includes test ${path.includes('search')}`)
      this.$router.replace(path)
    },
    getTrend () {
      this.$axios.post(this.$serverUrl + '/tag/trend')
        .then((res) => {
          this.top1 = res.data.top1
          this.top2 = res.data.top2
          this.top3 = res.data.top3
          this.top4 = res.data.top4
          this.top5 = res.data.top5
        })
    },
    goSearch1 () {
      this.keyword = this.top1.replace('#', '')
      this.searchresultshow(this.keyword)
    },
    goSearch2 () {
      this.keyword = this.top2.replace('#', '')
      this.searchresultshow(this.keyword)
    },
    goSearch3 () {
      this.keyword = this.top3.replace('#', '')
      this.searchresultshow(this.keyword)
    },
    goSearch4 () {
      this.keyword = this.top4.replace('#', '')
      this.searchresultshow(this.keyword)
    },
    goSearch5 () {
      this.keyword = this.top5.replace('#', '')
      this.searchresultshow(this.keyword)
    },
    recommendFollow () {
      const data = {
        user_no: this.$store.state.loginUserDTO.user_no,
        follow_user: this.$store.state.loginUserDTO.follow_user
      }

      this.$axios.post(this.$serverUrl + '/recommendFollow', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.recommendUser = res.data
        for (let i = 0; this.recommendUser.length; i++) {
          const data = { user: this.recommendUser[i].user_no, isFollowing: 'N' }
          this.isFollowingArr.push(data)
        }
        console.log('recommendUser = ' + this.recommendUser[0].user_nick)
      })
    },
    pushRecommend () {
      this.$router.push({
        path: '/main/recommendFollow'
      })
    },
    intoProfile (user) {
      const data = { user_no: user }

      console.log('user_nick = ' + data)

      this.$axios.post(this.$serverUrl + '/otherProfile', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.$store.commit('addOtherUser', res.data)
        console.log(this.$store.state.otherUserDTO)
        location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
      })
    }
  },
  mixins: [Follow]
}
</script>

<style scoped>
    input::placeholder {
        color: darkgrey;
    }

    .border-round-radius {
        border-radius: 1em;

    }
    .sidebar {
        /* height: inherit; */
        /* display: flex; */
        top: 0;
        right : 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width : 100%;
        height: 100%;
        padding : 0;
        background: #ffffff;
        border-left: 1px solid #dbdbdb;
    }
    .form-group {
        margin : 0 12px;
        width : 100%;
    }
    #trend{
      width: 100%;
    }
    .trendWrap, .recommendfollowWrap{
        margin : 0 12px;
        width : 100%;
        background-color:  #f0f0f0;

    }
    .trendListWrap{
      width: 100%;
    }
    .trendBtnWrap{
      display: flex;
      flex-direction: column;
    }
    #recommendfollow{
        width : 100%;
    }
    .profile-wrapper {
        width: 40px;
        height: 40px;

    }
    .profile-box {
      width : 100%;
      height : 100%;
        overflow: hidden;
        border-radius: 100%;
        border: 2px solid whitesmoke !important;
    }
    #recUserProfile{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width : 100%;
      height : 100%;
    }
    .recommendWrapBtn{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .text-size-custom {
        text-size-adjust: auto;
    }
    .profile-user-name {
        margin: 0 20px 0 10px;
    }
    .hover-change-color:hover span {
        /* color:orangered; */
        background-color: deeppink !important;
    }
    .sticky-top{
      width: 100%;
    }
    #stickyFollowFooter {
        top: 3.5em;
        z-index: 0;
    }
    #collapseSearch {
        margin-top: -20px !important;
        padding-top: 0 !important;
        }
    footer{
      width: 100%;
    }
    .footer_row{
        display : flex;
        flex-direction: row;
        justify-content: space-between;
        margin : 0 12px;
        padding : 0 20px;
    }
    .list-group {
        border-radius: 1em;
        width : 100%;
        box-shadow: none;
    }
    .trend {
        font-size: 18px;
        margin: auto auto;
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
}

/* 알람, DM modal 공통 css */
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
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.modal-header > svg {
  margin: auto;
  margin-left: 338px;
}
.modal-header > button {
  margin: 0;
}
.modal-body {
  padding: 0px 20px 10px 20px;
  height: 550px;
}
#profic {
  margin-left: 100%;
}
.YN {
  color: #FFF;
  margin-top: 5%;
  margin-left: 45%;
  font-size: 12px;
}

    img, svg {
    vertical-align: middle;
    width: 20px;
}
.text-truncate {
  color: black;
}
#recentBtn{
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 0% 0%;
  border: none;
  text-align: left;
}
.recentSearchDiv:hover{
  background-color: lightpink;
}
</style>
