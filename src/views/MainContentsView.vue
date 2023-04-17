<template>
    <article>
          <div class="EditorView card mb-3" style = "margin : 0; z-index: 7;">
            <EditorView></EditorView>
          </div>
          <div class="FeedStatus">
            <FeedStatus :items="allfeedList"></FeedStatus>
          </div>

   </article>
  </template>

<script>
import EditorView from '../views/EditorView.vue'
import FeedStatus from '@/components/FeedStatus.vue'

export default {
  components: {
    EditorView,
    FeedStatus
  },
  data () {
    return {
      // requestBody: {}, // 리스트 페이지 데이터 전송
      allfeedList: [], // 리스트 데이터
      // no: '' // 숫자 처리
      user_no: this.$store.state.loginUserDTO.user_no

    }
  },
  mounted () {
    // eslint-disable-next-line no-sequences, no-unused-expressions
    this.fnGetList()
  },
  methods: {

    fnGetList () {
      this.$axios.get(this.$serverUrl + '/main/mainhome/' + `${this.user_no}`, {
        // params: this.requestBody,
        // headers: {},
        params: {
          user_no: this.user_no
        }
      }).then((res) => {
        this.allfeedList = res.data
        // 데이터 주체 확인용 console.log("this.allfeddList = "+   this.allfeedList[1].post_no)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    }

  }
}

</script>

  <style scoped>
  .EditorView #cardarticle #card {
    margin-top: -35px;
    margin-bottom: -25px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  </style>
