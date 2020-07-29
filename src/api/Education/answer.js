import Index from "./index";
const namespace = "answerLog";

export default class ExerciseSet extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getAnswerLog(etmresExerciseSetId){
        return this.http(`${this.url}`,'GET',{"etmresExerciseSetId":etmresExerciseSetId})
    }
    postAnswerLog(data){
        return this.http(`${this.url}`,'POST',data)
    }
}
