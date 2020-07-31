<template>
    <div class='customManage'>
        <div class="top-tool">
            <div class="selectByUser inline-block">
                 <el-select v-model="customType" placeholder="全部">
                    <el-option
                    v-for="item in typeList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
            </div>
            <div class="selectByRole inline-block">
                 <el-select v-model="accountState" placeholder="全部">
                    <el-option
                    v-for="item in stateList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
            </div>
            <div class="selectByRole inline-block">
                <el-input placeholder="请输入内容" v-model="schoolName" class="input-with-select">
                    <el-select v-model="province" slot="prepend" placeholder="请选择">
                        <el-option
                        v-for="item in provinceList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div class="rightBtn inline-block">
                <el-button><span>+</span>添加</el-button>
            </div>
        </div>
        <div>
            <el-table :data="customData" border style="width: 100%">
                <el-table-column
                    prop="customname"
                    label="客户名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="customtype"
                    label="客户类型"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="状态">
                </el-table-column>
                <el-table-column
                    prop="contacts"
                    label="联系人">
                </el-table-column>
                <el-table-column
                    prop="tel"
                    label="联系电话">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                    <el-button type="text" @click='editCustom(scope.row,scope.$index)' size="small">编辑</el-button>
                    <el-button v-if="scope.row.state=='正常'" @click="changeCusState(scope.row,scope.$index)" type="text" size="small">停用</el-button>
                    <el-button v-if="scope.row.state=='停用'" @click="changeCusState(scope.row,scope.$index)" type="text" size="small">开启</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template> 
<script>
export default {
    name:'customManage',
    data(){
        return{
            customData:[
                { 
                  customname:'船政学堂',
                  customtype:'正式',
                  state:'正常',
                  contacts:'陈老师',
                  tel:'18850950048',
                  address:'福州市马尾区船政学堂',
                },
                { 
                  customname:'马尾学堂',
                  customtype:'试用',
                  state:'已过期',
                  contacts:'陈老师',
                  tel:'18850950048',
                  address:'福州市马尾区船政学堂',
                },
                { 
                  customname:'鼓山学堂',
                  customtype:'正式',
                  state:'停用',
                  contacts:'王老师',
                  tel:'18850950048',
                  address:'福州市马尾区船政学堂',
                },
            ],
            customType:'',
            typeList: [
                        {
                            id: '-1',
                            name: '全部',
                            alias: '全部',
                            roles: []
                        },
                        {
                            id: '0',
                            name: '试用',
                            alias: '试用',
                            roles: []
                        },
                        {
                            id: '1',
                            name: '正式',
                            alias: '正式',
                            roles: []
                        }
                      ], 
            accountState:'',
            stateList: [
                        {
                            id: '-1',
                            name: '全部',
                            alias: '全部',
                            roles: []
                        },
                        {
                            id: '0',
                            name: '正常',
                            alias: '正常',
                            roles: []
                        },
                        {
                            id: '1',
                            name: '停用',
                            alias: '停用',
                            roles: []
                        },
                        {
                            id: '2',
                            name: '已过期',
                            alias: '已过期',
                            roles: []
                        }
                      ],
            province:'',
            provinceList: [
                        {
                            id: '0',
                            name: '北京',
                            code: '10000',
                        },
                        {
                            id: '1',
                            name: '上海',
                            code: '20000',
                        },
                        {
                            id: '2',
                            name: '福建',
                            code: '30000',
                            roles: []
                        },
                        {
                            id: '3',
                            name: '浙江',
                            code: '40000',
                        }
                      ],
            option: [],
            schoolName:'',
            optionProps: {
                label: 'orgName',
                children: "children",
                value: "id",
                checkStrictly: true
            },
        }
    },
    mounted(){

    },
    methods:{
            changeCusState(row,index){
                if(row.state=='停用'){
                    this.customData[index].state='正常'
                }else if(row.state=='正常'){
                    this.customData[index].state='停用'
                }
            }
    }
}
</script> 
<style scoped lang="scss">
        .customManage{
            width:80%;
            margin: 0 auto;
        }
        .top-tool {
            padding: 30px;
            position:relative;

            .selectByUser {
                padding-top: 4px;
            }

            .selectByRole {
                padding-left: 30px;
            }

            .rightBtn{
                position:absolute;
                right:20px;
            }

            .selectByOrg {
                padding-left: 30px;
                vertical-align: top;
            }

            .add {
                position: absolute;
                top: 84px;
                right: 30px;
            }

            .search {
                position: absolute;
                top: 84px;
                right: 150px;
            }

            .search /deep/ input {
                box-sizing: border-box;
            }
        }
</style>  