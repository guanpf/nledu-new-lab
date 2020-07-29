import Index from "./index";
import {getPlatformCode} from "@/libs/platformLib";

const namespace = "role";

/*
 * 角色管理页面API
 *
 * @return {
 *    code: 0,
 *    data: [{}],
 *    message: 'success'
 *  }
 * */
export default class Role extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getMenu(productId,roleId) {
        return this.http(
            `${this.url}/menu/${productId}/${roleId}`,
            "GET",
        )
    }
    getRoleList(productId,roleName,startPage,limit){
        return this.http(
            `${this.url}/list`,
            "GET",
            {productId,roleName,startPage,limit}
        )
    }
    addNewRole(content){
        return this.http(
            `${this.url}`,
            'POST',
            content
        )
    }
    editMenu(content){
        return this.http(
            `${this.url}/menu`,
            'POST',
            content
        )
    }
    deleteRole(roleid){
        return this.http(
            `${this.url}/${roleid}`,
            'DELETE',
            {roleid}
        )
    }

    getProductRoleList(type){
        return this.http(
            `${this.url}/product/${type}`,
            "GET",
        )
    }
}
