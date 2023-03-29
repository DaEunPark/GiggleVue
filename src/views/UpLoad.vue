<template>
  <div id="editor-view">
    <EditorView></EditorView>
  </div>

</template>

<script>
import EditorView from '../views/EditorView.vue'

export default {
  components: {
    EditorView
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
  #editor-view {
    margin: 5% 25%;
  }
</style>
