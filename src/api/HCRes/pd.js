import Index from "./index"
const namespace = "pd"

export default class Course extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getCareerData(startPage,limit,keywords) {
        //查询列表页
        let data = {}
        if(startPage) data.startPage=startPage
        if(limit) data.limit=limit
        if(keywords) data.keywords = keywords
        return this.http(
            `${this.url}`,
            "GET",
            data   //根据接口，keywords需要传入数组
        )
    }


    addCareerPath(content){
        return this.http(
            `${this.url}`,
            "POST",
            content
        )
    }

    deleteCareerPath(id){
        return this.http(
            `${this.url}/${id}`,
            "DELETE",
        )
    }

    getCareerPathSolo(id){
        return this.http(
            `${this.url}/${id}`,
            "GET"
        )
    }
}
