import Index from "./index"
import {downloadWord} from "@/libs/download"
const namespace = "hcrtc"

export let hcUploadUrl = '/hcfile/nledu-etmlab-hc-res/v1/hcrtc'

export default class Course extends Index {
//     RES_TYPE_STANDARD("1", "课程标准"),//word文件，富文本的解析方式与教材（RES_TYPE_AUXILIARY）相同
//     RES_TYPE_AUXILIARY("2", "配套材料"), //word文件，教材，配套材料 （电子版教材） 格式docx
//     RES_TYPE_VIDEO("3", "教学视频"),
//     RES_TYPE_COURSE_WARE("4", "教学课件"), //powerpoint文件 教学课件（电子版讲义）格式pptx
//     RES_TYPE_CODE("5", "代码"),
//     RES_TYPE_PACKAGE("6", "工具包"),
//     RES_TYPE_CREDENTIAL("7", "证书标准"),//暂无
//     RES_TYPE_COURSE_OUTLINE("8", "考试大纲"),//暂无
//     RES_TYPE_COURSE_TEACH_OUTLINE("9", "教学大纲"),//word文件，富文本的解析方式与教材（RES_TYPE_AUXILIARY）相同
//     RES_TYPE_EXPERIMENT_MANUAL("10", "实验"), // 实验 word文件
//     RES_TYPE_EXAM("11", "试卷"), // word 文件
//     RES_TYPE_COURSE("12", "课程"),// eushcmgr_rtc_permissions专用分类 资源上传用不到
//     RES_TYPE_CATALOG_PLAN("13", "教案"),//
//     RES_TYPE_USER_DEFINED("99", "自定义课件"),//word文件，富文本的解析方式与教材（RES_TYPE_AUXILIARY）相同
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    currencyFileUpload(data){
        //通用文件上传
        //type:1:是平台资源
        // 2：教学资源，包括课程封面，文件等资源
                return this.http(
            `${this.url}`,
            "POST",
            data
        )
    }
    // file	文件	是 文件
    // catalogId	T文本	是 章节ID
    // courseId	T文本	是 课程ID
    // isCover	T文本	是 是否覆盖 1是 0否
    // isRepeat	T文本	是 是否重复 1是 0否
    //教案上传
    teachingPlanFileUpload(file,catalogId,courseId,isPublic=1){
        let formdata = new FormData();
        formdata.append("file",file);
        formdata.append("catalogId",catalogId);
        formdata.append("courseId",courseId);
        formdata.append("isCover",0);
        formdata.append("isRepeat",1);
        formdata.append("isPublic",isPublic)
        return this.http(
            `${hcUploadUrl}/importteachingplan`,
            "POST",
            formdata
        )
    }
    //删除教案
    deleteTeachingPlan(id,catalogId){
        return this.http(
            `${this.url}/teachingplan/${id}`,
            "DELETE"
        )
    }
    //习题、课后作业、试卷上传
    homeworkFileUpload(file,type,appType,catalogId,courseId,isPublic=1){
        let formdata = new FormData();
        formdata.append("file",file);
        formdata.append("type",type);
        formdata.append("appType",appType);
        formdata.append("catalogId",catalogId);
        formdata.append("courseId",courseId);
        formdata.append("isCover",0);
        formdata.append("isRepeat",1);
        formdata.append("isPublic",isPublic)
        return this.http(
            `${hcUploadUrl}/importexerciseset`,
            "POST",
            formdata
        )
    }
    //删除习题集
    deleteHomework(setId){
        return this.http(
            `${this.url}/exerciseset/${setId}`,
            "DELETE"
        )
    }
    //除实验、习题、教案文件上传
    courseResourceUpload(file,resType,catalogId,courseId,isPublic=1){
        let isRepeat = 1
        // if(resType==2||resType==1){
        //     isRepeat = 0
        // }
        // if(resType==3)isRepeat=0
        let formdata = new FormData();
        formdata.append("file",file);
        formdata.append("resType",resType);
        formdata.append("catalogId",catalogId);
        formdata.append("courseId",courseId);
        formdata.append("isCover",0);
        formdata.append("isRepeat",isRepeat);
        formdata.append("isPublic",isPublic)
        return this.http(
            `${hcUploadUrl}/catalogres`,
            "POST",
            formdata
        )
    }
    //资源删除
    deleteResource(resId,routeId){
        return this.http(
            `${this.url}/res?resId=${resId}&&routeId=${routeId}`,
            "DELETE"
        )
    }
    //保存章节实验关系
    saveExerpimentTrel(experimentIds,catalogId){
        return this.http(
            `${this.url}/saveexperimentrel`,
            "PUT",
            {experimentIds,catalogId}
        )
    }
    //删除章节实验关系
    deleteExperimentTrel(experimentId){
        return this.http(
            `${this.url}/catalogexperiment/${experimentId}`,
            "DELETE"
        )
    }
    //导入课程目录
    importcatalog(file){
        return this.http(
            `${hcUploadUrl}/importcatalog`,
            "POST",
            file
        )
    }
    deleteCurrencyRtc(id){
        return this.http(
            `${this.url}/${id}`,
            "DELETE"
        )
    }
    DownloadFile(multiResId) {
        return this.http(
            `${this.url}/download`,
            "GET",
            {multiResId}
        )
    }
    catalogFileUpload(file,resType,catalogId){
        return this.http(
            `${hcUploadUrl}/catalogres`,
            "POST",
            {file,resType,catalogId}
        )
    }
    downloadCatalogTemplate(resName="课程目录模板.xlsx") {
        downloadWord(`${this.url}/catalog/template`,resName)
    }
    download(multiResId,name){
        downloadWord(`${this.url}/download?multiResId=${multiResId}`,name)
    }
    experimentGuide(file,id){
        return this.http(
            `${hcUploadUrl}/experiment/${id}`,
            "PUT",
            file
        )
    }

    //资源查找
    getResHcrtc(id){
        let data = {}
        if(id) data.id = id
        return this.http(
            `${this.url}`,
            "GET",
            data
        )
    }

    //单元简介信息
    getResHcrtcSub(resId,catalogId){
        let data ={}
        if(resId) data.resId = resId;
        if(catalogId) data.catalogId = catalogId
        return this.http(
            `${this.url}/unitintro`,
            "GET",
            data
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
    //用户章节自定义课件上传
    userDefineResUpload(file,catalogId,courseId,isPublic,productType){
        //
        let formdata = new FormData();
        formdata.append('file',file);
        formdata.append('catalogId',catalogId);
        formdata.append('courseId',courseId);
        formdata.append("isCover",0);
        formdata.append("isRepeat",1);
        formdata.append('isPublic',isPublic);
        if(productType)formdata.append('productType',productType)
        return this.http(
            `${hcUploadUrl}/userdefinedres`,
            "POST",
            formdata
        )
    }
    deleteUserDefinedRes(resId){
        return this.http(
            `${this.url}/userdefinedres?resId=${resId}`,
            "DELETE"
        )
    }
    //教案自定义课件上传
    teachingDefineResUpload(courseId,file,catalogId,isPublic,productType,catalogPlanId){
        let formdata = new FormData();
        formdata.append('courseId',courseId);
        formdata.append('file',file);
        formdata.append('catalogId',catalogId);
        formdata.append("isCover",1);
        formdata.append("isRepeat",1);
        formdata.append('isPublic',isPublic);
        formdata.append('catalogPlanId',catalogPlanId);
        formdata.append('productType',productType);
        return this.http(
            `${hcUploadUrl}/lessonplan/userdefinedres`,
            "POST",
            formdata
        )
    }

    //根据章节ID查询教案
    getTeachingPlan(catalogPlanId){
        return this.http(
            `${this.url}/teachingplan/${catalogPlanId}`,
            "GET",
        )
    }

    getTeachingP(catalogId){
        return this.http(
            `${this.url}/teachingplan`,
            "GET",
            {catalogId:catalogId}
        )
    }
    checkres(resId) {
        return this.http(`${this.url}/checkres`, "GET", {resId})
    }


    addJupyter(data) {
        return this.http(
            `${this.url}/catalog/jupyter`,
            "POST",
            data)
    }
    editJupyter(data) {
        return this.http(
            `${this.url}/catalog/jupyter`,
            "PUT",
            data
        )
    }
    deleteJupeter(id){
        return this.http(
            `${this.url}/catalog/jupyter/${id}`,
            "DELETE"
        )
    }

}
