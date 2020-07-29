import Index from "./index";
const namespace = "index";
export default class Panel extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getUserInfo(majorId) {
    return this.http(`${this.url}/${majorId}/user/info`, "GET");
  }
  getCourseInfo(majorId) {
    return this.http(`${this.url}/${majorId}/course/info`, "GET");
  }
  getResourceInfo(majorId) {
    return this.http(`${this.url}/${majorId}/resource/info`, "GET");
  }
}
