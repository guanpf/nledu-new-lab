import Index from './index';
const namespace = 'exercise';

export default class Note extends Index {

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    /**
     * 学生作业完成情况列表
     * */
    getStudentHomeworkList(setId,startPage,limit,state,classId,keyword){
        let data={
            startPage:startPage,
            limit:limit
        }
        if(state)data.state=state
        if(keyword)data.keyword=keyword
        if(classId)data.classId=classId
        return this.http(
            `${this.url}/set/${setId}/user`,
            "GET",
            data
        )
    }
    getComprehensiveExamList(courseId){
        return this.http(
            `${this.url}/set/${courseId}/multiple`,
            "GET"
        )
    }


    /**
     * 综合试卷详情、试卷详情、作业详情
     * @param exerciseSetId:试卷/作业Id
     */
    getExamDetail(exerciseSetId,keyword){
        let data = {}
        if(keyword)data.keyword = keyword
        return this.http(
            `${this.url}/set/detail/${exerciseSetId}`,
            "GET",
            data
            )
    }
    //获取单元目录树
    getCatalogTree(courseId){
        return this.http(
            `${this.url}/catalogTree`,
            "GET",
            {courseId:courseId}
        )
    }
    /**答案下发
     * @param setId:习题集实例ID
     * */
    sendAnswer(setId){
        return this.http(
            `${this.url}/set/${setId}/answer`,
            "PUT"
        )
    }
    /**
     * 下发作业/试卷记录
     * @param courseId:课程Id
     * @param type:11 试卷 14 作业
     * @param keyword:关键字
     * */
    getExerciseRecordList(courseId,type,catalogId,keyword){
        let data = {
            type:type
        }
        if(keyword)data.keyword = keyword
        if(catalogId)data.catalogId = catalogId
        return this.http(
            `${this.url}/set/${courseId}/record`,
            "GET",
            data
        )
    }
    /**
     * 学生作业详情/考试详情
     * @param setId:习题集Id
     * @param userId:学生Id
     * @param status:状态0全部1答对2答错3没做
     * @param kw:局内搜索关键字
     * */
    getHomeworkDetail(setId,userId,status,kw){
        let data = {
            setId:setId,
            userId:userId,
        }
        if(status)data.status=status
        if(kw)data.kw=kw
        return this.http(
            `${this.url}//set/tstudent/detail`,
            "GET",
            data
        )
    }
    /**
     * 查询单元内习题/试卷
     * @param catalogId:单元ID
     * @param exerciseSetId:单元下习题集Id
     * @param keyword:局内搜索关键字
     * */
    getUnitExercise(catalogId,exerciseSetId,keyword){
        let data = {
            exerciseSetId:exerciseSetId
        }
        if(keyword)data.keyword = keyword
        return this.http(
            `${this.url}/set/${catalogId}`,
            "GET",
            data
        )
    }
    /**
     * 查询作业/试卷列表
     * @param catalogId:单元目录Id
     * @param type:2作业 3试卷
     * @param status:1未提交 不传查全部状态
     * */
    getExerciseList(courseId,catalogId,type,status){
        let data = {
            courseId: courseId,
            catalogId:catalogId,
            type:type
        }
        if(status)data.status = status
        return this.http(
            `${this.url}/set/student`,
            "GET",
            data
        )
    }
    /**
     * 获取试卷/作业详情
     * @param setId:习题集Id
     * @param status:0 全部 1 答对 2 答错 3没做
     * @param kw:局内搜索关键字
     * */
    getExerciseDetail(setId,status,kw){
        let data = {
            setId:setId
        }
        if(status)data.status = status
        if(kw)data.kw = kw
        return this.http(
            `${this.url}/set/student/detail`,
            "GET",
            data
        )
    }
    /**
     * 提交做题记录
     * */
    postExerciseRecord(setId,data){
        return this.http(
            `${this.url}/set/instance/${setId}`,
            "POST",
            data
        )
    }
    /**
     * 保存做题记录
     * @param setId: 习题集Id
     * @param data:做题记录
                    {
                "myAnswer": " 答案 TAG 多选用逗号隔开",
                "etmhceduExerciseId": "习题id"
              }
     * */
    saveExerciseRecord(setId,data){
        return this.http(
            `${this.url}/set/instance/${setId}`,
            "PUT",
            data
        )
    }
}
