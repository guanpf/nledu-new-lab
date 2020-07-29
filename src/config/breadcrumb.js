import practiceBreadcrumb from "./practice-breadcrumb";
import racePracticeBreadcrumb from "./racepractice-breadcrumb"
import raceBreadcrumb from "./race-breadcrumb"
import onlineresBreadcrumb from './onlineres-breadcrumb'
import eonlineBreadcrumb from './eonline-breadcrumb'
export default {
  ...practiceBreadcrumb,
  ...racePracticeBreadcrumb,
  ...raceBreadcrumb,
  ...onlineresBreadcrumb,
    ...eonlineBreadcrumb,
  // 如果存在routerName & 从路由中取到的routerName 的title 不为空 则使用routerName的title,否则走默认配置的title
  //课程体系部分
  curriculumSystem: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    {
      title: "课程体系列表",
      routerName: "curriculumSystem",
      link: { name: "curriculumSystem" }
    }
  ],
  curriculumSystemEdit: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    {
      title: "课程体系列表",
      routerName: "curriculumSystem",
      link: { name: "curriculumSystem" }
    },
    {
      title: "课程体系编辑",
      routerName: "curriculumSystemEdit",
      link: { name: "curriculumSystemEdit" }
    } //缺少一个title
  ],
  //课程部分
  course: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "课程管理", routerName: "course", link: { name: "course" } }
  ],
  coursepreview: [
    { title: "首页", routerName: "index", link: { path: "/index/" } },
    // { title: "课程管理", routerName: "course", link: { name: "course" } },
    {
      title: "课程预览",
      routerName: "coursepreview",
      link: { name: "coursepreview" }
    }
  ],
  courseEdit: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "课程管理", routerName: "course", link: { name: "course" } },
    {
      title: "课程编辑",
      routerName: "courseEdit",
      link: { name: "courseEdit" }
    }
  ],
  //实验部分
  experiment: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    {
      title: "实验管理",
      routerName: "experiment",
      link: { name: "experiment" }
    }
  ],
  experimentDetail: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    {
      title: "实验管理",
      routerName: "experiment",
      link: { name: "experiment" }
    },
    {
      title: "实验详情",
      routerName: "experimentDetail",
      link: { name: "experimentDetail" }
    }
  ],
  //习题部分
  question: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "习题管理", routerName: "question", link: { name: "question" } }
  ],
  questionEdit: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "习题管理", routerName: "question", link: { name: "question" } },
    {
      title: "习题编辑",
      routerName: "questionEdit",
      link: { name: "questionEdit" }
    }
  ],
  //试卷部分
  // paper:[
  //   {title:"资源中心",link:{name:"etmlab"}},
  //     { title: "选取题目", link: { name: "paper" } },
  // ],
  paperEdit: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "试卷列表", routerName: "paperList", link: { name: "paperList" } },
    { title: "试卷编辑", routerName: "paperEdit", link: { name: "paperEdit" } }
  ],
  paperPreview: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "试卷列表", routerName: "paperList", link: { name: "paperList" } },
    {
      title: "试卷预览",
      routerName: "paperPreview",
      link: { name: "paperPreview" }
    }
  ],
  paperList: [
    { title: "资源中心", routerName: "etmlab", link: { path: "/index/" } },
    { title: "试卷列表", routerName: "paperList", link: { name: "paperList" } }
  ],
  //教学空间

  classList: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "班级管理", routerName: "classList", link: { name: "classList" } }
  ],
  studentlist: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    {
      title: "班级学生列表",
      routerName: "studentlist",
      link: { name: "studentlist" }
    }
  ],
  schedule: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "排课管理", routerName: "schedule", link: { name: "schedule" } }
  ],
  major: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "专业管理", routerName: "major", link: { name: "major" } }
  ],
  exam: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "考试管理", routerName: "exam", link: { name: "exam" } }
  ],
  studentExam: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "考试管理", routerName: "exam", link: { name: "exam" } },
    {
      title: "我的考试",
      routerName: "StudentExam",
      link: { name: "StudentExam" }
    }
  ],
  //添加专业
  editMajorStep1: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "专业管理", routerName: "major", link: { name: "major" } },
    {
      title: "专业编辑",
      routerName: "editMajorStep1",
      link: { name: "editMajorStep1" }
    }
  ],
  editMajorStep2: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "专业管理", routerName: "major", link: { name: "major" } },
    {
      title: "专业编辑",
      routerName: "editMajorStep2",
      link: { name: "editMajorStep2" }
    }
  ],
  editMajorStep3: [
    { title: "教学空间", routerName: "eduadmin", link: { path: "/index/" } },
    { title: "专业管理", routerName: "major", link: { name: "major" } },
    {
      title: "专业编辑",
      routerName: "editMajorStep3",
      link: { name: "editMajorStep3" }
    }
  ],

  //todo 备课部分的二级菜单
  preLessonStep1: [
    {
      title: "教学空间",
      routerName: "eduadmin",
      link: { name: "teacherindex" }
    },
    // {title:"备课",routerName: "etmlab",link:{name:""}},
    {
      title: "备课范围",
      routerName: "preLessonStep1",
      link: { name: "preLessonStep1" }
    }
  ],
  preLessonStep2: [
    {
      title: "教学空间",
      routerName: "eduadmin",
      link: { name: "teacherindex" }
    },
    // { title: "备课", routerName: "etmlab", link: { name: "" } },
    {
      title: "课堂设计",
      routerName: "preLessonStep2",
      link: { name: "preLessonStep2" }
    }
  ],
  preLessonStep3: [
    {
      title: "教学空间",
      routerName: "eduadmin",
      link: { name: "teacherindex" }
    },
    // {title:"备课",routerName: "etmlab",link:{name:""}},
    {
      title: "完成备课",
      routerName: "preLessonStep3",
      link: { name: "preLessonStep3" }
    }
  ],
  search: [
    // name: "index"
    { title: "首页", routerName: "index", link: { path: "/index/index" } },
    { title: "搜索", routerName: "search", link: { name: "index" } },
    { title: "大数据", routerName: "etmlab", link: { name: "index" } }
  ],
  supervise: [
    { title: "首页", routerName: "index", link: { path: "/index/" } },
    // { title: "教学管理" },
    // { title: "实验详情" },
    { title: "实验监督" }
  ],
  ui: [
    { title: "首页", routerName: "index", link: { path: "/index/" } },
    { title: "首页", routerName: "index", link: { path: "/index/" } },
    { title: "首页", routerName: "index", link: { path: "/index/" } },
  ]
};
