import axios from "axios";
import { LocalStorage } from "../libs/storage";
// import qs from "qs";
import Message from "@/libs/message";
import store from "@/store";
import router, {resetRouter} from '@/router'
// import {getPlatformName, getPlatformToken, removePlatformToken, getPlatformLoginPage} from "@/libs/platformLib";
const nlAxios = axios.create({
  timeout: 180000,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache'
  }
});

nlAxios.defaults.headers.post["Content-Type"] = "application/json";
// let accessToken = LocalStorage.getItem("access_token");
// if (accessToken) {
//   let token = "Bearer" + " " + accessToken.replace(/'|"/g, "");
//   nlAxios.defaults.headers.common["Authorization"] = token;
// }

nlAxios.interceptors.request.use(config => {
  // let token = store.state.user.token;
  // let token = getPlatformToken(getPlatformName())

  let username = LocalStorage.getItem('username')

  // if (token) {
  //   token = "Bearer" + " " + token.replace(/'|"/g, "");
  //   config.headers["Authorization"] = token;
  // }
  if (username) {
    config.headers['x-user-name'] = username
  }
  return config;
});

nlAxios.interceptors.response.use(data=> {
  let code = data.data.code
  if (code.toString() === '402' || code.toString() === '401') {
    // 未登录跳转登录页
    redirectToLogin()
    // 私有云去除token
    store.commit('eonlineUser/SET_TOKEN', '')

  }
  return data
})

/*
 * 通用返回格式：
 * {code: '0', message: 'xxx', data: {}}
 * */
export default class Base {
  constructor() {}

  setAuthorization(accessToken = LocalStorage.getItem("access_token")) {
    if (accessToken) {
      let token = "Bearer" + " " + accessToken.replace(/'|"/g, "");
      nlAxios.defaults.headers.common["Authorization"] = token;
    }
  }
  async http(url, method, data, config) {
    method = method.toUpperCase();
    let response = await this[method](url, data, config);

    if (!response) {
      return false;
    }

    if (response.data.code !== "0") {
      this.backendErrorHandler(response.data);
      throw new Error(response.data.message);
    }

    return response.data.data;
  }

  async GET(url, data) {
    let response = await nlAxios({
      method: "get",
      url,
      params: data
    }).catch(e => {
      this.netErrorHandler(e);
      return false;
    });

    return response;
  }

  async POST(url, data, config = {}) {
    let response = await nlAxios({
      method: "post",
      url,
      // transformRequest: [data => qs.stringify(data)],
      data,
      ...config
    }).catch(e => {
      this.netErrorHandler(e);
      return false;
    });

    return response;
  }

  async PUT(url, data, config = {}) {
    let response = await nlAxios({
      method: "put",
      url,
      data,
      ...config
    }).catch(e => {
      this.netErrorHandler(e);
      return false;
    });
    return response;
  }
  
  async PATCH(url, data, config = {}) {
    let response = await nlAxios({
      method: "patch",
      url,
      data,
      ...config
    }).catch(e => {
      this.netErrorHandler(e);
      return false;
    });
    return response;
  }
  async DELETE(url, data, config = {}) {
    let response = await nlAxios({
      method: "delete",
      url,
      data,
      ...config
    }).catch(e => {
      this.netErrorHandler(e);
      return false;
    });
    return response;
  }
  backendErrorHandler(
    err = {
      code: 1,
      message: "未知错误"
    }
  ) {
    Message({
      type: "error",
      message: err.message
    });
  }
  netErrorHandler(e) {
    if(e.response.status.toString() === '401') {
      Message({
        type: "error",
        message: "未授权，请重新登陆",
        duration: 3000,
        center: true,
        customClass: "message-z-index-9999"
      });

      setTimeout(()=> {
        redirectToLogin()
      }, 3000)

    }else{
      Message({
        type: "error",
        message: "网络错误",
        duration: 3000,
        center: true,
        customClass: "message-z-index-9999"
      });
    }
    console.log(e);
  }
}

function redirectToLogin() {
  // removePlatformToken(getPlatformName());
  resetRouter()

  // let routerName = getPlatformLoginPage(getPlatformName())
  let current = ''
  // // todo 有问题，还没定位到
  // if (window.location.pathname !== '/404') {
  //   current = encodeURIComponent( window.location.href)
  // }
  router.push({
    name: routerName,
    // query: {
    //   redirect: current
    // }
  })
}
