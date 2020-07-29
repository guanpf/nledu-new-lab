import Index from "./index";
const namespace = "chapter";

export default class chapter extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
}
