import Index from "./index";
import { downloadWord } from "../../libs/download";
const namespace = "prepare_lesson";
export default class PrepareLesson extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getFirstData(csid) {
    let url = `${this.url}/step_first/${csid}`;
    return this.http(url, "GET");
  }
  postFirstData(data) {
    let url = `${this.url}/step_first`;
    return this.http(url, "POST", data);
  }
  getSecondData(plid) {
    let url = `${this.url}/step_second/${plid}`;
    return this.http(url, "GET");
  }
  postSecondData(data) {
    let url = `${this.url}/step_second`;
    return this.http(url, "POST", data);
  }
  getThirdData(plid) {
    let url = `${this.url}/step_third/${plid}`;
    return this.http(url, "GET");
  }
  postThirdData(plid) {
    let url = `${this.url}/step_third/${plid}`;
    return this.http(url, "POST");
  }
  exportData(plid) {
    return downloadWord(`${this.url}/export/${plid}`, "教案.doc");
  }
}