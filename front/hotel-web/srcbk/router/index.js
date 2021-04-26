import Vue from "vue";
import VueRouter from "vue-router";
import Element, { Icon } from "element-ui";
Vue.use(VueRouter);

import Login from "../pages/login/Login";
import Home from "../pages/home";
import NotFound from "../pages/errorPage/404";
import Forbidden from "../pages/errorPage/403";
import Layout from "../pages/layout";
import Admin from "../pages/admin";

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

export const DyamicRoutes = [
  {
    path: "",
    component: Layout,
    name: "contain",
    redirect: "home",
    meta: {
      requirestAuth: true,
      name: "首页",
    },
    children: [
      {
        path: "home",
        component: Home,
        name: "home",
        meta: {
          name: "首页",
          icon: "icon-name",
        },
      },
    ],
  },
  {
    path: "/403",
    component: NotFound,
  },
  {
    path: "*",
    component: Forbidden,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//路由拦截守卫
// router.beforeEach((to, from, next) => {
//   //如果访问登录页、注册页放行
//   if (to.path === "/login" || to.path === "regiest") return next();

//   //没有token跳转登录页
//   const tokenStr = window.localStorage.getItem("token");

//   if (!tokenStr) {
//     Element.Message({ type: "error", message: "请先登陆" });
//     return next("/login");
//   }
//   return next()
// });
import store from "../store/index";
router.beforeEach((to, from, next) => {
  //未登录判断
  if (!store.state.UserToken) {
    //未登录，判断该页面是否要登陆
    if (to.matched.length > 0 && !to.matched.some((record) => record.meta.requirestAuth) ) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  }else{
    // 已经登陆   处理访问权限
    next();
  }
});

export default router;
