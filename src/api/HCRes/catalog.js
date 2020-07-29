import Index from "./index"
const namespace = "catalog"

export default class Course extends Index{
    constructor(){
        super();
        this.url = `${this.url||""}/${namespace}`;
    }
    getCatalogByCourse(courseId,queryType=-4){
        let data = {}
        if(courseId)data.courseId = courseId
        if(queryType)data.queryType = queryType
        return this.http(
            `${this.url}/detailByCourseId`,
            "GET",
            data
        )
    }
    getCatalogByCatalogId(catalogId,queryType=-4) {
        let data = {}
        if(catalogId)data.catalogId = catalogId
        if(queryType)data.queryType = queryType
        return this.http(
            `${this.url}/detailByCatalogId`,
            "GET",
            data
        )
    }
    addCatalog(data){
        return this.http(
            `${this.url}`,
            "POST",
            data
        )
    }
    deleteCatalog(catalogId){
        return this.http(
            `${this.url}?catalogId=${catalogId}`,
            "DELETE",
        )
    }
    editCatalog(data){
        return this.http(
            `${this.url}`,
            "PUT",
            data
        )
    }

    getCourseCatalog(catalogPlanId){
        //课程目录查询（教案）
        return this.http(
            `${this.url}/teachingplan/${catalogPlanId}`,
            "GET",
        )
    }


}
