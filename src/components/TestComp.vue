<template>
    <div style="background-color: palevioletred">
      <div class="about">
        <h1>This is an example page</h1>
      </div>
      <div class="alert alert-dismissible alert-warning">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <h4 class="alert-heading">Warning!</h4>
        <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
      </div>
      <div class="container">
        <h3 class="text-light">Popovers</h3>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Left</button>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Top</button>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Bottom</button>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Right</button>
        <br/><br/>
        <h3 class="text-light">Tooltips</h3>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">Left</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tooltip on top">Top</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Tooltip on bottom">Bottom</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Tooltip on right">Right</button>
        <br/><br/>
        <!-- Button trigger modal -->
        <h3 class="text-light">Modal</h3>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        <!-- Modal -->
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
