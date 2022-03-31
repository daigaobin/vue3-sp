/*
 * @Author: 牧鱼
 * @Date: 2022-03-31 16:08:52
 * @LastEditTime: 2022-03-31 16:56:01
 * @LastEditors: 牧鱼
 * @Description: 路由
 * @FilePath: \vue3\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
