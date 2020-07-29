<template>
    <div class="login">
<!--        <img class="login-title" src="../../images/login_title.png" />-->
        <img src="../images/login-logo.png" alt="" style="position: absolute;top: 40px;left: 143px;width: 80px;z-index:2">
        <img src="../images/login-img-1.png" alt="" style="position: absolute;left: 90px;width: 60%;top: 50%;transform: translateY(-50%)">
        <nl-form
                :model="formData"
                :rules="formRules"
                ref="form"
                class="form"
                v-loading="loading"
                hide-required-asterisk
                status-icon
        >
<!--            label-width="60px"-->
            <nl-form-item label="" prop="username" :show-message="false">
                <nl-input
                        v-model="formData.username"
                        class="input"
                        @keyup.enter.native="loginHandler"
                        placeholder="请输入账号"
                ></nl-input>
            </nl-form-item>
            <nl-form-item label="" prop="activatecode" :show-message="false">
                <nl-input
                        v-model="formData.activatecode"
                        class="input"
                        @keyup.enter.native="loginHandler"
                        placeholder="请输入激活码"
                ></nl-input>
            </nl-form-item>
            <nl-form-item label="" prop="password" :show-message="false">
                <nl-input
                        v-model="formData.password"
                        type="password"
                        @keyup.enter.native="loginHandler"
                        placeholder="请设置密码"
                ></nl-input>
            </nl-form-item>
            <nl-form-item label="" prop="name" :show-message="false">
                <nl-input
                        v-model="formData.name"
                        class="input"
                        @keyup.enter.native="loginHandler"
                        placeholder="请输入姓名"
                ></nl-input>
            </nl-form-item>
            <nl-form-item label="" prop="phone" :show-message="false">
                <nl-input
                        v-model="formData.phone"
                        class="input"
                        @keyup.enter.native="loginHandler"
                        placeholder="请输入手机号"
                ></nl-input>
            </nl-form-item>
            <nl-form-item label="" prop="email" :show-message="false">
                <nl-input
                        v-model="formData.email"
                        class="input"
                        @keyup.enter.native="loginHandler"
                        placeholder="请输入邮箱"
                ></nl-input>
            </nl-form-item>
            <nl-form-item label="" prop="sex" :show-message="false">
                <span>性别</span>
                <nl-radio
                        v-model="formData.sex"
                        label='1'
                        @keyup.enter.native="loginHandler"
                >男</nl-radio>
                <nl-radio
                        v-model="formData.sex"
                        label='2'
                        @keyup.enter.native="loginHandler"
                >女</nl-radio>
            </nl-form-item>
            


            <!-- <div class="login-checkbox tr">
                <nl-checkbox v-model="isAutoLogin">自动登录</nl-checkbox>
                <nl-checkbox v-model="isSavePassword">记住密码</nl-checkbox>
            </div> -->
           <div class="login-btn" @click="loginHandler">激活</div>
           <div  @click="loginHandler">已经激活立即登录</div>
            <!-- <div style="text-align: center">
                <img src="../images/login-btn.png" alt="" @click="loginHandler" style="margin:20px auto -25px;display: inline-block;width: 222px;">
            </div> -->
        </nl-form>
<!--        <div class="login-footer">-->
<!--            京ICP备15057567号-4 | 版权所有 2016 | 北京新大陆时代教育科技有限公司 |-->
<!--            地址：北京市海淀区首体南路22号国兴大厦16层-->
<!--        </div>-->
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    import { LocalStorage, Cookie } from "@/libs/storage";
    import {removeListenModule, setListenModule} from "@/libs/checkLogin";

    let sid = Cookie.getItem('CUSTOMSEESION') || (+new Date()).toString() + Math.floor(Math.random() * 10000)

    export default {
        name: "index",
        data() {
            var checkPhone = (rule, value, callback) => {
                /**
                 * 验证电话号码正则
                 */
            if (value !== '') {
                var reg=/^1[3456789]\d{9}$/;
                if(!reg.test(value)){
                    callback(new Error('请输入有效的手机号码'));
                }
            }
            callback();
            };
            return {
                sid: sid,
                now: +new Date(),
                isAutoLogin: false,
                isSavePassword: false,
                loading: false,
                formData: {
                    email:'',
                    username: "",
                    name:'',
                    phone:'',
                    sex:'',
                    password: "",
                    activatecode:'',
                    // verificationCode: ""
                },
                formRules: {
                    username: [
                        { required: true, message: "请输入账户名", trigger: "blur" }
                    ],
                    name: [
                        { required: true, message: "请输入姓名", trigger: "blur" }
                    ],
                    email: [
                        { required: true, message: "请输入邮箱", trigger: "blur" }
                    ],
                    phone: [
                        { required: true, validator: checkPhone, trigger: "blur" }
                    ],
                    sex: [
                        { required: true, message: "请选择性别", trigger: "blur" }
                    ],
                    activatecode: [
                        { required: true, message: "请输入激活码", trigger: "blur" }
                    ],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                    // verificationCode: [
                    //     { required: true, message: "请输入验证码", trigger: "blur" }
                    // ]
                }
            };
        },
        mounted() {
            // todo set cookies
            Cookie.setItem("CUSTOMSEESION", this.sid, 0);

            setInterval(() => {
                this.sid += "&refresh";
            }, 300000);
            let formData = LocalStorage.getItem("eusmgr");
            if (formData) {
                formData = JSON.parse(formData);
                this.formData.username = formData.username;
                this.formData.password = formData.password;
                this.isSavePassword = true;
            }
        },
        methods: {
            ...mapActions("tokenModule", ["getToken"]),
            ...mapActions("user", ["login", "getMenus", "getInfo"]),
            savePasswordAndAutoLogin() {
                if (this.isSavePassword) {
                    let { username, password } = this.formData;
                    LocalStorage.setItem("eusmgr", { username, password }, 86400000);
                } else {
                    LocalStorage.removeItem("eusmgr");
                }
                if (this.isAutoLogin) {
                    removeListenModule("access_token");
                } else {
                    setListenModule("access_token");
                }
            },
            async loginHandler() {
                let isValidate = await this.$refs["form"].validate();
                if (isValidate) {
                    this.loading = true;
                    let token = await this.login(this.formData).catch(e => {
                        this.sid += "&refresh";
                        this.loading = false;
                    });
                    // let token = await this.getToken(this.formData);
                    if (token) {
                        await this.getMenus(8);
                        // let res = await this.getInfo();
                        this.savePasswordAndAutoLogin();
                        this.$message({
                            message: "登录成功",
                            type: "success",
                            center: true
                        });

                        if (this.$route.query.redirect &&
                            !(this.$route.query.redirect.indexOf("/404") > -1 ||
                                this.$route.query.redirect.indexOf('%2F404') > -1)
                        ) {
                            let redirect = decodeURIComponent(this.$route.query.redirect)
                            let link = this.$router.resolve(redirect)
                            if (link.route.name !== '404') {
                                this.$router.push(redirect)
                            }else{
                              // 因为首页还没开发，所以要求把路由变到课程列表
                              // this.$router.push({name: 'eres-index'})
                              // this.$router.push({name: 'eres-course-list'})
                              this.$router.push({name: 'eonline-courseList'})
                            }
                        }else{
                          // this.$router.push({name: 'eres-index'})
                          // this.$router.push({name: 'eres-course-list'})
                            this.$router.push({name: 'eonline-courseList'})
                        }
                    }
                    this.loading = false;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .login {
        height: 100%;
        min-width: 1200px;
        background: url("../images/login-bg.jpg") no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;
        overflow: hidden;
        .login-title {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
        }
        .login-footer {
            width: 100%;
            position: absolute;
            bottom: 0px;
            background-color: rgba(76, 135, 251, 0.3);
            color: #fff;
            text-align: center;
            padding: 10px;
            font-size: 12px;
        }
    }
    .form {
        position: absolute;
        top: 26%;
        right: 15%;
        border-radius: 14px;
        background:rgba(45,24,76,0.58);
        width: 400px;
        box-sizing: border-box;

        padding: 30px 50px;
        .login-btn {
            width: 120px;
            height: 30px;
            background-color: #4c87fb;
            font-size: 14px;
            color: #ffffff;
            border-radius: 20px;
            line-height: 30px;
            text-align: center;
            margin: 16px auto 0;
            cursor: pointer;
        }
        .login-checkbox {
            font-size: 12px;
            margin-top: 20px;
        }
        .el-form-item {
            margin-bottom: 0px;
        }
        /deep/ .el-form-item__label,
        /deep/ .el-checkbox__label {
            color: #fff;
        }
        /deep/ .el-input__inner {
            background-color: rgba(39,17,74,0.54) ;
            border-color: rgba(39,17,74,0.54) ;
            border-radius: 20px;
            color: #fff;
            height: 30px;
            line-height: 30px;
        }
        .verifyCode {
            /deep/ .el-input__inner {
                border-top-right-radius: 0px 0px;
                border-bottom-right-radius: 0px 0px;
            }
            /deep/ .el-input-group__append {
                color: rgb(111, 118, 156);
                background-color: rgb(48, 56, 90);
                border-color: rgb(48, 56, 90);
                border-top-right-radius: 20px 20px;
                border-bottom-right-radius: 20px 20px;
            }
            .verifycode-img {
                position: absolute;
                height: 30px;
                top: 45px;
                right: 0;
                cursor: pointer;
            }
        }
        /deep/ .el-checkbox__label,
        /deep/ .el-form-item__label {
            font-size: 12px;
        }
        /deep/ .el-checkbox__inner {
            background-color: rgb(22, 28, 55) !important;
            border-color: rgb(22, 28, 55) !important;
        }
    }
    .nl-layout:hover {
        color: red;
    }
</style>
