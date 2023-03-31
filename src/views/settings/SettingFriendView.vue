<template>
    <div class="container">
        <form class="card bg-primary border-round-radious">
            <div class="settingSecurity list-group border-round-radious">
                <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2"><a href="/main/setting"><font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" /></a>친구</h3>
                </div>
                <div class="tabItems">
                    <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#following" aria-selected="false" role="tab" tabindex="-1">팔로잉</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#follow" aria-selected="true" role="tab">팔로우</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#block" aria-selected="true" role="tab">차단</a>
                    </li>

                    </ul>
                    <div id="myTabContent" class="tab-content px-3">
                        <div class="tab-pane fade active show" id="following" role="tabpanel">
                            <p>내가 팔로우 하는 목록</p>
                        </div>
                        <div class="tab-pane fade" id="follow" role="tabpanel">
                            <p>나를 팔로우 하는 목록</p>
                        </div>
                        <div class="tab-pane fade" id="block" role="tabpanel">
                            <p>내가 차단한 목록</p>
                        </div>
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
  // eslint-disable-next-line vue/no-unused-components
  components: { MenuBar, SideBar }

}
</script>
<style>
.nav-tabs{
    width:100%;
    display: flex;
    justify-content: center;
}
.nav-item{
    width: 30%;
    text-align: center;
}
</style>
