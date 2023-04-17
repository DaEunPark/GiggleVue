<template>
    <article class="mb-1" id="cardarticle">
        <div class="card" id="card" style="z-index: 1; margin : 0; box-shadow: none;">
                <article class="my-3" id="textcardarticle">
                    <textarea name="text" id="text" cols="50" rows="5" placeholder="Giggle Giggle😘" v-model="post.text_content"></textarea>
                </article>

                <div>
                  <div id="imageuploadarea">
                    <div>
                      <div class="wrap">
                        <span v-for="(imgurl, i) in localImages" :key="i" >
                          <a role="button" class="image-delete" @click="deleteThisImage(i)">
                            <font-awesome-icon icon="fa-solid fa-square-xmark" size="xl" style="color: #ff4d4d;" />
                          </a>
                          <img class="uploadimage"  :src="imgurl" >
                        </span>
                      </div>
                    </div>
                    <!-- <img :src="imgurltest" style="width: 80%; height: 80%;"> -->
                  </div>
                </div>

                <div id="youtubelinkarea" class="d-flex justify-content-between align-items-center" v-if="addedYTLink">
                    <a class="text-success d-inline-block text-truncate" id="youtubelink">{{ post.post_link }}</a>
                    <a class="button hover-change-color" @click="clearYoutube" role="button"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" style="color: #ff0000;" /></a>
                </div>
            <!-- </div> -->

                <div class="card-footer" id="footer">
                    <!-- Image Upload Test Start -->
                    <label for="img-files" class="filelabel">
                      <img id="addImage" src='../assets/image.png' class="icon">
                    </label>
                    <input type="file" ref="imgfiles" id="img-files" v-on:change="handleImageFileUpload()" accept="image/jpg, image/jpeg, image/png, image/gif" multiple>

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
                    <button class="btn btn-primary btn-mb" id="upload" @click="fnSave()">등록</button>

                </div>
        </div>
    </article>
</template>

<script>

export default {
  data () {
    return {
      post: {
        user_no: this.$store.state.loginUserDTO.user_no,
        text_content: '',
        post_link: ''
      },
      addedYTLink: false,
      files: [],
      localImages: []

    }
  },
  mounted () {

  },
  computed: {
    showImgList () {
      console.log(this.localImages.length)
      return this.localImages.length
    }
  },
  methods: {
    fnSave () {
      if (this.post.text_content === '' || this.post.text_content === null || this.post.text_content === undefined) {
        alert('내용 입력은 필수입니다.')
      } else {
        //   alert('등록 가능')
        this.$axios.post(`${this.$serverUrl}/post/uploadpost`, this.post)
          .then(res => {
            if (res.data === 'Y') {
              this.uploadImgToServer()
              this.insertTag()
            } else {
              alert('실패 실패 실패 새로운 게시글이 등록되었습니다. ' + res.data)
            }
          }).catch(err => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })

        // 태그 설정 부분 시작

        // const data = { text_content: this.post.text_content }

        // this.$axios.post(this.$serverUrl + '/tag/insertTag', JSON.stringify(data), {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // }).then((res) => {
        //   console.log('태그 저장 성공..')
        //   location.reload()
        // }
        // )

        // 태그 설정 부분 끝
      }
    },
    addYoutube () {
      if (this.post.post_link === '' || this.post.post_link === null || this.post.post_link === undefined) {
        alert('유튜브 링크를 입력하세요')
      } else {
        this.addedYTLink = true
        this.$refs.YTIcon.style.pointerEvents = 'none'
        this.$refs.YTIcon.style.color = '#ffffff'
        this.imgurltest = 'dfsdfdsf'
      }
    },
    clearYoutube () {
      this.$refs.YTIcon.style.pointerEvents = ''
      this.post.post_link = ''
      this.addedYTLink = false
    },
    renameFile (originalFile, newName) { // 파일명 변경
      return new File([originalFile], newName, {
        type: originalFile.type
      })
    },
    uuidFileName (originalName) { // UUID 파일명 생성
      const onLength = originalName.length
      const indexDot = originalName.lastIndexOf('.')
      const fileExtension = originalName.substring(indexDot + 1, onLength)
      const uuid = self.crypto.randomUUID()
      return `${uuid}.${fileExtension}`
    },
    handleImageFileUpload () {
      const tempArr = this.$refs.imgfiles.files
      console.log(tempArr)
      if (tempArr.length > 4 || this.localImages.length + tempArr.length > 4) {
        alert('사진 파일 1 ~ 4개 선택하세요.')
      } else {
        // this.files = []
        // this.localImages = []
        const fileIdx = this.files.length
        for (let i = 0; i < tempArr.length; i++) {
          const newName = this.uuidFileName(tempArr[i].name)
          this.files.push(this.renameFile(tempArr[i], newName))
          this.localImages.push(URL.createObjectURL(this.files[fileIdx + i]))
        }
      }
    },
    async uploadImgToServer () {
      if (this.files.length > 0) {
        const body = new FormData()
        for (let i = 0; i < this.files.length; i++) {
          body.append('files', this.files[i])
        }
        // body.append('files', this.files[0])
        await this.$axios.post(`${this.$serverUrl}/post/uploadimages`, body,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(res => {
          // console.log('이미지들 업로드 테스트' + res.data)
          // this.s3ImgURL = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    async insertTag () {
      const data = { text_content: this.post.text_content }

      await this.$axios.post(this.$serverUrl + '/tag/insertTag', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        // alert('태그 저장 성공..')
        // location.reload()
        this.$router.go()
      }
      )
    },
    deleteThisImage (item) {
      this.files.splice(item, 1)
      this.localImages.splice(item, 1)
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
    margin: -10px 35px -10px;
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
#upload {
    position:   fixed;
    right: 5%;
    bottom: 3%;
}
.filelabel {
  display: inline-block;
  color: #fff;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  cursor: pointer;
}
#img-files {
  display: none;
}

.image-delete {
  /* float: inline-end; */
  float: right;
  top: 40px;
  padding-inline-end: 10px;
  position: relative;
}

.wrap {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 280px));
  /* grid-auto-rows: minmax(145px, 158px); */
  grid-gap: 1em;
}
.uploadimage {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#imageuploadarea {
  margin: 1em 1em 2.5em 1em;
}
</style>
