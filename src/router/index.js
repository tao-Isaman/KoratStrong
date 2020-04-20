import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import cardlist from "../views/cardlist.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path:"/cardlist",
    name:"cardlist",
    component: cardlist
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
