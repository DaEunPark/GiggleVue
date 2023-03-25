<template>
    <div class="sticky-top">

        <div id="search">
            <div class="form-group" style="margin-bottom: 0px !important; padding-bottom: 0 !important;">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-primary"><font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color: #ffffff;" /></span>
                        <input type="text" v-model="searchWords" class="form-control text-dark" @keydown.enter="enterSearch" placeholder="검색어를 입력하세요" aria-label="Recipient's username" aria-describedby="button-addon2" style="border-color: #e83283;"
                        data-bs-toggle="collapse" data-bs-target="#collapseSearch" href="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapseSearch" style="margin-top: -20px !important; padding-top: 0 !important;">

                <div v-show="isExistSearchWord">
                    <div class="card bg-light mb-3">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            최근 검색어
                            <a href="#" @click="clearAllSearchWords"><span class="badge rounded-pill bg-success" style="padding: 8px;">모두 지우기</span></a>
                        </div>

                        <ul class="list-group list-group-flush" v-for="i in 5" :key="i" >
                            <li class="list-group-item d-flex list-group-item-action justify-content-between align-items-center text-dark">
                                <span class="d-inline-block text-truncate"> Praeterea iter est quasdam res quas ex communi.</span>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#" @click="deleteThisSearchWord(i)"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" style="color: #6f52ff;" /></a>
                            </li>
                        </ul>
                        <div class="card-footer text-muted">
                            <router-link to="about" class="text-info" style="text-decoration: none;">더 보기</router-link>
                            <!-- <a href="#" class="text-info" style="text-decoration: none;">더 보기</a> -->
                        </div>
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

        <div class="card bg-light mb-3" style="max-width: 20rem;">
            <div class="card-header">팔로우 추천</div>
            <div class="card-body">
                <h4 class="card-title">Light card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div> <!-- <div class="card bg-light mb-3" style="max-width: 20rem;"> -->

    </div> <!-- <div class="sticky-top"> -->
</template>

<script>

export default {
  data () {
    return {
      searchWords: '',
      isExistSearchWord: true
    }
  },
  methods: {
    enterSearch () {
      alert(this.searchWords)
    },
    clearAllSearchWords () {
    //   alert('clearAllSearchWords')
      // 모두 지우기를 하면 따로 보여줄 거 정하기
      this.isExistSearchWord = !this.isExistSearchWord
    },
    deleteThisSearchWord (item) {
      alert('this is ' + item)
    }
  }
}
</script>
<style scoped>
    input::placeholder {
        color: darkgrey;
    }
</style>
