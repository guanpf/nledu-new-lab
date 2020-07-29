import Index from "./index";
const namespace = "major";
export default class Major extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getStudentMap(id) {

    return this.http(`${this.url}/learningMap/${id}`,"GET")
  }
}
