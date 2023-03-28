<template>
    <div class="modal-body row">
        <!--대화 목록 부분-->
        <div class="col-sm-6" id="DMList">
            <!-- 대화 상대 검색 부분 -->
            <div id="DMSearch">
            <input type="text" id="userKeyword" placeholder="사용자 검색" />
            </div>
            <!--대화 상대 목록-->
            <ul>
            <li>
                <a>
                <img
                    src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
                    class="dmListImg"
                />
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
            <input
                type="text"
                id="chat_content"
                placeholder="메세지 입력..."
            />
            </div>
        </div>
    </div>
</template>
<style scoped>
/* dm css 대화방 리스트 부분 */
#DMList {
  border-right: 1px solid #ccc;
  padding: 10px 30px;
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
  width: 100%;
  border: none;
  padding: 5px;
  color: #000;
}
#DMSearch input:focus {
  outline: none;
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
  padding: 10px 30px;
  height: 100%;
}
#DMWindow ul {
  list-style: none;
  overflow-y: scroll;
  height: 85%;
  padding-left: 20px;
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
  background: #e83283;
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
  border-color: transparent #e83283;
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
  width: 100%;
  padding: 5px;
}
#DMTextInputDiv input {
  width: 80%;
}
#chat_content {
  background-color: #fff;
  border: none;
}
</style>
