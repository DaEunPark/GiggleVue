<template>
    <div class="container">
        <div class="settingWrap">
            <!-- <div class="list-group"> -->
                <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
                  <h3 class ="list-group-item text-dark border-primary my-2">
                    <font-awesome-icon class="mx-2" style="color:black;" :icon="['fas', 'caret-left']" /> Setting
                  </h3>
                </button>
                <!-- <div class="setting__title align-items-center">
                    <h3 class ="list-group-item text-dark border-primary my-2">설정</h3>
                </div> -->
                <hr class="setting__bar mb-2">
                <div class="setting__contentWrap mb-2">
                    <a href="/main/setting/profile" class="card border-primary mb-3 setting__list" style="margin:0;">
                        <div class="card-header setting_header">Profile</div>
                        <div class="card-body setting_body">
                            <font-awesome-icon :icon="['far', 'address-card']" class="setting_icon" />
                        </div>
                    </a>
                    <a href="/main/setting/security" class="card border-primary mb-3 setting__list" style="margin:0;">
                        <div class="card-header setting_header">Security</div>
                        <div class="card-body setting_body">
                            <font-awesome-icon :icon="['fas', 'shield-halved']" class="setting_icon"  />
                        </div>
                    </a>
                    <a href="/main/setting/friend" class="card border-primary mb-3 setting__list" style="margin:0;">
                        <div class="card-header setting_header">Friend</div>
                        <div class="card-body setting_body">
                            <font-awesome-icon :icon="['fas', 'people-group']" class="setting_icon"  />
                        </div>
                    </a>
                    <!-- <a href="/main/setting/analitics" class="list-group-item list-group-item-action text-dark setting__list">애널리틱스</a> -->
                </div>
            <!-- </div> -->
        </div> <!--settingWrap End-->
    </div>
</template>
<script>
// import MenuBar from '../../components/components-MenuBarComp-left.vue'
// import SideBar from '../../components/rightsidebars/SideBarComp.vue'

export default {
  methods: {
    goBack () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.go(-1); [2]
    }
  }
}
</script>
<style scoped>
.container {
    height : 100vh;
    margin : 0;
}

.setting__bar{

    width:100%;
    margin : 0 auto;
    color : gray;
}
.setting__contentWrap{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.setting__list{
    width: 30%;
    font-size: large;
    text-decoration-line: none;
}
.setting_header{
    text-align: center;
}
.setting_body{
    display:flex;
    align-items: center;
    justify-content: center;
}
.setting_icon{
    width: 50%;
    height: auto;
    color : black;
}
.setting_icon:hover{
    color : deeppink;
}
</style>
