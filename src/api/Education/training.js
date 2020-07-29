import Index from "./index";
const namespace = "training";

export default class Note extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getCourseTree(courseId,productType) {
    return this.http(`${this.url}/course/tree/${courseId}/${productType}`, "GET")
  }
  getCatalogDetail(catalogId,productType) {
    return this.http(`${this.url}/course/catalog/${catalogId}/${productType}`, "GET")
  }
  updateCatalogStatus(catalogId,productType){
    //标记目录已学
    return this.http(`${this.url}/course/catalog/${catalogId}/${productType}`, "PUT")
  }
  getSimulateExamExerciseSet({ setId, productType, examId = false }) {
    return this.http(
      `${this.url}/simuluate/exam/exerciseSet?setId=${setId}&productType=${productType}` + (examId ? "&examId=" + examId : ""),
      "GET"
    )
  }
}
