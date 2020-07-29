
import Index from "./index"
const namespace = "vocation"

export default class Course extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    findVocationSkillTree(){
        return this.http(
            `${this.url}/findVocationSkillTree`,
            "GET"
        )
    }
    editSkill(data){
        return this.http(
            `${this.url}`,
            "POST",
            data
        )
    }
    getSkill(id){
        return this.http(
            `${this.url}`,
            "GET",
            {id:id}
        )
    }
    deleteSkill(id){
        return this.http(
            `${this.url}?id=${id}`,
            "DELETE",

        )
    }
}
