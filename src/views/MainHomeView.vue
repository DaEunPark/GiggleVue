<template>
    <div class="container bd-layout">
        <div class="row">
            <div class="col-3">
                <MenuBar></MenuBar>
            </div>

            <div class="col-6">
                <!-- <MainContents></MainContents> -->
                <!--  -->
                <router-view name="rmain"></router-view>
            </div>

            <div class="col-3">
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
