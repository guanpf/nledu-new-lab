import Index from './index';
const namespace = 'experiment';

export default class Experiment extends Index {

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    /*开启实验*/
    open(data) {
        // data {experimentId: '', forced: ''}
        return this.http(
            `${this.url}`,
            "POST",
            data
        )
    }

    close(experimentId) {
        return this.http(
            `${this.url}/${experimentId}`,
            "DELETE"
        )
    }

    getDetail( experimentId ) {
        return this.http(
            `${this.url}/${experimentId}`,
            "GET"
        )
    }
    getReport(instanceId) {
        return this.http(
            `${this.url}/report/${instanceId}`,
            "GET"
        )
    }

    //获取jupyter实验url
    getJupyterUrl(experimentId){
        let data = {}
        if(experimentId) data.experimentId = experimentId
        return this.http(
            `${this.url}/jupyter/auth`,
            "GET",
            data
        )
    }

    saveReport(img, stepId, instanceId) {
    //    data ]
    //     reportContent 存放图片转成base64的字符串
    //     etmhcresExperimentManualId 手册id
    //     etmhceduExperimentInstanceId 实验实例id

        let data = {
            reportContent: img,
            etmhcresExperimentManualId: stepId,
            etmhceduExperimentInstanceId: instanceId
        }

        return this.http(
            `${this.url}/report`,
            "POST",
            data
        )

    }
}
