import Index from "./index";

const namespace = "data/dic";

/*
 * 查询数据字典列表
 *
 * {
 * EXP_RES_TYPE	实验：资源类型	实验：资源类型
 * EDU_SYSTEM	学制	学制
 * COURSE_TYPE	课程：课程类型	课程：课程类型
 * TEACH_MODEL	课程：课程（授课）模式	课程：课程（授课）模式
 * EXAM_USE_TYPE	习题集：应用类型	习题集：应用类型
 * PRACTICE_TYPE	课程/课程内容：实践类型/教学模式	课程/课程内容：实践类型/教学模式
 * EXAM_TYPE	习题集：类型	习题集：类型
 * COURSE_RES_TYPE	课程资源：资源类型	课程资源：资源类型
 * EXER_VER_TYPE	习题：版本类型	习题：版本类型
 * CHAPTER_RES_TYPE	章节：资源类型	章节：资源类型
 * EXER_REPO_TYPE	题库：题库类型	题库：题库类型
 * RELEASE_VER	题库：发行版本	题库：发行版本
 * EXER_OPT_TYPE	题目选项：选项类型	题目选项：选项类型
 * EXAM_STATUS	习题集：状态	习题集：状态
 * EXER_TYPE	习题：题型	习题：题型
 * STATUS	课程体系，课程状态	课程体系，课程状态
 * LANGUAGE 授课语言
 * CLASS_STATUS 班级状态
 * }
 * @get(codeTpesSn='EDU_SYSTEM')
 * @return {
 *    code: 0,
 *    data: [{}],
 *    message: 'success'
 *  }
 * */
export default class DataDic extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getTree(codeTypeSn) {
    return this.http(`${this.url}/data_dic/${codeTypeSn}/hierarchies`, "GET");
  }
  getChildren(id) {
    return this.http(`${this.url}/data_dic/${id}/children`, "GET");
  }
  getcodeTypeSn(codeTypeSn){
    return this.http(
        `${this.url}/data_dic/${codeTypeSn}`,
        'GET'
    )
  }

  getCodeTypeFilterSn(codeTypeSn){
    return this.http(
        `${this.url}/data_dic_available_in_sys_config/${codeTypeSn}`,
        'GET'
    )
  }
}
