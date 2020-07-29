import Index from './index';
import {getPlatformToken} from "@/libs/platformLib";
let namespace = 'course/type';
if (getPlatformToken()) {
  namespace = 'course/inner/type'
}

/*
* get 获取目录树
* post 更新
* put 新增
* delete 删除
*
* */
export default class Coursetype extends Index{

  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }

}
