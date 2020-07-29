import Index from "./index";
const namespace = "experimentReport";
export default class Note extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    submitImg(reportContent, etmresExperimentManualId,etmeduExperimentInstanceId,scheduleId,teacherId) {
        return this.http(
            `${this.url}`,
            "POST",
            {"reportContent":reportContent,"etmresExperimentManualId":etmresExperimentManualId,"etmeduExperimentInstanceId":etmeduExperimentInstanceId,"scheduleId":scheduleId,"teacherId":teacherId}
        );
    }
    submitImage(reportContent,etmresExperimentManualId, etmeduExperimentInstanceId,identity,totalStep){
        return this.http(
            `${this.url}`,
            'POST',
            {reportContent:reportContent,
                etmresExperimentManualId:etmresExperimentManualId,
                etmeduExperimentInstanceId:etmeduExperimentInstanceId,
                scheduleId:"",
                teacherId:"",
                identity:identity,
                totalStep:totalStep
            }
        )
    }
    //answer
    // stratPage	是
    // limit

    // etmresExperimentManualId	是

    // etmeduExperimentInstanceId	是
    getReportList(etmeduExperimentInstanceId){
        return this.http(
            `${this.url}/completed`,
            "GET",
            {"etmeduExperimentInstanceId":etmeduExperimentInstanceId}
        )
    }
    getReport(stratPage,limit,etmresExperimentManualId,etmeduExperimentInstanceId){
        return this.http(
            `${this.url}`,
            "GET",
            {"startPage":stratPage||1,"limit":limit||10,"etmresExperimentManualId":etmresExperimentManualId,"etmeduExperimentInstanceId":etmeduExperimentInstanceId}
        )
    }
}
