import { createRouter, createWebHistory } from 'vue'
import HomePage from '../pages/HomePage.vue'
import ProfilePage from '../pages/ProfilePage.vue'

const routes = [

    {
        name: "HomePage", 
        path: "/", 
        component: HomePage
    }, 

    {
        name: "ProfilePage", 
        path: "/profile",
        component: ProfilePage
    }
]; 

const router = createRouter(); 