import Index from "./index";
const namespace = "courseResource";
export default class CourseResource extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getAllChapter(courseId) {
    return await this.get(`listAll/chapter/${courseId}`);
  }

  async getAllExperiment(courseId) {
    return await this.get(`listAll/exp/${courseId}`);
  }

  async getAllExam(courseId) {
    return await this.get(`listAll/exp/${courseId}`);
  }
}
