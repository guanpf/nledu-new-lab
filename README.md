# 前端vue工程
## 前端开发规范
 * svn bde\产品中心\BDEDU大数据教学产品\03 管理\03 规范\应用框架规范\前端规范 中
 * npm config set registry=http://192.168.133.184:7001
 * cd /home/cnpmjs.org
 * npm服务器 192.168.133.184 root/newlandedu cd /home/cnpmjs.org npm run start
## UI设计规范
## 换肤配置
 * 换肤相关代码位于`src/scss/theme`内，基于elementUI实现。其中element为elementUI所有组件的样式代码，不建议直接修改其中代码，可通过打补丁的方式，在`src/element-patch`中添加修改代码,element文件可通过github更新，[更新地址](https://github.com/ElementUI/theme-chalk)  
 * 自定义的组件样式在`src/componentName.scss`中定义  
 * 主题基础配置文件全部放在`themeConfig/themeName`文件下，其中包含elementUI的配置项，以及自己的UI设计规范里的配置项  
 * 构建主题的脚本：`/src/scss/theme/build.js`，可直接执行`npm run build:theme`，构建结果css在`/src/scss/theme/dist`内
 * 开发完成后一定要找设计核对！！！

## element-ui
 * 修改了scrollbar 组件，新增 on-reach-bottom 和on-reach-top事件 

设计稿存放在FTP上
FTP 公共账号调整，新的账号、密码 ：  nldev / nldev567
ftp://192.168.133.223/bigDataEdu/03 设计/01 视觉设计/


##统一管理系统添加路由
1、	选择左侧菜单栏中的菜单管理

2、	以大数据竞赛平台为例，选中大数据竞赛平台

3、	选择要添加的路由所在的上级路由，要添加到根路由下则选择菜单管理

4、	选择右下角的添加功能

6、填写相关信息，※号为必填项

7、添加完路由选择菜单栏中的角色管理

8、选择刚才添加过路由的大数据竞赛平台
 
9、选择想要添加路由的角色，点击编辑

10、点击添加路由权限，勾选刚才新添加的路由
 
 

