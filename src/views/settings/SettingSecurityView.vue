<template>
    <div class="container">
        <form class="card bg-primary border-round-radious">
            <div class="settingSecurity list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" /></a>보안</h3>
                </div>
                <div class="security__password px-4 mb-2">
                    <h5>비밀번호 변경</h5>
                    <div class="security__newPassword">
                        <label for="newPassword" class="col-form-label col-form-label-sm security__newPassword">비밀번호</label>
                        <input type="text" class="form-control form-control-sm security__newPassword" id="security__newPassword" placeholder="변경할 비밀번호를 입력해주세요.">
                    </div>
                    <div class="security__newPasswordAgain">
                        <label for="newPasswordAgain" class="col-form-label col-form-label-sm  security__newPasswordAgain mt-2">비밀번호 재입력</label>
                        <input type="text" class="form-control form-control-sm security__newPasswordAgain" id="security__newPasswordAgain" placeholder="변경할 비밀번호를 다시 한 번 입력해주세요.">
                    </div>
                    <div class="security__passwordBtn">
                        <button type="button" class="btn btn-success btn-rg security__passwordBtn mt-2">OK</button>
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="security__account px-4 mb-2">
                    <h5>계정 공개 설정</h5>
                    <div class="security__accountOpen">
                        <input class="form-check-input mr-1" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label col-form-label-sm mx-1" for="flexCheckDefault">
                        내 계정을 친구들에게만 공개합니다.
                        </label>
                    </div>
                    <div class="security__accountBtn">
                        <button type="button" class="btn btn-success btn-rg security__accountBtn mt-2">OK</button>
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="security__withdrawal px-4 mb-2">
                    <h5>회원 탈퇴</h5>
                    <div class="security__withdrawalBtn">
                        <button type="button" class="btn btn-secondary btn-rg security__withdrawalBtn mt-2">탈퇴하기</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import MenuBar from '../../components/components-MenuBarComp-left.vue'
import SideBar from '../../components/rightsidebars/SideBarComp.vue'

export default {
  components: { MenuBar, SideBar }
}
</script>

<style scoped>
.container {
    height : 100vh;
    margin : 0;
}
.setting__bar{
width:550px;
margin : 0 auto;
color : gray;
}
.security__passwordBtn, .security__accountBtn, .security__withdrawalBtn{
    display: flex;
    justify-content: right;
}
</style>
