import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "@/layout";
// import wrapper from "@/layout/wrapper/index.vue";
import login from "@/views/Login.vue";

const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: login
  }
];

// staticRoutes: Array<RouteRecordRaw>
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/echart-map",
        name: "echart-map",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "echart-map" */ "../views/echarts/map.vue")
      },
      {
        path: "/table",
        name: "table",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "echart-map" */ "../views/table/index.vue")
      },
      {
        path: "/form",
        name: "form",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "echart-map" */ "../views/form/index.vue")
      },
      {
        path: "/media",
        name: "media",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "echart-map" */ "../views/media/index.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const routes: Array<RouteRecordRaw> = defaultRoutes.concat(staticRoutes);
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
