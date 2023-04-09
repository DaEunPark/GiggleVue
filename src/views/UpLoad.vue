<template>
  <article>
        <div class="EditorView">
          <EditorView></EditorView>
        <div class="FeedStatus">
          <FeedStatus :items="allfeedList"></FeedStatus>
        </div>
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
      requestBody: {}, // 리스트 페이지 데이터 전송
      allfeedList: {}, // 리스트 데이터
      no: '' // 숫자 처리

    }
  },
  mounted () {
    this.fnGetList()
  },
  methods: {
    fnGetList () {
      this.requestBody = { // 데이터 전송

      }

      this.$axios.get(this.$serverUrl + '/main/upload', {
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
.EditorView #cardarticle #card {
  margin-top: -35px;
  margin-bottom: -25px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

</style>
