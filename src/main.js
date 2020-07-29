import "./libs/checkLogin"
import "./plugin/sentry"
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueAxios from "vue-axios";
import axios from "@/libs/axios";
// import config from "../config";
import ElementUi from "element-ui";
import NewlandUi from "@nledu/newland-ui/dist/index.umd";
import Vue2OrgTree from 'vue2-org-tree/dist/index';
import 'vue2-org-tree/dist/style.css';

// import "@/scss/theme/src/index.scss";
import "@/scss/index.scss";

import i18n from "@/locale";
// import Scrollspy from "vue2-scrollspy";
import Scrollspy from "vue2-scrollspy/dist/index";

// import "./permission";

import {subScribeLoginInOtherPlace} from "@/libs/checkLogin";
import {getPlatformCode, getPlatformToken} from "@/libs/platformLib";

import Message from '@/libs/message'

Vue.use(Vue2OrgTree);

Vue.use(Scrollspy);

// import "@/scss/theme/dist/default.css";

Vue.use(VueAxios, axios.customAxios());

Vue.use(ElementUi, {
  i18n: (key, val) => i18n.t(key, val)
});
Vue.use(NewlandUi, {
  i18n: (key, val) => i18n.t(key, val)
});

Vue.config.productionTip = false;

// Vue.prototype.$config = config;

// 强制下线逻辑
let token = getPlatformToken()
if(token) {
  subScribeLoginInOtherPlace(token)
}

// 页面缩放提示
window.addEventListener('resize',()=> {
  checkRatio()
})
function checkRatio() {
  var ratio = 0,
      screen = window.screen,
      ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  }
  else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  }
  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  if (ratio){
    ratio = Math.round(ratio * 100);
  }
  if (!(ratio === 100 || ratio === 200 || ratio === 150 || ratio === 75)) {
    alert('当前页面缩放比例不为100%；可能导致页面显示异常')
  }
}

// checkRatio()
// 检测页面是否缩放结束

let code = getPlatformCode()
if (code === 8 ||code ===9 ) {
  // box-sizing 修复
  let a = document.createElement('style')
  a.innerHTML = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  box-sizing: border-box;
}`
  document.body.appendChild(a)
}
Vue.prototype.$message = Message
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
