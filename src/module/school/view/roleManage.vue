<template>
    <div >
        <div class="flexBox">
            <div>
                <div class='class-list'>
                    <div 
                    v-for='item in roleList' 
                    :class="item.role_id==classItem.role_id?'is-active class-item-name':'class-item-name'" 
                    :key="item.role_id"  
                    @click="chooseClass(item)">{{item.role}}</div>
                </div>
                   
                <!-- <el-collapse v-model="activeNames" class='class-list' @change="handleChange">
                    <el-collapse-item class="class-item-title" title="角色管理" name="1">
                        </el-collapse-item>
                </el-collapse> -->
                <el-button type=primary @click="editClassVisible=true">添加角色</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'roleManage',
    data(){
        return{
            roleList:[
                {role:'超级管理员',role_id:'1'},
                {role:'老师',role_id:'2'},
                {role:'学生',role_id:'3'},
                {role:'助教',role_id:'4'}
            ],
            classItem:{
                role:'超级管理员',role_id:'1'
            }
        }
    },
    methods:{
        //选择班级
        chooseClass(value){
            console.log(value)
            this.classItem = value
            // let classIndex = this.classArr.findIndex(val=>{
            //         return value.id == val.id
            // })
            // if(classIndex>-1){
            //     this.classItem = this.classArr[classIndex]
            // }else{
            //     this.classItem = value
            // }
        }
    }
}
</script>
<style lang="scss">
.flexBox{
        display: flex;
        justify-content: start;
        padding:30px;
        width:60%;
        margin:0 auto;
        
        .class-list{
            width:80%;
            .class-item-name{
                height:40px;
                line-height: 40px;
                border-bottom:1px solid #C0C4CC;
                padding-left:20px;
                background: #f1f1f1;
            }
            .class-item-name:nth-child(1){
                border-top:1px solid #C0C4CC;
            }
            .is-active{
                background: #fff;
                color:#4c87fb
            }
        }
    }
</style>