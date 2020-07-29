import Index from "./index";
const namespace = "exam";

export default class Exam extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  
  findExamSetting(examType = "B") {
    return this.get(
      "findExamSetting",
      {
        examType
      }
    )
  }
  
  pageExamSetting({examType = "B", page = 0, size = 8, examStates = undefined, kw = undefined}) {
    return this.get(
      "pageExamSetting",
      {
        examType,
        page,
        size,
        examStates,
        kw
      }
    )
  }
  
  addOrEditExamSetting(set) {
    return this.post(set, "/addOrEditExamSetting");
  }
  
  queryExerciseSetList(productType = 6) {
    return this.get("queryExerciseSetList", {
      productType
    })
  }
  
  deleteExamSettings(examSettingId) {
    return this.delete("deleteExamSettings?examSettingIds=[" + examSettingId + "]");
  }
}
