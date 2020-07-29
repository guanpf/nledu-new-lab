import AuthModel from "@/api/auth";
import { LocalStorage, Cookie } from "../../libs/storage";
const authModel = new AuthModel();

export default {
  namespaced: true,
  state: {
    token: Cookie.getItem("access_token"),
    authUser: Cookie.getItem("user"), // "newlandedu",
    authPassword: Cookie.getItem("password") // "newlandedu"
  },
  mutations: {
    refresh: function(state, newToken) {
      state.token = newToken;
    }
  },
  actions: {
    async getToken({ commit }, data) {
      let response = await authModel.getToken(data.username, data.password);
      let { access_token, expires_in } = response;
      LocalStorage.setItem("access_token", access_token, expires_in);
      commit("refresh", access_token);
      authModel.setAuthorization(access_token);
      return access_token;
    },
    async refreshToken({ commit }) {
      let response = await authModel.refreshToken();
      let { access_token, expires_in } = response;
      LocalStorage.setItem("access_token", access_token, expires_in);
      commit("refresh", access_token);
      authModel.setAuthorization(access_token);

      return access_token;
    }
  }
};
