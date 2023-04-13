<template>
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
            <div class="editWrap"  v-show="showEditorBtn">
                <EditButton class="edit_btn"></EditButton>
            </div>
            <div class="col-3">
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
import EditButton from '../components/EditorButton.vue'
export default {
  data () {
    return {
      thisURL: window.location.href
    }
  },
  components: { MenuBar, SideBar, EditButton },
  computed: {
    showEditorBtn () {
      return !this.thisURL.includes('modify')
    }
  },
  watch: {
    $route (to, from) {
      this.thisURL = window.location.href
    }
  }

}
</script>
<style scoped>
    @media screen and (max-width: 1320px) {
        #side_bar {
            display: none;

            padding: 0;
            margin: 0;
            z-index : -1;
        }
    }
    #main_contents {
        min-width: 620px;
    }
    #side_bar{
        padding : 0;
    }

</style>
