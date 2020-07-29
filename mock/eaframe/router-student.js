const router = [
  {
    path: "/index",
    name: "index",
    icon: "menu-user-manage",
    component: "layout/index",
    title: "个人中心",
    isInMenu: "true",
    isDisabled: 1,
    children: [
      {
        path: "",
        name: "studentindex",
        component: "module/eduadmin/view/index/studentindex",
        title: "个人中心" // 学生
      }
    ]
  },
  {
    path: "/empty",
    name: "empty1",
    isInMenu: "true",
    title: "我的课程",
    isDisabled: 0,

    component: "",
    icon: "menu-class-manage"
  },
  {
    path: "/empty",
    name: "empty2",
    isInMenu: "true",
    title: "我的实验",
    isDisabled: 0,

    component: "",
    icon: "menu-experiment-manage"
  },

  {
    path: "/empty",
    name: "empty3",
    isInMenu: "true",
    title: "我的作业",
    isDisabled: 0,
    component: "",
    icon: "menu-question-bank-manage"
  },
  {
    path: "/empty",
    name: "empty4",
    isInMenu: "true",
    title: "我的考试",
    isDisabled: 0,
    component: "",
    icon: "menu-exam-manage"
  },

  {
    path: "/etmlab", // 必填
    name: "etmlab", // 必填
    component: "layout/index", // 必填
    icon: "menu-down", // isInMenu = "true" 时必填
    title: "资源中心", // isInMenu = "true" 时必填
    isInMenu: "false", // 必填
    children: [
      {
        path: "coursepreview/:id",
        name: "coursepreview",
        title: "课程预览",
        isInMenu: false,
        component: "module/etmlab/view/course/coursePreview"
      },
      {
        path: "experiment/:id",
        title: "实验详情",
        name: "experimentDetail",
        isInMenu: false,
        component: "module/etmlab/view/experiment/detail"
      },

      {
        path: "question",
        name: "question",
        component: "module/etmlab/view/question/index",
        title: "习题管理",
        icon: "menu-question-bank-manage",
        isInMenu: "true"
      },

      {
        path: "paperList",
        name: "paperList",
        title: "试卷列表",
        component: "module/etmlab/view/paper/list"
      },
      {
        path: "paperPreview",
        name: "paperPreview",
        component: "module/etmlab/view/paper/preview",
        title: "试卷预览"
      },
      {
        path: "search",
        name: "search",
        component: "module/etmlab/view/search/result",
        title: "搜索"
      }
    ]
  },
  ///////////////////////////////////
  {
    path: "/eduadmin", // 必填
    name: "eduadmin", // 必填
    component: "layout/index", // 必填
    icon: "menu-down", // isInMenu = "true" 时必填
    title: "教学空间", // isInMenu = "true" 时必填
    isInMenu: "false", // 必填
    children: [

      {
        path: "studentexam",
        name: "studentexam",
        title: "学生考试",
        component: "module/eduadmin/view/exam/student"
      }
    ]
  },
  //////////////////////////////////
  {
    path: "/studyindex",
    name: "studycourseindex",
    component: "module/eduadmin/view/takeexperiment/student",
    isInMenu: false,
    meta: {
      title: "学生实验首页",
      icon: "menu-down"
    }
  },
  {
    path: "/toStudentClass",
    name: "toStudentClass",
    title: "学生上课",
    component: "module/eduadmin/view/takeclass/student"
  },
];
module.exports = router;
