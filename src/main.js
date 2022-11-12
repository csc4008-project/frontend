import { createApp } from 'vue'
import App from './App.vue'
import HomePage from "@/pages/HomePage";
import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import PageNotFound from "@/pages/PageNotFound";
import ShowBookingsPage from "@/pages/ShowBookingsPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

const routes = [
    { path: '/', component: HomePage },
    { path: '/bookings', component: ShowBookingsPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes,
})

createApp(App).use(router).mount('#app')
