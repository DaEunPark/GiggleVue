<template>
    <div class="container">
        <div class="postAnalitics border-round-radious">
            <div class="analitics__accountWrap px-4 ">
                <div class="analitics__account mb-2">
                    <div class="card analitics__card border-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">Like</div>
                    <div class="card-body">
                        <h4 class="card-title">{{item.like_cnt}}</h4>
                    </div>
                    </div>
                    <div class="card analitics__card border-primary mb-3">
                        <div class="card-header">Comment</div>
                        <div class="card-body">
                            <h4 class="card-title">{{item.comment_cnt}}</h4>
                        </div>
                    </div>
                    <div class="card analitics__card border-primary mb-3">
                        <div class="card-header">Share</div>
                        <div class="card-body">
                            <h4 class="card-title">{{item.share_cnt}}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="setting__bar mb-2">
            <div class="analitics__postWrap px-4 ">
                <h5>게시물 인사이트</h5>
                <div class="analitics__post mb-2">
                  <div id="container"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import MenuBar from '../../components/components-MenuBarComp-left.vue'
// import SideBar from '../../components/rightsidebars/SideBarComp.vue'

// export default {
//   components: { MenuBar, SideBar }
// }

export default {
  data () {
    return {
      post_no: this.$route.query.post_no,
      item: {}
    }
  },
  mounted () {
    // this.getThisPostInsite()
  },
  methods: {
    getThisPostInsite () {
      this.$axios.get(`${this.$serverUrl}/postinsite/${this.post_no}`,
        {
          params: {
            post_no: this.post_no
          }
        }).then((res) => {
        console.log(`Query: ${this.post_no}`)
        this.item = res.data
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
.container {
    height : 100vh;
    margin : 0;
}

.setting__bar{

    width:550px;
    margin : 0 auto;
    color : gray;
}
.analitics__account{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.analitics__post{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.analitics__card{
    width: 30%;
}
.card-header{
    text-align: center;
}

</style>
