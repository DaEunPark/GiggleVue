<template>
    <div class="container" style="padding:0;">
        <div class="myFriend border-round-radious">
            <button class="btn btn_link" @click="goBack" style = "margin:0; padding:0;">
                <h3 class ="list-group-item text-dark border-primary my-2">
                    <font-awesome-icon class="mx-2" :icon="['fas', 'caret-left']" />My Friend
                </h3>
            </button>
            <div class="tabItems">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#following" aria-selected="false" role="tab" tabindex="-1">팔로잉</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#follow" aria-selected="true" role="tab">팔로우</a>
                    </li>
                </ul>
                <div id="myTabContent" class="tab-content px-3">
                    <div class="tab-pane fade active show" id="following" role="tabpanel">
                        <p>내가 팔로우 하는 목록</p>
  
                    </div>
                    <div class="tab-pane fade" id="follow" role="tabpanel">
                        <p>나를 팔로우 하는 목록</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>

<script>

export default {
    mounted(){
        this.getFollowingList();
    },
    methods:{
        goBack () {
        // eslint-disable-next-line no-unused-expressions
        this.$router.go(-1); [2]
        },
        getFollowingList(){
            this.user_no = this.$store.state.loginUserDTO.user_no
            this.$axios.post(this.$serverUrl+'/followingList/'+this.user_no)
                .then((res) => {
                    console.log("this.followingList = " + this.user_no)
                }).catch((err) =>{
                    if(err.message.indexOf('Network Error') > -1) {
                        alert('오류 발생 삐리삐리')
                    }
                })
        }
    }
}
</script>
<style>
.nav-tabs{
    width:100%;
    display: flex;
    justify-content: center;
}
.nav-item{
    width: 45%;
    text-align: center;
}
.nav-item :active {
    font-weight: bolder;
    color : hotpink;
}
</style>
