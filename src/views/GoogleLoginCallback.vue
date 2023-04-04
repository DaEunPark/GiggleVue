<template>
    <p color="black">test</p>
</template>
<script>

export default ({
  data () {
    return {
      accessToken: window.location.href
    }
  },
  mounted () {
    console.log(this.accessToken)
  }

})
</script>
