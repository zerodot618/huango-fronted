import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Topics from "../views/Topics.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Topics",
        component: Topics
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router