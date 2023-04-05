<template>
  <div style="background-color: #fff;"  class="overflow-auto">
      <br/><br/><br/>
               <!--프로필 부분-->
                      <!-- <div class="user_profile_box"> -->
                        <div class="user_profile_box" :style="{ backgroundImage: `url(${this.$store.state.userProfileDTO.back_image})` }">
            <div class="user_img_box">
                <img class="img_circle user_img" name="프로필" v-bind:src="`${this.$store.state.userProfileDTO.profile_image}`">
            </div>
            <div class="user_info_box">
                <div class="user_name">
                    <p id="user_name_title">{{this.$store.state.userProfileDTO.user_nick}}</p>
                    <div class="user_setting_box">

                        <div class="user_follow_btn" onclick="user_follow_create()">팔로우</div>
                        <div onclick="user_setting_modal_on()">
                        <img width="24px" align="left" src="../assets/icon_setting.png"/>
                        </div>

                    </div>
                </div>
                <div class="item_cnt">
                    <div class="item">게시물 <span style="font-weight: 500;">{{this.$store.state.userProfileDTO.count_post}}</span></div>
                    <div class="item btn_pointer" onclick="user_follow_modal_on(0)">팔로워 <span style="font-weight: 500;">{{this.$store.state.userProfileDTO.follower_user}}</span></div>
                    <div class="item btn_pointer" onclick="user_follow_modal_on(1)">팔로잉 <span style="font-weight: 500;">{{this.$store.state.userProfileDTO.follow_user}}</span></div>
                </div>
                <hr id="hr"/>
                <div class="user_nickname">
                    <!-- {{user_info['Name']}} -->
                    <div class="status_message">{{ this.$store.state.userProfileDTO.status_message }}</div>
                </div>
            </div>
        </div>

  </div>

  </template>

<script>
// import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.min.js'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      back : ''
    }
  },
  mounted () {

    this.back = this.$store.state.userProfileDTO.back_image
  // inti Popover
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
    // .forEach(popoverNode => this.$data.$popover(popoverNode))
    Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
      .forEach(popoverNode => new Tooltip(popoverNode))
    // .forEach(popoverNode => this.$data.$tooltip(popoverNode))
    const exampleModal = document.getElementById('exampleModal')
    exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })

  }
}
</script>
<style scoped>
* {-webkit-text-fill-color: black;}

.user_main_body{
    width: 975px;
    height: 1000px;
    margin: 90px auto 0 auto;
    padding: 30px 20px 0px;
}

.user_profile_box {
    width: 90%;
    height: auto;
    margin-bottom: 44px;
    padding-top: 20px;

    display: flex;
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
}

.user_img_box {
    width: 30%;
    height: 100%;

}

.user_img_box > .user_img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: auto;
    display: block;
      border-radius: 50%;
}

.user_follow_btn {
    width: 100%;
    height: 30px;

    padding: 5px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    cursor: pointer;

    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

.user_info_box {
    width: 65%;
    height: 100%;
}

.user_info_box > .user_name {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;

    font-size: 28px;
    font-weight: 300;

    display: flex;
    flex-direction: row;
    align-items: normal;
}

.user_info_box > .user_name  > .user_setting_box {
    width: 80px;
    margin-left: 15%;
    padding-top: 10px;

    cursor: pointer;
}

.user_info_box > .item_cnt {
    width: 100%;
    height: 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    align-items: normal;
    justify-content: left;
}

.user_info_box > .item_cnt > .item {
    width: 72px;
    font-size: 16px;
    margin-right: 40px;
}

.user_info_box > .user_nickname {
    width: 100%;
    height: 20px;

    font-size: 16px;
    font-weight: 500;
}
#user_name_title {
  font-weight: bold;
  font-size: 25px;
}
#hr {
  border-color: black;
  border-width: 1px;
}

</style>
