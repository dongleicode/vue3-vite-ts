import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Ref from '../view/ref/index.vue'
import Base from '../view/base/index.vue'

const routes:Array<RouteRecordRaw> = [ 
    {
        path: '/',
        name: 'app',
        component: () => import('../App.vue')
    },
    {
        path: '/base',
        name: 'base',
        component: () => import('../view/base/index.vue')
    },
    {
        path: '/ref',
        name: 'ref',
        //Component Object
        component: Ref
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

