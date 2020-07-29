import Index from "./index";
const namespace = "vm";

export default class ExerciseSet extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getCurrentVm(instanceId){
        // return this.http(
        //     `/api/nledu-etmlab-education/vm/d2d95f2ba9d349c5a107057e33738d85/current`,
        //     'GET'
        // )
        return this.http(
            `${this.url}/${instanceId}/current`,
            'GET'
        )
    }
}
