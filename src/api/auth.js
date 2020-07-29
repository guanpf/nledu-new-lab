import Base from "./base";
import qs from "qs";
let projectList = {
  nleduEaframeAuth:11,
  nleduEtmlabResource:20,
  nleduEtmlabEduadmin:44,
  nleduEusmgrSystem:12,
  nleduEtmlabEducation:52
}
export default class Auth extends Base {
  constructor() {
    super();
  }

  async getToken(username, password, grant_type = "password", verificationCode, type=1) {
    let url = "";
      console.log(process.env.VUE_APP_useMock=='true');
    if(process.env.VUE_APP_useMock=='true'){
      url=`/api/${projectList.nleduEaframeAuth}/nledu-eaframe-auth/oauth/token `
    }
    else{
      url="/api/nledu-eaframe-auth/oauth/token"
    }
      console.log(url);
      let userData = {
      username,
      password,
      grant_type: grant_type,
      verificationCode,
      type,
    };
    const response = await this.http(url, "POST", qs.stringify(userData), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      auth: {
        username: "newlandedu",
        password: "newlandedu"
      }
    });
    return response;
  }

  async getMenu(platform=1) {
    let url = ''

    if(process.env.VUE_APP_useMock=='true'){
      url=`/api/${projectList.nleduEusmgrSystem}/nledu-eusmgr-system/user/menus/${platform}`
    }
    else{
      url=`/api/nledu-eusmgr-system/user/menus/${platform}`
    }
    return await this.http(url, "GET");
  }
  async getAllMenu() {
    let url = ''

    if(process.env.VUE_APP_useMock=='true'){
      url=`/api/${projectList.nleduEusmgrSystem}/nledu-eusmgr-system/user/menus`
    }
    else{
      url=`/api/nledu-eusmgr-system/user/menus`
    }
    return await this.http(url, "GET");
  }

  async getUserInfo(productid) {
    let url = ''
    if(process.env.VUE_APP_useMock=='true'){
      url=`/api/${projectList.nleduEusmgrSystem}/nledu-eusmgr-system/user/product/${productid}`
    }
    else{
      url=`/api/nledu-eusmgr-system/user/product/${productid}`
    }
    return await this.http(url, "GET");
  }

  async refreshToken() {
    let url = "";

    if(process.env.VUE_APP_useMock=='true'){
      url=`/api/${projectList.nleduEaframeAuth}/nledu-eaframe-auth/oauth/token `
    }
    else{
      url="/api/nledu-eaframe-auth/oauth/token"
    }
    let userData = {
      username: "test",
      password: "123456",
      grant_type: "password"
    };

    let response = await this.http(url, "POST", qs.stringify(userData), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      auth: {
        username: "newlandedu",
        password: "newlandedu"
      }
    });

    return response;
  }
  updateToken(token){
    let url = "";
    // /nledu-eaframe-auth/cauth/refresh/token
    if(process.env.VUE_APP_useMock=='true'){
      url=`/api/${projectList.nleduEaframeAuth}/nledu-eaframe-auth/cauth/refresh/token$key=${token}`
    }
    else{
      url=`/api/nledu-eaframe-auth/cauth/refresh/token?key=${token}`
    }
    return this.http(url,"PUT")
  }
}
