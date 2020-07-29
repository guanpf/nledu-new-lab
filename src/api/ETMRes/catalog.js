import Index from "./index";
const namespace = "catalog";

export default class Catalog extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getDetail(id) {
    return await this.http(`${this.url}/detail/${id}`, "GET");
  }
  async getTree(courseId) {
    return await this.http(`${this.url}/tree/${courseId}`, "GET");
  }
  async updateTree(data) {
    return await this.http(`${this.url}/tree/`, "PUT", data);
  }
  async saveInfo(data) {
    return await this.http(`${this.url}/edit/info`, "PUT", data);
  }

  async saveKnowledge(data) {
    return await this.http(`${this.url}/edit/knowledge`, "PUT", data);
  }
  async saveSkill(data) {
    return await this.http(`${this.url}/edit/skill`, "PUT", data);
  }
  async saveExperiment(data) {
    return await this.http(`${this.url}/edit/experiment`, "PUT", data);
  }
  async savePractice(data) {
    return await this.http(`${this.url}/edit/practice`, "PUT", data);
  }
  async roottree(id) {
    return await this.http(`${this.url}/roottree/${id}`, "get" );
  }
}

Catalog.Tree = class extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}/tree`;
  }
};
