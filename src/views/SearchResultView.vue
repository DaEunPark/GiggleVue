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

                   <FeedStatus></FeedStatus>

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
      // responseBody : {},
      searchWords: ''
    }
  },
  mounted () {
  },
  methods: {
    searchGroup (event) {
      console.log(event.target.value)
      const len = this.FeedList.length

      for (let i = 0; i < len; i++) {
        if (
          this.FeedList[i].nickname.includes(event.target.value) === false &&
                this.FeedList[i].contents.includes(event.target.value) === false
        ) {
          document.querySelectorAll('#FeedList_GF')[i].style.display = 'none'
        } else {
          document.querySelectorAll('#FeedList_GF')[i].style.display = 'flex'
        }
      }
    },

    enterSearch () {
      if (this.searchWords === '' || this.searchWords == null) {
        alert('검색어를 입력하세요')
      } else {
        alert(this.searchWords)
      }
    },
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
.searchrt{
    color:black;
    margin-left: 35px;
    margin-top: 2%;
    margin-bottom: -20px;
}


</style>
