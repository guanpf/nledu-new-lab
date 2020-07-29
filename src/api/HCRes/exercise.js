import Index from "./index"
const namespace = "exercise"
import {downloadWord} from "@/libs/download"

/**
 * 已写接口（写完删掉本段注释）：
 *
 * 课程习题（分页查询）
 * 试卷/习题集详情
 * 新增题目
 * 编辑题目
 * 删除题目
 * 删除大题
 * 题目移动
 * 试卷：分页查询
 * 试卷：导入
 *
 * */

export default class Course extends Index {
    constructor(){
        super();
        this.url = `${this.url||""}/${namespace}`;
    }
    //获取课程习题的列表页
    getCourseExercise(page,size,technicalField,courseTypeIds,typeId,kw,sort=-2){
        let data = {}
        data.page = page
        data.size = size
        if(technicalField) data.technicalField = technicalField
        if(courseTypeIds) data.courseTypeIds = courseTypeIds
        if(typeId) data.typeId = typeId
        if(kw) data.kw = kw
        data.sort = sort
        return this.http(
            `${this.url}/pageCoursePractice`,
            "GET",
            data
        )
    }

    //获取试卷列表页面数据
    getCourseExam(page,size,technicalField,courseTypeIds,kw,sort=-2){
        let data = {};
        data.page = page;
        data.size = size;
        if(technicalField) data.technicalField = technicalField
        if(courseTypeIds) data.courseTypeIds = courseTypeIds
        if(kw) data.kw = kw
        data.sort = sort
        return this.http(
            `${this.url}/pageCourseExerciseSet`,
            "GET",
            data
        )
    }

    //单个题目上下移动
    upDownExercise(parentId,exerciseId,offset){
        let data = {}
        data.parentId = parentId
        data.exerciseId = exerciseId
        data.offset = offset
        return this.http(
            `${this.url}/move`,
            "PUT",
            data
        )
    }

    //试卷：导入
    importExam(data){
        /**
         * theoryFile:理论题（文件）
         * synthesisFile:综合实训题文件(文件数组)
         * synthesisAnswerFile:综合实训题文件答案(文件数组)
         * etmhcresCatalogId:目录ID(数组)
         * etmhcresCertificateId: 关联证书(数组)
         * theoryTime: 理论题时长, 单位分钟
         * cpeTime:综合题时长 单位分钟
         * cpeScore: 综合实训题分数，可以小数，最多保留一位小数
         * name: 试卷名称
         * */
        let formdata = new FormData()

        formdata.append("theoryFile",data.theoryFile);
        data.synthesisFile.forEach(file=> {
            formdata.append("synthesisFile[]",file, file.name);
        })
        data.synthesisAnswerFile.forEach(file=> {
            formdata.append("synthesisAnswerFile[]",file, file.name);

        })
        formdata.append("etmhcresCatalogId[]",data.etmhcresCatalogId);
        formdata.append("etmhcresCertificateId[]",data.etmhcresCertificateId);
        formdata.append("theoryTime",data.theoryTime);
        formdata.append("cpeTime",data.cpeTime);
        formdata.append("cpeScore",data.cpeScore);
        formdata.append("name",data.name);
        return this.http(
            `${this.url}/uploadExam`,
            "POST",
            formdata
        )
    }

    //新增题目
    addExercise(content){
        return this.http(
            `${this.url}/addExercise`,
            "POST",
            content
        )
    }

    //编辑单个题目
    editExercise(content){
        return this.http(
            `${this.url}/updateExercise`,
            "PUT",
            content
        )
    }

    //删除大题
    deleteBigExercise(type,id){
        return this.http(
            `${this.url}/deleteBigExercise?type=${type}&id[]=${id}`,
            "DELETE",
        )
    }

    //删除单个题目
    deleteExercise(arrId, type=1){
        let id = '';
        if (Array.isArray(arrId)) {
            id = `[${arrId.join(',')}]`
        }else{
            id = arrId
        }
        return this.http(
            `${this.url}/deleteExercise?id[]=${id}&type=${type}`,
            "DELETE",
        )
    }

    //获取习题集详情
    getExerciseDetail(id,kw,needCourseBaseInfo,needCertificateInfo){
        let data = {}
        if(id) data.id = id
        if(kw) data.kw = kw
        if(needCourseBaseInfo) data.needCourseBaseInfo = needCourseBaseInfo
        if(needCertificateInfo) data.needCertificateInfo = needCertificateInfo
        return this.http(
            `${this.url}/detailExerciseSet`,
            "GET",
            data
        )
    }

    //获取课程范围
    getExerciseSetByCourseId(courseId,setId){
        let data = {}
        data.courseId = courseId
        if(setId) data.setId = setId
        return this.http(
            `${this.url}/queryCourseExerciseSetByCourseIdAndSetId`,
            "GET",
            data
        )
    }

    getCatalogTree(courseId, kw, type = ''){
        return this.http(
            `${this.url}/catalogTree`,
            "GET",
            {courseId, kw, type}
        )
    }
    getDetailCatalogPractice(catalogId, kw) {
        return this.http(
            `${this.url}/detailCatalogPractice`,
            "GET",
            {id: catalogId, kw}
        )
    }
    uploadPratice(data){
        let formdata = new FormData();
        // let data = {
        //     theoryFile,
        //     synthesisFile,
        //     synthesisAnswerFile,
        //     etmhcresCatalogId,
        // }
        formdata.append("theoryFile",data.theoryFile);
        data.synthesisFile.forEach(file=> {
            formdata.append("synthesisFile[]",file, file.name);
        })
        data.synthesisAnswerFile.forEach(file=> {
            formdata.append("synthesisAnswerFile[]",file, file.name);

        })
        formdata.append("etmhcresCatalogId[]",data.etmhcresCatalogId);

        return this.http(
            `${this.url}/uploadPratice`,
            "post",
            formdata
        )
    }


    //试卷：变更试卷课程内容关联
    changeExerciseExam(exerciseSetId,catalogIds,isAdd){
        let data = {}
        data.exerciseSetId = exerciseSetId
        data.catalogIds = catalogIds
        data.isAdd = isAdd
        return this.http(
            `${this.url}/modifyExerciseSetRel`,
            "PUT",
            data
        )
    }

    //试卷：大题分数修改
    changeExerciseScore(id,exerciseScore){
        return this.http(
            `${this.url}/updateScore?id=${id}&exerciseScore=${exerciseScore}`,
            "PUT",
        )
    }


    //试卷：编辑大题
    editExam(id,name,cpeScore,cpeTime,theoryTime,etmhcresCertificateId){
        return this.http(
            `${this.url}/updateExamOutline?id=${id}&name=${name}&cpeScore=${cpeScore}&cpeTime=${cpeTime}&theoryTime=${theoryTime}&etmhcresCertificateId[]=${etmhcresCertificateId}`,
            "PUT",

        )
    }

    //删除试卷
    deleteExam(id){
        return this.http(
            `${this.url}/deleteExam?id=${id}`,
            "DELETE",
        )
    }

    //大题排序
    moveBigExercise(exerciseSetId,offset){
        return this.http(
            `${this.url}/moveExerciseSet`,
            "PUT",
            {exerciseSetId:exerciseSetId,offset:offset}
        )

    }


    // 课程习题：批量删除
    deleteExerciseSet(setId) {
        return this.http(
            `${this.url}/deleteExerciseSet?id=${setId}`,
            "DELETE",
        )
    }

    //试卷：新增题目
    addExamExercise(data){
        return this.http(
            `${this.url}/addExamExercise`,
            "POST",
            data
        )
    }

    //习题：变更题目关系
    changeExercise(data){
        return this.http(
            `${this.url}/modifyPracticeExerciseRel`,
            "PUT",
            data
        )
    }

    //模板下载
    getTheoryTemplate(resName="试卷（习题）模板.docx"){
        // return this.http(
        //     `${this.url}/template`,
        //     "GET"
        // )
        downloadWord(`${this.url}/template`,resName)
    }
    // downloadCatalogTemplate(resName="课程目录模板.xlsx") {
    //     downloadWord(`${this.url}/catalog/template`,resName)
    // }


    //获取习题选择过的目录树
    getDefaultExerciseCatalogTree(courseId,exerciseId){
        return this.http(
            `${this.url}/queryCourseExerciseByCourseIdAndExerciseId`,
            "GET",
            {courseId:courseId,exerciseId:exerciseId}
        )
    }

}
