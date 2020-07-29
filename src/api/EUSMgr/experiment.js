import Index from "./index";

const namespace = "experiment";

export default class Experiment extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getExperimentData({ startPage = 1, limit = 10, keyword = "" }){
    return this.http(
      `${this.url}?startPage=${startPage}&limit=${limit}&keyword=${keyword}`,
      "GET"
    );
  }

  submitExperimentData({ id, configs }) {
    return this.http(
      this.url,
      "POST",
      {
        id,
        configs
      }
    )
  }

  getStandardData({ startPage = 1, limit = 10, keyword = "" }){
    return this.http(
        `${this.url}/standard?startPage=${startPage}&limit=${limit}` + (keyword ? `&keyword=${keyword}` : ""),
        "GET"
    )
  }

  getMirrorsList() {
    return this.http(
      `${this.url}/mirrors`,
      "GET"
    );
  }

  getStandardsList() {
    return this.http(
      `${this.url}/standards`,
      "GET"
    );
  }

  getComponentsList() {
    return this.http(
      `${this.url}/components`,
      "GET"
    );
  }


  getComponent(startPage,limit) {
      return this.http(
          `${this.url}/componentservice`,
          "GET",
          {startPage, limit}
      )
  }
  deleteComponent(id){
      return this.http(
          `${this.url}/componentservice/${id}`,
          "DELETE"
      )
  }
  updateComponent(data){
      return this.http(`${this.url}/componentservice`,"POST",data)
  }
  freshMirror(){
      return this.http(
          `${this.url}/mirror/reflushMirror`,
          "PUT"
      )
  }
  deleteMirror(id){
      return this.http(
          `${this.url}/mirror/${id}`,
          "DELETE"
      )
  }
  updateMirror(data){
      return this.http(
          `${this.url}/mirror`,
          "POST",
          data
      )
  }
  getMirrorList(startPage,limit){
      return this.http(
          `${this.url}/mirror`,
          "GET",
          {startPage,limit}
      )
  }

  addStandard(content){
      //添加规格
      return this.http(
          `${this.url}/standard`,
          "PUT",
          content
      )
  }

  editStandard(content){
      //更新实例规格
      return this.http(
          `${this.url}/standard`,
          "POST",
          content
      )
  }

  deketeStandard(id){
      //删除实例规格
      return this.http(
          `${this.url}/standard/${id}`,
          "DELETE"
      )
  }

  freshenStandard(){
      //更新实例规格ID
      return this.http(
          `${this.url}/standards`,
          "PUT"
      )
  }
}
