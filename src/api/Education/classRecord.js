import Index from "./index";
const namespace = "classRecord";

export default class ClassRecord extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getTeacherRecord(scheduleId, teacherId) {
    return this.http(`${this.url}/teacher/${scheduleId}/${teacherId}`, "GET");
  }
  getStudentRecord(scheduleId) {
    return this.http(`${this.url}/${scheduleId}/student`, "GET");
  }
}
