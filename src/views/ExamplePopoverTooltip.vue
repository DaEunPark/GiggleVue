<template>
  <div style="background-color: palevioletred"  class="overflow-auto">
    <div class="about">
      <h1>This is Bootstrap Test Page</h1>
      <br/><br/><br/>
    </div>
    <!-- Image Upload Test Start -->
    <div class="filebox">
      <label for="img-files-test">
        <img id="addImage" src='../assets/image.png'>
      </label>
        <input type="file" ref="files" id="img-files-test" @change="handleFileUpload(event)" accept="image/jpg, image/jpeg, image/png, image/gif">
    </div>
    <br/>
    <button class="btn btn-success" @click="uploadImgToImgbbtest()">등록 imgbb</button>
    <button class="btn btn-info" @click="uploadImgToServertest()">등록 s3</button>
    <br/>
    <h3 class="text-dark">원본</h3>
    <img :src="uploadImage" style="width: 80%; height: 80%;">
    <br/><br/>
    <h3 class="text-dark">imgbb</h3>
    <img :src="imgbbImgURL" style="width: 80%; height: 80%;">
    <br/><br/>
    <h3 class="text-dark">s3</h3>
    <img :src="s3ImgURL" style="width: 80%; height: 80%;">
    <br/><br/><br/><hr/><br/>
    <!-- Image Upload Test End -->
    <!-- Image Delete Test Start -->
    <div >
      <input type="text" v-model="imagefilename" class="text-dark" >
      <button class="btn btn-warning" @click="deleteImgFromServertest()">삭제</button>
    </div>
    <br/><br/><br/><hr/><br/>
    <!-- Image Delete Test End -->
    <!-- video-embed start -->
    <div class="ratio ratio-16x9">
      <!-- <video-embed src="https://youtu.be/7T8F7ZF52lo"></video-embed> -->

      <div v-if="rightYTID">
        <iframe id="yotube-frame" :src="getYoutubeVideoURL" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div v-else>
        <a :href="getYoutubeVideoURL">{{ getYoutubeVideoURL }}</a>
      </div>
    </div>
    <br/><br/><br/><hr/><br/>
    <!-- video-embed End -->

    <!-- Alert Start -->
    <div class="alert alert-dismissible alert-warning">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <h4 class="alert-heading">Warning!</h4>
      <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
    </div>
    <br/><br/><br/><hr/><br/>
    <!-- Alert End -->
    <div class="container">
      <!-- Popover Start -->
      <h3 class="text-light">Popovers</h3>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Left</button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Top</button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Bottom</button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Right</button>
      <br/><br/><br/><hr/><br/>
      <!-- Popover End -->

      <!-- Tooltip Start -->
      <h3 class="text-light">Tooltips</h3>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">Left</button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tooltip on top">Top</button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Tooltip on bottom">Bottom</button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Tooltip on right">Right</button>
      <br/><br/><br/><hr/><br/>
      <!-- Tooltip End -->
      <!-- Dropdown Start -->
      <h3 class="text-light">Dropdowns</h3>
      <div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          Dropdown form
        </button>
        <form class="dropdown-menu p-4">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="dropdownCheck2">
              <label class="form-check-label" for="dropdownCheck2">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
      <br/><br/><br/><hr/><br/>
      <!-- Dropdown End -->

      <!-- Modal Start -->
      <!-- Button trigger modal -->
      <h3 class="text-light">Modal</h3>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen" role="document">
          <div class="modal-content">
            <div class="modal-header bg-secondary">
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-secondary">
              <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-touch="false" data-bs-interval="false">
              <div class="carousel-inner" style="margin: 0; padding: 0;">
                    <div class="carousel-item active">
                      <img src="https://d36nj4zto99jeg.cloudfront.net/raw/f106f45b-a231-4866-9b6e-afdfdd979897.jfif" class="d-block w-100" alt="..." style="width: 1200px; max-height: 800px; height: auto; object-fit: contain;">
                    </div>
                    <div class="carousel-item">
                      <img src="https://d36nj4zto99jeg.cloudfront.net/raw/fced7579-92cb-4ba5-9c98-f50a5feb9c4b.jpg" class="d-block w-100" alt="..." style="width: 1200px; max-height: 800px; height: auto; object-fit: contain;">
                    </div>
                    <div class="carousel-item">
                      <img src="https://d36nj4zto99jeg.cloudfront.net/raw/dfdf3b5e-03d2-4380-855b-f9dbfdcba0eb.jpg" class="d-block w-100" alt="..." style="width: 1200px; max-height: 800px; height: auto; object-fit: contain;">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>&nbsp;
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>&nbsp;
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Recipient:</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>

      </div>
      <br/><br/>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>
      <br/><br/><br/><hr/><br/>
      <!-- Modal End-->

      <!-- card test start -->
      <div class="card mb-3">
        <h3 class="card-header">Card header</h3>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <h6 class="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
        </svg>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-active">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-primary">
              <th scope="row">Primary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-secondary">
              <th scope="row">Secondary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-success">
              <th scope="row">Success</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-danger">
              <th scope="row">Danger</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-warning">
              <th scope="row">Warning</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-info">
              <th scope="row">Info</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-light">
              <th scope="row">Light</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-dark">
              <th scope="row">Dark</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    <br/><br/><br/><hr/><br/>
      <!-- Card End-->

    </div> <!-- <div class="container"> -->

  </div>

  </template>

<script>
// import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { Popover, Tooltip } from 'bootstrap/dist/js/bootstrap.min.js'

export default {
  data: function () {
    return {
      youtubeSrc: 'https://youtu.be/ZwDHSVYZuTc',
      rightYTID: false,
      files: [],
      uploadImage: '',
      imgbbImg: '',
      imgbbImgURL: '',
      s3ImgURL: ''
    }
  },
  computed: {
    getYoutubeVideoURL () {
      return this.parseYoutubeUrl(this.youtubeSrc)
    }
  },
  mounted () {
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
  },
  methods: {
    parseYoutubeUrl (url) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      const matchResult = url.match(regExp)
      if (matchResult && (matchResult[2].length === 11)) {
        // console.log(`${matchResult[2]}`)
        this.rightYTID = true
        return `https://www.youtube.com/embed/${matchResult[2]}`
      } else {
        this.rightYTID = false
        return url
      }
    },
    handleFileUpload (event) {
      const newName = this.uuidFileName(this.$refs.files.files[0].name)
      this.files = this.renameFile(this.$refs.files.files[0], newName)

      // 이미지 미리보기
      // const input = event.target
      const reader = new FileReader()
      reader.readAsDataURL(this.files)
      reader.onloadend = (e) => { this.imgbbImg = e.target.result }
      // reader.readAsDataURL(input.files[0])

      this.uploadImage = URL.createObjectURL(this.files)
    },
    uploadImgToImgbbtest () {
      const body = new FormData()
      body.append('key', '037f27c8f49be83ba03b30f0bb3ec12c')
      body.append('image', this.imgbbImg.split(',').pop())
      body.append('expiration', 15552000)
      this.$axios.post('https://api.imgbb.com/1/upload', body,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(res => {
        this.imgbbImgURL = res.data.data.url
        console.log('res.data.data.url = ' + res.data.data.url)
      }).catch(err => {
        console.log(err)
      })
    },
    uploadImgToServertest () {
      const body = new FormData()
      body.append('files', this.files)
      this.$axios.post(`${this.$serverUrl}/post/uploadimage`, body,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(res => {
        console.log(res.data)
        this.s3ImgURL = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    deleteImgFromServertest () {
      const imagepath = this.imagefilename
      this.$axios.delete(`${this.$serverUrl}/post/deleteimage/${imagepath}`)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    renameFile (originalFile, newName) { // 파일명 변경
      return new File([originalFile], newName, {
        type: originalFile.type
      })
    },
    uuidFileName (originalName) { // UUID 파일명 생성
      const onLength = originalName.length
      const indexDot = originalName.lastIndexOf('.')
      const fileExtension = originalName.substring(indexDot + 1, onLength)
      const uuid = self.crypto.randomUUID()
      return `${uuid}.${fileExtension}`
    }
  }

}
</script>
<style scoped>
 #yotube-frame {
  width: 100%;
  height: 100%;
 }

 /* 이미지 업로드 버튼 꾸미기 CSS */
 .filebox label {
  display: inline-block;
  padding: .5em .75em;
  color: #fff;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  cursor: pointer;
}
.filebox input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
#addImage{
    width:  23px;
    height: 23px;
    margin:0 0 0 10%;
}

</style>
