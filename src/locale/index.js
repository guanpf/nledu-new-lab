import Vue from "vue";
import VueI18n from "vue-i18n";
import customZhCn from "@/locale/lang/zh-CN";
import customEnUs from "@/locale/lang/en-US";
// import enUsLocale from 'iview/dist/locale/en-US';
// import zhCnLocale from 'iview/dist/locale/zh-CN';
import { localRead } from "@/libs/util";

import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";

Vue.use(VueI18n);

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language;
const localLang = navLang === "zh-CN" || navLang === "en-US" ? navLang : false;
let lang = localLang || localRead("local") || "zh-CN";

Vue.config.lang = lang;
// console.log(Vue);
// console.log(Vue.config);
// vue-i18n 6.x+写法
// Vue.locale = () => {}
const messages = {
  "zh-CN": { ...zhLocale, ...customZhCn },
  "en-US": { ...enLocale, ...customEnUs }
};
const i18n = new VueI18n({
  locale: lang,
  messages
});

export default i18n;

// vue-i18n 5.x写法
// Vue.locale('zh-CN', Object.assign(zhCnLocale, customZhCn))
// Vue.locale('en-US', Object.assign(zhTwLocale, customZhTw))
// Vue.locale('zh-TW', Object.assign(enUsLocale, customEnUs))
