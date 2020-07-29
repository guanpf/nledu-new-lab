import Index from "./index";

const namespace = "experiment/task";

export default class ExperimentTask extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }

    getExperimentStatistical(eusmgrTeamId,etmresExerciseSetId){
        return this.http(
            `${this.url}/statistical/${eusmgrTeamId}/${etmresExerciseSetId}`,
            "GET"
        )
    }

    getExperimentTaskList(exerciseInstanceId){
        return this.http(
            `${this.url}/list/${exerciseInstanceId}`,
            "GET"
        )
    }

    getExperimentTaskResult(exerciseId, exerInstanceId){
        return this.http(
            `${this.url}/result/${exerciseId}/${exerInstanceId}`,
            "GET"
        )
    }
}