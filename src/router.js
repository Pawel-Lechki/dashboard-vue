import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "./pages/Dashboard.vue"
import Home from "./pages/Home.vue"
import Profile from "./pages/Profile.vue"

const routes = [
  { path: "/", component: Dashboard },
  { path: "/home", component: Home },
  { path: "/profile", component: Profile },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
