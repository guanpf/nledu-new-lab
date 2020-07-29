import Index from "./index";

const namespace = "experiment/info";

/*
 * 查询所属组织树状数据
 *
 * @return {
 *    code: 0,
 *    data: [{}],
 *    message: 'success'
 *  }
 * */
export default class ExperimentInfo extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getExerciseInfo(id) {
    return this.http(this.url + '/' + id, "GET");
  }
}
