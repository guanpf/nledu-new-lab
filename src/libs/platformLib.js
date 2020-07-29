import {Cookie} from "@/libs/storage";
import {
  MODULE_NAME,PATH_NAME,PLATFORM_NAME
} from "@/config/constants";

export const getPlatformName = () => {
  if (process.env.platform) {
    return process.env.platform;
  }
  let platformName = '';

  switch (true) {
    case isSchool():
      platformName = PLATFORM_NAME.NAME_SCHOOL;
      break;
    case isOperation():
      platformName = PLATFORM_NAME.NAME_OPERATION;
    default:
      // platformName = PLATFORM_NAME.NAME_LEARNING
      platformName = PLATFORM_NAME.NAME_OPERATION

  }

  return platformName;
};

const isTheModule = (moduleName, path = '') => {
  let moduleRegx = `^\/${moduleName}$|^\/${moduleName}\/`;
  let regx = new RegExp(moduleRegx);
  if (path) {
    return regx.test(path.toLowerCase());
  }else{
    return regx.test(window.location.pathname.toLowerCase());
  }
}
export const isSchool = () => {
  return isTheModule(PATH_NAME.PATH_SCHOOL)
};


export const isOperation = (path) => {
  return isTheModule(PATH_NAME.PATH_OPERATION, path)
}


export const getPlatformToken = (platform = '') => {
  // 后端支持单点登录了，不需要再根据平台名取token
  return Cookie.getItem(`access_token`);
}
export const setPlatformToken = (platform = '', token, expire) => {
  Cookie.setItem(`access_token`, token, expire)
}

export const removePlatformToken = (platform = '') => {
  Cookie.removeItem(`access_token`);
}

export const getPlatformLoginPage = (platform = '') => {
  platform = platform || getPlatformName()
  let pages = {}
  pages[PLATFORM_NAME.NAME_SCHOOL] = "school-login"
  pages[PLATFORM_NAME.NAME_OPERATION] = "operation-login"
  return pages[platform] || 'login'
}


export const getPlatformCode = () => {
  switch (true) {
    case isSchool():
      return MODULE_NAME.NAME_SCHOOL;
    case isOperation():
      return MODULE_NAME.NAME_OPERATION;
    default:
      return MODULE_NAME.NAME_OPERATION;
  }
}
//是否需要手动构建路由
export const isManualCreateRouter = () =>{
  switch (true) {
    case isSchool():
      return false;
    case isOperation():
      return true;
    default:
      return false;
  }
}
