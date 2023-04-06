<!-- eslint-disable no-var -->
<template>
    <div class="container">
        <form class="card bg-primary border-round-radious">
            <div class="settingProfile list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" /></a>프로필</h3>
                </div>
                <div class="profile__wrap px-4 mb-2">
                    <div class="profile__image mb-2">
                        <img v-bind:src="`${this.$store.state.loginUserDTO.profile_image}`" class="profile__imageFile rounded-circle align-center">
                        <button type="button" class="btn btn-link btn-rg imageEdit mt-2">Edit</button>
                    </div>
                    <div class="profile__nickname">
                        <label for="nickname" class="col-form-label col-form-label-sm  profile__nickname mt-2">닉네임</label>
                        <input type="text" class="form-control form-control-sm profile__nickname" id="profile__nickname" 
                        v-model="user_nick" v-bind:placeholder="`${this.$store.state.loginUserDTO.user_nick}`">
                    </div>
                    <div class="profile__status">
                        <label for="status" class="col-form-label col-form-label-sm  profile__status mt-2">상태 메세지</label>
                        <textarea class="form-control form-control-sm profile__status" id="profile__status" rows="3" 
                        v-model="status_message" v-bind:placeholder="`${this.$store.state.loginUserDTO.status_message}`"></textarea>
                    </div>
                    <div class="profile__location">
                        <label for="location" class="col-form-label col-form-label-sm  profile__location mt-2">위치</label>
                        <input type="text" class="form-control form-control-sm profile__location" id="user__location"
                        v-model="user_location" v-bind:placeholder="`${this.$store.state.loginUserDTO.user_location}`">
                    </div>
                    <div class="profile__birthday">
                        <label for="birthday" class="col-form-label col-form-label-sm profile__birthday mt-2">생년월일</label>
                        <div class="profile__birthdayWrap">
                            <select class="form-select form-select-sm" name="yy" id="year"></select>
                            <select class="form-select form-select-sm" name="mm" id="month"></select>
                            <select class="form-select form-select-sm" name="dd" id="day"></select>
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
import $ from 'jquery'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            user_nick:'',
            status_message:'',
            user_location:''
        }
    },
  // eslint-disable-next-line vue/no-unused-components
    components: { MenuBar, SideBar },
    mounted() {
        
            if(this.user_nick == "") {
                this.user_nick = this.$store.state.loginUserDTO.user_nick
            } else {
                this.user_nick = this.user_nick
            }
            if(this.status_message == "") {
                this.status_message = this.$store.state.loginUserDTO.status_message
            } else {
                this.status_message = this.status_message
            }
            if(this.user_location == "") {
                this.user_location = this.$store.state.loginUserDTO.user_location
            } else {
                this.user_location = this.user_location
            }
            
            console.log("user_nick = "+this.user_nick)
            console.log("status_message = "+this.status_message)
            console.log("user_location = "+this.user_location)
    },
    methods: {
        profileUpdate() {
            var data={ user_nick:this.user_nick, status_message:this.status_message, 
                user_location:this.user_location, user_no:this.$store.state.loginUserDTO.user_no}
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

$(document).ready(function () {
    const now = new Date()
    const year = now.getFullYear()
    const mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1)
    const day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate())
  // 년도 selectbox만들기
  // eslint-disable-next-line no-var
    for (var i = 1900; i <= year; i++) {
        $('#year').append('<option value="' + i + '">' + i + '년</option>')
    }

  // 월별 selectbox 만들기
  // eslint-disable-next-line no-var, no-redeclare
    for (var i = 1; i <= 12; i++) {
        const mm = i > 9 ? i : '0' + i
        $('#month').append('<option value="' + mm + '">' + mm + '월</option>')
    }

  // 일별 selectbox 만들기
  // eslint-disable-next-line no-var, no-redeclare
    for (var i = 1; i <= 31; i++) {
        const dd = i > 9 ? i : '0' + i
        $('#day').append('<option value="' + dd + '">' + dd + '일</option>')
    }
    $('#year  > option[value=' + year + ']').attr('selected', 'true')
    $('#month  > option[value=' + mon + ']').attr('selected', 'true')
    $('#day  > option[value=' + day + ']').attr('selected', 'true')
})
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
</style>
