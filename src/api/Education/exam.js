import Index from "./index";
import {getPlatformCode} from "@/libs/platformLib";

const namespace = "exam";

export default class ClassRecord extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }

    formalExamList() {
        let platformCode = getPlatformCode()
        return this.http(
            `${this.url}/exercise/querybyexternalqids`,
            'GET',
          {
              productType: platformCode
          }
        )
    }

    formalExamAdd(exerciseids) {
        let platformCode = getPlatformCode()

        return this.http(
            `${this.url}/exercise/edit/${platformCode}`,
            'POST',
            exerciseids

        )
    }

    formalExamDetail(){
        let productType = getPlatformCode()
        return this.http(
            `${this.url}/detail`,
            'GET',
          {
              productType
          }
        )
    }
}
