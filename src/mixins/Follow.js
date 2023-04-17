export const Follow = {
  data () {
    return {
      followResult: 'N',
      post_cnt: '',
      follow_cnt: '',
      follower_cnt: ''
    }
  },
  mounted () {
  },
  methods: {

    async user_follow_create (follow) {
      await this.$axios.post(`${this.$serverUrl}/follow`, {
        user_no: follow.user_no,
        follow_user: follow.follow_user
      }).then(res => {
        // this.followResult = res.data
        console.log(`Follow.js ${this.followResult}`)
        this.profileCnt(follow.follow_user)
        if (res.data === 'Y') {
          // alert(`${follow.follow_user}님을 팔로우합니다.`)
          this.followResult = 'Y' + follow.follow_user
        } else {
          // alert(`${follow.follow_user}님을 언팔로우 합니다.`)
          this.followResult = 'N'
        }
      }).catch(err => {
        console.log(err.data)
      })
    },
    isFollowing (follow) {
      this.$axios.get(`${this.$serverUrl}/followcheck`, {
        params: {
          user_no: follow.user_no,
          follow_user: follow.follow_user
        }
      }).then(res => {
        // this.followResult = res.data
        console.log(`Follow.js isFollowing: ${this.followResult}`)
        this.profileCnt(follow.follow_user)
        if (res.data === 'Y') {
          // alert(`${follow.follow_user}님을 팔로우합니다.`)
          this.followResult = 'Y' + follow.follow_user
        } else {
          // alert(`${follow.follow_user}님을 언팔로우 합니다.`)
          this.followResult = 'N'
        }
      }).catch(err => {
        console.log(err.data)
      })
    },
    // eslint-disable-next-line camelcase
    async profileCnt (user_no) {
      const data = { user_no: user_no }
      await this.$axios.post(this.$serverUrl + '/profileCnt', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          this.post_cnt = res.data.count_post
          this.follow_cnt = res.data.follow_user
          this.follower_cnt = res.data.follower_user
          // console.log(`Follow.js post_cnt: ${this.post_cnt}`)
          // console.log(`Follow.js follow_cnt: ${this.follow_cnt}`)
          // console.log(`Follow.js follower_cnt: ${this.follower_cnt}`)
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
