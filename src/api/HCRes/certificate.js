import Index from "./index"
const namespace = "certificate"

export default class Course extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }

    getCertificate(page, kw) {
        let data = {page: page, size: 999}
        if (kw) data.kw = kw
        return this.http(
            `${this.url}/page`,
            "GET",
            data
        )
    }
}


