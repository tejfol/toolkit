import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: (_) => import("../views/home/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: (_) => import("../views/about/index.vue"),
  },
  {
    path: "/mri",
    name: "MRI",
    component: (_) => import("../views/mri/index.vue"),
  },
  {
    path: "/faq",
    name: "FAQ",
    component: (_) => import("../views/faqs/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
