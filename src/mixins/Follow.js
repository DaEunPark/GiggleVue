export const Follow = {
  data () {
    return {
      followResult: ''
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
        this.followResult = res.data
        console.log(`Follow.js ${this.followResult}`)
        if (this.followResult === 'Y') {
          // alert(`${follow.follow_user}님을 팔로우합니다.`)
        } else {
          // alert(`${follow.follow_user}님을 언팔로우 합니다.`)
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
        this.followResult = res.data
        console.log(`Follow.js isFollowing: ${this.followResult}`)
      }).catch(err => {
        console.log(err.data)
      })
    }
  }
}
