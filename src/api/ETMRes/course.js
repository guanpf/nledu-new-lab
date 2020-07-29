import Index from "./index";
const namespace = "course";
export default class Course extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async contentPut(data) {
    return await this.http(`${this.url}/content`, "PUT", data);
  }

  async getPlan(id) {
    return await this.http(`${this.url}/${id}/plan`, "GET");
  }
  async updatePlan(courseId, data) {
    return await this.http(`${this.url}/${courseId}/plan`, "PUT", data);
  }
  getListByCurSysId(csystemId) {
    return this.http(`${this.url}/curriculum_system/${csystemId}`, "GET");
  }
}

Course.Cover = class extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}/cover`;
  }
};

Course.List = class extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}/list`;
  }
};
