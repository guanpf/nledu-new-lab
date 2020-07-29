import {Cookie} from "./storage";
import nlSocket from "@/libs/nlSocket";
import {getPlatformToken, removePlatformToken} from "@/libs/platformLib";
// import closePageMask from '@/components/closePageMask/index';

const {document, sessionStorage} = window;
let pageId;

/**
 * 获取当前开启的页面情况
 * @type {{getAll(): *, getExist(): *}}
 */
const pageInfo = {
  getAll() {
    const cookiesArray = {};
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      const keyValue = c.split("=");
      cookiesArray[keyValue[0]] = keyValue[1];
    }
    return cookiesArray;
  },
  getExist() {
    const pageArray = [];
    Object.keys(this.getAll()).forEach(item => {
      /^page\d+$/.test(item) && pageArray.push(item);
    });
    return pageArray;
  }
};

/**
 * 从cookie里获取需要监听的模块
 * @type {Array}
 */
const listenModule = Cookie.getItem("listen_module")
  ? Cookie.getItem("listen_module").split(",")
  : [];

/**
 * 第一次打开标签时检查当前浏览器的页面情况，如果又满足不存在其他标签页的情况则识别为第一次打开浏览器，删除token
 */
if (!sessionStorage.getItem("pageId")) {  // 第一次打开标签页
  if (pageInfo.getExist().length === 0 && listenModule.length > 0) {  // 首次进入系统
    listenModule.forEach(item => Cookie.removeItem(item)); // 删除指定模块的token
  }
  sessionStorage.setItem("pageId", "page" + +new Date());
}
pageId = sessionStorage.getItem("pageId");
Cookie.setItem(pageId, "1", 0);

window.addEventListener("unload", function () {
  Cookie.removeItem(pageId);
});

/**
 * 设置退出浏览器退出登录的模块名，不自动登录时调用
 * @param key
 */
export function setListenModule(key) {
  const listenModule = Cookie.getItem("listen_module");
  if (listenModule) {
    const moduleArray = listenModule.split(",").filter(item => item !== key);
    moduleArray.push(key);
    Cookie.setItem("listen_module", moduleArray.join(","), 86400);
  } else {
    Cookie.setItem("listen_module", key, 86400);
  }
}

/**
 * 移除监听登录状态，需要自动登录时调用去移除监听
 * @param key
 */
export function removeListenModule(key) {
  const listenModule = Cookie.getItem("listen_module");
  if (listenModule) {
    Cookie.setItem(
      "listen_module",
      listenModule.split(",").filter(item => item !== key).join(","),
      86400
    );
  }
}


export const subScribeLoginInOtherPlace = async (token) => {
  let socket = new nlSocket('/wbskt/nledu-websocket/v1/mandatory/offline/user');
  socket.connect({
    username: token,
    eventType: 'OFFLINEUSER'
  }).then(instance=> {
    instance.subscribe(`/topic/mandatoryOfflineUserDestinationStream/${token}`, (data)=> {
      let res = JSON.parse( data.body)
      let {token, message} = res

      setTimeout(()=> {
        let localToken = getPlatformToken()
        if (token !== localToken) {
          // 本地重新登陆 什么也不做
        }else{
          // 异地重新登陆，刷新页面
          // closePageMask({
          //   msg: message,
          //   btnText: '刷新',
          //   onClose: ()=> {
          //     removePlatformToken()
          //     window.location.reload()
          //   }
          // })

        }
      }, 1000)

    })
  })
}