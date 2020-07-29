import Index from './index';
const namespace = 'note';

export default class Note extends Index{

    constructor() {
        super();
        this.url = `${this.url || ""}/${namespace}`;
    }
    //新建笔记
    createNote(data){
        return this.http(
            `${this.url}`,
            "POST",
            data
            )
    }
    //笔记列表
    getNote(startPage,limit,rtcId,keyWord){
        let data = {
            pageNum:startPage,
            pageSize:limit,
            rtcId:rtcId
        }
        if(keyWord)data.keyWord = keyWord
        return this.http(
            `${this.url}`,
            "GET",
            data
        )
    }
    deleteNote(id){
        return this.http(
            `${this.url}/${id}`,
            "DELETE"
        )
    }
    updateNote(data){
        return this.http(
            `${this.url}`,
            "PUT",
            data
        )
    }
}
