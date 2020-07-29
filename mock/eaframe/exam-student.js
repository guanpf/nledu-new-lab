const router = [
  {
    path: "/exam",
    name: "exam-router",
    icon: "menu-user-manage",
    component: "layout/exam",
    title: "考试平台子路由",
    isInMenu: "false",
    children: [
      {
        path: "examdetail",
        name: "exam-exam-detail",
        component: "module/etmexam/view/examDetail",
        title: "试卷详情"
      },
      {
        path: "experimentopera",
        name: "exam-experiment-opera",
        component: "module/etmpractice/view/experimentOpera",
        title: "实验操作"
      },
      {
        path: "experimentdetail",
        name: 'exam-experiment-detail',
        component: "module/etmexam/view/experimentDetail",
        title: "实验详情"
      }
    ]
  }
];
module.exports = router;
