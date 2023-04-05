<!-- eslint-disable camelcase -->
<template>
        <button class="btn btn-link btn-sm" type="button" id="googleSign" 
        @click="googleLogin()">
        <img src="../assets/btn_google2.svg" id="google"/></button>
</template>
<script>
export default ({
  mounted() {
  
  },
  methods: {
    googleLogin() {
      location.href=`https://accounts.google.com/o/oauth2/v2/auth?client_id=196854062269-nl9v00805p2kt359tpaqb0lrjtt8lrch.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:8082/google-login&scope=https://www.googleapis.com/auth/userinfo.email`;

      console.log(this.url)
    }
  }

//   mounted() {
//         window.gapi.signin2.render("googleBtn", {onsuccess: this.onSignIn});
//     },
//     methods: {
//         onSignIn (googleUser) {
//             const profile = googleUser.getBasicProfile();
//             console.log("ID: "+profile.getId());
//             console.log('Full Name: '+profile.getName());
//             console.log('Given Name: '+profile.getGivenName());
//             console.log('Family Name: '+profile.getFamilyName());
//             console.log("Image URL: "+profile.getImageUrl());
//             console.log("Email: "+profile.getEmail());

//             const id_token = googleUser.getAuthResponse().id_token;
//             console.log("ID Token: "+id_token);
//         }
 //   }
})

</script>
<style scoped>
.btn-group-sm>.btn, .btn-sm {
    --bs-btn-padding-y: 0.0;
    --bs-btn-padding-x: 0.0;
    --bs-btn-font-size: 0.875rem;
    --bs-btn-border-radius: 0.6rem;
}
</style>
