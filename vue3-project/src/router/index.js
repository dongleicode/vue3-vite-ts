import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import bottomNavMap from '../api/bottomNavData'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
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
