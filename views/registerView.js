// views/register.js
export function registerView() {
    return `
    
    <header class="container-fluid py-3 border-bottom">
        <div class="container w-100 w-md-75 mx-auto d-flex justify-content-between align-items-center px-1">
            <span class="navbar-brand fw-bold fs-5">CrudNote</span>
            <!-- Botón modo oscuro a la derecha -->
            <button id="toggleDarkMode"
                class="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                style="width: 40px; height: 40px;">
                <i id="darkModeIcon" class="bi bi-sun-fill"></i>
            </button>
        </div>
    </header>


    <section class="container-xl mx-auto position-absolute top-0 start-0 end-0 h-100 px-3 px-md-4">
        <div class="row min-vh-100 align-items-center pt-5 pt-lg-5 ">
            <!-- Formulario -->
            <div class="col-12 col-lg-6">
                
                <div class="w-100">
                    <h2 class="fw-bold text-center mb-4 mb-lg-5 mt-5">Create your account</h2>
                </div>
                <form id="enviar">
                    <div class="mb-3">
                        <label class="form-label fw-semibold" for="fullname">Full Name</label>
                        <input type="text" class="form-control form-control-lg rounded-3" id="fullname" name="fullname" required minlength="2"  title="Please enter your full name" placeholder="Enter your full name" autocomplete="name">
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-semibold" for="email">Email</label>
                        <input type="email" class="form-control form-control-lg rounded-3" id="email" name="email" placeholder="Enter your email" required autocomplete="email">
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-semibold" for="username">Username</label>
                        <input type="text" class="form-control form-control-lg rounded-3" id="username" name="username" placeholder="Choose a username" required minlength="3"  title="The username cannot be only spaces." autocomplete="username">
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-semibold" for="password">Password</label>
                        <input type="password" class="form-control form-control-lg rounded-3" id="password" name="password" placeholder="Create a password" autocomplete="new-password" minlength="6" required>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg w-100 rounded-3 mb-3">Register</button>
                </form>

                <div class="text-center">
                    <a href="#/login" class="text-secondary text-decoration-none">Already have an account? Sign in</a>
                </div>
            </div>

            <!-- Imagen -->
            <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                <img src="assets/img/registrer.png" alt="CrudNote" class="img-fluid w-75 w-md-100">
            </div>
        </div>
    </section>
    
    `;
}
