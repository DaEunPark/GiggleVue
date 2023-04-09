<template>
  <div>
      <section id="components">
          <div class="Sbackground">

              <article class="my-3" id="AinputSearch">
                  <div class="input-group mb-3" style="margin-top:10px;">
                      <span class="input-group-text bg-primary" style="border-bottom-left-radius: 20px; border-top-left-radius: 20px; ">
                          <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:#ffffff"/></span>
                          <input type="text"
                            v-model="keyword"
                            class="form-control"
                            placeholder="검색어를 입력하세요"
                            @keydown.enter="searchresultshow(keyword)">
                  </div>

                  <!-- <div class="searchrt">
                  <p class="h2">Result</p>
                  </div> -->


 <!--               <h3 style="color:#7d7d7d;">user</h3>
                <UserFeedStatus :items="allfeedList"></UserFeedStatus>
                <hr style="color:#7d7d7d; margin:5px;"/>
                <h3 style="color:#7d7d7d;">feed</h3>

                 <h3 style="color:#7d7d7d;">user</h3>
                 <UserFeedStatus :items="alluserfeedList"></UserFeedStatus>
                 <hr style="color:#7d7d7d; margin:5px;"/>
                 <h3 style="color:#7d7d7d;">feed</h3>
                 <FeedStatus :items="allfeedList"></FeedStatus>


        </article>
      </div>
   </section>
  </div>
</template>
<script>
import _ from 'lodash'
import FeedStatus from '@/components/FeedStatus.vue'
import UserFeedStatus from './UserFeedStatus.vue'

export default {
  components: {
    FeedStatus,
    UserFeedStatus
  },
  data () {
    return {
      //requestBody: {},
      allfeedList: {},
      alluserfeedList: {},
      no: '', // 숫자 처리
      //keyword : '',
      keyword: this.$route.params.keyword
    }
  },
  mounted () {
    this.fnGetList()
    // this.searchresultshow()
  },
  methods: {
    fnGetList () {
      //console.log("이동후 결과 피드화면이 잘 받아와짐");
      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword).then(res => {
        // this.allfeedList = res.data
        if (res.data != '' || res.data ==''  ) {
          // || res.data =='' 이부분을 나눠서 유저/게시물 없을 경우의 안내창 도출시켜야함
          this.allfeedList = res.data
          this.$axios.get(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
            this.alluserfeedList = res.data
            console.log('유저검색' + res)
          })
        } else {
          alert('해당 유저/게시글이 없습니다.\n검색어를 확인해주세요.')
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    searchresultshow (keyword) {
      // console.log("searchResultView에서의 검색");
      console.log('"', keyword, '"' + '검색')
      //this.keyword = keyword
      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword).then(res => {
        // console.log(res)
        // this.allfeedList = res.data
        if (res.data != '' || res.data =='' ) {
          this.$router.push({
            name: 'searchresult',
            params: {
              keyword: this.keyword
            }
          })
          this.allfeedList = res.data
          //console.log('내용검색'+res)
          this.$axios.get(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
          this.alluserfeedList = res.data
          //console.log('유저검색' + res)
          })
        } else {
          alert('해당 유저/게시글이 없습니다.\n검색어를 확인해주세요.')
        }
      })
    }
  }
}
</script>

<style scoped>
/* 임시배경
.Sbackground{
   background: slategray;
} */
.input-group >input {
  border-radius: 12.5rem;
  border: 1px solid #cdcdcd;
  color: #000;
  border-color: #adadad;
}
.input-group > input::placeholder{
  color: #7d7d7d;
}
.input-group > input:focus {
  border-radius: 12.5rem;
  border: 2px solid #ed5c9d;
  color: #000;
}
/* .searchrt{
  color:black;
  margin-left: 35px;
  margin-top: 2%;
  margin-bottom: -20px;
} */
</style>
