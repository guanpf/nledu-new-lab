const router = require("./router");
const routerPracticeStudent = require('./practice-student')
const routerExamStudent = require('./exam-student')
const routerManager = require('./manager')
// const router = require('./router-student')
// const router = require('./router-teacher')
let baseurl = "/nledu-eaframe-auth/";
module.exports = [
  {
    url: `${baseurl}oauth/token`,
    type: "post",
    response: _ => {
      return {
        code: "0",
        message: "success",
        data: {
          access_token:
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTk5NjMxMjcsInVzZXJfbmFtZSI6ImNhNDVjNzgxNzIwNjExZTk4MmZkMDI0MjBhMDAwMDE4IiwianRpIjoiZThhYTMyZDktNmI1Yy00Mzk1LTgxNjgtZTNmODQ2NmZhNDIwIiwidmVuZG9yIjoiTkxFRFUtRkoiLCJjbGllbnRfaWQiOiJuZXdsYW5kZWR1Iiwic2NvcGUiOlsiYWxsIl19.BhXF0VJCC5if8HB-yqNbMScJMUk95J1pIBOkOiNkdPDnDw2wWUnPRveEwMyFNkAwEiCk99A70mTslzRQqWhgOZOkeOMctfh46kHOVS7NUpC-dQI07Nd9dKG68mwo_D-2Fza-ts6QQXYR1fVbhJkOCmf4SritOLXr7UcvXmBJf9W7zWX3Tq_6p1iJJ1IUuhauLpTiP-fkynzd1SGD_AkBWUcPilmZwGwcfVSXbgKNOJ1xZq45N1xr0NirNoM1Mws4wPXZ2vxb5tQXEbKhzq6R_gJ0pt8_MkK3uWGHq4DUxr9-99cFjHFL64rvajS4MLQazggHiv4_hd6Ek5GqgogjPQ",
          token_type: "bearer",
          refresh_token:
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjYTQ1Yzc4MTcyMDYxMWU5ODJmZDAyNDIwYTAwMDAxOCIsInZlbmRvciI6Ik5MRURVLUZKIiwic2NvcGUiOlsiYWxsIl0sImF0aSI6ImU4YWEzMmQ5LTZiNWMtNDM5NS04MTY4LWUzZjg0NjZmYTQyMCIsImV4cCI6MTU1OTA5OTE1NywianRpIjoiZDRiYzMxNmItNTgxMC00ZDM1LTk1NjEtNDcwZWEzMDNlZGEzIiwiY2xpZW50X2lkIjoibmV3bGFuZGVkdSJ9.NM0sTwSLeHgohOAo-nc3crxGoxrZ66elKdfmo-H_YGlkX6rM3o8RFUMwWj-JKA9UcvWmLj3gGfG6sbhsnjKRyc1nn8s7FT0--dlpRXD42e0c3kUvukj0IukUTiZ-h9gq7C7SMh_7Jz5DL03iAtbXn5Tz7DbPFMt98Tpc3ohnGZmwIp3izgNXEd3J6G71BKyvP-wiMUZtib6pEo35LyudJe0JZbO91G0ezb8CgpRHwZwf79B8_vJv6CXgA8QW9HFuo-_kQF_b3CEMAnq3_lzOp6xuP_UQCEO321xMGx6KPKjI2AEexW0nQoTC6URLysd27Hg4zny7-RrXXaTgK-tgLQ",
          expires_in: "863999",
          scope: "all",
          vendor: "NLEDU-FJ",
          jti: "e8aa32d9-6b5c-4395-8168-e3f8466fa420"
        }
      };
    }
  },
  {
    url: `/nledu-eusmgr-system/user/getrouter`,
    type: "get",
    response: arg => {
      return {
        code: "0",
        data: router,
        message: "success",
        arg: arg
      };
    }
  },
  {
    url: "/nledu-eusmgr-system/user/menus/1",
    type: "get",
    response: ({ query, params }) => {
      return {
        code: "0",
        data: {
          products: [
            {
              functions: router,
              productDesc: "ETMLab 教学管理套件",
              productId: "096a810934de11e98c9f02420a00002c",
              remark: "系统统一管理套件下租户的教务管理员角色",
              roleId: "56f12e27699c11e9976602420a00000a",
              roleName: "ORG_SYS_MANAGER",
              roleType: "1"
            }
          ],
          userId: "5f653b3534ee11e98c9f02420a00002c"
        },
        message: "success"
      };
    }
  },
  {
    url: "/nledu-eusmgr-system/user/menus/2",
    type: "get",
    response: ({ query, params }) => {
      return {
        code: "0",
        data: {
          products: [
            {
              functions: routerPracticeStudent,
              productDesc: "ETMLab 教学管理套件",
              productId: "096a810934de11e98c9f02420a00002c",
              remark: "系统统一管理套件下租户的教务管理员角色",
              roleId: "56f12e27699c11e9976602420a00000a",
              roleName: "ORG_SYS_MANAGER",
              roleType: "1"
            }
          ],
          userId: "5f653b3534ee11e98c9f02420a00002c"
        },
        message: "success"
      };
    }
  },
  {
    url: "/nledu-eusmgr-system/user/menus/3",
    type: "get",
    response: ({ query, params }) => {
      return {
        code: "0",
        data: {
          products: [
            {
              functions: routerExamStudent,
              productDesc: "ETMLab 教学管理套件",
              productId: "096a810934de11e98c9f02420a00002c",
              remark: "系统统一管理套件下租户的教务管理员角色",
              roleId: "56f12e27699c11e9976602420a00000a",
              roleName: "ORG_SYS_MANAGER",
              roleType: "1"
            }
          ],
          userId: "5f653b3534ee11e98c9f02420a00002c"
        },
        message: "success"
      };
    }
  },{
    url: "/nledu-eusmgr-system/user/menus/4",
    type: "get",
    response: ({ query, params }) => {
      return {
        code: "0",
        data: {
          products: [
            {
              functions: routerManager,
              productDesc: "ETMLab 教学管理套件",
              productId: "096a810934de11e98c9f02420a00002c",
              remark: "系统统一管理套件下租户的教务管理员角色",
              roleId: "56f12e27699c11e9976602420a00000a",
              roleName: "ORG_SYS_MANAGER",
              roleType: "1"
            }
          ],
          userId: "5f653b3534ee11e98c9f02420a00002c"
        },
        message: "success"
      };
    }
  },
  {
    url: "/nledu-eusmgr-system/user",
    type: "get",
    response: {
      code: "0",
      data: {
        entranceDate: 1504195200000,
        eusmgrUserId: "ca45c781720611e982fd02420a000018",
        eusmgrUserName: "huangxl",
        headImage:
          "http://192.168.1.108:14000/webhdfs/v1/etmlab_res/icon_jiaowu_a5519e0799d14d9196c6516f9d5e81df..png?op=OPEN&user.name=root",
        id: "ca45c781720611e982fd02420a000018",
        isInSchool: "1",
        jobTitle: "学生",
        roleName: "学生",
        roles: ["ORG_STUDENT"],
        school: "福大",
        sex: "男",
        studentId: "2017090102",
        userAlias: "黄小农xxxx",
        userInfo: "学生01"
      },
      message: "success"
    }
  },
  {url:"/nledu-eusmgr-system/data/dic/data_dic/EXPERIMENT_SCENARIO",type:"get",
    response:_=>({
      "code": "0",
      "data": [
        {
          "codeSn": "1",
          "codeValue": "大数据环境的安装和配置",
          "eusmgrDataTypeId": "95dee34f709311e9b8d102420a00001a",
          "id": "a46f11ec709311e9b8d102420a00001a"
        },
        {
          "codeSn": "2",
          "codeValue": "大数据采集",
          "eusmgrDataTypeId": "95dee34f709311e9b8d102420a00001a",
          "id": "acfa1c4d709311e9b8d102420a00001a"
        },
        {
          "codeSn": "3",
          "codeValue": "大数据存储",
          "eusmgrDataTypeId": "95dee34f709311e9b8d102420a00001a",
          "id": "bcf7ff41709311e9b8d102420a00001a"
        },
        {
          "codeSn": "4",
          "codeValue": "大数据处理和调度",
          "eusmgrDataTypeId": "95dee34f709311e9b8d102420a00001a",
          "id": "c3fe5bb7709311e9b8d102420a00001a"
        },
        {
          "codeSn": "5",
          "codeValue": "数据统计与大数据分析",
          "eusmgrDataTypeId": "95dee34f709311e9b8d102420a00001a",
          "id": "cee86abb709311e9b8d102420a00001a"
        },
        {
          "codeSn": "6",
          "codeValue": "数据可视化技术",
          "eusmgrDataTypeId": "95dee34f709311e9b8d102420a00001a",
          "id": "d5a43dbe709311e9b8d102420a00001a"
        }
      ],
      "message": "success"
    })}
];
