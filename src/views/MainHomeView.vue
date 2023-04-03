<template>
    <div></div>
    <div class="container-fluid bd-layout">
        <!-- <div class="row">
            <div class="col-sm-3">
                <MenuBar></MenuBar>
            </div>
            <div class="col-sm-9">

                <div class="row">
                    <div class="col-8 col-sm-8">
                        <div>
                            <router-view name="rmain"></router-view>
                        </div>

                    </div>

                    <div  id="side_bar"  class="col-4 col-sm-4" >
                        <SideBar></SideBar>
                    </div>
                </div>
            </div>

        </div> -->
        <div class="row">
            <div class="col-3">
                <MenuBar></MenuBar>
            </div>
            <div id="main_contents" class="col-6">
                <!-- 메인로고 들어갈 부분 100픽셀 높이를 오렌지 색 바탕으로 표시만 해놓음 이걸 로고로 수정하면 될듯 -->
                <div class="sticky-top" style="height: 100px; background-color: darkorange;">

                </div>
                <div>
                    <router-view name="rmain"></router-view>
                </div>

            </div>
            <div  id="side_bar"  class="col-3" >
                <SideBar></SideBar>
            </div>

        </div>

    </div>

</template>
<script>
import MenuBar from '../components/components-MenuBarComp-left.vue'
import SideBar from '../components/rightsidebars/SideBarComp.vue'

export default {

  components: { MenuBar, SideBar }

}
</script>
<style scoped>
    @media screen and (max-width: 1320px) {
        #side_bar {
            display: none;

            padding: 0;
            margin: 0;
        }
    }
    #main_contents {
        min-width: 620px;
    }

</style>
