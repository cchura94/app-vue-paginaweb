import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import Servicio from "../views/Servicio.vue";
import Blog from "../views/Blog.vue";
import Contacto from "../views/Contacto.vue";
import Producto from "../views/Producto.vue";

const rutas = [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/servicios',
        component: Servicio
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contactos',
        component: Contacto
    },
    {
        path: '/producto',
        component: Producto
    }
];


export const router = createRouter({
  history: createWebHistory(),
  routes: rutas,
})