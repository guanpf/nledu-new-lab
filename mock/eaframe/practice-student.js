const router = [
  {
    path: "/practice",
    name: "practice-router",
    icon: "menu-user-manage",
    component: "layout/practice",
    title: "训练平台子路由",
    isInMenu: "false",
    children: [
      // {
      //   path: "index",
      //   name: "practice-index",
      //   component: "module/etmpractice/view/index",
      //   title: "训练平台首页"
      // },
      {
        path: "experimentdetail",
        name: "practice-experiment-detail",
        component: "module/etmpractice/view/experimentDetail",
        title: "实验详情"
      },
      {
        path: "experimentopera",
        name: "practice-experiment-opera",
        component: "module/etmpractice/view/experimentOpera",
        title: "实验操作"
      },
      {
        path: "experimentlist",
        name: "practice-experiment-list",
        component: "module/etmpractice/view/experimentList",
        title: "实验列表"
      },
      {
        path: "caselist",
        name: "practice-case-list",
        component: "module/etmpractice/view/caseList",
        title: "案例列表"
      },
      {
        path: "casedetail",
        name: "practice-case-detail",
        component: "module/etmpractice/view/caseDetail",
        title: "案例详情"
      },
      {
        path: 'examlist',
        name: 'practice-exam-list',
        component: "module/etmpractice/view/examList",
        title: '模拟考试'
      },
      {
        path: 'examdetail',
        name: 'practice-exam-detail',
        component: "module/etmpractice/view/examDetail",
        title: '试卷详情'
      },
      {
        path: 'formalexamdetail',
        name: 'practice-formal-exam-detail',
        component: 'module/etmpractice/view/formalExamDetail',
        title: '正式考试详情',
      },

    ]
  }
];
module.exports = router;
