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

                   <FeedStatus :items="FeedList"></FeedStatus>

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
     FeedList: [
     {
          nickname: 'user_jungha',
          user_image: require('../assets/profile.jpg'),
          data: '1시간 전',
          contents: '어느날 머리에서 뿔이 자랐다',
          comment: '3',
          like: '4034'
        },
        {
          nickname: 'user_jungha',
          user_image: require('../assets/profile.jpg'),
          data: '2시간 전',
          contents: '이세계에서 환생한 내가 어쩌다 sss급',
          comment: '3',
          like: '4422'
        },
        {
          nickname: '안녕하세요방가',
          user_image: require('../assets/giggle1.png'),
          data: '3시간 전',
          contents: '이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여',
          comment: '3',
          like: '4'
        },
        {
          nickname: 'useruse★',
          user_image: require('../assets/profile02.jpg'),
          data: '4시간 전',
          contents: '귀엽다',
          comment: '3',
          like: '42'
        },
        {
          nickname: 'user_5',
          user_image: require('../assets/logo.png'),
          data: '3월 22일',
          contents: '스벅',
          comment: '3',
          like: '14'
        },
        {
          nickname: 'user_6',
          user_image: require('../assets/profile.jpg'),
          data: '1일 전',
          contents: '맛있다',
          comment: '3',
          like: '4334'
        },
        {
          nickname: 'user_7',
          user_image: require('../assets/profile.jpg'),
          data: '14초',
          contents: '오늘의 아아',
          comment: '3',
          like: '324'
        }
    ]
    }
  },
  
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
