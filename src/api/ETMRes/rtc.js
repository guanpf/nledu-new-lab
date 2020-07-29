import Index from "./index";
const namespace = "rtc";

export default class Catalog extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }

  deleteRtc(id) {
    return this.http(`${this.url}/${id}`, "DELETE");
  }

}

