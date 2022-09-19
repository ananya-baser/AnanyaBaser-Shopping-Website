import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/:path?',
    name: 'men',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/men',
    name: 'men',
    component: () => import('../views/MenView.vue')
  },
  {
    path: '/:path?',
    name: 'women',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/women',
    name: 'women',
    component: () => import('../views/WomenView.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/ProductDetails.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
    console.log(to.fullPath)
    return true
  })

export default router;
