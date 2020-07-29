const router = [
  {
    path: "/index",
    name: "index",
    icon: "menu-user-manage",
    component: "layout/index",
    title: "个人中心",
    isInMenu: "true",
    isDisabled: 0,
    children: [
      {
        path: "",
        name: "teacherindex",
        component: "module/eduadmin/view/index/teacherindex",
        title: "个人中心" // 老师
      },
    ]
  },

  {
    path: "/empty",
    name: "empty1",
    isInMenu: "true",
    title: "我的课程",
    isDisabled: 1,
    component: "",
    icon: "menu-class-manage"
  },
  {
    path: "/empty",
    name: "empty2",
    isInMenu: "true",
    title: "我的实验",
    isDisabled: 1,
    component: "",
    icon: "menu-experiment-manage"
  },

  {
    path: "/empty",
    name: "empty3",
    isInMenu: "true",
    isDisabled: 1,
    title: "作业管理",
    component: "",
    icon: "menu-question-bank-manage"
  },
  {
    path: "/empty",
    name: "empty4",
    isInMenu: "true",
    title: "考试管理",
    isDisabled: 1,
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
      },
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
        path: "prelesson",
        name: "preLesson",
        title: "备课",
        component: "module/eduadmin/view/preLesson/index",
        children: [
          {
            path: "step/1",
            name: "preLessonStep1",
            title: "备课范围",
            component: "module/eduadmin/view/preLesson/step1"
          },
          {
            path: "step/2/:plid",
            name: "preLessonStep2",
            title: "课堂设计",
            component: "module/eduadmin/view/preLesson/step2"
          },
          {
            path: "step/3/:plid",
            name: "preLessonStep3",
            title: "完成备课",
            component: "module/eduadmin/view/preLesson/step3.vue"
          }
        ]
      },


      {
        path: "supervise",
        title: "实验监督",
        name: "supervise",
        component: "module/eduadmin/view/takeexperiment/supervise"
      },
    ]
  },
  //////////////////////////////////
  {
    path: "/teacherindex",
    name: "teachercourseindex",
    component: "module/eduadmin/view/takeexperiment/teacher",
    isInMenu: false,
    title: "教师实验首页",
    icon: "menu-down"
  },
  {
    path: "/toClass",
    name: "toClass",
    title: "老师上课",
    component: "module/eduadmin/view/takeclass/teacher"
  },
];
module.exports = router;
