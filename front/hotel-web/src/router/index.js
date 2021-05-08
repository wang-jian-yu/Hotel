import Vue from "vue";
import VueRouter from "vue-router";
import Element from "element-ui";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/home",
    component: () => import("../pages/home/Home"),
    redirect: 'welcome',
    children: [
      { path: "/welcome", component: () => import("../pages/welcome/Welcome") },
    ],
  },
  {
    path: "/login",
    component: () => import("../pages/login/Login"),
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

const router = new VueRouter({
  routes,
});

//路由拦截守卫
router.beforeEach((to, from, next) => {
  //如果访问登录页、注册页放行
  if (to.path === "/login" || to.path === "/" || to.path === "regiest")
    return next();

  //没有token跳转登录页
  const tokenStr = window.sessionStorage.getItem("token");

  if (!tokenStr) {
    Element.Message({ type: "error", message: "请先登陆" });
    return next("/login");
  }
  return next();
});

// import store from "../store/index";
// router.beforeEach((to, from, next) => {
//   //未登录判断
//   if (!store.state.UserToken) {
//     //未登录，判断该页面是否要登陆
//     if (to.matched.length > 0 && !to.matched.some((record) => record.meta.requirestAuth) ) {
//       next();
//     } else {
//       next({
//         path: "/login",
//       });
//     }
//   }else{
//     // 已经登陆   处理访问权限
//     next();
//   }
// });

export default router;
