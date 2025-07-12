import { homeView } from '../views/home.js';
import { loginView } from '../views/login.js';
import { registerView } from '../views/register.js';



const routes = {
  '#/': homeView,
  '#/login': loginView,
  '#/register': registerView,
  
};

export function router() {
  const app = document.getElementById('app');
  const path = window.location.hash || '#/';
  const render = routes[path];

  if (render) {
    app.innerHTML = render();
  } else {
    app.innerHTML = `<div class="container mt-5"><h2>404 - Página no encontrada</h2></div>`;
  }
}
