eslint-disable eqeqeq
<!-- eslint-disable no-var -->
<template>
    <div class="container">
        <form class="card border-round-radious">
            <div class="settingProfile list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <img v-bind:src="`${this.back_image}`" id="backimg"/>
                    <!-- <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" color="black" :icon="['fas', 'caret-left']" /></a>프로필</h3> -->
                </div>
                <div class="profile__wrap px-4 mb-2">
                    <div class="profile__image mb-2">
                        <img v-bind:src="`${this.$store.state.loginUserDTO.profile_image}`" class="profile__imageFile rounded-circle align-center">
                        <button type="button" class="btn btn-link btn-rg imageEdit mt-2" @click="profileEdit()" color="black">Edit</button>
                    </div>
                    <div class="profile__nickname">
                        <label for="nickname" class="col-form-label col-form-label-sm  profile__nickname mt-2">닉네임</label>
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
                    <!-- <div class="profile__birthday">
                        <label for="birthday" class="col-form-label col-form-label-sm profile__birthday mt-2">생년월일</label>
                        <div class="profile__birthdayWrap">
                            <select class="form-select form-select-sm" name="yy" id="year" value="birth_yy" @click="selectBirth()"></select>
                            <select class="form-select form-select-sm" name="mm" id="month" v-model="birth_mm"></select>
                            <select class="form-select form-select-sm" name="dd" id="day" v-model="birth_dd"></select>
                        </div>
                    </div> -->
                    <div class="sm-3 profile__birthday" id="user_birthday">
                      <label for="birth" class="col-form-label col-form-label-sm  profile__birth mt-2">생년월일</label>
                            <div class="form-floating">
                                <input type="date" class="form-control-sm" v-model="user_birth" ref="birth" name="trip-start"/>
                              </div>
                            </div>
                    <div class="profile__passwordBtn">
                        <button type="button" class="btn btn-success btn-rg profile__passwordBtn mt-2" @click="profileUpdate()">OK</button>
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

export default {
  data () {
    return {
      user_nick: '',
      status_message: '',
      user_location: '',
      user_birth: '',
      back_image: ''
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
    if (this.user_birth == '') {
      // eslint-disable-next-line eqeqeq, no-unused-expressions
      this.user_birth == this.$store.state.loginUserDTO.user_birth
    } else {
      // eslint-disable-next-line no-self-assign
      this.user_birth = this.user_birth
    }
    if(this.back_image == '') {
      this.back_image = 'https://i.ibb.co/Mgtq0YC/backdefault.png'
    } else {
      this.back_image = this.$store.state.loginUserDTO.back_image
    }
    
  },
  methods: {
    profileUpdate () {
      const data = {
        user_nick: this.user_nick,
        status_message: this.status_message,
        user_location: this.user_location,
        user_no: this.$store.state.loginUserDTO.user_no,
        user_birth: this.user_birth,
        back_image: this.back_image
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
    }
  }
}

// $(document).ready(function () {
//     const now = new Date()
//     const year = now.getFullYear()
//     const mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1)
//     const day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate())
//   // 년도 selectbox만들기
//   // eslint-disable-next-line no-var
//     for (var i = 1900; i <= year; i++) {
//         $('#year').append('<option value="' + i + '">' + i + '년</option>')
//     }

//   // 월별 selectbox 만들기
//   // eslint-disable-next-line no-var, no-redeclare
//     for (var i = 1; i <= 12; i++) {
//         const mm = i > 9 ? i : '0' + i
//         $('#month').append('<option value="' + mm + '">' + mm + '월</option>')
//     }

//   // 일별 selectbox 만들기
//   // eslint-disable-next-line no-var, no-redeclare
//     for (var i = 1; i <= 31; i++) {
//         const dd = i > 9 ? i : '0' + i
//         $('#day').append('<option value="' + dd + '">' + dd + '일</option>')
//     }
//     $('#year  > option[value=' + year + ']').attr('selected', 'true')
//     $('#month  > option[value=' + mon + ']').attr('selected', 'true')
//     $('#day  > option[value=' + day + ']').attr('selected', 'true')
// })
</script>

<style scoped>
.container {
    height : 100vh;
    margin : 0;
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
</style>
