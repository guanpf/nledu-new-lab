import Base from "../base";
const namespace = "api/nledu-etmlab-education";
// import qs from "qs";
/*
 * 基于restful风格的api调用封装
 * GET（SELECT）：从服务器取出资源（一项或多项）。
 * POST（CREATE）：在服务器新建一个资源。
 * PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
 * PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
 * DELETE（DELETE）：从服务器删除资源。
 * */
export default class Index extends Base {
  constructor() {
    super();
    this.field = [];
    let projectList = {
      nleduEaframeAuth:11,
      nleduEtmlabResource:20,
      nleduEtmlabEduadmin:44,
      nleduEusmgrSystem:12,
      nleduEtmlabEducation:52
    }
    if(process.env.VUE_APP_useMock=='true'){
      this.url = `/api/${this.url || ""}${projectList.nleduEtmlabEducation}/nledu-etmlab-education`
    }
    else{
      this.url = `${this.url || ""}/${namespace}`;
    }
  }
  field(field = []) {
    this.field = field;
    return this;
  }
  async get(id = "", opt) {
    // = {limit: 10, page: 0, sortby: "", order: "asc"}
    let response = await this.http(this.url + "/" + id, "GET", opt);
    if (response && this.field.length > 0) {
      response = this.field.map(key => {
        return response[key];
      });
    }
    return response;
  }
  async post(data, routerOpt = "") {
    // data = qs.stringify(data);
    return await this.http(`${this.url}${routerOpt}`, "POST", data);
  }
  async delete(id) {
    return await this.http(`${this.url}/${id}`, "DELETE");
  }
  async put(data) {
    return await this.http(`${this.url}`, "PUT", data);
  }
  async patch(data) {
    return await this.http(`${this.url}`, "PATCH", data);
  }
  // delete(id = "") {}
}
