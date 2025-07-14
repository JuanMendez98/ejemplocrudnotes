// router/router.js
import { addNotesView } from "../views/addNotes.js";
import { dashboardView } from "../views/dashboardView.js";
import { homeView } from "../views/homeView.js";
import { loginView } from "../views/loginView.js";
import { registerView } from "../views/registerView.js";





const routes = {
  "#/": homeView,
  "#/login": loginView,
  "#/register": registerView,
  "#/dashboard": dashboardView,
  "#/add-notes": addNotesView,
};

export function router() {
  const path = window.location.hash || "#/";
  const render = routes[path];
  const app = document.getElementById("app");

  if (render) {
    app.innerHTML = render();

    if (path === "#/login") {
      handleLogin(); // la definimos aparte
    }
  } else {
    app.innerHTML = `<div class="container mt-5"><h2>404 - Página no encontrada</h2></div>`;
  }
}
