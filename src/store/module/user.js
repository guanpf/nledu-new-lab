import { getPlatformName, getPlatformToken} from "@/libs/platformLib";
import {login, logout, getInfo, getMenus, mutation} from "@/store/module/publicUser";

const platformName = getPlatformName();
const state = {
  token: getPlatformToken(platformName),
  name: "",
  avatar: "",
  introduction: "",
  role: "",
  etmRole: "",
  menu: [],
  router: []
};

const mutations = {};
Object.assign(mutations,mutation)

const actions = {
  // user login
  login:login,
  getMenus:getMenus,
  // get user info
  getInfo:getInfo,
  // user logout
  logout:logout
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
