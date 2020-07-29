import Index from './index';
const namespace = 'exerciseanalyze';

export default class Note extends Index {

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    /**
     * 根据下发习题集实例ID查询 下发班级
     *@param etmhceduExerciseSetId:下发习题集实例id
     * */
    getClass(etmhceduExerciseSetId){
        return this.http(
            `${this.url}/issued-class`,
            "GET",
            {etmhceduExerciseSetId:etmhceduExerciseSetId}
        )
    }

    /**
     * 统计ECHART图数据
     * @param etmhceduExerciseSetId:下发习题集实习ID
     * @param classId：筛选班级列表 多个class用逗号分隔
     * @param type: echart图类型，1为作业2为试卷
     */
    getChart(etmhceduExerciseSetId,type,classId){
        let data = {etmhceduExerciseSetId:etmhceduExerciseSetId,type:type}
        if(classId)data.classId = classId
        return this.http(
            `${this.url}/exercise-examines`,
            "GET",
            data
        )
    }
}
