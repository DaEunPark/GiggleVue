export const Like = {
    data () {
      return {
        likeResult: '',
        // post_no:'',
      }
    },
    methods: {
      fn_pushLike(post_no) {
        console.log(post_no)
        const data = { content: post_no }
  
        this.$axios.post(`${this.$serverUrl}/pushLike`, {
          user_no: this.$store.state.loginUserDTO.user_no,
          post_no: post_no,
          
          }).then(res => {
            alert(res.data)
          //this.likeResult = res.data
         // console.log(`Like.js ${this.likeResult}`)
          if (this.likeResult === 'Y') {
            res.data ==
             alert(`like합니다.`)
          } else {
             alert(` unlike 합니다.`)
          }
        }).catch(err => {
          console.log(err.data)
        })
        location.reload()
      },
      likeCount (like) {
        this.$axios.get(`${this.$serverUrl}/likeCount`, {
          params: {
            user_no: like.user_no,
            post_no: like.post_no,
            
          }
        }).then(res => {
          this.likeResult = res.data
          console.log(`Like.js liked: ${this.likeResult}`)
        }).catch(err => {
          console.log(err.data)
        })
      }
    }
  }
  