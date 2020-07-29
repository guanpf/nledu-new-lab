import Index from "./index";
import {getPlatformCode} from "@/libs/platformLib";
const namespace = 'contest/user';

export default class contest extends Index{
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    addUser(content){
        return this.http(
            `${this.url}/adduser`,
            "POST",
            content
        )
    }
    editUser(content){
        return this.http(
            `${this.url}/editUser`,
            "PUT",
            content
        )
    }
    deactivateUser(userId){
        return this.http(
            `${this.url}/deactivateuser?userId=${userId}`,
            "PUT",
        )
    }

    getUserList(pid,roleIds,keywords,startPage,limit,type){
        return this.http(
            `${this.url}/`,
            "GET",
            {pid,roleIds,keywords,startPage,limit,type}
        )
    }
    
    getUserListInTeamManage({ teamType = 1, productType = 5, keyword = false }) {
        return this.http(
          `${this.url}/team?teamType=${teamType}&productType=${productType}${keyword ? "&keyword=" + keyword : ""}`,
          "GET"
        )
    }
    downloadTemplate(token){
        return this.http(
            `${this.url}/template?token=` + token,
            'GET'
        )
    }

    uploadUrl(productType, type = 1) {
        return `${this.url}/${productType}/import/${type}`
    }

    getUserIdentificationcode(teamName,userLimit){
        return this.http(
            `${this.url}/identificationcode?teamName=${teamName}&userLimit=${userLimit}`,
            "GET"
        )
    }
}
