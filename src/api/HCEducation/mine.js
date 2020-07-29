import Index from './index';
const namespace = 'mine';
/*
* post {id} 加入我的课程
* */
export default class Mine extends Index{

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getCourseDetail(courseId,queryType=-3){
        return this.http(
            `${this.url}/course/detail`,
            "GET",
            {courseId:courseId,queryType:queryType}
        )
    }
    getCourseList(technicalId){
        return this.http(
            `${this.url}/course/list`,
            "GET",
            {technicalId:technicalId}
        )
    }

    getUnitDetail(catalogId,queryType=-3){
        return this.http(
            `${this.url}/catalog/detail`,
            "GET",
            {catalogId:catalogId,queryType:queryType}
        )
    }

    addToMine(courseId) {
        return this.http(`${this.url}/${courseId}`, 'POST')
    }

}
