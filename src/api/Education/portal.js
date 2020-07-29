import Index from "./index";
const namespace = "portal";

export default class Portal extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getTeacherSchedule(startDate, endDate) {
    return this.http(`
    ${this.url}/teacher/curriculumSchedule/${startDate}/${endDate}`,
      "GET"
    );
  }
  getStudentSchedule(startDate, endDate) {
    return this.http(
      `${this.url}/student/curriculumSchedule/${startDate}/${endDate}`,
      `GET`
    );
  }
  getStudentTrends() {
    return this.http(`${this.url}/student/trends`, `GET`);
  }
  toLesson() {
    return this.http(`${this.url}/tolesson`, "GET");
  }
  toPreviewLesson(id) {
    return this.http(`${this.url}/tolesson/${id}`, "GET");
  }
  getHardwareResource() {
    return this.http(`${this.url}/hardware_resource`, "GET");
  }
  getCurrentClassMessage() {
    return this.http(
        `${this.url}/teacher/courseProgress`,
        "GET"
    )
  }
  getDate(startDate,endDate){
    return this.http(
        // /nledu-etmlab-education/portal/student/curriculumSchedule/{startDate}/{endDate}
        `${this.url}/student/curriculumSchedule/${startDate}/${endDate}`,
        'GET',
    )
  }

}
