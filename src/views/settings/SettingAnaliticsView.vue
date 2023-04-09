<template>
    <div class="container">
        <form class="card bg-primary border-round-radious">
            <div class="settingAnalitics list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" /></a>애널리틱스</h3>
                </div>
                <div class="analitics__accountWrap px-4 ">
                    <h5>계정 인사이트</h5>
                    <div class="analitics__account mb-2">
                        <div class="card analitics__card border-secondary mb-3">
                            <div class="card-header">프로필 방문</div>
                            <div class="card-body">
                                <h4 class="card-title">{visit_count}</h4>
                            </div>
                        </div>
                        <div class="card analitics__card border-secondary mb-3">
                            <div class="card-header">포스팅 수</div>
                            <div class="card-body">
                                <h4 class="card-title">{post_count}</h4>
                            </div>
                        </div>
                        <div class="card analitics__card border-secondary mb-3">
                            <div class="card-header">팔로워 수</div>
                            <div class="card-body">
                                <h4 class="card-title">{follower_count}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="setting__bar mb-2">
                <div class="analitics__postWrap px-4 ">
                    <h5>게시물 인사이트</h5>
                    <div class="analitics__post mb-2">
                        <div class="card analitics__card border-secondary mb-3">
                            <div class="card-header">조회수</div>
                            <div class="card-body">
                                <h4 class="card-title">{view_count}</h4>
                            </div>
                        </div>
                        <div class="card analitics__card border-secondary mb-3">
                            <div class="card-header">좋아요 수</div>
                            <div class="card-body">
                                <h4 class="card-title">{like_count}</h4>
                            </div>
                        </div>
                        <div class="card analitics__card border-secondary mb-3">
                            <div class="card-header">공유 수</div>
                            <div class="card-body">
                                <h4 class="card-title">{share_count}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
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
.analitics__account{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.analitics__post{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.analitics__card{
    width: 30%;
}
.card-header{
    text-align: center;
}
</style>
