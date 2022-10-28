import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Topics from "../views/Topics.vue"
import LandingPage from "@views/LandingPage.vue"
import Sudoku from "@views/Sudoku.vue"
import Login from "@views/Login.vue"
import Signup from "@views/Signup.vue"
import Example from "@views/Example.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/example",
        name: "Example",
        component: Example
    },
    {
        path: "/sudoku",
        name: "Sudoku",
        component: Sudoku
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router