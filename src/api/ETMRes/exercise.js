import Index from "./index";
const namespace = "exercise";
export default class Exercise extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
}
