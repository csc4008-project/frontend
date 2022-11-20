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
import store from "@/store";
import AccountPage from "@/pages/AccountPage";

const routes = [
    { path: '/', component: HomePage },
    { path: '/bookings', component: ShowBookingsPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/account', component: AccountPage },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes,
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
