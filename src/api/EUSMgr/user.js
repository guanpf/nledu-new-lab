import Index from "./index";

const namespace = 'user';

export default class user extends Index{

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    logout() {
        return this.http(
            `${this.url}/logout`,
            "DELETE",
        )
    }
    getUserMenuList(productId,startPage,limit,keyword,roleId,orgId){
        if(productId=='-1'){
            productId = ''
        }
        if(roleId=='-1'){
            roleId = ''
        }
        return this.http(
            // /nledu-eusmgr-system/user/{productId}/{startPage}/{limit}
            `${this.url}/${startPage}/${limit}`,
            "GET",
            {productId,roleId,orgId,keyword}
        )
    }
    editUser(obj) {
        // /nledu-eusmgr-system/user/editproductuser
        return this.http(
            `${this.url}/editproductuser`,
            "PUT",
            obj
        )
    }
    postUser(data){
        // /nledu-eusmgr-system/user/addproductuser
        return this.http(
            `${this.url}/addproductuser`,
            "POST",
            data
        )
    }

    getUserLog(startPage,limit,keywords) {
        let data ={
            startPage:startPage,
            limit:limit,
        }
        if(keywords)data.keywords=keywords
        return this.http(
            `${this.url}/log`,
            "GET",
            data
        )
    }
}
