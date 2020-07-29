import Index from "./index";
import {getPlatformCode} from "@/libs/platformLib";

const namespace = "training";

export default class ClassRecord extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }

  getExperiment(data) {
    return this.http(
        `${this.url}/experiment`,
        'POST',
        data
    );
  }

  restartExperiment(experimentId, createType) {
    return this.http(
        `${this.url}/experiment/restart`,
        'POST',
        {'experimentId': experimentId, 'createType': createType}
    );
  }

  closeExperiment(id) {
    let platformCode = getPlatformCode()
    return this.http(
        `${this.url}/experiment/close/${platformCode}/${id}`,
        'DELETE',
    );
  }

  getUserExperiment(scene, status, startPage, limit,keyword) {
    // keyword = encodeURIComponent(keyword)
    //     ?status=${status}&scene=${scene}&startPage=${startPage}&limit=${limit}&keyword=${keyword}
    return this.http(
        `${this.url}/experiment/user`,
        'GET',
        {
          status:status,
          scene:scene,
          startPage:startPage,
          limit:limit,
          keyword:keyword
        }
    );
  }

  getExperimentDetail(type, id) {
    return this.http(
        `${this.url}/experiment/${type}/${id}/detail`,
        'GET',
    );
  }

  exportReport(id) {
    return this.http(
        `${this.url}/experiment/export/report/${id}`,
        'GET'
    );
  }

  getExport(type, id, examId) {
    return this.http(
        `${this.url}/experiment/${type}/history/${id}?exerciseSetInstanceId=${examId}`,
        'GET'
    );
  }

  getCourse(productType,state, page, size, keyword) {
    // ?kw=&state=${state}&size=${ limit}&page=${startpage}
    let data = {
      productType,
      state,
      page,
      size,
      kw: keyword
    };
    for (let i in data) {
      if (data[i] === '' || data[i] === undefined) {
        delete data[i];
      }
    }
    return this.http(
        `${this.url}/course/list`,
        'GET',
        data
    );
  }

//  /nledu-etmlab-education/training/simuluate/exam/list
  getExamList(page, size, status, type, kw) {
    /*
    * page:分页参数
    * size:分页参数
    * kw:关键字(留空
    * status:状态(0未开始，1进行中，2已完成[1,2]
    * type:试卷类型(1练习，2作业，3考卷
    * */
    let platformCode = getPlatformCode()
    return this.http(
        `${this.url}/simuluate/exam/list?page=${page}&size=${size}&status=${status}&type=${type}&kw=${kw}&productType=${platformCode}`,
        'GET'
    )
  }

  deleteExam(setId) {
    //  /nledu-etmlab-education/training/simuluate/exam/{setId}
    let platformCode = getPlatformCode()
    return this.http(
        `${this.url}/simuluate/exam/${setId}/${platformCode}`,
        'DELETE'
    )
  }

  getExamDetail(rootSetId) {
    // let query = ''
    // if (examId) {
    //   query=`&examId=${examId}`
    // }
    let platformCode = getPlatformCode()
    return this.http(
        `${this.url}/simuluate/exam/exerciseSet?setId=${rootSetId}&productType=${platformCode}`, //setId: 试卷ID，examId：作卷记录ID
        'GET'
    )
  }

  startExam(setId) {
    let productType = getPlatformCode();
    return this.http(
      `${this.url}/simuluate/exam/startExam?setId=${setId}&productType=${productType}`,
      "GET"
    );
  }

  closeExam(instanceId) {
    //  /nledu-etmlab-education/training/simuluate/exam/{instanceId}
    let platformCode = getPlatformCode();
    return this.http(
        `${this.url}/simuluate/exam/closeExam`,
        "GET",
        {
          setId: instanceId,
          productType: platformCode
        }
    );
  }

  getExperimentExam(createtype,etmresExerciseSetInstanceId, experimentId) {
    return this.http(
        `${this.url}/exam/experiment`,
        'POST',
        {'createType': createtype, 'etmresExerciseSetInstanceId': etmresExerciseSetInstanceId, 'experimentId': experimentId}
    )
  }

  autoGroupExam(groupRule) {
    let platformCode = getPlatformCode()
    return this.http(
        `${this.url}/simuluate/exam/${groupRule}/${platformCode}`,
        'GET'
    )
  }

  finishExperiment(examId,experimentId) {
    return this.http(
        `${this.url}/exam/experiment/close/${examId}/${experimentId}`, //examId：试卷记录ID  experimentId：实验ID
        'DELETE',
    )
  }
  formalExamList(){
    return this.http(
        `${this.url}/exam/exercise/querybyexternalqids`,
        'GET',
    )
  }
  getFormalExam(examInstanceId){
    return this.http(
        `${this.url}/simuluate/exam/instance/${examInstanceId}`,
        "GET"
    )
  }


  // formalExamDetail(exerciseids){
  //   return this.http(
  //       `${this.url}/exam/exercise/edit`,
  //       'POST',
  //       {
  //         exerciseids:exerciseids
  //       }
  //   )
  // }
}
