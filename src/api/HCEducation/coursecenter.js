import Index from "./index"
import {getPlatformToken} from "@/libs/platformLib";

const namespace = "coursecenter"

export default class Course extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }

    indexCourseType() {
        let url = ''
        if (getPlatformToken()) {
            url = `${this.url}/indexCourseType`
        }else{
            url = `${this.url}/withoutlogin/indexCourseType`
        }
        return this.http(url, 'GET')
    }

    indexProfessionalDirection() {
        let url = ''
        if (getPlatformToken()) {
            url = `${this.url}/indexProfessionalDirection`
        }else{
            url = `${this.url}/withoutlogin/indexProfessionalDirection`
        }
        return this.http(url, 'GET')
    }

    indexProfessionalDirectionById(id) {
        let url = ''
        if (getPlatformToken()) {
            url = `${this.url}/indexProfessionalDirectionById?professionalDirectionId=${id}`
        }else{
            url = `${this.url}/withoutlogin/indexProfessionalDirectionById?professionalDirectionId=${id}`
        }
        return this.http(url, 'GET')
    }

    getCourseDetail(courseId,queryType){
        let data ={}
        if(courseId) data.courseId = courseId
        if(queryType) data.queryType = queryType


        let url = ''
        if (getPlatformToken()) {
            url = `${this.url}/course/detail`
        }else{
            url = `${this.url}/withoutlogin/course/detail`
        }

        return this.http(
            url,
            "GET",
            data
        )
    }

    getCoursePage(page,size,technicalField,courseTypeIds,typeId,kw,sort=2){
        let data = {}
        data.page = page
        data.size = size
        if(technicalField) data.technicalField = technicalField
        if(courseTypeIds) data.courseTypeIds = courseTypeIds
        if(typeId) data.typeId = typeId
        if(kw) data.kw = kw
        data.sort = sort



        let url = ''
        if (getPlatformToken()) {
            url = `${this.url}/course/page`
        }else{
            url = `${this.url}/withoutlogin/course/page`
        }

        return this.http(
            url,
            "GET",
            data
        )
    }

}
