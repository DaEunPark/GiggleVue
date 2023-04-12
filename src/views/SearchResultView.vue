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

                 <h3 style="color:#7d7d7d;">user</h3>
                 <UserFeedStatus :items="alluserfeedList" ></UserFeedStatus><h6 v-show="userfeeddisplay" style="color:#41d7a7; text-align: center;">결과없음</h6>
                 <hr style="color:#7d7d7d; margin:5px;"/>
                 <h3 style="color:#7d7d7d;">feed</h3>
                 <FeedStatus :items="allfeedList"  v-show="feeddisplay"></FeedStatus><h6  v-show="feeddisplay" style="color:#e83283; text-align: center;" >결과없음</h6>

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
      userfeeddisplay :true,
      feeddisplay:true
    }
  },
  mounted () {
    this.fnGetList()
  },
  methods: {
    fnGetList () {
      // console.log("이동후 결과 피드화면이 잘 받아와짐");
      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword).then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.data != '') {
          this.allfeedList = res.data
          this.feeddisplay = false
          //alert("피드값있음");
          this.$axios.get(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
          if (res.data != '') {
          this.alluserfeedList = res.data
          this.userfeeddisplay = false
          //alert("유저있음");
          }else {
            // alert("유저없음");
            //alert("해당 유저는 존재하지 않습니다.");
            this.userfeeddisplay = ture
          }
         })
        } else if(res.data == '') {
          this.feeddisplay = true
          //alert("피드값없음");
          this.$axios.get(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
          if (res.data != '') {
          this.alluserfeedList = res.data
          this.userfeeddisplay = false
          this.feeddisplay = true
          //alert("유저있음");
          }else {
            // alert("유저없음");
            //alert("해당 유저/게시글이 존재하지 않습니다.");
            this.userfeeddisplay = true
            this.feeddisplay = true
          }
         })
        } else {
          alert('해당 유저/게시글이 없습니다.\n검색어를 확인해주세요.')
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
      this.$axios.get(this.$serverUrl + '/main/search/' + this.keyword).then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.data != '') {
          this.$router.push({
            name: 'searchresult',
            params: {
              keyword: this.keyword
            }
          })
          this.allfeedList = res.data
          this.feeddisplay = false
          //alert("피드값있음");
         
          this.$axios.get(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
          if (res.data != '') {
            this.$router.push({
            name: 'searchresult',
            params: {
              keyword: this.keyword
            }
          })
          this.alluserfeedList = res.data
          this.userfeeddisplay = false
           // alert("유저있음");
          }else {
            //  alert("유저없음");
            //alert("해당 유저는 존재하지 않습니다.");
            this.userfeeddisplay = ture
          }
         })
        }  else if(res.data == '') {
          this.feeddisplay = true
           // alert("피드값없음");
          this.$axios.get(this.$serverUrl + '/main/searchuser/' + this.keyword).then(res => {
          if (res.data != '') {
            
          this.alluserfeedList = res.data
          this.userfeeddisplay = false
          this.feeddisplay = true
           // alert("유저있음");
          }else {
            this.$router.push({
            name: 'searchresult',
            params: {
              keyword: this.keyword
            }
          }), 
            //alert("유저없음");
            alert( this.keyword + "에 대한 유저/게시글이 존재하지 않습니다.");
            // location.reload()
            this.userfeeddisplay = true
            //this.feeddisplay = true
          }
         })
        } else {
          alert('해당 유저/게시글이 없습니다.\n검색어를 확인해주세요.')
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          // alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          alert('특수문자를 제외한 검색어를 입력해주세요')
        }
      })
    },
    
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
