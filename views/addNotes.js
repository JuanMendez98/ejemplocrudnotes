export function addNotesView() {
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
            <h2 class="fw-bold mb-4 text-center">Add a New Note</h2>

            <form id="addNoteForm" class="w-100 mx-auto" style="max-width: 700px;">
                <!-- Título -->
                <div class="mb-3">
                    <label for="noteTitle" class="form-label fw-semibold">Note Title</label>
                    <input type="text" class="form-control form-control-lg" id="noteTitle" placeholder="Enter note title"
                        required>
                </div>

                <!-- Contenido -->
                <div class="mb-4">
                    <label for="noteContent" class="form-label fw-semibold">Content</label>
                    <textarea class="form-control form-control-lg" id="noteContent" rows="6"
                        placeholder="Write your note here..." ></textarea>
                </div>

                <!-- Switch para compartir -->
                <div class="form-check form-switch mb-4">
                    <input class="form-check-input" type="checkbox" role="switch" id="shareSwitch">
                    <label class="form-check-label" for="shareSwitch">Share this note with others</label>
                </div>

                <!-- Contenedor para agregar usuarios (inicialmente oculto) -->
                <div id="sharedUsersContainer" class="mb-4 d-none">
                    <label for="sharedUsers" class="form-label fw-semibold">Select users to share with</label>
                    <select id="sharedUsers" class="form-select" multiple>
                        <option value="12ab">Carlos</option>
                        <option value="34cd">Ana</option>
                        <option value="56ef">Luis</option>
                        <!-- Más usuarios pueden ser inyectados dinámicamente -->
                    </select>
                    <div class="form-text">Hold Ctrl (Windows) or Cmd (Mac) to select multiple users.</div>
                </div>

                <!-- Botón para guardar -->
                <div class="text-end">
                    <button type="submit" class="btn btn-primary btn-lg px-4 fw-bold">Save Note</button>
                </div>
            </form>
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
                        <p class="text-center text-secondary mb-0 fs-6"> <span class="fw-bold">©</span> 2024 CrudNote.
                            All
                            rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </main>`;
}
