<!-- eslint-disable eqeqeq -->
<!-- eslint-disable no-var -->
<template>
  <div class="container mb-4">
    <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
      <h3 class ="list-group-item text-dark border-primary my-2">
        <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" /> Profile
      </h3>
    </button>
    <hr class="setting__bar mb-2">
      <form class="border-round-radious">
          <div class="settingProfile border-round-radious">
              <div class="setting__title align-items-center">
                <!-- <img :src="back_image" id="backimg"/> -->
                <img src="https://i.ibb.co/Mgtq0YC/backdefault.png" id="backimg">
                  <!-- <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" color="black" :icon="['fas', 'caret-left']" /></a>프로필</h3> -->
              </div>

              <div class="profile__wrap px-4 mb-2">
                <div class="profile__image mb-2">
                  <img :src="profile_image" class="profile__imageFile rounded-circle align-center">
                </div>

<!--이미지 추가 버튼 시작-->

                <div class="filebox">
                  <label for="img-files-test">
                    <img id="addImage" src='@/assets/image.png'>Edit
                  </label>
                    <input type="file" ref="profileimg" id="img-files-test" @change="handleFileUpload1(event)" accept="image/jpg, image/jpeg, image/png, image/gif">
                </div>
                <!-- <a role="button" @click="uploadImgToImgbb()" class="btn btn-danger" id="registerButton">프로필 이미지 등록</a> -->
                <!-- <div class="filebox">
                <label for="img-files-test">
                  <img id="addImage" src='@/assets/image.png'>배경수정
                </label>
                  <input type="file" ref="backimg" id="img-files-test" @change="handleFileUpload2(event)" accept="image/jpg, image/jpeg, image/png, image/gif">
              </div> -->

<!--이미지 추가 버튼 끝-->

<hr class="setting__bar mb-2">
                  <div class="profile__nickname">
                      <label for="nickname" class="col-form-label col-form-label-sm  profile__nickname">닉네임</label>
                  </div>
                  <div>
                      <input type="text" class="form-control-sm profile__nickname" id="profile__nickname"
                      v-model="user_nick" v-bind:placeholder="`${this.$store.state.loginUserDTO.user_nick}`">
                  </div>
                  <div class="profile__status">
                      <label for="status" class="col-form-label col-form-label-sm  profile__status mt-2">상태 메세지</label>
                    </div>
                    <div>
                      <textarea class="form-control-sm profile__status" id="profile__status" rows="3"
                      v-model="status_message" v-bind:placeholder="`${this.$store.state.loginUserDTO.status_message}`"></textarea>
                  </div>
                  <div class="profile__location">
                      <label for="location" class="col-form-label col-form-label-sm  profile__location mt-2">위치</label>
                    </div>
                    <div>
                      <input type="text" class="form-control-sm profile__location" id="user__location"
                      v-model="user_location" v-bind:placeholder="`${this.$store.state.loginUserDTO.user_location}`">
                  </div>
                  <div class="profile__birthday" id="user_birthday">
                    <label for="birth" class="col-form-label col-form-label-sm  profile__birth mt-2">생년월일</label>
                          <div class="form-floating">
                              <!-- <input type="date" class="form-control-sm" v-bind:value="`${this.$store.state.loginUserDTO.user_birth}`" v-model="user_birth" ref="birth" name="trip-start"/> -->
                              <input type="date" class="form-control-sm" :value="`${this.$store.state.loginUserDTO.user_birth}`" @input="user_birth = $event.target.value" ref="birth" name="trip-start"/>
                            </div>
                          </div>
                  <div class="profile__passwordBtn">
                      <button type="button" class="btn btn-success btn-rg profile__passwordBtn my-4" @click="permitUpdate()">OK</button>
                  </div>
              </div>
          </div>
      </form>
  </div>
</template>
<script>
import MenuBar from '../../components/components-MenuBarComp-left.vue'
import SideBar from '../../components/rightsidebars/SideBarComp.vue'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.min.js'

export default {
  data () {
    return {
      user_nick: '',
      status_message: '',
      user_location: '',
      user_birth: '',
      back_image: '',
      profile_image: '',
      rightYTID: false,
      files: [],
      uploadImage: '',
      imgbbImg: '',
      imgbbImgURL: '',
      uploadImage2: '',
      imgbbImg2: '',
      imgbbImgURL2: ''

    }
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { MenuBar, SideBar },
  mounted () {
  // eslint-disable-next-line eqeqeq
    if (this.user_nick == '') {
      this.user_nick = this.$store.state.loginUserDTO.user_nick
    } else {
    // eslint-disable-next-line no-self-assign
      this.user_nick = this.user_nick
    }
    // eslint-disable-next-line eqeqeq
    if (this.status_message == '') {
      this.status_message = this.$store.state.loginUserDTO.status_message
    } else {
    // eslint-disable-next-line no-self-assign
      this.status_message = this.status_message
    }
    // eslint-disable-next-line eqeqeq
    if (this.user_location == '') {
      this.user_location = this.$store.state.loginUserDTO.user_location
    } else {
    // eslint-disable-next-line no-self-assign
      this.user_location = this.user_location
    }

    // eslint-disable-next-line eqeqeq
    if (this.back_image != this.uploadImage2) {
      this.back_image = this.uploadImage2
    } else {
      this.back_image = this.$store.state.loginUserDTO.back_image
    }
    // eslint-disable-next-line eqeqeq
    if (this.profile_image != this.uploadImage) {
      this.profile_image = this.uploadImage
    } else {
      this.profile_image = this.$store.state.loginUserDTO.profile_image
    }
  },
  methods: {
    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    },
    profileUpdate () {
      // eslint-disable-next-line eqeqeq
      if (this.user_nick == '') {
        this.user_nick = this.$store.state.loginUserDTO.user_nick
      } else {
      // eslint-disable-next-line no-self-assign
        this.user_nick = this.user_nick
      }

      // eslint-disable-next-line eqeqeq
      if (this.status_message == '') {
        this.status_message = this.$store.state.loginUserDTO.status_message
      } else {
      // eslint-disable-next-line no-self-assign
        this.status_message = this.status_message
      }

      // eslint-disable-next-line eqeqeq
      if (this.user_location == '') {
        this.user_location = this.$store.state.loginUserDTO.user_location
      } else {
      // eslint-disable-next-line no-self-assign
        this.user_location = this.user_location
      }

      // eslint-disable-next-line eqeqeq
      if (this.user_birth == '') {
        this.user_birth = this.$store.state.loginUserDTO.user_birth
      } else {
      // eslint-disable-next-line no-self-assign
        this.user_birth = this.user_birth
      }

      const data = {
        user_nick: this.user_nick,
        status_message: this.status_message,
        user_location: this.user_location,
        user_no: this.$store.state.loginUserDTO.user_no,
        user_birth: this.user_birth,
        uploadImage: this.uploadImage,
        imgbbImg: this.imgbbImg,
        profile_image: this.profile_image
      }

      this.$axios.post(this.$serverUrl + '/updateProfile', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        this.$store.commit('addLoginUser', res.data)
        this.$router.push({
          path: '/main/mypage'
        })
      }).catch(error => {
        console.log(error)
      })
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
    uploadImgToImgbb1 () {
      console.log('uploadImgToImgbb ()')
      const body = new FormData()
      body.append('key', '037f27c8f49be83ba03b30f0bb3ec12c')
      body.append('image', this.imgbbImg.split(',').pop())
      body.append('expiration', 15552000)
      this.$axios.post('https://api.imgbb.com/1/upload', body,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

        }
      ).then(res => {
        this.imgbbImgURL = res.data.data.url
        this.profile_image = res.data.data.url
        console.log('res.data.data.url = ' + res.data.data.url)
      }).catch(err => {
        console.log(err)
      })
    },
    async handleFileUpload1 (event) {
      const newName = this.uuidFileName(this.$refs.profileimg.files[0].name)
      this.files = this.renameFile(this.$refs.profileimg.files[0], newName)

      const reader = new FileReader()
      reader.readAsDataURL(this.files)
      await new Promise((resolve) => {
        reader.onloadend = (e) => {
          if (e.target.readyState === FileReader.DONE) {
            if (e.target.result) {
              this.imgbbImg = e.target.result
            } else {
              console.error('파일을 읽는 중에 오류가 발생했습니다.')
            }
            this.uploadImage = URL.createObjectURL(this.files)
            this.profile_image = this.uploadImage
            console.log('uploadImage = ' + this.uploadImage)
            resolve() // 비동기 작업 완료 후 resolve() 호출
          }
        }
      })

      await this.uploadImgToImgbb1() // uploadImgToImgbb() 함수 실행
    },
    permitUpdate () {
      window.setTimeout(this.profileUpdate, 500)
    }

  }
}

</script>

<style scoped>
.container {
  height : 100vh;
  margin : 0;
}
.setting__bar{

width:100%;
margin : 0 auto;
color : gray;
}
.profile__image{
  width : 100%;
  height : 150px;
  margin : 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile__imageFile{
  width : 150px;
  height: inherit;
}
.profile__birthdayWrap{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.profile__passwordBtn{
  display: flex;
  justify-content: right;
  align-items: center;
}
#user_birthday {
  margin-top: 3%;
}
.col-form-label-sm {
color: black;
font-size: 17px;
font-weight: bold;
}

.btn-link {
color: black;
}

.form-control-sm {
border: 2px solid lightgray;
color: black;
font-size: 16px;
background-color: white;
width: 100%;
min-height: 40px;
}
#backimg {
width: 100%;
height: 200px;
}
.profile__imageFile[data-v-bd41d840] {
border: 7px solid white;
}

#yotube-frame {
width: 100%;
height: 100%;
}

/* 이미지 업로드 버튼 꾸미기 CSS */
.filebox label {
display: inline-block;
padding: .5em .75em;
color: #fff;
font-size: inherit;
line-height: normal;
vertical-align: middle;
cursor: pointer;
}
.filebox input[type="file"] {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
}
#addImage{
  width:  23px;
  height: 23px;
  margin:0 0 0 10%;
}

.filebox label {
display: inline-block;
padding: .5em .75em;
color: black;
font-size: inherit;
line-height: normal;
vertical-align: middle;
cursor: pointer;
width: 100%;
}
.filebox input[type="file"] {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
}
#addImage{
  width:  23px;
  height: 23px;
  margin:0 0 0 44%;
}
#devideProfile {
  border: gray 1px solid;
}
#registerButton {
  margin:0 0 0 39%;
}
</style>
