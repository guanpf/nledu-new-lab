import Index from "./index"
const namespace = "experiment"


/*
* get(id) 获取实验详情
* */
export default class Course extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getExperiment(experimentId){
        return this.http(
            `${this.url}`,
            "GET",
            {id:experimentId}
        )
    }
    getExperimentDetail(data) {
        //分页查询
        // page	否 页码，从0开始，如果为空，默认0
        // size	否 分页尺寸，如果为空，默认10
        // technicalField	否 技术领域ID，如果为空，代表不限制
        // vocationSkillIds	否 职业技能ID数组，如 “[ ID1,ID2 ]”或 “[ ID1 ]”，如果为空，代表不限制
        // taskIds	否 工作任务ID数组，如 “[ ID1,ID2 ]”或 “[ ID1 ]”，如果为空，代表不限制
        // knowledgeIds	否 知识点ID数组，如 “[ ID1,ID2 ]”或 “[ ID1 ]”，如果为空，代表不限制
        // kw	否 关键字
        return this.http(
            `${this.url}/page`,
            "GET",
            data
        )
    }
    findAllExperimentKnowlege(){
        return this.http(
            `${this.url}/perimeter/findAllExperimentKnowledge`,
            "GET"
        )
    }
    addExperiment(data){
        return this.http(
            `${this.url}`,
            "POST",
            data
        )
    }
    editExperiment(data){
        return this.http(
            `${this.url}`,
            "PUT",
            data
        )
    }
    uploadExperiment(data,id){
        return this.http(
            `${this.url}/${id}`,
            "PUT",
            data
        )
    }



    // 查询全部知识点
    findAllExperimentKnowledge() {
        return this.http(`${this.url}/perimeter/findAllExperimentKnowledge`, "GET");
    }

    search(data = {}) {
        for (let i in data) {
            if (!data[i]) delete data[i]
        }
        return this.http(`${this.url}/page`,"GET", data)
    }

    get(id) {
        return this.http(`${this.url}`, 'GET', {id})
    }
    delete(id) {
        // restful ???
        // return this.http( `${this.url}`, 'DELETE', {experimentId: id})
        return this.http( `${this.url}?experimentId=${id}`, 'DELETE')
    }
    addExperimentComponent(data){
        //新增实验组件
        return this.http(
            `${this.url}/config/componentservice`,
            "POST",
            data
        )
    }

    editExperimentComponent(data){
        //更新实验组件
        return this.http(
            `${this.url}/config/componentservice`,
            "PUT",
            data
        )
    }
    configureExperiment(data){
        return this.http(
            `${this.url}/config/`,
            "POST",
            data
        )
    }
    getALLExperimentMirror(keyword){
        let data = {}
        if(keyword)data.keyword = keyword
        return this.http(
            `${this.url}/config/mirror/all`,
            "GET",
            data
        )
    }
    getExperimentMirror(startPage,limit,keywords,status){
        //分页查询镜像
        let data = {}
        if(startPage) data.startPage=startPage
        if(limit) data.limit=limit
        if(keywords) data.keywords = keywords
        if(status) data.status = status
        return this.http(
            `${this.url}/config/mirror`,
            "GET",
            data
        )
    }

    getExperimentMirrorSolo(id){
        //查询单个镜像数据
        return this.http(
            `${this.url}/config/mirror/${id}`,
            "GET"
        )
    }


    addExperimentMirror(content){
        //新增镜像
        return this.http(
            `${this.url}/config/mirror`,
            "POST",
            content
        )
    }

    editExperimentMirror(content){
        //编辑镜像
        return this.http(
            `${this.url}/config/mirror`,
            "PUT",
            content
        )
    }

    searchComponent(keyword){
        //搜索所有组件或根据关键字搜索组件
        return this.http(
            `${this.url}/config/componentservice/all`,
            "GET",
            {keyword}
        )
    }

    deleteExperimentIma(content){
        //批量删除镜像
        return this.http(
            `${this.url}//config/mirror`,
            "DELETE",
            content
        )
    }

    deleteExperimentImaSolo(id){
        //单个删除镜像
        return this.http(
            `${this.url}/config/mirror/${id}`,
            "DELETE"
        )
    }

    freshenExperimentIma() {
        //同步镜像
        return this.http(
            `${this.url}//config/mirror/refresh`,
            "PUT"
        )
    }




    getExperimentCom(startPage,limit,keywords,componentServiceType){
        //分页查询组件
        let data = {}
        if(startPage) data.startPage=startPage
        if(limit) data.limit=limit
        if(keywords) data.keywords = keywords
        if(componentServiceType) data.componentServiceType = componentServiceType
        return this.http(
            `${this.url}/config/componentservice`,
            "GET",
            data
        )
    }


    getExperimentComSolo(id){
        //单个查询组件
        return this.http(
            `${this.url}/config/componentservice/${id}`,
            "GET"
        )
    }

    deleteExperimentComSolo(id){
        //单个删除组件
        return this.http(
            `${this.url}/config/componentservice/${id}`,
            "DELETE"
        )
    }

    getExperimentSpe(startPage,limit,keywords){
        //分页查询规格列表
        let data = {}
        if(startPage) data.startPage=startPage
        if(limit) data.limit=limit
        if(keywords) data.keywords = keywords
        return this.http(
            `${this.url}/config/standard/page`,
            "GET",
            data
        )
    }

    getExperimentSpeSolo(id){
        //单个查询规格
        return this.http(
            `${this.url}/config/standard/${id}`,
            "GET"
        )
    }



    addExperimentSpe(content){
        //新增规格
        return this.http(
            `${this.url}/config/standard`,
            "PUT",
            content
        )
    }

    editExperimentSpe(content,id){
        //编辑规格
        return this.http(
            `${this.url}/config/standard/${id}`,
            "POST",
            content
        )
    }

    freshenExperimentSpe(){
        //刷新规格ID
        return this.http(
            `${this.url}/config/standard`,
            "POST",
        )
    }

    deleteExpetimentSpeSolo(id){
        //单个删除规格
        return this.http(
            `${this.url}/config/standard/${id}`,
            "DELETE",
        )
    }

    deleteExperimentSpe(content){
        //批量删除规格
        return this.http(
            `${this.url}/config/standard?id=${content}`,
            "DELETE",
        )
    }

}
