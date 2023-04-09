<template>
    <div>
        <article class="my-3" id="userFeedList">
            <div class="row row-cols-auto">
                <div  v-for="(item , idx) in items" :key="{idx}" class="list-group list-group-flush" id="userFeedList_GF">

                         <div class="col"> <!-- style="margin-left:20px; position: fixed;"-->
                            <!--로그인 유저일 경우-->
                            <div v-if="$store.state.loginUserDTO.user_no == item.user_no">
                            <router-link to="/main/mypage"><img :src="$store.state.loginUserDTO.profile_image"  width="70" height="70" class="rounded-circle" alt="user_profile"></router-link>
                            <router-link to="/main/mypage"><p class="FeedList_username" style="margin:auto">{{$store.state.loginUserDTO.user_nick}}</p></router-link>
                            </div>
                            <!--다른 유저일 경우-->
                            <div v-if="$store.state.loginUserDTO.user_no != item.user_no">
                            <router-link to="/main/mypage:user_no"><img :src="item.profile_image"  width="70" height="70" class="rounded-circle" alt="user_profile"></router-link>
                            <router-link to="/main/mypage:user_no"><p class="FeedList_username" style="margin:auto">{{item.user_nick}}</p></router-link>
                            </div>
                        </div>
                        
                </div>
            </div>
        </article>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
export default {
  props: { // MainContentsView 의 자식컴포넌트로 사용됨
    items: { type: Object, default: null }
    // itemss:{ type: Object, default: null },
  },
  methods: {
  }
}
</script>

<style>
#userFeedList {
    margin : auto;
    padding: 12px 8px;
}
#userFeedList_GF {
    /* backdrop-filter: blur(1000px); */
    box-shadow: none;
    /* margin-bottom: 100px; */
}
#userFeedList_GI:hover {
    background-color: #efefef;
}
.FeedList_username {
    font-weight: bold;
    color:black;
}
</style>
