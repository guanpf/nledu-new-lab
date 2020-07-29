import Index from "./index";
const namespace = "curriculumSchedule";
export default class CurriculumSchedule extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getList(opt) {
    return await this.http(`${this.url}/sysadmin`, "GET", opt);
  }
  async getSemeste() {
    return await this.http(`${this.url}/getSemeste`, "GET");
  }
}
