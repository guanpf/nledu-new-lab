import Index from "./index";

const namespace = 'product';

export default class Product extends Index{

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getProduct(flag=false){
        // true 时过滤统一管理系统
        return this.http(
            `${this.url}`,
            "GET",
          {flag}
        )
    }
}
