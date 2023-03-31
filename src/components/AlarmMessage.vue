<template>
    <div class="modal-body" id="alarmBody">
            <div v-if="true">
              <div class="alert alert-dismissible alert-primary">
                <a href="#" class="alert-link">
                  <table>
                    <tr>
                      <td class="alarmListImg">
                        <img src="../assets/profile02.jpg"/>
                      </td>
                      <td class="alarmListNick">닉네임</td>
                      <td>님이 회원님에게 팔로우를 요청했습니다.</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-success alarmFollow"
                        >
                          팔로우
                        </button>
                      </td>
                      <td class="alarmTime">10:10 PM</td>
                      <td class="alarmClose">
                        <button
                          type="button"
                          class="btn-close btn-close-white"
                          data-bs-dismiss="alert"
                        ></button>
                      </td>
                    </tr>
                  </table>
                </a>
              </div>
              <div class="alert alert-dismissible alert-primary">
                <a href="#" class="alert-link">
                  <table>
                    <tr>
                      <td class="alarmListImg">
                        <img src="../assets/profile02.jpg"/>
                      </td>
                      <td class="alarmListNick">닉네임</td>
                      <td>님이 회원님에게 팔로우를 요청했습니다.</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-success alarmFollow"
                        >
                          팔로우
                        </button>
                      </td>
                      <td class="alarmTime">10:10 PM</td>
                      <td class="alarmClose">
                        <button
                          type="button"
                          class="btn-close btn-close-white"
                          data-bs-dismiss="alert"
                        ></button>
                      </td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
            <div v-if="true">
              <div class="alert alert-dismissible alert-primary">
                <a href="#" class="alert-link">
                  <table>
                    <tr>
                      <td class="alarmListImg">
                        <img src="../assets/profile02.jpg"/>
                      </td>
                      <td class="alarmListNick">닉네임</td>
                      <td>님이 회원님의 게시물을 좋아합니다.</td>
                      <td class="alarmTime">10:10 PM</td>
                      <td class="alarmClose">
                        <button
                          type="button"
                          class="btn-close btn-close-white"
                          data-bs-dismiss="alert"
                        ></button>
                      </td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
            <div v-if="true">
              <div class="alert alert-dismissible alert-primary">
                <a href="#" class="alert-link">
                  <table>
                    <tr>
                      <td class="alarmListImg">
                        <img src="../assets/profile02.jpg" />
                      </td>
                      <td class="alarmListNick">닉네임</td>
                      <td>님이 회원의 게시물에 댓글을 달았습니다.</td>
                      <td class="alarmTime">10:10 PM</td>
                      <td class="alarmClose">
                        <button
                          type="button"
                          class="btn-close btn-close-white"
                          data-bs-dismiss="alert"
                        ></button>
                      </td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
            <!--더보기 버튼-->
            <div v-if="true" id="alarmMoreDiv">
              <button type="button" class="btn btn-success">더보기</button>
            </div>
          </div>
</template>
<script>
export default {
  data() {
    return {
      alarmList: []
    }
  }
}
</script>

<style scoped>
/* 알람 css */
#alarmBody {
  padding-top: 10px;
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
  width: 10%;
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
