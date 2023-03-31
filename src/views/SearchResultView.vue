<template>
  <div>
      <section id="components">
          <div class="Sbackground">

              <article class="my-3" id="AinputSearch">
                  <div class="input-group mb-3" style="margin-top:10px;">
                      <span class="input-group-text bg-primary" style="border-bottom-left-radius: 20px; border-top-left-radius: 20px; ">
                          <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:#ffffff"/></span>
                      <input type="text" v-model="searchWords" class="form-control" placeholder="검색어를 입력하세요" @input="searchGroup($event)" @keydown.enter="enterSearch">
                  </div>

                  <div class="searchrt">
                  <p class="h2">Result</p>
                  </div>
                 </article>

                 <FeedStatus :items="allfeedList"></FeedStatus>

      </div>
   </section>
  </div>
</template>
<script>
import FeedStatus from '@/components/FeedStatus.vue'

export default {
components: {
  FeedStatus
},
data () {
  return {
      requestBody: {},  // 리스트 페이지 데이터 전송
      allfeedList: {},  // 결과 임시 데이터로 메인 피드 전체목록 넣어둠 
      no:          '',  // 숫자 처리
      
    };
  },
  mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      this.requestBody = { // 데이터 전송

      }

      this.$axios.get(this.$serverUrl + "/main/upload", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {      

        this.allfeedList = res.data 

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    }
  }
}
</script>

<style>
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
.searchrt{
  color:black;
  margin-left: 35px;
  margin-top: 2%;
  margin-bottom: -20px;
}
</style>
