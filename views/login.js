export function loginView() {
  return `
  <!--  
  <div class="container mt-5">
    <h1 class="text-danger">Iniciar Sesión</h1>
    <form id="loginForm">
      <div class="mb-3">
        <label for="user" class="form-label">Usuario</label>
        <input type="text" id="user" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="pass" class="form-label">Contraseña</label>
        <input type="password" id="pass" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
  
  -->
    <header class="container-fluid py-3 border-bottom">
        <div class="container w-100 w-md-75 mx-auto my-3 px-1">
            <span class="navbar-brand fw-bold fs-5">CrudNote</span>
        </div>
    </header>

    <section class="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <h2 class="text-center fw-bold mb-4 mb-5">Welcome back</h2>
            <form id="enviar">
                <div class="mb-3">
                    <input type="text" class="form-control form-control-lg rounded-3 mb-4" placeholder="Email or username" id="email" autocomplete="on" required>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control form-control-lg rounded-3 mb-4" placeholder="Password" name="password" id="password" autocomplete="current-password" minlength="6" autocomplete="on" required>
                </div>
                <button type="submit" class="btn btn-primary btn-lg w-100 rounded-3 mb-4 fs-6 fw-bold">Sign In</button>
            </form>
            <div class="text-center">
                <a href="/pages/register.html" class="text-decoration-none text-secondary fs-6">Don't have an account? Register</a>
            </div>
        </div>
    </section>



  `;
}
