import Index from "./index";
const namespace = "class";
export default class Class extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getUser(opt = { startPage: 1, limit: 10, id: "" }) {
    return await this.get("user", opt);
  }
  async getEntranceYear() {
    return await this.get("entranceYear");
  }
}
