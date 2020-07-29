import Index from "./index";
const namespace = "search";

export default class ClassRecord extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  search() {
    return this.http(`${this.url}/result`, "POST");
  }
}
