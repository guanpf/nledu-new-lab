import Index from "./index";
const namespace = "lesson";

export default class Lesson extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getTeacherInfo(csid) {
    return this.http(`${this.url}/teacher/${csid}`, "GET");
  }
  getStudentInfo(csid) {
    return this.http(`${this.url}/student/${csid}`, "GET");
  }
}
