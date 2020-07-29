import router from "./router";
// import { LocalStorage } from "@/libs/storage";
import {getPlatformLoginPage, getPlatformName, getPlatformToken} from "@/libs/platformLib";
import {
  NAME_SCHOOL,
  NAME_OPERATION,
  MODULE_SCHOOL,
  MODULE_OPERATION
} from "@/config/constants";
import store from "@/store";
import {MODULE_EXAM, MODULE_LEARNING, MODULE_MANAGER, MODULE_PRACTICE, MODULE_RACE_PRACTICE, MODULE_RACE} from "@/config/constants";
// function getToken() {
//   return LocalStorage.getItem("access_token");
// }
const whiteList = ["/login", "/auth-redirect", "/rtcpreview", "/ui"]; // 不跳转登陆白名单
const whiteListName = ["login", "rtcpreview", "practicelayout","practice-index", "exam-login", "manager-login", "racepractice-login", "ebusi-login","race-login", "eres-login"];
const createGetMenuFunc = function() {
  let hasInit = false
  return function getMenu() {
    if (hasInit) {
      return
    }
    hasInit = true
    let platformName = getPlatformName()
    let token = getPlatformToken(getPlatformName());
    if (token) {
      let regxExamModule = /^\/exam$|^\/exam\//;
      if (platformName === NAME_SCHOOL) {
        store.dispatch("practiceUser/getMenus", MODULE_SCHOOL);
      } else{
        store.dispatch("user/getMenus", MODULE_OPERATION);
      }
    }
  }
}
let getMenu = createGetMenuFunc()

router.beforeEach(async (to, from, next) => {
  let platformName = getPlatformName();
  const hasToken = getPlatformToken(platformName);
  let redirect = encodeURIComponent(to.fullPath)
  if (hasToken) {
    if (!to.name || to.name.indexOf('login') === -1) {
      // 登录页不获取菜单
      getMenu()
    }

    // 在线资源默认跳转
    if (to.name === 'eres') {
      next({name:'eres-course-list'})
    }

    next();
  } else {

    if (whiteList.indexOf(to.path) !== -1 || whiteListName.indexOf(to.name) !== -1 || to.meta.isNeedLogin === false) {
      // 白名单中，直接进入
      next();
      // 后端传来的路由，需要判断to.meta.isNeedLogin === undefined
      // 前端路由声明不需要判断登录 to.meta.isNeedLogin
    } else {
      let platformName = getPlatformName();
      let platformLoginPage = getPlatformLoginPage()
      next({
        name: platformLoginPage,
        redirect
      })
    }
  }
});

// router.beforeEach((to, from, next) => {
//   to.matched.length > 0
//     ? next()
//     : next(new Error(" this route does not exist"));
// });

// router.onError((err) => {
//   console.log(err);
//   // router.push('/404')
// });
