const router = [
  {
    path: "/index",
    name: "index",
    icon: "menu-user-manage",
    component: "layout/index",
    title: "个人中心",
    isInMenu: "true",
    children: [
      // {
      //   path: "",
      //   name: "eduadminindex",
      //   component: "module/eduadmin/view/index/admin",
      //   title: "个人中心" // 教务管理员
      // },
      // {
      //   path: "index",
      //   name: "studentindex",
      //   component: "module/eduadmin/view/index/studentindex",
      //   title: "个人中心" // 学生
      // },
      {
        path: "",
        name: "teacherindex",
        component: "module/eduadmin/view/index/teacherindex",
        title: "个人中心" // 老师
      },
      // {
      //   path: "search",
      //   name: "search",
      //   component: "module/eduadmin/view/search/result",
      //   title: "搜索"
      // },
    ]
  },

  {
    path: "/etmlab", // 必填
    name: "etmlab", // 必填
    component: "layout/index", // 必填
    icon: "menu-down", // isInMenu = "true" 时必填
    title: "资源中心", // isInMenu = "true" 时必填
    isInMenu: "true", // 必填
    children: [
      {
        path: "curriculumsystem",
        name: "curriculumSystem",
        component: "module/etmlab/view/curriculumSystem/list",
        icon: "menu-csystem",
        isInMenu: "true",
        title: "课程体系"
      },
      {
        path: "curriculumsystem/:id",
        name: "curriculumSystemEdit",
        title: "课程体系编辑",
        component: "module/etmlab/view/curriculumSystem/edit",
        isInMenu: false
      },
      {
        path: "course",
        name: "course",
        title: "课程管理",
        icon: "menu-course-manage",
        isInMenu: "true",
        component: "module/etmlab/view/course/list"
      },
      {
        path: "coursepreview/:id",
        name: "coursepreview",
        title: "课程预览",
        isInMenu: false,
        component: "module/etmlab/view/course/coursePreview"
      },
      {
        path: "course/:id",
        name: "courseEdit",
        title: "课程编辑",
        isInMenu: false,
        component: "module/etmlab/view/course/edit",
        children: [
          {
            path: "step/1",
            name: "editCourseBegin",
            component: "module/etmlab/view/course/add-step1"
          },
          {
            path: "step/2",
            name: "editCourseStep2",
            component: "module/etmlab/view/course/add-step2"
          },
          {
            path: "step/3",
            name: "editCourseStep3",
            component: "module/etmlab/view/course/add-step3"
          }
        ]
      },

      {
        path: "experiment",
        name: "experiment",
        component: "module/etmlab/view/experiment/index",
        title: "实验管理",
        icon: "menu-experiment-manage",
        isInMenu: "true"
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
        path: "questionedit/:id?",
        name: "questionEdit",
        component: "module/etmlab/view/question/edit",
        title: "习题编辑",
        isInMenu: false
      },

      {
        path: "paper",
        name: "paper",
        component: "module/etmlab/view/paper/index",
        title: "选取题目"
      },
      {
        path: "paperEdit",
        name: "paperEdit",
        title: "试卷编辑",
        component: "module/etmlab/view/paper/edit"
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
    isInMenu: "true", // 必填
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
        path: "classes",
        name: "classList",
        component: "module/eduadmin/view/class/list",
        title: "班级管理",
        icon: "menu-class-manage",
        isInMenu: "true"
      },
      {
        path: "students/:id",
        name: "studentlist",
        component: "module/eduadmin/view/class/studentList",
        title: "班级学生列表"
      },
      {
        path: "schedule",
        name: "schedule",
        title: "排课管理",
        isInMenu: "true",
        icon: "menu-schedule-manageschedule",
        component: "module/eduadmin/view/class/schedule"
      },
      {
        path: "major",
        name: "major",
        title: "专业管理",
        icon: "menu-major-manage",
        isInMenu: "true",
        component: "module/eduadmin/view/major/index"
      },
      {
        path: "majoradd",
        name: "majorAdd",
        component: "module/eduadmin/view/major/add",
        children: [
          {
            path: "step/1",
            name: "editMajorStep1",
            title: "专业编辑",
            component: "module/eduadmin/view/major/step1"
          },
          {
            path: "step/2",
            name: "editMajorStep2",
            component: "module/eduadmin/view/major/step2"
          },
          {
            path: "step/3",
            name: "editMajorStep3",
            component: "module/eduadmin/view/major/step3"
          }
        ]
      },

      {
        path: "exam",
        name: "exam",
        title: "考试管理",
        icon: "menu-exam-manage",
        isInMenu: "true",
        component: "module/etmlab/view/paper/list"
      },
      {
        path: "supervise",
        title: "实验监督",
        name: "supervise",
        component: "module/eduadmin/view/takeexperiment/supervise"
      },
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
    path: "/teacherindex",
    name: "teachercourseindex",
    component: "module/eduadmin/view/takeexperiment/teacher",
    isInMenu: false,
    title: "教师实验首页",
    icon: "menu-down"
  },
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
    path: "/toClass",
    name: "toClass",
    title: "老师上课",
    component: "module/eduadmin/view/takeclass/teacher"
  },
  {
    path: "/toStudentClass",
    name: "toStudentClass",
    title: "学生上课",
    component: "module/eduadmin/view/takeclass/student"
  },
];
module.exports = router;
