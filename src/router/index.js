import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListUpdate from '../views/ListUpdate.vue'
import RegisterDelete from '../views/RegisterDelete.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/get',
    name: 'get',
    component: ListUpdate
  },
  {
    path: '/registerdelete',
    name: 'registerdelete',
    component: RegisterDelete
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
