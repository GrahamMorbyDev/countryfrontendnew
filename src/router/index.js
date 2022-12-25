import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/HistoryView.vue')
  },
  {
    path: '/artists',
    name: 'artisits',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArtistsView.vue')
  },
  {
    path: '/artist',
    name: 'artisit',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArtistView.vue')
  },


  {
    path: '/demo_register',
    name: 'demo_register',
    component: () => import(/* webpackChunkName: "about" */ '../views/DemoRegister.vue')
  },
  {
    path: '/demo_register_pay/:token',
    name: 'demo_register_pay',
    component: () => import(/* webpackChunkName: "about" */ '../views/DemoRegisterPay.vue')
  },
  {
    path: '/demo_register_pay_approved',
    name: 'demo_register_pay_approved',
    component: () => import(/* webpackChunkName: "about" */ '../views/DemoRegisterPayApproved.vue')
  },
  {
    path: '/demo_order',
    name: 'demo_order',
    component: () => import(/* webpackChunkName: "about" */ '../views/DemoOrder.vue')
  },
  {
    path: '/demo_order_pay/:token',
    name: 'demo_order_pay',
    component: () => import(/* webpackChunkName: "about" */ '../views/DemoOrderPay.vue')
  },
  {
    path: '/demo_order_pay_approved',
    name: 'demo_order_pay_approved',
    component: () => import(/* webpackChunkName: "about" */ '../views/DemoOrderPayApproved.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
