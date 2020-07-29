import Index from "./index"
const namespace = "course"

export default class Course extends Index{
    constructor(){
       super();
       this.url = `${this.url||""}/${namespace}`;
    }
    getCourse(data){
        return this.http(
            `${this.url}/page`,
            "GET",
            data
        )
    }

    getCourseDetail(courseId,queryType){
        return this.http(
            `${this.url}/findById`,
            "GET",
            {courseId,queryType}
        )
    }
    addCourse(data){
//         courseContent string 非必须 摘要
//         courseLevel	string  非必须 课程等级（ID），字典类型：COURSE_LEVEL
//         courseName	string  非必须 课程名称
//         coursePreface	string非必须 前言
//         courseTarget	string  非必须 课程目标
//         courseType	string  非必须 课程类型ID（不是课程分类），字典类型：“COURSE_TYPE1”
//         coursesCover	string  非必须 封面，文件ID
//         etmhcresCourseTypeId	string  非必须课  程分类的ID
//         referencePeriod	number  非必须  建议学时
        return this.http(
            `${this.url}`,
            "POST",
            data
        )
    }
    editCourse(data){
        return this.http(
            `${this.url}`,
            "PUT",
            data
        )
    }
    deleteCourse(courseId){
        return this.http(
            `${this.url}?courseId=${courseId}`,
            "DELETE",

        )
    }
    addRelCourseCertificate(courseId,certificateId){
        return this.http(
            `${this.url}/addRelCourseCertificate`,
            "POST",
            {courseId,certificateId}
        )
    }
    deleteRelCourseCertificate(courseId,certificateId){
        return this.http(
            `${this.url}/deleteRelCourseCertificate?courseId=${courseId}&&certificateId=${certificateId}`,
            "DELETE"
        )
    }
    relCourseCertificate(courseId,certificateList){
        return this.http(
            `${this.url}/relCourseCertificate`,
            "POST",
            {id:courseId,certificateList:certificateList}
        )
    }

}
