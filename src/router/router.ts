import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Topics from "../views/Topics.vue"
import Sudoku from "../views/Sudoku.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Topics",
        component: Topics
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