import Index from "./index";

const namespace = "systemconfig";

export default class systemconfig extends Index{
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }

    getUserMaxLimit(){
        return this.http(
            `${this.url}/CONTEST_IDENTIFICATION_CODE`,
            "GET"
        )
    }

    getSystemConfigList(startPage,limit) {
        return this.http(
            `${this.url}`,
            'GET',
            {startPage,limit}
        )
    }

    editSystemConfig(content) {
        return this.http(
            `${this.url}/editSystemConfig`,
            'PUT',
            content
        )
    }
}
