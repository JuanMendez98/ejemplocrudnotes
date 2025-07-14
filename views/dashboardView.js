export function dashboardView() {
return `
        <header class="container-fluid border-bottom">
            <div class="px-4 mb-3 pt-3">
                <nav class="navbar navbar-expand-md mx-4 px-5">
                    <a class="navbar-brand fw-bold" href="">CrudNote</a>
                    <!-- Botón hamburguesa -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- Enlaces colapsables -->
                    <div class="collapse navbar-collapse justify-content-end" id="mainNavbar">
                        <div class="d-flex align-items-center">
                            <a class="nav-link rounded-pill px-4 fw-semibold text-dark link-primary link-underline-primary"
                                href="">My Notes</a>
                            <a class="nav-link rounded-pill px-4 fw-semibold text-dark link-primary link-underline-primary"
                                href="">Shared Notes</a>
                            <a id="signOutButton" class="btn btn-light btn-lg text-dark rounded-pill px-4 fw-bold me-3"
                                href="">Log out</a>
                            <!-- Botón de modo oscuro -->
                            <button id="toggleDarkMode"
                                class="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 40px; height: 40px;">
                                <i id="darkModeIcon" class="bi bi-sun-fill"></i>
                            </button>

                        </div>
                    </div>
                </nav>
            </div>
        </header>


        <section class="container py-5">
            <!-- Saludo -->
            <div class="mb-5">
                <h2 class="fw-bold">Hello, <span id="userName"></span></h2>
            </div>

            <!-- Tabs y botón de nueva nota -->
            <div class="d-flex justify-content-between align-items-center mb-5">
                <ul class="nav nav-tabs border-bottom border-secondary-subtle fw-bold" id="noteTabs">
                    <li class="nav-item">
                        <a class="nav-link active text-dark fw-bold" href="#" id="tabAll">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary fw-bold" href="#" id="tabPersonal">Personal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary fw-bold" href="#" id="tabShared">Shared</a>
                    </li>
                </ul>
                <a href="#/addNotes" class="btn btn-primary rounded-pill px-4">
                    <i class="bi bi-plus"></i> New Note
                </a>
            </div>

            <!-- Mis notas -->
            <div id="myNotesSection" class="mb-5">
                <h4 class="fw-bold mb-4">My Notes</h4>
                <div class="row g-4">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div
                            class="card h-100 border border-secondary-subtle rounded-4 p-4 bg-white d-flex flex-column">
                            <div class="mb-3 fs-3 text-dark">
                                <i class="bi bi-file-earmark-text"></i>
                            </div>
                            <h6 class="fw-bold text-dark mb-1">Project Brainstorm</h6>
                            <p class="text-body-secondary fs-6 mb-3">Brainstorming session for the new project</p>
                            <div class="mt-auto d-flex gap-2">
                                <a href="#/editNote/1" class="btn btn-outline-primary btn-sm w-50">Edit</a>
                                <button class="btn btn-outline-danger btn-sm w-50">Delete</button>
                            </div>
                        </div>
                    </div>
                    <!-- Más tarjetas personales aquí -->
                </div>
            </div>

            <!-- Notas compartidas -->
            <div id="sharedNotesSection">
                <h4 class="fw-bold mb-4">Notes Shared With Me</h4>
                <div class="row g-4">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div
                            class="card h-100 border border-secondary-subtle rounded-4 p-4 bg-white d-flex flex-column">
                            <div class="mb-3 fs-3 text-dark">
                                <i class="bi bi-file-earmark-text"></i>
                            </div>
                            <h6 class="fw-bold text-dark mb-1">Design Feedback</h6>
                            <p class="text-body-secondary fs-6">Feedback on the latest design mockups</p>
                            <!-- Sin botones, ya que no se puede editar ni eliminar -->
                        </div>
                    </div>
                    <!-- Más compartidas -->
                </div>
            </div>
        </section>


        <footer id="terms" class="container-fluid py-4">
            <div class="container w-85 w-md-75 mx-auto">
                <div
                    class="d-flex flex-column flex-md-row justify-content-around align-items-center mb-3 gap-2 gap-md-0">
                    <a href="#" class="text-decoration-none text-secondary fs-6">Home</a>
                    <a href="#" class="text-decoration-none text-secondary fs-6">Contact</a>
                    <a href="#" class="text-decoration-none text-secondary fs-6">Terms</a>
                </div>
                <div class="row">
                    <div class="col-12 my-4">
                        <p class="text-center text-secondary mb-0 fs-6"> <span class="fw-bold">©</span> 2024 CrudNote. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
}
