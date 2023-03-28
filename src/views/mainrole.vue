 <template>
         <!--프로필 부분-->
               <div class="user_profile_box">
            <div class="user_img_box">
                <img class="img_circle user_img" name="프로필 사진 바꾸기"
                    src="data:image/jpg;base64, {{ profile_img }}"/>
            </div>
            <div class="user_info_box">
                <div class="user_name">
                    <p id="user_name_title">{{user_info['UserName']}}</p>
                    <div class="user_setting_box">
                        {% if my_page == 1 %}
                        <div onclick="user_setting_modal_on()">
                        <img width="24px" align="left" src="/static/images/icon_setting.png" />
                        </div>
                        {% else %}
                        <div class="user_follow_btn" onclick="user_follow_create()">팔로우</div>
                        {% endif %}
                    </div>
                </div>
                <div class="item_cnt">
                    <div class="item">게시물 <span style="font-weight: 500;">{{user_info['PostCnt']}}</span></div>
                    <div class="item btn_pointer" onclick="user_follow_modal_on(0)">팔로워 <span style="font-weight: 500;">{{user_info['FollowerCnt']}}</span></div>
                    <div class="item btn_pointer" onclick="user_follow_modal_on(1)">팔로잉 <span style="font-weight: 500;">{{user_info['FollowingCnt']}}</span></div>
                </div>
                <div class="user_nickname">
                    {{user_info['Name']}}
                </div>
            </div>
        </div>

</template>
<script>
$(document).ready(function () {
    $(`.user_post_menu[name='posts']`).css('border-top', '2px solid black');
    $(`.user_post_menu[name='posts']`).css('font-weight', 'bold');
    $(`.user_post_menu[name='posts']`).css('opacity', '1');

    let user_info = get_user_name()
    console.log(user_info)
})

// 팔로우 모달창에서 사용자이름 호버 이벤트 
$(document).on({
    // 호버 on:  유저요약보기 모달창 보여줌
    mouseenter: function () {
        let name = $(this).attr('name')
        let top = $(this).offset().top;
        let left = $(this).offset().left;
        user_summary_modal_on(name, top, left)
    },
    // 호버 off:  유저요약보기 모달창 보여줌
    mouseleave: function () {
        user_modal_quit(1);
    }
}, ".user_follower_username");

// 팔로우 모달창에서 사용자이름 클릭시 해당 유저페이지로 이동
$(document).on('click', ".user_follower_username", function () {
    let name = $(this).attr('name')
    document.location.href='/user?user_name='+name
});

// 유저 페이지의 게시물 호버시 좋아요와 코멘트 수 보여줌
$('.user_post_img_box').hover(function () {
    $(this).children('.user_post_info_box').css('display', 'block')
}, function () {
    $(this).children('.user_post_info_box').css('display', 'none')
})

// 메뉴 클릭시 클릭한 메뉴 활성화
// name : 클릭한 메뉴 태그의 name
function user_menu_on(name){
    $('.user_post_menu').css('border-top', '1px solid #e8e8e8');
    $('.user_post_menu').css('font-weight', '300');
    $('.user_post_menu').css('opacity', '0.5');

    $(`.user_post_menu[name=${name}]`).css('border-top', '2px solid black');
    $(`.user_post_menu[name=${name}]`).css('font-weight', 'bold');
    $(`.user_post_menu[name=${name}]`).css('opacity', '1');

    $('.user_post_users').toggle('show')
    $('.user_post_bookmarks').toggle('show')
}

const body = document.querySelector('body');
const modal_follow_outside = document.querySelector('.user_follower_box');
const modal_summary_outside = document.querySelector('.user_summary_body');
const modal_setting_outside = document.querySelector('.user_setting_modal_box');

// 팔로우 모달 API 전달하기
// type - 0:팔로워, 1:팔로잉
function user_follow_modal_on(type) {
    let title_text;
    if (type == 0) {
        title_text = '팔로워';
    } else if (type == 1) {
        title_text = '팔로잉';
    } else {
        return;
    }

    $('.user_follower_title_text').text(title_text);

    user_modal_list(type)

    modal_follow_outside.classList.toggle('show');
    if (modal_follow_outside.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
}

// 팔로우 모달창 리스트 업
function user_modal_list(type){
    $('.user_follower_list').empty()

    // 현재 로그인한 유저의 사용자이름 가져오기
    let user_info = get_user_name()
    let current_name = user_info['UserName']

    // 유저페이지의 사용자 이름
    let user_name = $('#user_name_title').text()

    let url = '/user/follow?user_name=' + user_name + '&type=' + type
    $.ajax({
        type: "GET",
        url: url,
        data: {},
        success: function (response) {
            let follows = response['users'];
            let user = user_name

            for (let i = 0; i < follows.length; i++) {
                let temp_html = `<div class="user_follower">
                                    <div class="user_follower_img">
                                        <img class="img_circle" width="30px" height="30px" 
                                             src="data:image/jpg;base64, ${follows[i]['ProfileImage']}"/>
                                    </div>
                                    <div class="user_follower_name_box">
                                        <div class="user_follower_username" name="${follows[i]['UserName']}">
                                            ${follows[i]['UserName']}
                                        </div>
                                        <div class="user_follower_name">
                                            ${follows[i]['Name']}
                                        </div>
                                    </div>
                                    <div class="user_follower_delete_box">
                                    </div>
                                </div>`

                $('.user_follower_list').append(temp_html);

                if (type == 1 && current_name == user_name) {
                    $('.user_follower_delete_box').empty();
                    let temp_html_2 = `<div class="user_follower_delete_btn" onclick="user_follow_delete('${user}', '${follows[i]['UserName']}')">
                                            삭제
                                        </div>`
                    $('.user_follower_delete_box').append(temp_html_2);
                }
            }
        }
    })
}

// 팔로우 삭제
function user_follow_delete(user_name, following_name) {
    $.ajax({
        type: "POST",
        url: '/user/follow/delete',
        data: {
            user_name: user_name,
            following_name: following_name
        },
        success: function (response) {
            user_modal_list(1)
            alert(response['msg'])
            window.location.reload()
        }
    })

}

// 팔로우 생성
function user_follow_create() {
    // 현재 로그인한 사용자 이름 가져오기
    let user_info = get_user_name()
    let user_name = user_info['UserName']

    let following_name = $('#user_name_title').text()

    $.ajax({
        type: "POST",
        url: '/user/follow/create',
        data: {
            user_name: user_name,
            following_name: following_name
        },
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}

// 유저 요약 모달 API 전달하기
function user_summary_modal_on(user_name, top, left) {
    let offset_top = $('.user_follower_body').offset().top + top + 50;
    let offset_left = $('.user_follower_body').offset().left + left + 50;

    offset_top = parseInt(offset_top).toString()+'px'
    offset_left = parseInt(offset_left).toString()+'px'

    $.ajax({
        type: "GET",
        url: '/user/summary?user_name=' + user_name,
        data: {},
        success: function (response) {
            let profile_img = response['profile_img']
            $('.user_summary_img').empty()
            let temp_html_2 = `<img class="img_circle img_cover" src="data:image/jpg;base64, ${profile_img}"/>`
            $('.user_summary_img').append(temp_html_2)


            $('.user_summary_username').text(response['user_info']['UserName'])
            $('.user_summary_name').text(response['user_info']['Name'])

            $('#user_summary_post_cnt').text(response['user_info']['PostCnt'])
            $('#user_summary_follower_cnt').text(response['user_info']['FollowerCnt'])
            $('#user_summary_following_cnt').text(response['user_info']['FollowingCnt'])

            $('.user_summary_posts').empty()

            let posts = response['post_images']
            for (let i = 0; i < posts.length; i++){
                let temp_html = `<img class="user_summary_post_img"
                                     src="data:image/jpg;base64, ${posts[i]}"/>`
                $('.user_summary_posts').append(temp_html)
            }
        }
    })





    modal_summary_outside.style.top = offset_top
    modal_summary_outside.style.left = offset_left

    modal_summary_outside.classList.toggle('show');
}

// 유저 설정 모달 API 전달하기
function user_setting_modal_on() {
    modal_setting_outside.classList.toggle('show');
    if (modal_setting_outside.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
}

// 모달창 사라지기
// type - 0:팔로우 모달창, 1:유저요약 모달창, 2:유저설정 모달창
function user_modal_quit(type) {
    if (type == 0) {
        modal_follow_outside.classList.toggle('show');

        if (!modal_follow_outside.classList.contains('show')) {
            body.style.overflow = 'auto';
        }
    } else if (type == 1) {
        modal_summary_outside.classList.toggle('show');
    } else if (type == 2) {
        modal_setting_outside.classList.toggle('show');

        if (!modal_setting_outside.classList.contains('show')) {
            body.style.overflow = 'auto';
        }
    } else {
        return;
    }
}

// // 유저의 이름 변경
// function user_name_change() {
//     let pw = $('#user_setting_pw_4')
//     let name = $('#user_setting_name')
//
//     let user_info = get_user_name()
//     let user_name = user_info['UserName']
//
//     $.ajax({
//         type: "POST",
//         url: '/user/change/name',
//         data: {
//             user_name: user_name,
//             pw: pw,
//             name: name
//         },
//         success: function (response) {
//             alert(response['msg'])
//         }
//     })
// }


// 모달 밖을 클릭하면 모달창 닫기
modal_follow_outside.addEventListener('click', (event) => {
    if (event.target === modal_follow_outside) {
        user_modal_quit(0)
    }
});
modal_setting_outside.addEventListener('click', (event) => {
    if (event.target === modal_setting_outside) {
        user_modal_quit(2)
    }
});
</script>