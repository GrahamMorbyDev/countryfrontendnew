import { createRouter, createWebHistory } from 'vue-router'

/* 
    Route Guards
*/
function guardMyAdminRoute(to, from, next) {
    let hasToken             = JSON.parse(localStorage.getItem('token'))
    let isAdminAuthenticated = false;

    if (localStorage.getItem('isAdmin') == true  &&  hasToken)
        isAdminAuthenticated = true;
    else
        isAdminAuthenticated = false;

    if (isAdminAuthenticated) {
        next();
    } else {
        next('/admin/login'); // go to '/login';
    }
}


/*
    Routes
*/
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/HistoryView.vue')
  },
  {
    path: '/artists',
    name: 'artists',
    component: () => import('../views/ArtistsView.vue')
  },
  {
    path: '/artist',
    name: 'artisit',
    component: () => import('../views/ArtistView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: () => import('../views/ContactUsView.vue')
  },


  {
    path: '/admin', 
    redirect: { name: 'adminHome' }, 
    beforeEnter: guardMyAdminRoute
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: () => import('../admin/adminLogin.vue')
  },
  {
    path: '/admin/logout',
    name: 'adminLogout',
    component: () => import('../admin/adminLogout.vue')
  },
  {
    path: '/admin/home',
    name: 'adminHome',
    component: () => import('../admin/adminHome.vue'),
    beforeEnter: guardMyAdminRoute
  },

  {
    path: '/admin/users',
    name: 'adminUsers',
    component: () => import('../admin/allUsers.vue'),
    beforeEnter: guardMyAdminRoute
  },
  {
    path: '/admin/users/create',
    name: 'adminCreateUser',
    meta: {
        mode: 'Create'
    },
    component: () => import('../admin/editUser.vue'),
    beforeEnter: guardMyAdminRoute
  },
  {
    path: '/admin/users/:id/edit',
    name: 'adminEditUser',
    meta: {
        mode: 'Edit'
    },
    component: () => import('../admin/editUser.vue'),
    beforeEnter: guardMyAdminRoute
  },

  {
    path: '/admin/posts',
    name: 'adminPosts',
    component: () => import('../admin/allPosts.vue'),
    beforeEnter: guardMyAdminRoute
  },
  {
    path: '/admin/posts/create',
    name: 'createPost',
    meta: {
        mode: 'Create'
    },
    component: () => import('../admin/editPost.vue'),
    beforeEnter: guardMyAdminRoute
  },
  {
    path: '/admin/posts/:id/edit',
    name: 'editPost',
    meta: {
        mode: 'Edit'
    },
    component: () => import('../admin/editPost.vue'),
    beforeEnter: guardMyAdminRoute
  },


  {
    path: '/demo_register',
    name: 'demo_register',
    component: () => import('../views/DemoRegister.vue')
  },
  {
    path: '/demo_register_pay/:token',
    name: 'demo_register_pay',
    component: () => import('../views/DemoRegisterPay.vue')
  },
  {
    path: '/demo_register_pay_approved',
    name: 'demo_register_pay_approved',
    component: () => import('../views/DemoRegisterPayApproved.vue')
  },
  {
    path: '/demo_order',
    name: 'demo_order',
    component: () => import('../views/DemoOrder.vue')
  },
  {
    path: '/demo_order_pay/:token',
    name: 'demo_order_pay',
    component: () => import('../views/DemoOrderPay.vue')
  },
  {
    path: '/demo_order_pay_approved',
    name: 'demo_order_pay_approved',
    component: () => import('../views/DemoOrderPayApproved.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
