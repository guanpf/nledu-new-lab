import axios from "./axios";
import {getPlatformToken} from "@/libs/platformLib";
export default function download(srcUrl, rename) {
  if (getExplorer() === "IE") {
    window.location.href = srcUrl;
    return;
  }
  const elm = document.createElement("a");
  elm.setAttribute("href", srcUrl);
  elm.setAttribute("download", rename);
  elm.click();
}
const getExplorer = () => {
  const ua = window.navigator.userAgent;
  const isExplorer = exp => {
    return ua.indexOf(exp) > -1;
  };
  if (isExplorer("MSIE")) return "IE";
  else if (isExplorer("Firefox")) return "Firefox";
  else if (isExplorer("Chrome")) return "Chrome";
  else if (isExplorer("Opera")) return "Opera";
  else if (isExplorer("Safari")) return "Safari";
};
export function downloadWord(url, name = "试卷.doc") {
    let ajax = axios.customAxios({
    timeout: 30000,
    responseType: "blob",
    header: {
      Authorization: getPlatformToken()
    }
  });

  return ajax.get(url).then(res => {
    if (window.navigator.msSaveOrOpenBlob) {
      // ie
      window.navigator.msSaveOrOpenBlob(res.data, name);
      return true;
    } else {
      let downloadElement = document.createElement("a");
      let href = window.URL.createObjectURL(res.data); //创建下载的链接
      downloadElement.href = href;
      downloadElement.download = name; //下载后文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); //点击下载
      document.body.removeChild(downloadElement); //下载完成移除元素
      window.URL.revokeObjectURL(href); //释放掉blob对象
      return true;
    }
  });
}
