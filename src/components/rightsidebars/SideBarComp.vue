<template>
    <div class="sidebar">
        <div id="blank" style="height: 6.3em;"></div>
        <div id="search" class="sticky-top">
            <div class="form-group" style="margin-bottom: 0px !important; padding-bottom: 0 !important;" v-show="showURL">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-primary"><font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color: #ffffff;" /></span>
                        <input type="text" v-model="searchWords" class="form-control text-dark bg-white" @keydown.enter="enterSearch" placeholder="검색어를 입력하세요" aria-label="Recipient's username" aria-describedby="button-addon2" style="border-color: #e83283;"
                        data-bs-toggle="collapse" data-bs-target="#collapseSearch" href="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                    </div>
                </div>
            </div>

            <div class="collapse" id="collapseSearch" >

                <div v-show="isExistSearchWord">

                    <div class="card bg-light mb-3 border-round-radius" >
                        <div class="list-group" style="border-radius: 1em;">
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="text-dark fw-bold">최근 검색어</span>
                                <a href="#" class="hover-change-color" @click="clearAllSearchWords"><span class="badge rounded-pill bg-success" style="padding: 8px;">모두 지우기</span></a>
                            </div>
                            <router-link to="#" class="list-group-item list-group-item-action text-info d-flex justify-content-between align-items-center " v-for="i in 3" :key="i">
                                <span class="d-inline-block text-truncate" style="margin-right: 20px;"> Praeterea iter est quasdam res quas ex communi.</span>
                                <a href="#" class="hover-change-color" @click="deleteThisSearchWord(i)"><font-awesome-icon class="" icon="fa-solid fa-xmark" size="lg" style="color: #6f52ff;" /></a>
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
            <div class="card bg-light mb-3 border-round-radius" >
                <div class="list-group">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="text-dark fw-bold">나를 위한 트렌드</span>

                    </div>
                    <router-link to="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="i in 5" :key="i">
                        <small class="text-muted" style="color: darkgray !important;">실시간 트렌드</small>
                        <h6 class="mb-1 text-dark d-inline-block text-truncate text-nowrap" style="width: 16em;">0X1=LOVESONG (I Know I Love You) </h6>

                    </router-link>
                    <a href="#" @click="replaceTo('/main/search')" class="list-group-item text-success" style="text-decoration: none;">더 보기</a>
                </div><!-- <div class="list-group"> -->
            </div> <!-- <div class="card bg-light mb-3"> -->
        </div>

        <div id="test1" class="sticky-top">
            <!-- 팔로우 추천 -->
            <div id="recommendfolow">
                <div class="card bg-light mb-3 border-round-radius">
                    <div class="list-group" style="border-radius: 1em;">
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
                    </div><!-- <div class="list-group"> -->
                </div> <!-- <div class="card bg-light mb-3"> -->
            </div>

            <footer class="text-dark text-nowrap text-size-custom" style="font-size: xx-small;">
                <div class="d-flex flex-row">
                    <div class="p-2">이용약관</div>
                    <div class="p-2">개인정보 처리방침</div>
                    <div class="p-2">쿠키 정책</div>
                    <div class="p-2">접근성</div>
                </div>
                <div class="d-flex flex-row" style="margin-top: -30px;">
                    <div class="p-2">광고 정보</div>
                    <div class="p-2">더보기 ...</div>
                    <div class="p-2">@2023 Giggle</div>
                </div>
            </footer>

        </div> <!-- test1 -->

    </div> <!-- <div class="sticky-top"> -->
</template>

<script>

export default {
  data () {
    return {
      searchWords: '',
      isExistSearchWord: true,
      thisURL: window.location.href,
      showSideSearchBar: true
    }
  },
  computed: {
    showURL () {
      return !this.thisURL.includes('search')
    }
  },
  watch: {
    $route (to, from) {
    //   console.log(`to: ${to}`)
      console.log(to)
      //   console.log(`from: ${from}`)
      console.log(from)
      this.thisURL = window.location.href
      console.log(this.thisURL)
    //   if (this.thisURL.includes('search')) {
    //     this.showSideSearchBar = false
    //     // this.showURL = false
    //   } else {
    //     this.showSideSearchBar = true
    //     // this.showURL = true
    //   }
    }
  },
  methods: {
    enterSearch () {
      // eslint-disable-next-line eqeqeq
      if (this.searchWords == '' || this.searchWords == null) {
        alert('검색어를 입력하세요')
      } else {
        alert(this.searchWords)
      }
    },
    clearAllSearchWords () {
    //   alert('clearAllSearchWords')
      // 모두 지우기를 하면 따로 보여줄 거 정하기
      this.isExistSearchWord = !this.isExistSearchWord
    },
    deleteThisSearchWord (item) {
      alert('this is ' + item)
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
        height: 100%;
        max-width: 20em;
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

    .list-group {
        border-radius: 1em;
    }

</style>
