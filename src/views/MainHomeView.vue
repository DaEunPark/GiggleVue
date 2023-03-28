<template>
    <div></div>
    <div class="container bd-layout">
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
            <div id=MenuBar class="col-3">
                <MenuBar></MenuBar>
            </div>
            <div id="main_contents" class="col-6">
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
        #side_bar, #MenuBar {
            display: none;

            padding: 0;
            margin: 0;
        }
    }
    #main_contents {
        min-width: 620px;
    }

</style>
