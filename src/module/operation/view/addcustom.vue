<template>
    <div class='addCustom'>
        <div class='contentBox'>
            <el-row>
                <el-col :span="12">
                    <div class='upload-img'>
                        <span class='common-span'>院校logo:</span>
                        <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="customData.imageUrl" :src="customData.imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class="common-span">类型:</span>
                        <el-radio v-model="customData.customtype" label="1">正式商户</el-radio>
                        <el-radio v-model="customData.customtype" label="2">测试商户</el-radio>
                    </div>
                    <div class='common-label'>
                        <span class="common-span">有效期限:</span>
                        <el-date-picker
                            v-model="customData.validtime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>学校名称:</span>
                        <el-input class='common-input' v-model="customData.schoolname" placeholder="请输入学校名称"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>院系:</span>
                        <el-input class='common-input' v-model="customData.department" placeholder="请输入院系名称"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>专业:</span>
                        <el-input class='common-input' v-model="customData.coursname" placeholder="请输入课程名称"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>班级:</span>
                        <el-select v-model="customData.classModel" class='common-input' placeholder="请选择班级">
                            <el-option
                            v-for="item in classList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>联系人:</span>
                        <el-input class='common-input' v-model="customData.contacts" placeholder="请输入联系人"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>邮箱:</span>
                        <el-input class='common-input' v-model="customData.email" placeholder="请输入邮箱"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>电话:</span>
                        <el-input class='common-input' v-model="customData.tel" placeholder="请输入电话"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class='common-label'>
                        <span class='common-span'>URL:</span>
                        <el-input class='common-input' v-model="customData.url" placeholder="请输入URL"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class='common-label'>
                        <span class='common-span'>地址:</span>
                        <el-cascader
                            class='common-input'
                            v-model="customData.address"
                            :options="options"
                            @change="handleChange"></el-cascader>
                        <el-input class="common-input" v-model="customData.addressDetail" placeholder="请输入详细地址"></el-input> 
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class='textArea'>
                        <span class="common-span" style="height:120px;line-height:30px;">院校简介:</span>
                        <el-input
                        style="display:inline-block;height:120px;width:80%;margin-top:20px;"
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="customData.schoolproduce">
                        </el-input>
                    </div>
                
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class='align-center'>
                        <el-button @click="getFormData">下一步</el-button>
                    </div>
                </el-col>
            </el-row>
            
        </div>
    </div>
</template> 
<script>
import Contest from '@/api/EUSMgr/contest'
let contest = new Contest()
export default {
    name:'addCustom',
    data(){
        return{
            customData:{
                imageUrl:'',
                customtype:'',
                validtime:'',
                schoolname:'',
                department:'',
                coursname:'',
                classModel:'',
                contacts:'',
                email:'',
                tel:'',
                url:'',
                address:'',
                addressDetail:'',
                schoolproduce:'',
            },
            uploadUrl:'',
            classList:[
                {
                  id:'0',
                  name:'15级机器学习'
                },
                {
                  id:'1',
                  name:'13级物联网'
                },
                {
                  id:'2',
                  name:'14级大数据'
                }
            ],
            options: [
                {
                value: 'zhinan',
                label: '指南',
                children: [
                    {
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                        value: 'yizhi',
                        label: '一致'
                        }, {
                        value: 'fankui',
                        label: '反馈'
                        }, {
                        value: 'xiaolv',
                        label: '效率'
                        }, {
                        value: 'kekong',
                        label: '可控'
                        }]
                    },
                    {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                    }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                    }]
                }]
                }, 
                {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                    }, {
                    value: 'color',
                    label: 'Color 色彩'
                    }, {
                    value: 'typography',
                    label: 'Typography 字体'
                    }, {
                    value: 'icon',
                    label: 'Icon 图标'
                    }, {
                    value: 'button',
                    label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                    }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                    }, {
                    value: 'input',
                    label: 'Input 输入框'
                    }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                    }, {
                    value: 'select',
                    label: 'Select 选择器'
                    }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                    }, {
                    value: 'switch',
                    label: 'Switch 开关'
                    }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                    }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                    }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                    }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                    }, {
                    value: 'upload',
                    label: 'Upload 上传'
                    }, {
                    value: 'rate',
                    label: 'Rate 评分'
                    }, {
                    value: 'form',
                    label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                    value: 'table',
                    label: 'Table 表格'
                    }, {
                    value: 'tag',
                    label: 'Tag 标签'
                    }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                    }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                    }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                    }, {
                    value: 'badge',
                    label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                    }, {
                    value: 'loading',
                    label: 'Loading 加载'
                    }, {
                    value: 'message',
                    label: 'Message 消息提示'
                    }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                    }, {
                    value: 'notification',
                    label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                    }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                    }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                    }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                    }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                    }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                    }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                    }, {
                    value: 'card',
                    label: 'Card 卡片'
                    }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                    }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                    }]
                }]
                },
                {
                value: 'ziyuan',
                label: '资源',
                children: [
                    {
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }
                ]
                }
            ],
        }
    },
    mounted(){
        this.uploadUrl = contest.uploadUrl(5);
    },
    methods:{
      handleChange(value) {
        console.log(value);
      },
      //上传院校logo
      handleAvatarSuccess(res, file) {
        this.customData.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      getFormData(){
          console.log(this.customData)
      }
    }
}
</script> 
<style scoped lang="scss">
    .contentBox{
        margin:0 auto;
        width:80%;
        padding:30px;

        .upload-box{
            display: inline-block;
        }

        .logo-text{
            height:128px;
            line-height: 30px;
            width:100px;
            text-align: right;
            margin-right:15px;
            display: inline-block;
        }

        .common-span{
            height:60px;
            line-height: 60px;
            width:100px;
            text-align: right;
            margin-right:15px;
            display: inline-block;
        }

        .common-label{
                height:60px;
                line-height: 60px;

                .common-input{
                    width:300px;
                }
            }  
        .align-center{
            text-align:center;
            padding-top:20px;
            } 
    }
    .upload-img{
        display: flex;
        justify-content: start;
    }
    .avatar-uploader{
        display: inline-block;
    }
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 128px;
        height: 128px;
        line-height: 128px;
        text-align: center;
        display: inline-block;
    }
    .avatar {
        width: 128px;
        height: 128px;
        display: inline-block;
    } 
</style>  