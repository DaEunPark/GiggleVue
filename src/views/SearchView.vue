<template>
    <div>
        <section id="components">
            <div class="Sbackground">

                <article class="my-3" id="AinputSearch">
                    <div class="input-group mb-3" style="margin-top:10px;">
                        <span class="input-group-text bg-primary" style="border-bottom-left-radius: 20px; border-top-left-radius: 20px; ">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:#ffffff"/></span>
                        <input type="text" v-model="searchWords" class="form-control" placeholder="검색어를 입력하세요" @keydown.enter="enterSearch">
                    </div>

                    <div class="searchtd">
                    <p class="h2">Trend</p>
                    </div>
                   </article>

                <article class="my-3" id="trend-list">
                    <div  v-for="(row , idx) in Trendlist" :key="idx" class="list-group list-group-flush" id="Slistgroupflush">
                        <a href="search/{row.title}" class="list-group-item" id="Slistgroup">
                            <h5 class="TLtitle">{{row.title}}</h5>
                            <small class="TLsmall">게시물수: {{row.readCount}}</small>
                        </a>
                     </div>
                </article>
        </div>
     </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // responseBody : {},
      Trendlist: {},
      searchWords: ''
    }
  },
  mounted () {
    this.fnGetList()
  },
  methods: {
    enterSearch () {
      if (this.searchWords == '' || this.searchWords == null) {
        alert('검색어를 입력하세요')
      } else {
        alert(this.searchWords)
        const url = window.location.href
        location.href = url + '/' + (this.searchWords) // /search/:id 의 id==변수부분
      }
    },
    fnGetList () {
      this.Trendlist = [
        {
          title: '얼그레이티 라떼',
          readCount: '1231111'
        },
        {
          title: '퇴근',
          readCount: '30220'
        },
        {
          title: '비가오는날엔귀가원츄',
          readCount: '104440'
        },
        {
          title: '맛점',
          readCount: '133404'
        },
        {
          title: '종각역스터디카페',
          readCount: '133402'
        },
        {
          title: '블랙 글레이즈드',
          readCount: '133402'
        },
        {
          title: '아아',
          readCount: '133402'
        }
      ]
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

</style>
