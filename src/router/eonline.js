import {PATH_EONLINE} from "../config/constants";

// isNeedLogin: 是否需要登录才能访问
// belong: 从属模块，用于判断菜单显示
export default [
  {
    path: `/${PATH_EONLINE}/login`,
    name: "eonline-login",
    component: () => import("@/module/eonline/view/login"),
    meta: {
      isNeedLogin: false
    }
  },
  {

    path: `/${PATH_EONLINE}`,
    redirect: {
      name: 'eonline-index'
    }
  },
  {
    path: `/${PATH_EONLINE}/index`,
    name: "eonline-index",
    component: () => import('@/module/eonline/view/index'),
    meta: {
      isNeedLogin: false
    }
  },
  {
    path: `/${PATH_EONLINE}/career`,
    name: "eonline-career",
    component: () => import('@/module/eonline/view/careerPlan'),
    meta: {
      isNeedLogin: false
    }
  },
  {
    path: `/${PATH_EONLINE}/courseList`,
    name: "eonline-courseList",
    component: ()=> import('@/module/eonline/view/courseList'),
    meta: {
    isNeedLogin: false
    }
  },
  {
    path:`/${PATH_EONLINE}/center`,
    name:"eonline-center",
    component:()=>import('@/module/eonline/view/studentCenter'),
    meta:{
      isNeedLogin:true,
      belong: 'eonline-my'
    }
  },
  {
    path: `/${PATH_EONLINE}/courseIntro`,
    name: "eonline-courseIntro",
    component: () => import('@/module/eonline/view/courseIntro'),
    meta: {
      isNeedLogin: false
    }
  },
  {
    path: `/${PATH_EONLINE}/courseDetail`,
    name: "eonline-courseDetail",
    component: () => import('@/module/eonline/view/courseDetail'),
    meta: {
      isNeedLogin: false,
      belong: 'eonline-my'
    }
  },
    {
        path: `/${PATH_EONLINE}/resourceList`,
        name: "eonline-resourceList",
        component: () => import('@/module/eonline/view/resourceList'),
        meta: {
            isNeedLogin: false,
            belong: 'eonline-my'
        }
    },
    {
        path: `/${PATH_EONLINE}/resourcePlay`,
        name: "eonline-resourcePlay",
        component: () => import('@/module/eonline/view/resourcePlay'),
        meta: {
            isNeedLogin: true,
            belong: 'eonline-my'
        }
    },
  {
    path: `/${PATH_EONLINE}/attendClass`,
    name: "eonline-attendClass",
    component: () => import('@/module/eonline/view/attendClass'),
    meta: {
      isNeedLogin: true,
      belong: 'eonline-my'
    }
  },
  {
    path: `/${PATH_EONLINE}/teachercenter`,
    name: "eonline-teachercenter",
    component: () => import('@/module/eonline/view/teacherCenter'),
    meta: {
      isNeedLogin: true,
      belong: 'eonline-my'
    }
  },
    //作业与考试列表页
  {
    path:`/${PATH_EONLINE}/homeworkList`,
    name:"eonline-homework-list",
    component:()=>import(`@/module/eonline/view/homeworkList`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
    //老师端-作业批阅页面
  {
    path:`/${PATH_EONLINE}/homeworkMarking`,
    name:"eonline-homework-marking",
    component:()=>import(`@/module/eonline/view/homeworkMarking`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
    //老师端-考试批阅页面
  {
    path:`/${PATH_EONLINE}/examMarking`,
    name:"eonline-exam-marking",
    component:()=>import(`@/module/eonline/view/homeworkMarking`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
  {
    path: `/${PATH_EONLINE}/test`,
    name: 'test',
    component: ()=> import(`@/module/eonline/view/test`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
    //学生个人中心-我的作业与考试
  {
    path:`/${PATH_EONLINE}/myhomework`,
    name:"eonline-my-homework",
    component:()=>import(`@/module/eonline/view/myhomework`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
    //老师个人中心-学习单元习题列表
  {
    path:`/${PATH_EONLINE}/exercise`,
    name:"eonline-exercise",
    component:()=>import(`@/module/eonline/view/unitExercise`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my',
    }
  },
    //老师端-个人中心-试卷-作业/试卷详情
  {
    path:`/${PATH_EONLINE}/examDetail`,
    name:"eonline-exam-detail",
    component:()=>import(`@/module/eonline/view/examDetail`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
  //   //学生端-个人中心-作业-作业详情/试卷详情
  //   //TODO 弃用
  // {
  //   path:`/${PATH_EONLINE}/myhomeworkDetail`,
  //   name:"eonline-myhomework-detail",
  //   component:()=>import(`@/module/eonline/view/myhomeworkDetail`),
  //   meta:{
  //     isNeedLogin:false,
  //     belong: 'eonline-my'
  //   }
  // },
    //学生端-个人中心-作业-做作业
  {
    path:`/${PATH_EONLINE}/doHomework`,
    name:"eonline-do-homework",
    component:()=>import(`@/module/eonline/view/doHomework`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
    //学生端-个人中心-作业-做试卷
    {
        path:`/${PATH_EONLINE}/doExam`,
        name:"eonline-do-exam",
        component:()=>import(`@/module/eonline/view/doExam`),
        meta:{
            isNeedLogin:false,
            belong: 'eonline-my'
        }
    },

    //老师端-课程中心-综合试卷-综合试卷详情页
  {
    path:`/${PATH_EONLINE}/comprehensiveExam`,
    name:"eonline-comprehensive-exam",
    component:()=>import(`@/module/eonline/view/comprehensiveExam`),
    meta:{
      isNeedLogin:false,
            belong: 'eonline-my'
    }
  },
    //老师端-个人中心-作业管理-学生作业详情
  {
    path:`/${PATH_EONLINE}/studentHomework`,
    name:"eonline-student-homework-detail",
    component:()=>import(`@/module/eonline/view/studentHomeworkDetail`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
  //老师端-个人中心-作业管理-考试详情
  {
    path:`/${PATH_EONLINE}/studentExamDetail`,
    name:"eonline-student-exam-detail",
    component:()=>import(`@/module/eonline/view/studentExamDetail`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
  //学生端-个人中心-作业管理-我的作业
  {
    path:`/${PATH_EONLINE}/myHomeworkDetail`,
    name:"eonline-my-homework-detail",
    component:()=>import(`@/module/eonline/view/myHomeworkDetail`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
  //学生端-个人中心-作业管理-考试详情
  {
    path:`/${PATH_EONLINE}/myExamDetail`,
    name:"eonline-my-exam-detail",
    component:()=>import(`@/module/eonline/view/myExamDetail`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  },
  {
    path:`/${PATH_EONLINE}/doexperiment`,
    name:"eonline-do-experiment",
    component:()=>import(`@/module/eonline/view/doExperiment.vue`),
    meta:{
      isNeedLogin:false,
      belong: 'eonline-my'
    }
  }

]
