<!-- eslint-disable eqeqeq -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="modal-body row">
        <!--대화 목록 부분-->
        <div class="col-sm-6" id="DMListDiv">
            <!-- 대화 상대 검색 부분 -->
            <div id="DMSearch">
              <input @focus="openSearchList" @keyup="searchUser" @focusout="hideSearchList" v-model="keyword" type="text" id="userKeyword" placeholder="사용자 검색" />
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
            <div id="DMSearchUl" class="list-group">
              <div v-for="(user, i) in userList" :key="i">
                <div v-if="this.$store.state.loginUserDTO.user_no != user.user_no">
                  <a @click="getChatRoom(user.user_no)" href="#" class="list-group-item list-group-item-action">
                    <img class="img_circle user_img" name="profile" id="profile" v-bind:src="user.profile_image">
                    <p>{{user.user_nick}}</p>
                  </a>
                </div>
              </div>
            </div>
            <!--대화 상대 목록-->
            <ul id="DMListUl">
              <!-- 기존의 채팅방 리스트 -->
              <div v-for="(chatRoom, i) in chatRoomList" :key="i">
                <li>
                    <a @click="openChatRoom(chatRoom.chatroom_no)">
                      <img v-if="chatRoom.user1 == 0 || chatRoom.user2 == 0" class="dmListImg" name="profile" id="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2I0cfUaQK7bSG8L8q4cImt2i0qhd6XwNdeg&usqp=CAU">
                      <img v-else class="dmListImg" name="profile" id="profile" v-bind:src="chatRoom.profile_image">
                      <div class="dmListContent">
                          <p v-if="chatRoom.user1 == 0 || chatRoom.user2 == 0" class="dmListNick">알 수 없음</p>
                          <p v-else class="dmListNick">{{chatRoom.user_nick}}</p>
                          <div v-if="chatRoom.recent_message.length < 16">
                            <p class="dmListText">
                              {{chatRoom.recent_message}}
                            </p>
                          </div>
                          <div v-else style="width: 100%;">
                            <p class="dmListText">
                              {{chatRoom.recent_message.substr(0, 15) + "..."}}
                            </p>
                          </div>
                      </div>
                      <div class="dmListCheck">
                        <p v-if="chatRoom.user1 == this.$store.state.loginUserDTO.user_no & chatRoom.user1_yn == 'Y'"><span class="badge bg-primary">N</span></p>
                        <p v-else-if="chatRoom.user2 == this.$store.state.loginUserDTO.user_no & chatRoom.user2_yn == 'Y'"><span class="badge bg-primary">N</span></p>
                      </div>
                    </a>
                    <div class="clear"></div>
                </li>
              </div>
            </ul>
        </div>

        <!--실질적 대화 창 부분-->
        <div class="col-sm-6" id="DMWindow">
            <!--조건에 따라 다르게 보여줌 -->
            <!--시작한 대화가 없을 때-->
            <div id="noChatDiv" v-if="!open">
                <p>친구에게 메세지를 보내보세요.</p>
            </div>
            <!--대화 메세지 부분 -->
            <div v-else style="height: 100%;">
            <!--대화중인 사람의 정보 -->
              <div id="dmInfo">
                  <a href="#" @click="openUserProfile(this.nowChatUserNO)"><img v-bind:src="this.nowChatUserProfile" class="dmWindowImg"/></a>
                  <p class="dmWindowNick">{{this.nowChatUserNick}}</p>
                  <button @click="deleteChatRoom" type="button" class="btn btn-success">나가기</button>
              </div>
              <ul id="yesChatUl">
                <div v-for="(message, i) in messageList" :key="i">
                  <!-- 로그인한 사람의 텍스트일 때-->
                    <li v-if="message.user_no == this.$store.state.loginUserDTO.user_no">
                        <div class="dmFrom">
                          <p>{{message.message_content}}</p>
                        </div>
                        <div class="clear"></div>
                        <p class="dmFromDate">{{message.message_sendtime}}</p>
                        <div class="clear"></div>
                    </li>
                  <!-- 로그인한 사람의 텍스트가 아닐 때 -->
                    <li v-else>
                        <div class="dmTo">
                          <p>{{message.message_content}}</p>
                        </div>
                        <div class="clear"></div>
                        <p class="dmToDate">{{message.message_sendtime}}</p>
                        <div class="clear"></div>
                    </li>
                </div>
              </ul>

              <!--메세지 입력 부분-->
              <div id="DMTextInputDiv">
                <textarea
                    v-model="message"
                    v-on:keydown.enter="sendMessage"
                    type="text"
                    id="chat_content"
                    rows="10"
                    placeholder="메세지 입력..."
                    maxlength="400"
                ></textarea>
                <button type="button" @click="sendMessage">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                  </svg>
                </button>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default ({
  props: {
    chatRoomList: {
      type: Array, default: null
    }
  },
  data () {
    return {
      newChatList: [],
      keyword: '', // 유저 검색 키워드
      userList: [], // 유저 검색 결과 리스트
      open: false, // 오른쪽 대화창 오픈 유무
      nowChatRoom: 0, // 현재 채팅방 번호
      nowChatUserNO: 0, // 현재 채팅방 상대 번호
      nowChatUserProfile: '', // 현재 채팅방 상대 프로필
      nowChatUserNick: '', // 현재 채팅방 상대 닉네임
      messageList: [], // 메세지 리스트
      message: '', // 보낼 메세지
      state: 0
    }
  },
  computed: {
    addChatRoom (chatRoom) {
      // eslint-disable-next-line vue/no-mutating-props, vue/no-side-effects-in-computed-properties
      return this.chatRoomList.push(chatRoom)
    }
  },
  methods: {
    openSearchList () {
      if (this.keyword !== '') {
        // 키워드가 이미 존재하면 창을 보여준다.
        document.getElementById('DMSearchUl').style.visibility = 'visible'
      }
    },
    searchUser () {
      // 입력한 키워드가 있으면 리스트 창을 보여주고 아니면 숨긴다
      if (this.keyword !== '') {
        document.getElementById('DMSearchUl').style.visibility = 'visible'
      } else {
        document.getElementById('DMSearchUl').style.visibility = 'hidden'
      }
      // 검색한 키워드로 유저를 찾아서 뿌려준다.
      axios
        .post(this.$serverUrl + '/mj/searchUser', {
          keyword: this.keyword,
          user_no: this.$store.state.loginUserDTO.user_no
        })
        .then(res => {
          if (res.data !== '') {
            this.userList = res.data
          }
        })
    },
    getChatRoom (userNo) {
      // alert("누름 " + userNo)
      // 누른 유저 번호와 로그인한 유저 아이디를 이용해 채팅방 유무를 확인한다.
      axios
        .post(this.$serverUrl + '/mj/getChatRoom', {
          user1: userNo,
          user2: this.$store.state.loginUserDTO.user_no
        })
        .then(res => {
          let count = 0
          for (let i = 0; i < this.chatRoomList.length; i++) {
            if (this.chatRoomList[i].chatroom_no === res.data.chatroom_no) {
              count++
              console.log('중복되는 채팅방 있음 ')
            }
          }

          // 처음 가져왔던 채팅방 리스트에 해당 채팅방정보가 없으면 추가해준다.
          // eslint-disable-next-line eqeqeq
          if (count == 0) {
          // 새롭게 추가된 채팅 리스트에 추가해준 후,
            // eslint-disable-next-line vue/no-mutating-props
            this.chatRoomList.unshift(res.data)
            console.log('채팅방 없음/ 추가함 ')
            console.log(this.newChatList)
            // 해당 채팅방을 열어준다.
            this.open = true
            this.nowChatRoom = res.data.chatroom_no
          } else {
          // 있으면 해당 채팅방을 열어준다.
            this.open = true
            this.nowChatRoom = res.data.chatroom_no
          }

          // 연 채팅방의 상대방 정보를 세팅한다.
          this.nowChatUserNick = res.data.user_nick
          this.nowChatUserProfile = res.data.profile_image
          document.getElementById('DMSearchUl').style.visibility = 'hidden'
          this.openChatRoom(this.nowChatRoom)
        })
    },
    openChatRoom (chatroomNo) {
      // 오른쪽 채팅방을 보여주고
      this.open = true
      this.nowChatRoom = chatroomNo

      // 기존의 채팅방
      for (let i = 0; i < this.chatRoomList.length; i++) {
        if (this.chatRoomList[i].chatroom_no === chatroomNo) {
          // 클릭한 채팅방 번호로 해당 채팅방 정보를 찾고

          // 현재 채팅방 상대 번호를 세팅한다.
          if (this.chatRoomList[i].user1 === this.$store.state.loginUserDTO.user_no) {
            this.nowChatUserNO = this.chatRoomList[i].user2
          } else {
            this.nowChatUserNO = this.chatRoomList[i].user1
          }

          if (this.chatRoomList[i].user1 === 0 || this.chatRoomList[i].user2 === 0) {
            // 상대방이 나간 채팅방이라면 상대방 정보를 다르게 세팅한다.
            this.nowChatUserNick = '알 수 없음'
            this.nowChatUserProfile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2I0cfUaQK7bSG8L8q4cImt2i0qhd6XwNdeg&usqp=CAU'
          } else {
            // 상대방이 있다면 상대방의 정보를 세팅한다.
            this.nowChatUserNick = this.chatRoomList[i].user_nick
            this.nowChatUserProfile = this.chatRoomList[i].profile_image
          }

          // 새로운 메세지 유무 상태를 업데이트 한다.
          // eslint-disable-next-line eqeqeq
          if (this.chatRoomList[i].user1 == this.$store.state.loginUserDTO.user_no) {
            // eslint-disable-next-line vue/no-mutating-props
            this.chatRoomList[i].user1_yn = 'N'
          } else {
            // eslint-disable-next-line vue/no-mutating-props
            this.chatRoomList[i].user2_yn = 'N'
          }
        }
      }
      // 해당 채팅방의 메세지 리스트를 불러와서 뿌려준다.
      axios
        .post(this.$serverUrl + '/mj/getMessageList', {
          chatroom_no: chatroomNo,
          user_no: this.$store.state.loginUserDTO.user_no
        })
        .then(res => {
          this.messageList = res.data
        })
      // 스크롤 위치를 아래로 내린다.
      window.setTimeout(this.scrollDown, 200)

      // 메세지 입력창에 포커스를 준다.
      document.getElementById('chat_content').focus()
    },
    openUserProfile (otherUser) {
      this.$axios.post(this.$serverUrl + '/otherProfile', {
        user_no: otherUser
      }).then((res) => {
        this.$store.commit('addOtherUser', res.data)
        console.log(this.$store.state.otherUserDTO)
        location.href = `/main/notmypage/${this.$store.state.otherUserDTO.user_nick}`
      })
    },
    sendMessage () {
      // 텍스트 입력창에 입력한 값이 있을 때
      if (this.message !== '') {
        // 현재 날짜와 시간을 구한다.
        const myDate = new Date()
        const yy = String(myDate.getFullYear())
        const mm = myDate.getMonth() + 1
        const dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
        const hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
        const min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
        const sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
        const nowDate = yy + '-' + mm + '-' + dd
        const nowTime = hou + ':' + min + ':' + sec
        const messageDate = nowDate + ' ' + nowTime
        // 메세지DTO를 만든다
        const messageDTO = {
          chatroom_no: this.nowChatRoom,
          user_no: this.$store.state.loginUserDTO.user_no,
          message_content: this.message,
          message_sendtime: messageDate
        }
        // 현재 채팅방에 뿌려주고
        this.messageList.push(messageDTO)
        // 스크롤 위치를 아래로 내린다.
        window.setTimeout(this.scrollDown, 50)
        // 최근 대화 부분을 해당 메세지로 바꿔준다.
        for (let i = 0; i < this.chatRoomList.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (this.chatRoomList[i].chatroom_no == this.nowChatRoom) {
            // eslint-disable-next-line vue/no-mutating-props
            this.chatRoomList[i].recent_message = this.message
          }
        }
        // 해당 채팅방을 제일 앞으로 배치한다.
        this.changeArray(this.chatRoomList)
        console.log(this.chatRoomList)

        // db에 저장한다.
        axios
          .post(this.$serverUrl + '/mj/addMessage', {
            chatroom_no: this.nowChatRoom,
            user_no: this.$store.state.loginUserDTO.user_no,
            message_content: this.message
          })
          .then(res => {
            console.log(res.data)
          })

        // 메세지를 지워준다.
        this.message = ''
      }
    },
    deleteChatRoom () {
      if (confirm('현재 채팅방을 나가시겠습니까? 보낸 메세지는 모두 삭제됩니다.')) {
        // 채팅방 리스트에서 해당 채팅방번호를 찾아서 삭제한다.
        for (let i = 0; i < this.chatRoomList.length; i++) {
          if (this.chatRoomList[i].chatroom_no === this.nowChatRoom) {
            // eslint-disable-next-line vue/no-mutating-props
            this.chatRoomList.splice(i, 1)
            this.open = false
          }
        }
        axios
          .post(this.$serverUrl + '/mj/deleteChatRoom', {
            chatroom_no: this.nowChatRoom,
            user1: this.$store.state.loginUserDTO.user_no
          })
          .then(res => {
            if (res.data === 1) {
              console.log('db에서 삭제 완료')
            }
          })
      }
    },
    scrollDown () {
      // 메세지 리스트 ul의 스크롤을 내린다.
      const messageUl = document.getElementById('yesChatUl')
      messageUl.scrollTop = messageUl.scrollHeight
    },
    changeArray (arr) {
      // 채팅방 리스트 중 현재 채팅방을 제일 앞으로 가져온다.
      return arr.filter((x) => x.chatroom_no === this.nowChatRoom).concat(
        arr.filter((x) => x.chatroom_no !== this.nowChatRoom)
      )
    }
  }
})
</script>

<style scoped>
/* dm css 대화방 리스트 부분 */
#DMListDiv {
  border-right: 1px solid #ccc;
  padding: 10px 20px;
  height: 100%;
}
#DMSearch {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}
#DMSearch input {
  background-color: #fff;
  display: inline-block;
  width: 90%;
  border: none;
  padding: 5px;
  color: #000;
}
#DMSearch input:focus {
  outline: none;
}
#DMSearch button {
  background-color: #FFF;
  border: none;
  color: #000;
}
#DMSearchUl {
  position: relative;
  visibility: hidden;
  z-index: 2 !important;
  background-color: #FFF;
  border-radius: 0;
  overflow-y: scroll;
  height: 100px;
  box-shadow: inset 1px 1px rgba(255,255,255,.2), -1px -1px rgba(255,255,255,.1), 1px 8px 10px -1px rgba(0,0,0,.15);
}
#DMSearchUl::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#DMSearchUl::-webkit-scrollbar {
  width: 0px;
  background-color: #f5f5f5;
}
#DMSearchUl a {
  padding: 5px 32px;
  height: 65px;
}
#DMSearchUl a > img {
  display: inline-block;
  border-radius: 50%;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  width: 50px;
  height: 50px;
}
#DMSearchUl a > p {
  display: inline-block;
  color: #000 !important;
  margin: 20px 0 0 20px;
}
#DMListUl {
  position: relative;
  top: -80px;
  list-style: none;
  margin-top: 10px;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  padding: 0;
  z-index: 1 !important;
}
#DMListUl::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#DMListUl::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
#DMListUl a {
  display: block;
  height: 70px;
}
.dmListImg {
  display: inline-block;
  border-radius: 50%;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  width: 60px;
  height: 60px;
}
.dmListContent {
    display: inline-block;
    text-align: left;
    width: 65%;
    padding: 10px;
}
.dmListText {
    margin: 0;
    color: #454445;
    font-size: 13px;
    width: 100%;
}
.dmListNick {
    margin: 0px;
    color: #000 !important;
    font-weight: 600;
}
.dmListCheck {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}
#DMListUl a:hover {
  background-color: #ccc;
}
#directMessage > .modal-footer {
  border-top: 1px solid #ccc;
}
.clear {
  clear: both;
}
/* 시작한 대화가 없을 때 */
#noChatDiv {
  margin-top: 60%;
  text-align: center;
}
#noChatDiv > button {
  padding: 5px 20px;
}
/* 대화창 부분 */
#DMWindow {
  padding:0px;
  height: 100%;
}
#dmInfo {
    display: inline-block;
    height: auto;
    width: 100%;
    text-align: left;
    margin-bottom: 5px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #CCC;
}
#dmInfo img {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 50%;
}
#dmInfo p {
    display: inline-block;
    margin: 20px;
}
#dmInfo button {
  padding: 5px 10px;
  font-size: 12px;
  float: right;
  margin-right: 20px;
  margin-top: 20px;
}
#yesChatUl {
  list-style: none;
  overflow-y: scroll;
  height: 80%;
  padding-left: 30px;
  margin-bottom: 0px;
}
#yesChatUl::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#yesChatUl::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
#yesChatUl > li {
  width: 100%;
}
.dmTo {
  text-align: left;
  float: left;
  background-color: #ccc;
  color: #000;
  position: relative;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 3px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  width: auto;
  height: auto;
  max-width: 60%;
}
.dmTo:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 5px 31px 11px 0;
  border-color: transparent #ccc;
  display: block;
  width: 0;
  z-index: 1;
  left: -20px;
  bottom: 5px;
}
.dmTo > p {
  margin: 0;
  word-wrap: break-word;
}
.dmToDate {
  float: left;
  font-size: 10px;
  color: #454445;
  margin-bottom: 5px
}
.dmFrom {
  text-align: left;
  margin: 10px 30px 3px 0px;
  position: relative;
  max-width: 60%;
  padding: 10px;
  background: #ed63a0;
  color: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 60%;
  float: right;
}
.dmFrom:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 5px 0 11px 31px;
  border-color: transparent #ed63a0;
  display: block;
  width: 0;
  z-index: 1;
  right: -20px;
  bottom: 5px;
}
.dmFrom > p {
  margin: 0;
  overflow: inherit;
  word-wrap: break-word;
}
.dmFromDate {
  float: right;
  font-size: 10px;
  margin-right: 30px;
  margin-bottom: 5px;
  color: #454445;
}
#DMTextInputDiv {
  display: inline-block;
  border: 1px solid #ccc;
  width: 95%;
  height: auto;
  padding: 5px 5px 2px 8px;
  margin: 10px;
}
#DMTextInputDiv button {
  display: inline-block;
  background-color: #FFF;
  border: none;
}
#DMTextInputDiv svg {
    transform: rotate(45deg);
    margin-top: -20px;
    margin-left: 8px;
    color: #000;
}
#chat_content {
    width: 85%;
    height: 30px;
    background-color: #fff;
    border: none;
    color:#000;
    overflow-y: scroll;
    margin-right: 5px;
}
#chat_content:focus {
    outline: none;
}
#chat_content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#chat_content::-webkit-scrollbar {
  width: 0px;
  background-color: #f5f5f5;
}
</style>
