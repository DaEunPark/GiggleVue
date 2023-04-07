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
                      <img class="dmListImg" name="profile" id="profile" v-bind:src="chatRoom.profile_image">
                      <div>
                          <p class="dmListNick">{{chatRoom.user_nick}}</p>
                          <div v-if="chatRoom.recent_message.length < 16">
                            <p class="dmListText">
                              {{chatRoom.recent_message}}
                            </p>
                          </div>
                          <div v-else>
                            <p class="dmListText">
                              {{chatRoom.recent_message.substr(0, 15)}}...
                            </p>
                          </div>
                      </div>
                    </a>
                </li>
              </div>
              <!-- 새로 추가된 채팅방리스트가 보여질 부분 -->
              <div v-for="(chatRoom, i) in newChatList" :key="i">
                <li>
                    <a @click="openChatRoom(chatRoom.chatroom_no)">
                      <img class="dmListImg" name="profile" id="profile" v-bind:src="chatRoom.profile_image">
                      <div>
                          <p class="dmListNick">{{chatRoom.user_nick}}</p>
                          <div v-if="chatRoom.recent_message != null & chatRoom.recent_message.length < 16">
                            <p class="dmListText">
                              {{chatRoom.recent_message}}
                            </p>
                          </div>
                          <div v-else>
                            <p class="dmListText">
                              {{chatRoom.recent_message.substr(0, 15)}}...
                            </p>
                          </div>
                      </div>
                    </a>
                </li>
              </div>
            </ul>
        </div>

        <!--실질적 대화 창 부분-->
        <div class="col-sm-6" id="DMWindow">
            <!--조건에 따라 다르게 보여줌 -->
            <!--시작한 대화가 없을 때-->
            <div id="noChatDiv" v-if="!open">
                <p>친구에게 사진과 메세지를 보내보세요.</p>
                <button type="button" class="btn btn-primary">send</button>
            </div>
            <!--대화 메세지 부분 -->
            <div v-else style="height: 100%;">
            <!--대화중인 사람의 정보 -->
              <div id="dmInfo">
                  <img v-bind:src="this.nowChatUserProfile" class="dmWindowImg"/>
                  <p class="dmWindowNick">{{this.nowChatUserNick}}</p>
              </div>
              <ul id="yesChatUl">
                <div v-for="(message, i) in messageList" :key="i">
                  <!-- 로그인한 사람의 텍스트일 때-->
                  <div v-if="message.user_no == this.$store.state.loginUserDTO.user_no">
                    <li>
                        <div class="dmFrom">
                          <p>{{message.message_content}}</p>
                        </div>
                        <div class="clear"></div>
                    </li>
                  </div>
                  <!-- 로그인한 사람의 텍스트가 아닐 때 -->
                  <div v-else>
                    <li>
                        <div class="dmTo">
                          <p>{{message.message_content}}</p>
                        </div>
                        <div class="clear"></div>
                    </li>
                  </div>
                </div>
              </ul>

              <!--메세지 입력 부분-->
              <div id="DMTextInputDiv" v-if="true">
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
export default({
  props: {
    chatRoomList: {
      type: Array, default: null
    }
  },
  data() {
    return {
      newChatList: [],
      keyword: '',      //유저 검색 키워드
      userList: [],     //유저 검색 결과 리스트
      open: false,      //오른쪽 대화창 오픈 유무
      nowChatRoom: 0,   //현재 채팅방 번호
      nowChatUserProfile: '',  //현재 채팅방 상대 프로필
      nowChatUserNick: '',     //현재 채팅방 상대 닉네임
      messageList: [],  //메세지 리스트
      message: '',       //보낼 메세지
      state: 0,
    }
  },
  computed: {
    addChatRoom(chatRoom) {
      return this.chatRoomList.push(chatRoom)
    }
  },
  methods: {
    openSearchList() {
      //검색 결과 창을 보여준다.
      document.getElementById("DMSearchUl").style.visibility = "visible"
    },
    hideSearchList() {
      //마우스가 유저 검색 리스트에 있을때는 창을 보여준다.
      var userList = document.getElementById("DMSearchUl")
      var ishover = false

      userList.onmouseover = function() {
        ishover = true
        //alert("mouseover " + ishover)
      }
      userList.onmouseout = function() {
        ishover = false
        //alert("mouseout " + ishover)
      }

      if(ishover) {
        document.getElementById("DMSearchUl").style.visibility = "visible"
      } else {
        document.getElementById("DMSearchUl").style.visibility = "hidden"
      }
      //document.getElementById("DMSearchUl").style.visibility = "hidden"
    },
    searchUser() {
      //검색한 키워드로 유저를 찾아서 뿌려준다.
      axios
      .get(this.$serverUrl + "/mj/searchUser/" + this.keyword)
      .then(res =>{
        if(res.data !== "") {
          this.userList = res.data
        }
      })
    },
    getChatRoom(userNo) {
      //alert("누름 " + userNo)
      //누른 유저 번호와 로그인한 유저 아이디를 이용해 채팅방 유무를 확인한다.
      axios
      .post(this.$serverUrl + "/mj/getChatRoom" ,{
        user1: userNo,
        user2: this.$store.state.loginUserDTO.user_no 
      })
      .then(res => {
        var count = 0;
        for(var i = 0; i < this.chatRoomList.length; i++) {
          if(this.chatRoomList[i].chatroom_no === res.data.chatroom_no){
            count++;
            console.log("중복되는 채팅방 있음 ")
          }
        }
        
        //처음 가져왔던 채팅방 리스트에 해당 채팅방정보가 없으면 추가해준다.
        if(count == 0) {
          //새롭게 추가된 채팅 리스트에 추가해준 후,
          this.newChatList.push(res.data)
          console.log("채팅방 없음/ 추가함 ")
          console.log(this.newChatList)
          //해당 채팅방을 열어준다.
          this.open = true
          this.nowChatRoom = res.data.chatroom_no
        } else {
          //있으면 해당 채팅방을 열어준다.
          this.open = true
          this.nowChatRoom = res.data.chatroom_no
        }
        
        //연 채팅방의 상대방 정보를 세팅한다.
        this.nowChatUserNick = res.data.user_nick
        this.nowChatUserProfile = res.data.profile_image
        document.getElementById("DMSearchUl").style.visibility = "hidden"
        this.openChatRoom(this.nowChatRoom)
      })
    },
    openChatRoom(chatroomNo) {
      //오른쪽 채팅방을 보여주고
      this.open = true
      this.nowChatRoom = chatroomNo

      for(var i = 0; i < this.chatRoomList.length; i++) {
        //채팅방 리스트에서 채팅방 번호에 해당하는 데이터 중 상대방 닉네임, 프로필 사진을 뽑아낸다.
        if(this.chatRoomList[i].chatroom_no === chatroomNo) {
          this.nowChatUserNick = this.chatRoomList[i].user_nick
          this.nowChatUserProfile = this.chatRoomList[i].profile_image
        }
      }

      //채팅방의 대화 목록을 가져온다.
      axios
      .get(this.$serverUrl + "/mj/getMessageList/" + chatroomNo)
      .then(res => {
        this.messageList = res.data;
      })
    },
    sendMessage() {
      //텍스트 입력창에 입력한 값이 있을 때
      if(this.message !== '') {
        var messageDTO = {
          chatroom_no : this.nowChatRoom,
          user_no: this.$store.state.loginUserDTO.user_no,
          message_content: this.message
        }
        //현재 채팅방에 뿌려주고
        this.messageList.push(messageDTO)
        //db에 저장한다.
        axios
        .post(this.$serverUrl + "/mj/addMessage", {
          chatroom_no : this.nowChatRoom,
          user_no: this.$store.state.loginUserDTO.user_no,
          message_content: this.message
        })
        .then(res => {
          console.log(res.data)
        })
        //메세지를 지워준다.
        this.message = ""
      }
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
}
#DMListUl a div {
    display: inline-block;
    text-align: left;
    width: 75%;
    padding: 10px;
}
.dmListText {
    margin: 0;
    color: #454445;
    font-size: 13px;
}
.dmListNick {
    margin: 0px;
    color: #000 !important;
    font-weight: 600;
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
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 50%;
}
#dmInfo p {
    display: inline-block;
    margin: 20px;
}
#yesChatUl {
  list-style: none;
  overflow-y: scroll;
  height: 70%;
  padding-left: 30px;
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
  background-color: #ccc;
  color: #000;
  position: relative;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 60%;
  float: left;
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
  display: inline-block;
}
.dmFrom {
  text-align: left;
  margin: 10px 30px 10px 0px;
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
