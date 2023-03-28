<template>
    <div>  
        <section id="components">
            <div class="Sbackground">

                <article class="my-3" id="AinputSearch">
                    <div class="input-group mb-3" style="margin-top:120px;">
                        <span class="input-group-text bg-primary" style="border-bottom-left-radius: 20px; border-top-left-radius: 20px; ">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:#ffffff"/></span>
                        <input type="text" v-model="searchWords" class="form-control" placeholder="검색어를 입력하세요" @input="searchGroup($event)" @keydown.enter="enterSearch">
                    </div>
                         
                    <div class="searchrt">
                    <p class="h2">Result</p>
                    </div>
                   </article>


                <article class="my-3" id="result-list">
                    <div  v-for="(row , idx) in Resultlist" :key="idx" class="list-group list-group-flush" id="SRlistgroupflush">
                        <!--게시글피드로 가는링크-->               
                        <a href="/게시글피드" class="list-group-item" id="Slistgroup">
                            
                         <div class="row">  
                            <div class="col-sm-1" style="margin-left:-15px" >
                                <!--개인 프로필로 가는 링크-->
                                <a href="/main/mainhome" ><img :src=row.user_image  width="40" height="40" class="rounded-circle" alt="user_profile" > </a>
                            </div>

                                <!--개인 프로필로 가는 링크-->
                            <div class="col-sm-11" style="margin-left:15px">
                            <div class="d-flex w-100 justify-content-between" id="gouserprofile">
                                <a href="/main/mainhome"><p class="Rttitle">{{row.nickname}} 
                                <small class="Rtsmall">{{row.data}}</small></p></a>
                            </div>
                                    
                            <div class="contents">
                                <p style="color: black;" class="mb-1">{{row.contents}} </p>
                            </div> 
                            <!--댓글창 , 좋아요 -->
                            <div class="activeicont">
                                <div class="row">
                                    <div class="col-sm-3" id="spancomment">
                                       <a class="btn" href="/댓글">
                                        <font-awesome-icon icon="fa-regular fa-comment"/>
                                        <span>{{ row.comment }}</span>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="spanlike">
                                        <a class="btn" href="/좋아요">
                                        <font-awesome-icon  icon="fa-regular fa-heart"/>
                                        <span>{{ row.like }}</span>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="spanshare">
                                        <a class="btn" href="/공유">
                                        <font-awesome-icon icon="fa-regular fa-share-from-square"/>
                                        </a>
                                    </div>
                                    <div class="col-sm-3"  id="spanchart">
                                        <a class="btn" href="/인사이트">
                                        <font-awesome-icon icon="fa-solid fa-chart-simple"/>
                                        </a>
                                    </div>
                                </div>
                            </div>    
                          
                            </div>   
                         </div> 
                        </a>   
                        <hr style="color:#b0b0b0; margin:0px;">
                    </div>    
                </article>

        </div>  
     </section>  
    </div>
</template>
<script>  
export default {
    data() {  
        return {
            //responseBody : {},
            Resultlist : {},
            searchWords: '',
        };
    },
    mounted() {
        this.fnGetList() 
    },
    methods: {
        searchGroup(event) {
            console.log(event.target.value);
            const len = this.Resultlist.length;

            for (let i = 0; i < len; i++) {
            if (
                this.Resultlist[i].nickname.includes(event.target.value) === false &&
                this.Resultlist[i].contents.includes(event.target.value) === false 
            ) {
                document.querySelectorAll("#SRlistgroupflush")[i].style.display = "none";
            } else {
                document.querySelectorAll("#SRlistgroupflush")[i].style.display = "flex";
            }
            }
        },

        enterSearch () {
            if (this.searchWords == '' || this.searchWords == null) {
                alert('검색어를 입력하세요')
            } else {
                alert(this.searchWords)
            }
        },
        fnGetList() {

           this.Resultlist = [
            {  
            "nickname" : "user_jungha",
            "user_image" : require("../assets/profile.jpg"),
            "data" : "1시간 전",
            "contents" : "어느날 머리에서 뿔이 자랐다",
            "comment" : "3",
            "like" : "4034"
            },
            {  
            "nickname" : "user_jungha",
            "user_image" : require("../assets/profile.jpg"),
            "data" : "2시간 전",
            "contents" : "이세계에서 환생한 내가 어쩌다 sss급",
            "comment" : "3",
            "like" : "4422"
            },
            {  
            "nickname" : "user_3",
            "user_image" : require("../assets/giggle1.png"),
            "data" : "3시간 전",
            "contents" : "이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여,이세계에서 환생한 내가 어쩌다 sss급이 된 건에 관하여",
            "comment" : "3",
            "like" : "4"
            },
            {  
            "nickname" : "user_4",
            "user_image" : require("../assets/profile.jpg"),
            "data" : "4시간 전",
            "contents" : "귀엽다",
            "comment" : "3",
            "like" : "42"
            },
            {  
            "nickname" : "user_5",
            "user_image" : require("../assets/logo.png"),
            "data" : "2일 전",
            "contents" : "스벅",
            "comment" : "3",
            "like" : "14"
            },
            {  
            "nickname" : "user_6",
            "user_image" : require("../assets/profile.jpg"),
            "data" : "1일 전",
            "contents" : "맛있다",
            "comment" : "3",
            "like" : "4334"
            },
            {  
            "nickname" : "user_7",
            "user_image" : require("../assets/profile.jpg"),
            "data" : "14초",
            "contents" : "오늘의 아아",
            "comment" : "3",
            "like" : "324"
            },
        ] 
      }
    }
}
</script>



<style>
/* 임시배경 
.Sbackground{
     background: slategray;
} */
#gouserprofile a:hover .Rttitle { 
    /* text-decoration:underline; */
    color: #e83283;
}
#gouserprofile a {
    text-decoration: none; 
}


.input-group >input {
    border-radius: 12.5rem;
    border: 1px solid #cdcdcd;
    color: #000;
    border-color: #adadad;
}
.input-group > input::placeholder{
    color: #7d7d7d;
}
.input-group > input:focus {
    border-radius: 12.5rem;
    border: 2px solid #e83283;
    color: #000;
} 


.searchrt{
    color:black;
    margin-left: 35px;
    margin-top: 2%;
    margin-bottom: -20px;
}   

#Slistgroup:hover {
    background-color: #efefef;
}

#result-list {
    margin : auto;
    padding: 12px 8px;
}
#SRlistgroupflush {
    /* backdrop-filter: blur(1000px); */
    box-shadow: none;
    /* margin-bottom: 100px; */
}
.Rttitle {
    color:black;
}
.Rtsmall {
    color:rgb(126, 126, 126);
}



.activeicont #spancomment a ,
.activeicont #spanlike a ,
.activeicont #spanshare a, 
.activeicont #spanchart a {
    border-style:none;
    color: #b0b0b0; 
    margin-left: -20%;
}
.activeicont span {
    color: #b0b0b0; 
}
.activeicont #spancomment a:hover ,
.activeicont #spancomment a:hover span  {
    /* text-decoration:underline; */
    color: #0fc189;
}
.activeicont #spanlike a:hover , 
.activeicont #spanlike a:hover span {
    color:  #e83283;
}
.activeicont #spanshare a:hover {
    color:  #3266e8;
}
.activeicont #spanchart a:hover {
    color:  #a532e8;
}
</style>
