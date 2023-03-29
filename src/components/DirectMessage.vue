<template>
    <div class="modal-body row">
        <!--대화 목록 부분-->
        <div class="col-sm-6" id="DMList">
            <!-- 대화 상대 검색 부분 -->
            <div id="DMSearch">
              <input type="text" id="userKeyword" placeholder="사용자 검색" />
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
            <!--대화 상대 목록-->
            <ul>
            <li>
                <a>
                <img src="../assets/profile02.jpg" class="dmListImg"/>
                <div>
                    <p class="dmListNick">닉네임</p>
                    <p class="dmListText">최근대화를 길이에 따라 잘라...</p>
                </div>
                </a>
            </li>
            </ul>
        </div>

        <!--실질적 대화 창 부분-->
        <div class="col-sm-6" id="DMWindow">
            <!--조건에 따라 다르게 보여줌 -->
            <!--시작한 대화가 없을 때-->
            <div id="noChatDiv" v-if="false">
                <p>친구에게 사진과 메세지를 보내보세요.</p>
                <button type="button" class="btn btn-primary">send</button>
            </div>
            <!--대화 메세지 부분 -->
            <!--대화중인 사람의 정보 -->
            <div v-if="true" id="dmInfo">
                <img src="../assets/profile02.jpg" class="dmWindowImg"/>
                <p class="dmWindowNick">닉네임</p>
            </div>
            <ul v-if="true">
                <!-- 로그인한 사람의 텍스트가 아닐 때 -->
                <li>
                    <div class="dmTo">
                    <p>안녕하세요!</p>
                    </div>
                    <div class="clear"></div>
                </li>
                <!-- 로그인한 사람의 텍스트일 때-->
                <li>
                    <div class="dmFrom">
                    <p>안녕하세요.</p>
                    </div>
                    <div class="clear"></div>
                </li>
            </ul>

            <!--메세지 입력 부분-->
            <div id="DMTextInputDiv" v-if="true">
            <textarea
                type="text"
                id="chat_content"
                rows="10"
                placeholder="메세지 입력..."
                maxlength="400"
            ></textarea>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
              </svg>
            </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* dm css 대화방 리스트 부분 */
#DMList {
  border-right: 1px solid #ccc;
  padding: 10px 20px;
  height: 100%;
}
#DMSearch {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
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
#DMList ul {
  list-style: none;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  padding: 0;
}
#DMList ul::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#DMList ul::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
#DMList ul a {
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
#DMList ul a div {
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
#DMList ul a:hover {
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
    width: 60px;
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 50%;
}
#dmInfo p {
    display: inline-block;
    margin: 20px;
}
#DMWindow ul {
  list-style: none;
  overflow-y: scroll;
  height: 70%;
  padding-left: 30px;
}
#DMWindow ul::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#DMWindow ul::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
#DMWindow ul > li {
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
