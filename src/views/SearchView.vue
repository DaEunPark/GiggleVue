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

                  <div class="searchtd">
                  <p class="h2">Trend</p>
                  </div>
                 </article>

               <article class="my-3" id="trend-list">
                   <div  v-for="(row , idx) in Trendlist" :key="idx" class="list-group list-group-flush" id="Slistgroupflush">
                      <button type="button" @click="searchresultshow(`${row.title}`)" class="list-group-item" id="Slistgroup">
                          <h5 class="TLtitle">{{ row.title }}</h5>
                          <small class="TLsmall">게시물수: {{row.readCount}}</small>
                      </button>
                   </div>

              </article>
      </div>
   </section>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { thisExpression } from '@babel/types'

export default {
  data () {
    return {
      requestBody: {},
      allfeedList: {},
      no: '',
      keyword: '',
      top1: '',
      top2: '',
      top3: '',
      top4: '',
      top5: '',
      top6: '',
      top7: '',
      Trendlist: []
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    this.getTrend()
    // eslint-disable-next-line no-unused-expressions, no-sequences
    // 나중에 this.Trendlist 가져올때 사용할 메서드
    // this.searchresultshow() // 검색시 스프링 연동 검색및 화면 result 전환
  },
  methods: {
    fnGetList (res) {
      this.Trendlist = [

        {
          title: this.top1,
          readCount: '1231111'
        },
        {
          title: this.top2,
          readCount: '30220'
        },
        {
          title: this.top3,
          readCount: '104440'
        },
        {
          title: this.top4,
          readCount: '133404'
        },
        {
          title: this.top5,
          readCount: '133402'
        },
        {
          title: this.top6,
          readCount: '133402'
        },
        {
          title: this.top7,
          readCount: '133402'
        }
      ]
    },
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
          alert('검색어를 입력해주세요')
        }
      })
    },
    getTrend () {
      this.$axios.post(this.$serverUrl + '/tag/trend')
        .then((res) => {
          this.top1 = res.data.top1
          this.top2 = res.data.top2
          this.top3 = res.data.top3
          this.top4 = res.data.top4
          this.top5 = res.data.top5
          this.top6 = res.data.top6
          this.top7 = res.data.top7
          this.fnGetList(res)
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
  border: 2px solid #e83283;
  color: #000;
}

.searchtd{
  color:black;
  margin-left: 35px;
  margin-top: 2%;
  margin-bottom: -20px;
}
#Slistgroup:hover {
  background-color: #efefef;
}
#trend-list {
  margin : auto;
  padding: 12px 8px;
}
#Slistgroupflush{
box-shadow: none;
}
.TLtitle {
  color:black;
}
.TLsmall {
  color:rgb(126, 126, 126);
}
.list-group-flush>.list-group-item:last-child {
    border-bottom-width: 0;
    text-align: left;
}
</style>
