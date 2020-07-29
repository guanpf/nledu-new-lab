/* eslint-disable */
export default function(path) {
  // path='module/etmlab/view/search/result'
  if (path === "layout/index") {
    return import(`@/layout/index.vue`);
  }

  if (path === "layout/practice") {
    // todo 待优化
    return import(`@/layout/practice`)
  }
  if (path === "layout/exam") {
    // todo 待优化
    return import(`@/layout/exam`)
  }

  if (path === "layout/manager") {
    // todo 待优化
    return import(`@/layout/manager`)
  }

  if(path === "layout/ebusi"){
    return import(`@/layout/ebusi`)
  }
  if (path==="layout/frame/index") {
    return import(`@/layout/frame/Index`)
  }
  if (path === 'layout/frame/router') {
    return import(`@/layout/frame/Router`);
  }

  let pathArr = path.split("/");
  let root = pathArr.shift();

  if (root !== "module") {
    return import("@/layout/404.vue");
  }

  let moduleName = pathArr.shift();
  let pagePath = pathArr.join("/");

  switch (moduleName) {
    caseplaceholder
    // case "eduadmin":
    //   return import(`@/module/eduadmin/${pagePath}.vue`);
    // case "etmlab":
    //   return import(`@/module/etmlab/${pagePath}.vue`);
    // case "eusmgr":
    //   return import(`@/module/eusmgr/${pagePath}.vue`);
    default:
      return import("@/layout/404.vue");
  }
}
