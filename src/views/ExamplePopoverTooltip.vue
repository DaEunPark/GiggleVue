<template>
  <div style="background-color: palevioletred">
    <div class="about">
      <h1>This is Bootstrap Test Page</h1>
      <br/><br/><br/>
    </div>
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

      <!-- Modal Start -->
      <!-- Button trigger modal -->
      <h3 class="text-light">Modal</h3>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-light">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light">
              <p>I will not close if you click outside me. Don't even try to press escape key.</p>
            </div>
            <div class="modal-footer bg-light">
              <button type="button" class="btn btn-dark bg-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary bg-primary">Understood</button>
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
  }
}
</script>
