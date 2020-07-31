<template>
    <div class="newMember">
        <el-tabs v-model="activeTab">
            <el-tab-pane label="邀请成员" name="invite">
                <div class='row-content'>
                    <div class='left-content'>邀请方式</div>
                    <div class='right-content'>
                        <el-radio v-model="invitePath" label='mail'>邮箱邀请</el-radio>
                        <el-radio v-model="invitePath" label='link'>链接邀请</el-radio>
                    </div>
                </div>
                <div class="" v-show="invitePath=='mail'">
                    <div class='row-content'>
                        <div class='left-content'>邮箱邀请</div>
                        <div class=''>
                            <el-input class='textArea' type='textarea' v-model="emailList" :rows='5' placeholder="支持批量导入邮箱地址，每行一个"></el-input>
                        </div>
                    </div>
                    
                    <div class='row-content'>
                        <div class='left-content'>邀请寄语</div>
                        <div class=''>
                            <el-input class='textArea' type='textarea' v-model="initeMsg" :maxlength="140" :rows='5' placeholder="可选，邀请寄语不超过140个字符"></el-input>
                        </div>
                    </div>
                    
                    <div class='row-content'>
                        <div class='left-content'>归属群组</div>
                        <div class=''>
                            <el-select class='belong-select' v-model="belongClass" placeholder="可选，归属班级">
                                <el-option
                                v-for="item in classList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                            <span class="belong-select-tip">只能选择一个班级</span>
                        </div>
                    </div>
                    <div class="flex-center">
                        <el-button @click="backRoute">取消</el-button>
                        <el-button type='primary' >发送邀请</el-button>
                    </div>
                </div>
                <div class="" v-show="invitePath=='link'">
                    <div class='row-content'>
                        <div class='left-content'>有效期</div>
                        <div class='right-content'>
                            <el-radio v-model="validDay" label='1'>1天</el-radio>
                            <el-radio v-model="validDay" label='3'>3天</el-radio>
                            <el-radio v-model="validDay" label='7'>7天</el-radio>
                            <span style="margin-right:10px;">自定义</span>
                            <el-date-picker
                                v-model="validTime"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class='row-content'>
                        <div class='left-content'>归属群组</div>
                        <div class=''>
                            <el-select class='belong-select' v-model="belongClass" placeholder="可选，归属班级">
                                <el-option
                                v-for="item in classList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                            <span class="belong-select-tip">只能选择一个班级</span>
                        </div>
                    </div>
                    <div class="flex-center">
                        <el-button @click="backRoute">取消</el-button>
                        <el-button type='primary' >生成链接</el-button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="创建新账号" name="creatMem">
                <div class='row-content'>
                    <div class='left-content'>创建方式</div>
                    <div class='right-content'>
                        <el-radio v-model="creatPath" label='sing'>单个创建</el-radio>
                        <el-radio v-model="creatPath" label='batch'>批量生成</el-radio>
                    </div>
                </div>
                <div v-show='creatPath=="sing"'>
                    <div class='row-content'>
                        <div class='left-content'>*账号</div>
                        <div class='right-content'>
                            <el-input class="right-input" v-model="account" placeholder="邮箱地址作为登录账号"></el-input>
                        </div>
                    </div>
                    <div class='row-content'>
                        <div class='left-content'>*激活码</div>
                        <div class='right-content'>
                            <el-input class="right-input" v-model="activateCode" :maxlength="6" placeholder="邮箱地址作为登录账号"></el-input>
                        </div>
                    </div>
                    <div class='row-content'>
                        <div class='left-content'>归属群组</div>
                        <div class=''>
                            <el-select class='belong-select' v-model="belongClass" placeholder="可选，归属班级">
                                <el-option
                                v-for="item in classList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                            <span class="belong-select-tip">只能选择一个班级</span>
                        </div>
                    </div>
                    <div class="flex-center">
                        <el-button @click="backRoute">取消</el-button>
                        <el-button type='primary' >创建</el-button>
                    </div>
                </div>
                <div v-show='creatPath=="batch"'>
                    <div class='row-content'>
                        <div class='left-content'>样例模板</div>
                        <div class='right-content'>
                            <a href="baidu.com" download="批量生成账号模板.csv">批量生成账号模板.csv</a>
                        </div>
                    </div>
                    <div class='row-content'>
                        <div class='left-content'>上传名单</div>
                        <div class=''>
                            <el-upload
                                class="upload-demo"
                                :action="uploadUrl"
                                :on-preview="handlePreview"
                                multiple
                                :limit="1"
                                :on-progress="uploadProgress"
                                :on-exceed="handleExceed"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload"
                                :on-remove='removeFile'
                                :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <span slot="tip" style="margin-left:10px;" class="el-upload__tip">上传文件仅支持 csv 文件</span>
                            </el-upload>
                            <el-progress v-show='startProgress' :percentage="uploadFilePercent" ></el-progress>
                        </div>
                    </div>
                    <div class="flex-center">
                        <el-button @click="backRoute">取消</el-button>
                        <el-button type='primary' >创建</el-button>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Contest from '@/api/EUSMgr/contest'
let contest = new Contest()
import member from '../mock/member.js'
    export default {
        name:'addMember',
        data(){
            return{
                activeTab:'invite',
                invitePath:'mail',
                emailList:'',
                initeMsg:'',
                classList:'',
                belongClass:'',
                validDay:'',
                validTime:'',
                creatPath:'sing',
                account:'',
                activateCode:'',
                fileList:[],
                uploadUrl:'',
                fileUrl:'',
                uploadFilePercent:0,
                startProgress:false
            }
        },
        watch:{
            activeTab(val){
                this.belongClass = ''
            },
            invitePath(val){
                this.belongClass = ''
            },
            validTime(val){
                if(val){
                    this.validDay = ''
                }
            },
            validDay(val){
                if(val){
                    this.validTime = ''
                }
            }
        },
        mounted(){
            this.classList = member.classList
            this.uploadUrl = contest.uploadUrl(5);
        },
        methods:{
            backRoute(){
                 this.$router.go(-1)
            },
            //上传文件
            handleAvatarSuccess(res, file) {
                console.log(200,this.fileList)
                console.log(201,file)
                this.fileUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                console.log(210,file.name.substr(-4))
                const isCsv = file.name.substr(-4) === '.csv';
                this.startProgress = isCsv
                console.log(isCsv)
                // const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isCsv) {
                this.$message.error('上传文件只能是 csv 格式!');
                }
                // if (!isLt2M) {
                // this.$message.error('上传头像图片大小不能超过 2MB!');
                // }
                return isCsv;
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            handlePreview(file) {
                console.log(file);
            },
            uploadProgress(event, file, fileList){
                this.uploadFilePercent = event.percent
                console.log(228,event, file, fileList)
            },
            removeFile(file,fileList){
                console.log(file,fileList)
                this.startProgress = false
                this.uploadFilePercent = 0
                console.log()
            }
        }
    }
</script>
<style lang="scss">
    .newMember{
        width:60%;
        padding:30px;
        margin:0 auto;

        .flex-center{
            justify-content: start;
            display: flex;
            margin-top: 50px;
            padding-left: 200px;

        }

        .row-content{
            display: flex;
            justify-content: start;
            position:relative;
            margin-top:20px;

            .left-content{
                width:100px;
                text-align: right;
                margin-right:30px;
                height:40px;
                line-height: 40px;
                left:0;
                top:0;
            }

            .right-content{
                height:40px;
                line-height: 40px;;
            }

            .textArea{
                width:300px;
            }

            .belong-select,.right-input{
                width:300px;
                height:40px;
                line-height: 40px;
            }

            .belong-select-tip{
                margin-left:10px;
                color:#999;
            }
        }
    }
</style>
