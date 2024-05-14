import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

import Home from '../components/Home.vue'
import Account from '../components/AccountManagement.vue'

const routes: Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/Account',
        name:'Account',
        component:Account
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router