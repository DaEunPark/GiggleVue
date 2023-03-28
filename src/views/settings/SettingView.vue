<template>
    <div class="container">
        <div class="settingWrap list-group bg-light border-round-radious">
            <div class="card">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2">설정</h3>
                </div>
                <hr class="setting__bar mb-2">
                <div class="setting__list mb-2">
                    <a href="/main/setting/profile" class="list-group-item list-group-item-action text-dark setting__list">프로필</a>
                    <a href="/main/setting/security" class="list-group-item list-group-item-action text-dark setting__list">보안</a>
                    <a href="/main/setting/friend" class="list-group-item list-group-item-action text-dark setting__list">친구</a>
                    <a href="/main/setting/analitics" class="list-group-item list-group-item-action text-dark setting__list">애널리틱스</a>
                </div>
            </div>
        </div> <!--settingWrap End-->
    </div>
</template>
<script>
// import MenuBar from '../../components/components-MenuBarComp-left.vue'
// import SideBar from '../../components/rightsidebars/SideBarComp.vue'

// export default {
//   components: { MenuBar, SideBar }
// }
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
.setting__list{
    font-size : large;
}
</style>
