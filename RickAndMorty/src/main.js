import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home.vue'
import CharacterDetails from './components/CharacterDetails.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path:"/character/:id",
        name: "Character",
        component: CharacterDetails
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

createApp(App).use(router).mount('#app')
