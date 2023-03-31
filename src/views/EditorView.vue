<template>
    <article class="my-3" id="cardarticle">
        <div class="card" id="card">
            <!-- <div class="card-body" id="body"> -->
                <article class="my-3" id="textcardarticle">
                    <textarea name="text" id="text" cols="50" rows="5" placeholder="Giggle Giggle😘" v-model="post.text_content"></textarea>
                </article>
                <div id="youtubelinkarea" class="d-flex justify-content-between align-items-center" v-if="addedYTLink">
                    <a class="text-success d-inline-block text-truncate" id="youtubelink">{{ post.post_link }}</a>
                    <a class="button hover-change-color" @click="clearYoutube" role="button"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" style="color: #ff0000;" /></a>
                </div>
            <!-- </div> -->
                <div class="card-footer" id="footer">
                    <img src="../assets/image.png" onclick="addImage()" id="addImage" class="icon">
                    <!-- 유튜브 링크 등록 시작 -->
                    <div class="dropdown d-inline-flex" id="addYoutube">
                        <a class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" ref="YTIcon">
                            <img v-if="!addedYTLink" src="../assets/youtube.png"  id="addYoutube" class="icon">
                            <img v-if="addedYTLink" src="../assets/youtube.png"  id="addYoutube" class="icon" style="filter: contrast(0%);">
                        </a>
                        <form class="dropdown-menu p-1 text-dark" v-show="!addedYTLink">
                            <div class="input-group  mb-1">
                                <!-- <label for="exampleDropdownFormEmail2" class="form-label">Email address</label> -->
                                <span class="input-group-text" style="background-color: red;"><font-awesome-icon icon="fa-brands fa-youtube" style="color: #ffffff;" /></span>
                                <input type="text" class="form-control bg-secondary text-dark" v-model="post.post_link" id="exampleDropdownFormEmail2" placeholder="유튜브 링크..." >
                            </div>
                            <button type="button" class="btn btn-success p-0" style="width: 100%;"  @click="addYoutube()">입력</button>
                        </form>
                    </div> <!-- 유튜브 링크 등록 끝 -->
                    <img src="../assets/link.png" onclick="addLink()" id="addLink" class="icon">
                    <!-- <img src="../assets/statistics.png" onclick="statistics()" id="statistics" class="icon"> -->
                    <button class="btn btn-primary btn-mb" @click="submit" id="upload" v-on:click="fnSave"  >등록</button>
                </div>
        </div>
    </article>
</template>

<script>

export default {
  data () {
    return {
      post: {
        user_no: 6,
        text_content: '',
        post_link: 'https://www.youtube.com/watch?v=ODZCCcH5tjw'
      },
      addedYTLink: false

    }
  },
  mounted () {

  },
  methods: {
    fnSave () {

    },
    addYoutube () {
      if (this.post.post_link === '' || this.post.post_link === null || this.post.post_link === undefined) {
        alert('유튜브 링크를 입력하세요')
      } else {
        this.addedYTLink = true
        this.$refs.YTIcon.style.pointerEvents = 'none'
        this.$refs.YTIcon.style.color = '#ffffff'
      }
    },
    clearYoutube () {
      this.$refs.YTIcon.style.pointerEvents = ''
      this.post.post_link = ''
      this.addedYTLink = false
    }
  }
}
</script>

<style scoped>
/* #card {
    width:  750px;
    height: auto;
    min-height: 200px;
    margin: 5% 25%;
} */
textarea {
    resize: none;
}

.dropdown-menu {
    width: 280px;
}

#exampleDropdownFormEmail2 {
    border-color: crimson !important;
}

#exampleDropdownFormEmail2::placeholder {
    color: darkgray;

}

#addImage, #addYoutube, #addLink, #statistics {
    width:  23px;
    height: 23px;
    margin:0 0 0 10%;
}
 #footer {
    float:  left;
}
#textcardarticle #text {
    color:black;
    background-color:    white;
    border: none;
    width: 90%;
    margin: -10px 35px -30px;
    padding : 20px 20px 20px

}
#youtubelinkarea {
    margin: -10px 35px -10px;
    padding: 20px 20px 20px;
    max-width: 23em;
}
#youtubelink {
    max-width: 18em;
    margin-right: 10px;
    pointer-events: none;
}
/* .card{
    float:  left;
} */
/* #body {
    position:relative;
    margin-left:auto;
} */
#upload {
    position:   fixed;
    right: 5%;
    bottom: 3%;
}
</style>
