import Index from "./index";

const namespace = "function";

/*
 * 查询所属组织树状数据
 *
 * @return {
 *    code: 0,
 *    data: [{}],
 *    message: 'success'
 *  }
 * */
export default class Org extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getMenuData(id){
    return this.http(this.url + '/' + id, "GET");
  }
  postMenuData(data, id = "") {
    return this.http(`${this.url}/${id}`, "POST", data)
  }
}
