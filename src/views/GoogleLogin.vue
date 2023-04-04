<!-- eslint-disable camelcase -->
<template>
        <button class="btn btn-link btn-sm" type="button" id="googleSign" 
        onclick="location.href=`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=196854062269-nl9v00805p2kt359tpaqb0lrjtt8lrch.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fgoogle-login&response_type=code&scope=email&service=lso&o2v=2&flowName=GeneralOAuthFlow`"><img src="../assets/btn_google2.svg" id="google"/></button>
</template>
<script>
export default ({
methods: {
  
}
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