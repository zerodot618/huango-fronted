import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Topics from "../views/Topics.vue"
import LandingPage from "@views/LandingPage.vue"
import Sudoku from "@views/Sudoku.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/sudoku",
        name: "Sudoku",
        component: Sudoku
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router