import Index from "./index";
const namespace = "exerciseSet";
import { downloadWord } from "@/libs/download";
export default class ExerciseSet extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  importExerSet(data, repid = 0, type) {
    return this.http(`${this.url}/import/${repid}/${type}`, "PUT", data);
  }
  downloadExerSet(id) {
    return downloadWord(`${this.url}/download/${id}`);
  }
  updateExerSet(id, data) {
    return this.http(`${this.url}/${id}`, "PUT", data);
  }
  getExercise(id){
    return this.http(`${this.url}/${id}`,'GET')
  }
}
