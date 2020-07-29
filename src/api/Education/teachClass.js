import Index from "./index";
const namespace = "teach_class";

export default class Note extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  play(data) {
    return this.http(`${this.url}/play`, "POST", data)
  }
  clientScreen(data) {
    return this.http(`${this.url}/client_screen`, "POST", data)
  }

}
