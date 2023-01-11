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
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Country on the coast',
      state: 'Home',
      metaTags: [
          {
              name: 'description',
              content: 'The number one indoor country festival in the UK'
          }
      ]
  }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Country on the coast -  about',
      state: 'About',
      metaTags: [
          {
              name: 'description',
              content: 'About country on the coast'
          }
      ]
  }
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/HistoryView.vue'),
    meta: {
      title: 'Country on the coast - history',
      state: 'History',
      metaTags: [
          {
              name: 'description',
              content: 'The history of country on the coast'
          }
      ]
  }
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/MediaView.vue'),
    meta: {
      title: 'Country on the coast - media links',
      state: 'Media Links',
      metaTags: [
          {
              name: 'description',
              content: 'The number one indoor country festival in the UK'
          }
      ]
  }
  },
  {
    path: '/artists',
    name: 'artists',
    component: () => import('../views/ArtistsView.vue'),
    meta: {
      title: 'Country on the coast - Artists',
      state: 'Artists',
      metaTags: [
          {
              name: 'description',
              content: 'UK Country artists'
          }
      ]
  }
  },
  {
    path: '/artist',
    name: 'artisit',
    component: () => import('../views/ArtistView.vue'),
    meta: {
      title: 'Country on the coast - Artist',
      metaTags: [
          {
              name: 'description',
              content: 'The number one indoor country festival in the UK'
          }
      ]
  }
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: () => import('../views/ContactUsView.vue'),
    meta: {
      title: 'Country on the coast - Contact Us',
      state: 'Contact Us',
      metaTags: [
          {
              name: 'description',
              content: 'The number one indoor country festival in the UK'
          }
      ]
  }
  },
  {
    path: '/news-page',
    name: 'blog',
    component: () => import('../views/BlogMainView.vue'),
    meta: {
      title: 'Country on the coast - News',
      metaTags: [
          {
              name: 'description',
              content: 'The number one indoor country festival in the UK'
          }
      ]
  }
  },
  {
    path: '/latest-news',
    name: 'blog',
    component: () => import('../views/BlogsMainPage.vue'),
    meta: {
      title: 'Country on the coast - Latest News',
      state: 'News',
      metaTags: [
          {
              name: 'description',
              content: 'The number one indoor country festival in the UK'
          }
      ]
  }
  },
  {
    path: '/tickets',
    name: 'tickets',
    beforeEnter() {location.href = 'https://book.events/gaietybarsouthsea/2023-04-21/41956'}
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

router.beforeEach((to, from, next) => {
  const nearestWithTitle        = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta         = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
