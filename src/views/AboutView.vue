<template>
    <div class="about">
      <div class="container">
        <img v-bind:src="imgSrc"/>
         <textarea v-model="message" cols="200" row="300">GiggleGiggle</textarea><br>
         <button @click="submit">등록하기</button>
      </div>
    </div>
  </template>
<script>
export default {
  data () {

  }
}
</script>
