<template>
    <div>
        <div class="flexBox">
            <div>
                <el-collapse v-model="activeNames" class='class-list' @change="handleChange">
                    <el-collapse-item class="class-item-title" title="班级" name="1">
                        <div v-for='item in classList' :class="item.id==classItem.id?'is-active class-item-name':'class-item-name'" :key="item.id"  @click="chooseClass(item)">{{item.name}}</div>
                    </el-collapse-item>
                </el-collapse>
                <el-button type=primary @click="editClassVisible=true">添加班级</el-button>
            </div>
            <div>
                <!-- 全部人员 -->
                <div v-show="classItem.id=='-1'">
                    <div>
                        <span class='inline-box '>{{classItem.name}}</span>
                        
                        <el-select v-model="memState" placeholder="请选择" class='inline-box'>
                            <el-option
                            v-for="item in memStateList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                        <el-input class='inline-box' v-model="memberName" placeholder="请输入名称"></el-input>
                        <el-button class='common-btn' size="small" type="primary" >搜索</el-button>
                        <el-button class='common-btn align-right' size="small" type="primary" @click="AddMember">添加成员</el-button>
                    </div>
                    <div>
                        <el-table :data="allMember" border style="width: 100%">
                            <el-table-column
                                prop="user_name"
                                label="用户名"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="account"
                                label="账号"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="role"
                                label="角色">
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级">
                            </el-table-column>
                            <el-table-column
                            prop="opt"
                            fixed="right"
                            label="操作"
                            width="150">
                            <template slot-scope="scope">
                                <el-button type="text" @click='editCustomShow(scope.row)' size="small">编辑</el-button>
                                <el-button  class="borderNone" type="text" slot="reference" @click="delPopShow(scope.$index)" >删除</el-button>
                                <el-popover
                                    placement="top"
                                    trigger="click"
                                    v-model="scope.row.visible"
                                    width="160">
                                    <p ><i class="el-icon-warning"></i>确定要删除吗？</p>
                                    <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click.native="scope.row.visible=false" >取消</el-button>
                                    <el-button type="danger" size="mini" @click="deleteRow(scope.$index,scope.row,scope)"  >确定</el-button>
                                    </div>
                                </el-popover>
                                
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <el-dialog
                        :title="'编辑成员'+`${customMsg.user_name}`"
                        :visible.sync="editCustomVisible"
                        width="30%">
                        <div>
                            <div class='role-select'><span>个人角色</span><el-radio v-model="customRole" label="老师">老师</el-radio></div>
                            <div class='role-select'><span> &nbsp </span><el-radio v-model="customRole" label="学生">学生</el-radio></div>
                            <div class='role-select'><span> &nbsp </span><el-radio v-model="customRole" label="助教">助教</el-radio></div>
                            <div class='role-select'><span>默认角色</span><el-radio v-model="customRole" label="默认">学生</el-radio><div>来自'{{customMsg.class}}'</div></div>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="editCustomVisible = false">取 消</el-button>
                            <el-button type="primary" @click="changeRole">确 定</el-button>
                        </span>
                    </el-dialog>
                </div>
                <!-- 选择班级的人员 -->
                <div v-show="classItem.id!='-1'">
                    <div class='class-content-top'>
                        <span class='inline-box '>{{classItem.name}}</span>
                        <el-input class='inline-box' v-model="memberName" placeholder="请输入名称"></el-input>
                        <el-button class='common-btn' size="small" type="primary" >搜索</el-button>
                        <div class="align-right">
                            <el-button class='common-btn' size="small" type="primary" @click="addMemberVisible = true">添加成员</el-button>
                            <el-button style="width: 40px;font-size: 18px!important;" icon="el-icon-edit" @click="editClassShow"></el-button>
                            <el-button style="width: 40px;font-size: 18px!important;" icon="el-icon-delete" @click="delClassVisible=true"></el-button>
                        </div>
                    </div>
                    <div class="class-info-row">
                        <el-row>
                            <el-col :span='4' class="odd-span"><div>人数</div></el-col>
                            <el-col :span='8' class="even-span">{{classItem.num}}</el-col>
                            <el-col :span='4' class="odd-span">创建日期</el-col>
                            <el-col :span='8' class="even-span">{{classItem.ctime}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span='4' class="odd-span">角色</el-col>
                            <el-col :span='8' class="even-span">{{classItem.role}}</el-col>
                            <el-col :span='4' class="odd-span">计算资源</el-col>
                            <el-col :span='8' class="even-span">{{classItem.source}}</el-col>
                        </el-row>
                    </div>
                    <div>
                        <el-table :data="allMember" border style="width: 100%">
                            <el-table-column
                                prop="user_name"
                                label="用户名"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="account"
                                label="账号"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="role"
                                label="角色">
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级">
                            </el-table-column>
                            <el-table-column
                            prop="opt"
                            fixed="right"
                            label="操作"
                            width="150">
                            <template slot-scope="scope">
                                
                                <!-- <el-popover
                                        :ref="popover+`${scope.$index}`"
                                        placement="top"
                                        width="160"
                                        v-model="visible">
                                    <p>确认将 “{{roleBaseInfo.role_name}}” 角色从用户所属的角色列表中删除？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="cancelBind">确定</el-button>
                                    </div>
                                </el-popover>
                                <el-button v-popover:popover`${scope.$index}` type="danger">解除绑定</el-button> -->
                                <el-button  class="borderNone" type="text" slot="reference" @click="delPopShow(scope.$index)" >删除</el-button>
                                <el-popover
                                    placement="top"
                                    trigger="click"
                                    v-model="scope.row.visible"
                                    width="160">
                                    <p ><i class="el-icon-warning"></i>确定要删除吗？</p>
                                    <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click.native="scope.row.visible=false" >取消</el-button>
                                    <el-button type="danger" size="mini" @click="deleteRow(scope.$index,scope.row,scope)"  >确定</el-button>
                                    </div>
                                </el-popover>
                                
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <!-- 新增人员弹框 -->
                    <el-dialog
                            title="添加成员"
                            :visible.sync="addMemberVisible"
                            width="30%">
                            <div>
                                <el-table
                                    ref="multipleTable"
                                    :data="allMember"
                                    tooltip-effect="dark"
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange">
                                    <el-table-column
                                    type="selection"
                                    width="55">
                                    </el-table-column>
                                    <el-table-column
                                    prop="user_name"
                                    label="姓名"
                                    width="120">
                                    </el-table-column>
                                    <el-table-column
                                    prop="role"
                                    label="角色"
                                    width="120">
                                    </el-table-column>
                                    <el-table-column
                                    prop="account"
                                    label="邮箱"
                                    show-overflow-tooltip>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div slot="footer" class="dialog-footer" style="position:relative;">
                                <div style="position:absolute;left:0;">
                                    <span >成员还没有邀请加入班级？</span>
                                    <el-button type="text" >邀请成员></el-button>
                                </div>
                                
                                <span style="margin-right:20px;">已选<span>3</span>人</span>
                                <el-button type="primary" @click="addClassMember">确 定</el-button>
                            </div>
                    </el-dialog>

                    <!-- 删除班级确认弹框 -->
                    <el-dialog
                            title="确认提示"
                            :visible.sync="delClassVisible"
                            width="30%">
                            <div class="del-content">
                                 <i class="el-icon-question warning-icon" style="color:orange"></i>
                                 <div>
                                     <div style="font-size:18px;font-weight:500;color:#666">删除成员</div>
                                     <p style="font-size:14px;color:#999;margin-top:10px;">确认要删除选中成员？（无法恢复）</p>
                                 </div>
                            </div>
                            <div slot="footer" class="dialog-footer" style="position:relative;">
                                <el-button @click="delClassVisible=false">取消</el-button>
                                <el-button type="primary" @click="delClassConfirm">确 定</el-button>
                            </div>
                    </el-dialog>
                </div>
                <!-- 编辑班级弹框 -->
                    <el-dialog
                            :title="editClassFormData.title"
                            :visible.sync="editClassVisible"
                            width="30%">
                            <div>
                                 <div>班级名称</div>
                                 <el-input v-model="editClassFormData.name" placeholder="编辑班级名称" class="edit-class-label"></el-input>
                                 <div>班级专有计算资源</div>
                                 <el-select v-model="editClassFormData.proper_source" placeholder="当前班级暂无可选资源" class="edit-class-label" >
                                     <el-option
                                    v-for="item in classSourceList"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                 </el-select>
                                 <div>班级共享计算资源</div>
                                 <div class='share-source'>
                                     <el-checkbox-group v-model="editClassFormData.source">
                                        <el-checkbox label="2核8G 计算资源"> 
                                            <div><span>GPU</span>  2核8G 计算资源</div>
                                        </el-checkbox>
                                    </el-checkbox-group>
                                    <div style="margin-top:20px">单次连续使用时长8小时，个人持久化工作区2G</div>
                                 </div>
                                 <div style="margin-top:20px;">
                                     <span style="margin-right:20px;">角色</span>
                                     <el-radio v-model="editClassFormData.role" label="老师"></el-radio>
                                     <el-radio v-model="editClassFormData.role" label="学生"></el-radio>
                                     <el-radio v-model="editClassFormData.role" label="助教"></el-radio>
                                 </div>
                            </div>
                            <div slot="footer" class="dialog-footer" style="position:relative;">
                                <el-button @click="editClassVisible=false">取消</el-button>
                                <el-button type="primary" @click="editClassConfirm">确 定</el-button>
                            </div>
                    </el-dialog>
            </div>
        </div>
    </div>    
</template>
<script>
import member from '../mock/member.js'
export default {
    name:'memberManage',
    data(){
        return{
            activeNames: ['1'],
            editClassVisible:false,
            delClassVisible:false,
            addMemberVisible:false,
            memberName:'',
            classArr:[],
            classSourceList:[],
            checkSourceList:[],
            classList:[
                {
                    name:'全部成员',
                    id:'-1'
                }
            ],
            allMember:[],
            classValue:'-1',
            classItem:{name:'全部成员',id:'-1'},
            memState:'',
            memStateList:[
                {name:'全部',id:'-1'},
                {name:'正常',id:'0'},
                {name:'待接收',id:'1'},
                {name:'待激活',id:'2'}
            ],
            editCustomVisible:false,
            customMsg:{},
            customRole:'',
            multipleSelection:[],
            editClassFormData:{
                name:'',
                proper_source:'',
                source:[],
                role:'',
                title:'新增班级',
            },

        }
    },
    mounted(){
        this.classArr = JSON.parse(JSON.stringify(member.classArr))
        this.classList = this.classList.concat(member.classList)
        let allMember = []
        for(let i in member.allMember){
            let item = {}
            item = member.allMember[i]
            item.visible = false
            allMember.push(item)
        }
        this.allMember = allMember
    },
    watch:{
        editClassVisible(val){
            if(!val){
                setTimeout(() => {
                    this.editClassFormData={
                        name:'',
                        proper_source:'',
                        source:[],
                        role:'',
                        title:'新增班级',
                    }
                }, 200);
            }
        }
    },
    methods:{
        AddMember(){
            this.$router.push('/addMember')
        },
        handleChange(val) {
            console.log(val);
        },
        editClassShow(){
            this.editClassFormData.name = this.classItem.name
            this.editClassFormData.source[0] = this.classItem.source
            this.editClassFormData.role = this.classItem.role
            this.editClassFormData.title = '编辑班级'
            this.editClassVisible=true
        },
        editClassConfirm(){
            this.classItem.name = this.editClassFormData.name
            this.classItem.source = this.editClassFormData.source[0] 
            this.classItem.role = this.editClassFormData.role
            this.editClassVisible=false
        },
        delPopShow(index){
           for(let i in this.allMember){
               this.allMember[i].visible = false
           }
           this.allMember[index].visible = true
        },
        delClassConfirm(){
            console.log(this.classItem)
            //调用删除接口，成功后返回默认全部人员列表
        },
        //添加成员选中
        handleSelectionChange(val){
            this.multipleSelection = val
        },
        addClassMember(){
            console.log(286,this.multipleSelection)
        },
        //管理员编辑成员，改变角色
        changeRole(){
            if(this.customRole=='默认'){
                this.customMsg.role = '学生'
            }else{
                this.customMsg.role = this.customRole
            }
            this.editCustomVisible = false
        },

        editCustomShow(row){
            this.customMsg = row
            this.customRole = row.role
            this.editCustomVisible = true
        },
        deleteRow(index,row,scope){
        console.log(index,row,scope)
        //   for(let i in row.distribution_list){
        //     let hIndex = this.hasChooseRegion.findIndex((val)=>{
        //        return val.code == row.distribution_list[i].distribute_code
        //     })
        //     if(hIndex!=-1){
        //       this.hasChooseRegion.splice(hIndex,1)
        //     }
        //   }
        //   this.distributeData.splice(index,1)
          scope._self.$refs[`popover-${scope.$index}`].doClose()
        },
        closePop(scope){
        // this.$refs[`popover-${index}`][0].doClose()
        //     console.log(scope._self.$refs[`popover-${scope.$index}`])
          scope._self.$refs[`popover-${scope.$index}`].doClose()
        },
        //选择班级
        chooseClass(value){
            let classIndex = this.classArr.findIndex(val=>{
                    return value.id == val.id
            })
            if(classIndex>-1){
                this.classItem = this.classArr[classIndex]
            }else{
                this.classItem = value
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .flexBox{
        display: flex;
        justify-content: start;
        padding:30px;
        width:60%;
        margin:0 auto;
        
        .inline-box{
            display: inline-block;
            width:120px;
            margin-left:20px;
        }

        .common-btn{
            margin-left:20px
        }
        .align-right{
            position:absolute;
            right:10px;
            top:0;
        }
        .role-select{
            display: flex;
            justify-content: start;
            height:40px;
            line-height: 40px;
        }
        .role-select>span{
            width:100px;
        }
        .role-select>.el-radio,.role-select>div{
            height:40px;
            line-height: 40px;
            margin-left:20px;
        }
        .class-content-top .align-right>i{
            margin-left:20px;
            font-size:23px;
        }
        .class-info-row{
            margin-top:20px;
            .odd-span{
                background: #eee;
                font-weight:500;
                border:1px solid #999;
                height:40px;
                line-height: 40px;
                text-align: center;
            }
            .even-span{
                background: #fff;
                border:1px solid #999;
                height:40px;
                line-height: 40px;
                text-align: center;
            }
        }
        .del-content{
            display: flex;
            justify-content: start;
        }
        .warning-icon{
            color:orange;
            font-size:30px;
            margin-right:10px;
        }
        .edit-class-label{
            width:100%;
            margin:10px 0;
        }
        .share-source{
            border: 1px solid #C0C4CC;
            padding: 15px;
            margin: 10px 0;
            border-radius: 4px;
        }
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
    .flexBox>div:nth-child(1){
            width:20%;
    }

    .flexBox>div:nth-child(2){
        width:80%;
        position:relative;
    }
</style>