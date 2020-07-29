import Index from './index';
const namespace = 'rtc';

export default class Note extends Index {

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getPlayres(resId,catalogId,courseId){
        return this.http(
            `${this.url}/playres`,
            "GET",
            {resId,catalogId,courseId}
        )
    }
    getClass(){
        return this.http(
            `${this.url}/issue/class`,
            "GET"
        )
    }
    getSendRecord(courseId){
        return this.http(
            `${this.url}/issue/${courseId}/record`,
            "GET"
        )
    }
    getSendRecordbyRtc(courseId,rtcId){
        return this.http(
            `${this.url}/issue/${courseId}/record/${rtcId}`,
            "GET"
        )
    }
    getResHcrtcSubbyLog(resId,catalogId,courseId){
        let data ={}
        if(resId) data.resId = resId;
        if(catalogId) data.catalogId = catalogId
        if(courseId)data.courseId = courseId
        return this.http(
            `${this.url}/unitintro`,
            "GET",
            data
        )
    }
    sendRecord(data){
        return this.http(
            `${this.url}/issue`,
            "POST",
            data
        )
    }
}
