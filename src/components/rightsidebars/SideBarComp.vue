<template>
    <div class="sticky-top">
        <div id="collapse practice" class="bg-primary">
            <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>

        </div>

        <div>
            <div class="form-group">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-primary"><font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color: #ffffff;" /></span>
                        <input type="text" class="form-control text-dark"  placeholder="검색어를 입력하세요" aria-label="Recipient's username" aria-describedby="button-addon2" style="border-color: #e83283;"
                        data-bs-toggle="collapse" data-bs-target="#collapseSearch" href="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapseSearch">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Cras justo odio
                        <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Dapibus ac facilisis in
                        <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Morbi leo risus
                        <span class="badge bg-primary rounded-pill">1</span>
                    </li>
                </ul>
            </div>
            <div class="container bg-primary">
                <button class="btn btn-success collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false" aria-controls="collapse">
                            Test Me
                        </button>
                <div class="collapse" id="content">
                    Testy test test text that was collapsed.
                </div>
            </div>
        </div>
        <div class="row margin-top">
            <div class="col">
                <div class="d-grid gap-2">
                <button type="button" class="btn btn-success" style="height: auto;" data-bs-toggle="collapse" data-bs-target="#collapse-b1" aria-expanded="true" aria-controls="collapse-b1">
                    Button 1
                </button>
                </div>
            </div>

            <div class="col">
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-primary" style="height: auto;" data-bs-toggle="collapse" data-bs-target="#collapse-b2" aria-expanded="false" aria-controls="collapse-b2">
                        Button 2
                    </button>
                    </div>
                </div>

                </div>

                <div id="myGroup">  <!-- Add the parent id here -->

                <div class="collapse" id="collapse-b1"  data-bs-parent="#myGroup">
                    <!-- <div class="alert alert-success mt-3">
                    Text 1
                    </div> -->
                    <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Cras justo odio
                        <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Dapibus ac facilisis in
                        <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Morbi leo risus
                        <span class="badge bg-primary rounded-pill">1</span>
                    </li>
                </ul>
                </div>

                <div class="collapse" id="collapse-b2" data-bs-parent="#myGroup">
                    <div class="alert alert-primary mt-3">
                    Text 2
                    </div>
                </div>

        </div>
    </div>
</template>

<script>

export default {

  methods: {
    clickInput () {
      alert('click input')
    }
  }
}
</script>
<style scoped>
    input::placeholder {
        color: darkgrey;
    }
</style>
