<template>
    <article>
          <div class="EditorView">
            <EditorView></EditorView>    
          <div class="FeedStatus">
            <FeedStatus :items="FeedList"></FeedStatus>
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
.EditorView #cardarticle #card {
    margin-top: -35px;
    margin-bottom: -25px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

</style>