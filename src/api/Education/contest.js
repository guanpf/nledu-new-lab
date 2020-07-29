import Index from "./index";
import {downloadWord} from "@/libs/download"
import axios from "@/libs/axios";
import {getPlatformToken} from "@/libs/platformLib";
const namespace = "contest";

export default class Lesson extends Index {
    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    getExperiment(rootSetId,setId,createType,experimentId) {
        console.log(rootSetId, setId, createType, experimentId);
        return this.http(`${this.url}/experiment/${rootSetId}/${setId}`, "POST",{createType,experimentId});
    }
    
    experimentReport(instanceId, name = "竞赛结果.zip") {
      return new Promise(async resolve => {
        // const res = await downloadWord(
        //   `${this.url}/experiment/${instanceId}/report`,
        //   name
        // );
        let ajax = axios.customAxios({
          timeout: 30000,
          responseType: "blob",
          header: {
            Authorization: getPlatformToken()
          }
        });
  
        ajax.get(`${this.url}/experiment/${instanceId}/report`).then(res => {
          let name = decodeURI(res.headers["content-disposition"].replace("attachment;filename=", ""));
          resolve(res);
          if (window.navigator.msSaveOrOpenBlob) {
            // ie
            window.navigator.msSaveOrOpenBlob(res.data, name);
          } else {
            let downloadElement = document.createElement("a");
            let href = window.URL.createObjectURL(res.data); //创建下载的链接
            downloadElement.href = href;
            downloadElement.download = name; //下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement); //下载完成移除元素
            window.URL.revokeObjectURL(href); //释放掉blob对象
          }
        });
      });
    }
}
