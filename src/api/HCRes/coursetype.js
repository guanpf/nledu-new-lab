import Index from './index';
const namespace = 'course/type';

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
