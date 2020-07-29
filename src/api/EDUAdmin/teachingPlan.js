import Index from "./index";
const namespace = "teachingplan";
export default class TeachingPlan extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
}
