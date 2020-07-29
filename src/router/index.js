import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import { LocalStorage } from "@/libs/storage";
import {getPlatformToken, getPlatformName} from "@/libs/platformLib";
import {MODULE_NAMS_CN} from "@/config/constants";
// import loginRouter from './login'
// import eonline from "./eonline";
Vue.use(Router);
/*
 * hidden: false, 是否显示在菜单中
 * meta: {
 *   title: '', //在菜单中显示的名字
 *   icon: '', // 在菜单中显示的icon
 *   showBreadcrumb: false, // 是否显示面包屑导航
 * }
 * */

export const constantRoutes = [
  {
    path: "/",
    name: "login",
    //name: "eres"
    // redirect: "/index"
    component: () => import("@/components/login/view/login")
    // component: () => import("@/layout/loading.vue")
  },
  // 邮箱邀请注册
  {
    path: "/regist",
    name: "regist",
    //name: "eres"
    // redirect: "/index"
    component: () => import("@/components/login/view/regist")
    // component: () => import("@/layout/loading.vue")
  },
  // 激活页面
  {
    path: "/activate",
    name: "activate",
    //name: "eres"
    // redirect: "/index"
    component: () => import("@/components/login/view/activate")
    // component: () => import("@/layout/loading.vue")
  },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/layout/404.vue")
  // },
  // {
  //   path: "/ui",
  //   name: '',
  //   component: ()=> import("@/layout/frame/Index"),
  //   children: [{
  //     path: '',
  //     name: 'ui',
  //     component: () => import("@/layout/frame/Example")
  //   }]
  // },
  // {
  //   path: "/rtcpreview",
  //   name: "rtcpreview",
  //   component: () => import("@/module/etmlab/view/course/rtcPreview")
  // },
  // {
  //   path: "/practice/rtcpreview",
  //   name: "practice-rtcpreview",
  //   component: () => import("@/module/etmlab/view/course/rtcPreview")
  // },
  // ...loginRouter,
  // ...eonline,
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // routes: routes
  routes: constantRoutes
});


// let prePlatformName = ''
// router.beforeEach(async (to, from, next) => {
//   let currentPlatformName = getPlatformName();
//   if (prePlatformName !== currentPlatformName) {
//     await store.dispatch('setting/resetSetting')
//   }
//   next()
// })
router.afterEach((to, from)=> {
  // 修改页面title
  document.title = MODULE_NAMS_CN[getPlatformName()] || '大数据教学实验平台'

})

export const defaultAddRouter = [
  {
    path: "*",
    redirect: {
      name: "404"
    }
  }
];


export const asyncRoutes = [];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
  return router
}

export default router;
