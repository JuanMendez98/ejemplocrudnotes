import { router } from './router/router.js';

// Ejecutar en el inicio
window.addEventListener('DOMContentLoaded', () => router());

// Ejecutar cada vez que cambia el hash
window.addEventListener('hashchange', () => router());
