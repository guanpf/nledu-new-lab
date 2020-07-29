import Index from "./index";
const namespace = "note";

export default class Note extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  get(opt) {
    return this.http(this.url, "GET", opt);
  }
}
