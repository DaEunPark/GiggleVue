<!-- eslint-disable eqeqeq -->
<template>
  <div>
      <section id="components">
          <div class="Sbackground">

              <article class="my-3" id="AinputSearch">
                  <div class="input-group mb-3" style="margin-top:10px;">
                      <span class="input-group-text bg-primary">
                          <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:#ffffff"/></span>
                          <input type="text"
                            v-model="keyword"
                            class="form-control"
                            placeholder="검색어를 입력하세요"
                            @keydown.enter="searchresultshow(keyword)">
                  </div>
                <div>
                  <h3 style="color:#7d7d7d;">user</h3>
                    <UserFeedStatus :items="alluserfeedList" v-show="!userfeeddisplay"></UserFeedStatus>
                     <h6  v-show="userfeeddisplay" style="color:#7d7d7d; text-align: center;">해당 유저가 없습니다</h6>
                  <hr style="color:#7d7d7d; margin:5px;"/>
                  <h3 style="color:#7d7d7d;">feed</h3>
                     <FeedStatus :items="allfeedList" v-show="!feeddisplay" ></FeedStatus>
                       <h6  v-show="feeddisplay" style="color:#7d7d7d; text-align: center;" >해당 게시글이 존재하지 않습니다</h6>
                </div>

        </article>
      </div>
   </section>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import FeedStatus from '@/components/FeedStatus.vue'
import UserFeedStatus from './UserFeedStatus.vue'
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'

export default {
  components: {
    FeedStatus,
    UserFeedStatus
  },
  data () {
    return {
      allfeedList: {},
      alluserfeedList: {},
      no: '',
      // keyword : '',
      keyword: this.$route.params.keyword,
      userfeeddisplay: false,
      feeddisplay: false,
      user_no: this.$store.state.loginUserDTO.user_no,
      recentSearchList: this.$store.state.recentSearchList
    }
  },
  mounted () {
    this.fnGetList()

    this.getRecentSearch()
  },
  methods: {
    getRecentSearch () {
      if (this.recentSearchList == null) {
        this.recentSearchList = ''
      }
    },
    fnGetList () {
      // console.log("SearchView에서 이동후 결과 피드화면불러오기");
      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword + '/userno/' + this.user_no).then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.data[0] != null) {
          this.allfeedList = res.data
          // console.log('피드값있음도출' + res.data[0])
          this.feeddisplay = false

          this.$axios.post(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
            // eslint-disable-next-line eqeqeq
            if (res.data[0] != null) {
              this.alluserfeedList = res.data
              // console.log('유저값있음도출' + res.data[0])
              this.userfeeddisplay = false
            } else {
              // console.log('유저값없음도출' + res.data[0])
              // alert("해당 유저는 존재하지 않습니다.");
              this.userfeeddisplay = true
              // eslint-disable-next-line no-undef
            }
          })
        } else {
          // console.log('피드값없음도출' + res.data[0])
          this.feeddisplay = true
          this.$axios.post(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
            // eslint-disable-next-line eqeqeq
            if (res.data[0] != null) {
              this.alluserfeedList = res.data
              // console.log('유저값있음도출' + res.data)
              this.userfeeddisplay = false
            } else {
              // console.log('유저값없음도출' + res.data)
              // alert("해당 유저는 존재하지 않습니다.");
              this.userfeeddisplay = true
              // eslint-disable-next-line no-undef
            }
          })
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          // alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          alert('특수문자를 제외한 검색어를 입력해주세요')
        }
      })
    },

    searchresultshow (keyword) {
      // console.log("searchResultView에서의 검색");
      console.log('"', keyword, '"' + '검색')

      this.keyword = ''
      this.keyword = keyword

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
      })

      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword + '/userno/' + this.user_no).then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.data[0] != null) {
          this.$router.replace({
            name: 'searchresult',
            params: {
              keyword: this.keyword
            }
          })

          this.allfeedList = res.data
          // console.log('피드값있음도출' + res.data[0])
          this.feeddisplay = false

          this.$axios.post(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
            // eslint-disable-next-line eqeqeq
            if (res.data[0] != null) {
              // this.$router.go(0)
              this.$router.replace({
                name: 'searchresult',
                params: {
                  keyword: this.keyword
                }
              })
              this.alluserfeedList = res.data
              // console.log('유저값있음도출' + res.data[0])
              this.userfeeddisplay = false
            } else {
              // console.log('유저값없음도출' + res.data[0])
              this.userfeeddisplay = true
              // alert("해당 유저는 존재하지 않습니다.");
              // eslint-disable-next-line no-undef
            }
          })
        } else {
          // console.log('피드값없음도출' + res.data[0])
          location.href = '/main/search/' + this.keyword
          this.feeddisplay = true

          this.$axios.post(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
            // eslint-disable-next-line eqeqeq
            if (res.data[0] != null) {
              this.$router.replace({
                name: 'searchresult',
                params: {
                  keyword: this.keyword
                }
              })
              this.alluserfeedList = res.data
              // console.log('유저값있음도출' + res.data[0])
              this.userfeeddisplay = false
            } else {
              // eslint-disable-next-line no-unused-expressions
              // console.log('유저값없음도출' + res.data[0])
              this.$router.replace({
                name: 'searchresult',
                params: {
                  keyword: this.keyword
                }
              // eslint-disable-next-line no-sequences
              })
              // location.href = '/main/search/' + this.keyword
              // alert(this.keyword + '에 대한 유저/게시글이 존재하지 않습니다.')
              this.userfeeddisplay = true
            }
          })
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          // alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          alert('특수문자를 제외한 검색어를 입력해주세요')
        }
      })
    }

  }
}
</script>

<style scoped>
.input-group >input {
  border: 2px solid #e83283;
  color: #000;
}
.input-group > input::placeholder{
  color: #7d7d7d;
}
</style>
