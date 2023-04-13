<!-- eslint-disable vue/no-parsing-error -->
<template>

<a href="#editorview"
data-bs-toggle="modal"
data-bs-target="#editorview"
class="hover-change-color editorbtn"
@click="clearAllSearchWords">
    <span class="badge rounded-pill bg-success" style="padding: 8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
    </span>
</a>

<!-- <button type="button" @click="logout()">
          <span>
            <span>Logout</span>
          </span>
</button> -->

<!-- Editor Modal 시작 -->
<div
class="modal fade"
id="editorview"
data-bs-backdrop="static"
data-bs-keyboard="false"
tabindex="-1"
aria-labelledby="staticBackdropLabel"
aria-hidden="true">
    <div
    class="modal-dialog modal-dialog-centered"
    role="document"
    >
        <div class="modal-content">
            <div class="modal-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                </svg>
                <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                >
                </button>
            </div>
            <!--modal body-->
          <editor-view></editor-view>
        </div>
    </div>
</div>
  <!-- Editor Modal 끝 -->
</template>

<script>
import EditorView from '../views/ModalEditorView.vue'
export default {
  components: { EditorView }
}
</script>
<style scoped>
.editorbtn{
  position : fixed;
  right : 50px;
  bottom : 50px;
  z-index : 1050;
}
 modal 공통 css
.modal {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
}
.modal-dialog {
  width: 50%;
  height: 90%;
}
.modal-content {
  background-color: #fff;
  color: #000;
  width: 100%;
  height: fit-content;
}

/* 알람, DM modal 공통 css */
.modal {
  --bs-modal-width: 100%;
  --bs-modal-height: 100%;
}
.modal-backdrop {
  position: unset !important;
}
.modal-dialog {
  width: 50%;
  height: 90%;
}

.modal-header {
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.modal-header > svg {
  margin: auto;
  margin-left: 338px;
}
.modal-header > button {
  margin: 0;
}
.modal-body {
  padding: 0px 20px 10px 20px;
  height: fit-content;
}
#profic {
  margin-left: 100%;
}
.YN {
  color: #FFF;
  margin-top: 5%;
  margin-left: 45%;
  font-size: 12px;
}
</style>
