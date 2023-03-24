<template>
    <div>
        <section id="components">
            <article class="my-3" id="badge">
            <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Badge</h3>
                <a class="d-flex align-items-center" href="../components/badge/">Documentation</a>
            </div>

            <div>
                <div class="bd-example">
                <p class="h1">Example heading <span class="badge bg-primary">New</span></p>
                <p class="h2">Example heading <span class="badge bg-secondary">New</span></p>
                <p class="h3">Example heading <span class="badge bg-success">New</span></p>
                <p class="h4">Example heading <span class="badge bg-danger">New</span></p>
                <p class="h5">Example heading <span class="badge bg-warning text-dark">New</span></p>
                <p class="h6">Example heading <span class="badge bg-info text-dark">New</span></p>
                <p class="h6">Example heading <span class="badge bg-light text-dark">New</span></p>
                <p class="h6">Example heading <span class="badge bg-dark">New</span></p>
                </div>

                <div class="bd-example">

                <span class="badge rounded-pill bg-primary">Primary</span>
                <span class="badge rounded-pill bg-secondary">Secondary</span>
                <span class="badge rounded-pill bg-success">Success</span>
                <span class="badge rounded-pill bg-danger">Danger</span>
                <span class="badge rounded-pill bg-warning text-dark">Warning</span>
                <span class="badge rounded-pill bg-info text-dark">Info</span>
                <span class="badge rounded-pill bg-light text-dark">Light</span>
                <span class="badge rounded-pill bg-dark">Dark</span>
                </div>
            </div>
            </article>

            <article class="my-3" id="button-group">
            <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Button group</h3>
                <a class="d-flex align-items-center" href="../components/button-group/">Documentation</a>
            </div>

            <div>
                <div class="bd-example">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-secondary">1</button>
                    <button type="button" class="btn btn-secondary">2</button>
                    <button type="button" class="btn btn-secondary">3</button>
                    <button type="button" class="btn btn-secondary">4</button>
                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-secondary">5</button>
                    <button type="button" class="btn btn-secondary">6</button>
                    <button type="button" class="btn btn-secondary">7</button>
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-secondary">8</button>
                </div>
                </div>
                </div>
            </div>
            </article>

            <article class="my-3" id="carousel">
            <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Carousel</h3>
                <a class="d-flex align-items-center" href="../components/carousel/">Documentation</a>
            </div>

            <div>
                <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"/><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"/><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
            </div>
            </article>

            <article class="my-3" id="spinners">
            <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Spinners</h3>
                <a class="d-flex align-items-center" href="../components/spinners/">Documentation</a>
            </div>

            <div>
                <div class="bd-example">

                <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                </div>

                <div class="bd-example">

                <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                </div>
            </div>
            </article>
        </section>
    </div>
</template>
