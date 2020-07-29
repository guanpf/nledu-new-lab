import Vue from "vue";
import Vuex from "vuex";
import apiToken from "./module/apiToken";
import user from "./module/user";
// import publicUser from "./module/publicUser";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tokenModule: apiToken,
    user,
    // publicUser,
  }
});
