import Index from "./index";
const namespace = "experiment";
export default class Experiment extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getList(query) {
    return this.http(
      `${this.url}/query/${query.startPage}/${query.limit}`,
      "GET",
      {
        keyword: query.keyword
      }
    );
  }

}

