import { createRouter, createWebHashHistory } from 'vue-router'
import bottomNavMap from '../api/bottomNavData'

const routes = [
  {
    path: '/',
    redirect: 'home' //重定向
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details')
  }
]

bottomNavMap.forEach((item, i)=>{
  routes.push({
    path: item.path,
    name: item.name,
    component: () => import('../views/'+item.component)
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
