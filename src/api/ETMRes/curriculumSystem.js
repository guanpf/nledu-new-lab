import Index from "./index";
const namespace = "csystem/curriculum_system";
export default class CurriculumSystem extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
}
