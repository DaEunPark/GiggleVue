<template>
    <article class="my-3" id="cardarticle">
        <div class="card" id="card">
            <!-- <div class="card-body" id="body"> -->
                <article class="my-3" id="textcardarticle">
                    <textarea name="text" id="text" cols="50" rows="5" placeholder="Giggle Giggle😘" v-model="text_content"></textarea>
                </article>
            <!-- </div> -->
                <div class="card-footer" id="footer">
                    <img src="../assets/image.png" onclick="addImage()" id="addImage" class="icon">
                    <div class="dropdown d-inline-flex" id="addYoutube">
                        <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/youtube.png"  id="addYoutube" class="icon">
                        </a>
                        <form class="dropdown-menu p-1 text-dark">
                            <div class="input-group  mb-1">
                                <!-- <label for="exampleDropdownFormEmail2" class="form-label">Email address</label> -->
                                <span class="input-group-text" style="background-color: red;"><font-awesome-icon icon="fa-brands fa-youtube" style="color: #ffffff;" /></span>
                                <input type="text" class="form-control bg-secondary text-dark" @click="addYoutube()" v-model="post_link" id="exampleDropdownFormEmail2" placeholder="유튜브 링크..." >
                            </div>
                            <button type="submit" class="btn btn-success p-0" style="width: 100%;">등록</button>
                        </form>
                    </div>
                    <img src="../assets/link.png" onclick="addLink()" id="addLink" class="icon">
                    <!-- <img src="../assets/statistics.png" onclick="statistics()" id="statistics" class="icon"> -->
                    <button class="btn btn-primary btn-mb" @click="submit" id="upload" v-on:click="fnSave" >등록</button>
                </div>
        </div>
    </article>
</template>

<script>

export default {
  data () {
    return {
      user_no: '',
      text_content: '',
      post_link: ''
    }
  },
  mounted () {

  },
  methods: {
    fnSave () {

    },
    addYoutube () {

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
