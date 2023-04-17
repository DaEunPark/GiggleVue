<template>
    <div class="modal-body" id="alarmBody">
      <div id="alarmListDiv">
      <div v-for="(alarm, idx) in alarmList" :key="idx">
        <!-- 알람 타입: 1 (팔로우 알람) -->
        <div v-if="alarm.alarm_type == '1'" class="alert alert-dismissible alert-primary">
          <a href="#" @click="openUserProfile(alarm.alarm_user, alarm.alarm_no)" class="alert-link">
            <table>
              <tr>
                <td class="alarmListImg">
                  <img v-bind:src="alarm.alarm_user_profile" class="alarmUserProfile"/>
                </td>
                <td class="alarmListNick">{{alarm.alarm_user_nick}}</td>
                <td>님이 회원님을 팔로우합니다.</td>
                <td class="alarmTime">{{alarm.alarm_date}}</td>
                <td class="alarmClose">
                </td>
              </tr>
            </table>
          </a>
          <button @click="deleteAlarm(alarm.alarm_no)"
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="alert"
          ></button>
        </div>
        <!-- 알람 타입: 2 (좋아요 알람) -->
        <div v-if="alarm.alarm_type == '2'" class="alert alert-dismissible alert-primary">
          <a v-bind:href="`/main/postdetail?post_no=${alarm.post_no}`" @click="deleteAlarm(alarm.alarm_no)" class="alert-link">
            <table>
              <tr>
                <td class="alarmListImg">
                  <img v-bind:src="alarm.alarm_user_profile" class="alarmUserProfile"/>
                </td>
                <td class="alarmListNick">{{alarm.alarm_user_nick}}</td>
                <td>님이 회원님의 게시물을 좋아합니다.</td>
                <td class="alarmTime">{{alarm.alarm_date}}</td>
                <td class="alarmClose">
                </td>
              </tr>
            </table>
          </a>
          <button @click="deleteAlarm(alarm.alarm_no)"
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="alert"
          ></button>
        </div>
        <!-- 알람타입: 3(댓글 알람) -->
        <div v-if="alarm.alarm_type === '3' & alarm.alarm_user !== this.$store.state.loginUserDTO.user_no" class="alert alert-dismissible alert-primary">
          <a v-bind:href="`/main/postdetail?post_no=${alarm.post_no}`" @click="deleteAlarm(alarm.alarm_no)" class="alert-link">
            <table>
              <tr>
                <td class="alarmListImg">
                  <img v-bind:src="alarm.alarm_user_profile" class="alarmUserProfile"/>
                </td>
                <td class="alarmListNick">{{alarm.alarm_user_nick}}</td>
                <td>님이 회원의 게시물에 댓글을 달았습니다.</td>
                <td class="alarmTime">{{alarm.alarm_date}}</td>
                <td class="alarmClose">
                </td>
              </tr>
            </table>
          </a>
          <button @click="deleteAlarm(alarm.alarm_no)"
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="alert"
          ></button>
        </div>
      </div>
      </div>
      <!--더보기 버튼-->
      <div v-show="this.alarmList.length > 5" id="alarmMoreDiv">
        <button type="button" class="btn btn-success" @click="getMore">더보기</button>
      </div>
    </div>
</template>
<script>
import axiox from 'axios'
export default {
  props: {
    alarmList: {
      type: Array, default: null
    }
  },
  methods: {
    getMore () {
      if (this.alarmList.length > 5) {
        console.log('알람 리스트 5개 이상임')
        console.log(this.alarmListLength)
        document.getElementById('alarmMoreDiv').style.display = 'none'
        document.getElementById('alarmListDiv').style.overflowY = 'visible'
      }
    },
    openUserProfile (otherUser, alarmNo) {
      this.$axios.post(this.$serverUrl + '/otherProfile', {
        user_no: otherUser
      }).then((res) => {
        this.$store.commit('addOtherUser', res.data)
        console.log(this.$store.state.otherUserDTO)
        this.deleteAlarm(alarmNo)
        location.href = '/main/notmypage/' + this.$store.state.otherUserDTO.user_nick
      })
    },
    deleteAlarm (alarmNO) {
      // alert('알람 삭제 합니다~~')
      // 알람 번호에 해당하는 데이터를 삭제한다(다른 페이지로 이동하기 때문에 현재 목록에서 삭제할 필요는 x)
      axiox.get(this.$serverUrl + '/mj/deleteAlarm/' + alarmNO)
        .then(res => {

        })
    }
  }
}
</script>

<style scoped>
/* 알람 css */
#alarmBody {
  padding-top: 10px;
  padding-bottom: 10px;
  overflow-y: scroll;
}
#alarmBody::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#alarmBody::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
#alarmListDiv {
  height: 80%;
  overflow-y: hidden;
}
.alert-dismissible {
  padding: 10px 20px;
  margin-bottom: 8px;
}
.alarmTitle p {
  font-weight: lighter;
  font-size: 20px;
}
.alert-dismissible a {
  width: 100%;
  color: #454445;
  font-weight: lighter;
  text-decoration: none;
  text-align: left;
}
.alert-dismissible a table {
  width: 100%;
}
.alarmListImg {
  width: 10%;
}
.alarmListImg img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.alarmListNick {
  color: #454445;
  font-size: 18px;
  font-weight: lighter;
  width: 20%;
  text-align: center;
}
.alarmFollow {
  padding: 1px 10px;
  border-radius: 15px;
  color: #FFF;
}
.alarmTime {
  text-align: center;
  font-size: 13px;
  color: #454445;
  width: 15%;
}
.alarmClose {
  width: 5%;
}
.alarmClose button {
  padding: 35px 20px;
}
#alarmMoreDiv {
  text-align: center;
}
#alarmMoreDiv button {
  padding: 1px 10px;
  margin-top: 15px;
  border-radius: 5px;
  color: #FFF !important;
  border: none;
}
#alarmMoreDiv button:hover {
  background-color: #ed5c9d;
  transition: 1ms;
}
</style>
