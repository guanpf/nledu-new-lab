import Index from "../Education";
const namespace = "major";

export default class Portal extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    async getStudentMap(id) {

        return this.http(`${this.url}/learningMap/${id}`,"GET")
    }

}
