import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const RefIndex = () => import('@/view/ref/index.vue') 
const Base = () => import('@/view/base/index.vue')  
const Home = () => import('@/App.vue')
const Toref = () => import('@/view/ref/toRef.vue')

const routes:Array<RouteRecordRaw> = [ 
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/base',
        name: 'base',
        component: Base,
        children: [

        ]
    },
    {
        path: '/ref',
        name: 'refpage',
        component: RefIndex
    },
    {
        path: '/toref',
        name: 'toref',
        component: Toref
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

