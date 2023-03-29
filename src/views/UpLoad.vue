<template>

    <article>
          <div class="EditorView">
            <EditorView></EditorView>    
          <div class="FeedStatus">
            <FeedStatus></FeedStatus>
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

