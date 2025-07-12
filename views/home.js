export function homeView() {
  return `

    <header class="container-fluid py-3 border-bottom">
        <div class="container w-100 w-md-75 mx-auto">
            <nav class="navbar navbar-expand-md px-0">
                <a class="navbar-brand fw-bold" href="#">CrudNote</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-md-end" id="mainNavbar">
                    <ul class="navbar-nav align-items-md-center gap-2 gap-md-3 ms-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-dark">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-dark">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-dark">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="btn btn-primary btn-lg rounded-pill px-4 fw-bold">Sign
                                In</a>
                        </li>
                        <li class="nav-item">
                            <a href="#"
                                class="btn btn-light btn-lg text-dark rounded-pill px-4 fw-bold">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    
    <!-- Hero Section -->
    <section class="container w-75 w-md-75 mx-auto py-5">
        <div class="row align-items-center">
            <div class="col-lg-5 ">
                <img src="/assets/img/hero-index.png" alt="hero" class="img-fluid rounded-3">
            </div>
            <div class="col-lg-7 ps-lg-5">
                <h1 class="display-4 fw-bold mb-4">Collaborate on notes<br>with your team</h1>
                <p class="fs-5 text-secondary mb-4">CrudNote is a collaborative note-taking application that allows you to
                    create, edit, and share notes with your team. Sign up today to get started.</p>
                <div class="d-flex gap-3 flex-column flex-sm-row">
                    <a href="./pages/sign-in.html"
                        class="btn btn-primary btn-lg rounded-pill px-4 fw-bold mb-2 mb-sm-0">Sign In</a>
                    <a href="./pages/register.html"
                        class="btn btn-light btn-lg text-dark rounded-pill px-4 fw-bold">Register</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="container w-75 w-md-75 mx-auto py-5 pb-0 ">
        <h2 class="display-5 fw-bold mb-4">What is CrudNote?</h2>
        <p class="fs-5 text-secondary mb-5">CrudNote is a collaborative note-taking application that allows you to create,
            edit, and share notes with your team. Sign up today to get started.</p>
    
        <div class="row g-4 mb-5">
            <div class="col-12 col-md-4">
                <div class="card h-100 border border-secondary-subtle rounded-4 p-4 bg-white">
                    <div class="mb-3 fs-3 text-dark">
                        <i class="bi bi-file-earmark-text"></i>
                    </div>
                    <h5 class="fw-bold mb-1 text-dark">Create</h5>
                    <p class="text-body-secondary fs-6 mb-0">Create notes with rich text editing, images, and more.</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card h-100 border border-secondary-subtle rounded-4 p-4 bg-white">
                    <div class="mb-3 fs-3 text-dark">
                        <i class="bi bi-people"></i>
                    </div>
                    <h5 class="fw-bold mb-1 text-dark">Collaborate</h5>
                    <p class="text-body-secondary fs-6 mb-0">Collaborate with your team in real-time.</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card h-100 border border-secondary-subtle rounded-4 p-4 bg-white">
                    <div class="mb-3 fs-3 text-dark">
                        <i class="bi bi-share"></i>
                    </div>
                    <h5 class="fw-bold mb-1 text-dark">Share</h5>
                    <p class="text-body-secondary fs-6 mb-0">Share your notes with your team or the world.</p>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="container-fluid py-4">
        <div class="container w-85 w-md-75 mx-auto">
            <div class="d-flex flex-column flex-md-row justify-content-around align-items-center mb-3 gap-2 gap-md-0">
                <a href="#" class="text-decoration-none text-secondary fs-6">Home</a>
                <a href="#" class="text-decoration-none text-secondary fs-6">Contact</a>
                <a href="#" class="text-decoration-none text-secondary fs-6">Terms</a>
            </div>
            <div class="row">
                <div class="col-12 my-4">
                    <p class="text-center text-secondary mb-0 fs-6"> <span class="fw-bold">©</span> 2024 CrudNote. All
                        rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    
    


  `;
}

