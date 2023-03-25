<template>
    <div></div>
    <div class="container bd-layout">
        <div class="row">
            <div class="col-sm-3">
                <MenuBar></MenuBar>
            </div>

            <div class="col-sm-9">
                <!-- <MainContents></MainContents> -->
                <!--  -->
                <div class="row">
                    <div class="col-8 col-sm-8">
                        <div>
                            <router-view name="rmain"></router-view>
                        </div>

                    </div>

                    <div class="col-4 col-sm-4" >
                        <SideBar></SideBar>
                    </div>
                </div>
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
