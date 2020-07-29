import Index from "./index";
const namespace = "experiment";

export default class Note extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  async getVM(etmresExperimentId, etmeaCurriculumScheduleId) {
    let data = {
      etmresExperimentId: etmresExperimentId,
      etmeaCurriculumScheduleId: etmeaCurriculumScheduleId
    };
    return this.http(`${this.url}/vm`, "GET", data);
  }

  async open(data) {
    return this.http(`${this.url}/open`, "POST", data);
  }

  experiment_client_screen(data) {
    // data = {"etmeaCurriculumScheduleId":"","vmUrl":""}
    return this.http(`${this.url}/experiment_client_screen`, "POST", data);
  }
  closeExam(experimentInstanceId, scheduleId, saveStatus) {
    let data = {
      experimentInstanceId,
      scheduleId,
      save: saveStatus
    }
    return this.http(
      `${this.url}/close`,
      "PUT",
      data
    );
  }
  resameExam(experimentInstanceId, scheduleId,save) {
    let data = {
      experimentInstanceId,
      scheduleId,
      save
    }
    return this.http(
      `${this.url}/reset`,
      "PUT",
      data
    );
  }
  requestAssistance(data) {
    let { experimentInstanceId, teachId, scheduleId, vmId } = data;

    return this.http(
      `${
        this.url
      }/assist/${experimentInstanceId}/${teachId}/${scheduleId}/${vmId}`,
      "POST"
    );
  }
  cancelRequestAssistance(data){
    let { experimentInstanceId, teachId, scheduleId, vmId } = data;
    return this.http(
        `${this.url}/cancel/assist/${experimentInstanceId}/${teachId}/${scheduleId}/${vmId}`,
        'POST'
    )
  }
  assistanceByTeacher(experimentInstanceId, scheduleId) {
    return this.http(
      `${this.url}/assist/${experimentInstanceId}/${scheduleId}`,
      "POST"
    );
  }
  getSupervise(scheduleId){
    return this.http(
        `${this.url}/${scheduleId}/monitor`,
        'GET'
    )
  }

  getCompetitionResult(etmresExerciseSetId,exerciseInstanceId){
    //etmresExerciseSetId  试卷ID
    //exerciseInstanceId   试卷实例ID
    return this.http(
        `${this.url}/competition/results/${etmresExerciseSetId}/${exerciseInstanceId}`,
        "GET"
    )
  }

  switchVm(experimentInstanceId,vmId ) {
    return this.http(`${this.url}/switchVm/${experimentInstanceId}/${vmId}`, "POST")
  }
  validate(data = {experimentId: '', createType: 1, scheduleId: '40'}) {
    return this.http(`${this.url}/validate`, "POST", data)
  }
}
