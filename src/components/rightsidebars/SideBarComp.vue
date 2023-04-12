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
                                <a href="#" class="hover-change-color" @click="clearAllSearchWords"><span class="badge rounded-pill bg-success" style="padding: 8px;">모두 지우기</span></a>
                            </div>
                            <router-link to="#" class="list-group-item list-group-item-action text-info d-flex justify-content-between align-items-center " v-for="(recent ,i) in recentSearchList" :key="i">
                                <span class="d-inline-block text-truncate" style="margin-right: 20px;">{{ recent }}</span>
                                <a role="button" class="hover-change-color" @click="deleteThisSearchWord(i)"><font-awesome-icon class="" icon="fa-solid fa-xmark" size="lg" style="color: #6f52ff;" /></a>
                            </router-link>

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
            <div class="trandWrap mb-2 border-round-radius" >
                <div class="list-group">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="text-dark fw-bold">나를 위한 트렌드</span>
                    </div>
                    <!-- <router-link to="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="i in 5" :key="i" :items="top(i)"> -->
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start" @click="goSearch1()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap trend" style="width: 16em;">{{ this.top1 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start" @click="goSearch2()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap trend" style="width: 16em;">{{ this.top2 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start" @click="goSearch3()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap trend" style="width: 16em;">{{ this.top3 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start" @click="goSearch4()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap trend" style="width: 16em;">{{ this.top4 }}</h6>
                    </button>
                    <button type="button" class="list-group-item list-group-item-action flex-column align-items-start" @click="goSearch5()">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap trend" style="width: 16em;">{{ this.top5 }}</h6>
                    </button>
                    <a href="#" @click="replaceTo('/main/search')" class="list-group-item text-success" style="text-decoration: none;">더 보기</a>
                </div><!-- <div class="list-group"> -->
            </div> <!-- <div class="card bg-light mb-3"> -->
        </div>

        <div id="test1" class="sticky-top">
            <!-- 팔로우 추천 -->
            <div id="recommendfollow">
                <div class="recommendfollowWrap mb-2 border-round-radius">
                    <div class="list-group">
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <span class="text-dark fw-bold">팔로우 추천</span>
                        </div>
                        <router-link to="#" class="list-group-item list-group-item-action align-items-start d-flex justify-content-between align-items-center" v-for="i in 3" :key="i">
                            <div class="profile-wrapper">
                                <div class="profile-box">
                                    <img src="../../assets/profile.jpg" class="profile-img" >
                                </div>
                            </div>
                            <div class="profile-user-name">
                                <div class="mb-1 text-dark d-inline-block text-truncate text-nowrap fw-bold" style="overflow: hidden; width: 7.4em;">FIFTY FIFTY  FIFTY + {{ i }}</div>
                            </div>
                            <a href="#" @click="followThisUser(i)" class="hover-change-color"><span class="badge rounded-pill bg-success text-nowrap text-size-custom" style="padding: 8px;">팔로우</span></a>
                            <!-- <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small> -->

                        </router-link>
                        <a href="#" @click="replaceTo('/main/bootstraptest')" class="list-group-item text-success" style="text-decoration: none;">더 보기</a>
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

        </div> <!-- test1 -->

    </div> <!-- <div class="sticky-top"> -->
</template>

<script>
// eslint-disable-next-line no-unused-vars
//import { throwStatement } from '@babel/types'

export default {
  data () {
    return {
      requestBody: {},
      allfeedList: {},
      no: '',
      keyword: '',
      isExistSearchWord: true,
      thisURL: window.location.href,
      recentSearchList: ['솜인형 공구', '순두부 열라면', '코돌비', '컬러리움'],
      top1: '',
      top2: '',
      top3: '',
      top4: '',
      top5: ''
    }
  },
  computed: {
    showURL () {
      return !this.thisURL.includes('search')
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
      console.log(from)
      this.thisURL = window.location.href
    //   console.log(this.thisURL)
    }
  },
  mounted () {
    this.getTrend() // 실시간 트렌드 가져오기
  },
  methods: {
    searchresultshow (keyword) {
      // console.log("searchresultshow 결과화면으로 이동");
      var temp = keyword
      this.keyword = temp.replace("#", "")
      
      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword).then((res) => {
        if (keyword !== '') {
          this.$router.push({
            name: 'searchresult',
            params: {
              keyword: this.keyword
            }
          })
          console.log('"', keyword, '"' + '검색')
          this.allfeedList = res.data
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          // alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          alert('특수문자를 제외한 검색어를 입력해주세요')
        }
      })
    },
    clearAllSearchWords () {
    //   alert('clearAllSearchWords')
      // 모두 지우기를 하면 따로 보여줄 거 정하기
      this.isExistSearchWord = !this.isExistSearchWord
    },
    deleteThisSearchWord (item) {
      alert('delete ' + this.recentSearchList[item])
      this.recentSearchList.splice(item, 1)
    },
    followThisUser (item) {
      alert('follow this user: ' + item)
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
    }
  }
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
        width : 350px;
        height: 100%;
        padding : 0;
        background: #ffffff;
        border-left: 1px solid #dbdbdb;
    }
    .form-group {
        margin : 0 12px;
        width : 100%;
    }
    .trandWrap, .recommendfollowWrap{
        margin-left : 12px;
        width : 100%;
        background-color:  #f0f0f0;

    }
    #recommendfollow{
        width : 350px;
    }
    .profile-wrapper {
        width: 50px;
        height: 50px;

    }
    .profile-box {
        overflow: hidden;
        border-radius: 100%;
        border: 2px solid whitesmoke !important;
    }
    .profile-img{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        height: auto;
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
    #test1 {
        top: 3.5em;
        z-index: 0;
    }
    #collapseSearch {
        margin-top: -20px !important;
        padding-top: 0 !important;
        }
    .footer_row{
        display : flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left : 12px;
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

</style>
