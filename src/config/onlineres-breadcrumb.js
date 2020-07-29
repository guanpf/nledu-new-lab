export default {
  "eres-course-type": [
    {
      title: "课程中心管理",
      // link: { name: "onlineres-course-list" }
      routerName: ""
    },
    {
      title: "课程分类管理",
      routerName: ""
    }
  ],
  "eres-course-list": [
    {
      title: "课程中心管理",
      link: {name: ""}
    },
    {
      title: "课程管理",
      link: {name: ""}
    },{
      title: '课程列表',
      link: {name: ''}
    }
  ],
  "eres-experiment-list": [
    {
      title: '实验中心管理',
      link: {name: ""}
    },
    {
      title: '实验内容管理',
      link: {name: ""}
    },{
      title: '实验列表',
      link: {name: ""}
    },
  ],
  "eres-course-career": [{
    title: '课程中心管理'
  },{
    title: '职业方向管理'
  }],
  "eres-course-career-edit": [{
    title: '课程中心管理'
  },{
    title: '职业方向管理'
  },{
    title: "新增职业方向"
  }],
  "eres-experiment-resource": [{title: '实验中心管理'},{title: '实验资源管理'}],
  "eres-experiment-resource-image-edit": [{title: '实验中心管理'},{title: '实验资源管理',link:{name:'eres-experiment-resource'}},{title: '新增镜像'}],
  "eres-experiment-resource-assembly-edit": [{title: '实验中心管理'},{title: '实验资源管理',link:{name:'eres-experiment-resource'}},{title: '新增组件'}],
  "eres-experiment-resource-specification-edit": [{title: '实验中心管理'},{title: '实验资源管理',link:{name:'eres-experiment-resource'}},{title: '新增规格'}],
  "eres-course-add":[{
    title: '课程中心管理',
    link: {name: ""}
  }, {
    title: "课程管理",
    link: {name: ""}
  },
    {
      title: '课程列表',
      link: {name: 'eres-course-list'}
    },
    {
      title: '新增课程',
    }],
  "eres-experiment-group":[ {
    title: '实验中心管理',
    link: {name: ""}
  },{
    title:"实验分组管理"
  }],
  "eres-exercise-list": [{title:'习题管理'},{title:'习题列表'}],
  "eres-exam-list":[{title:'试卷管理'},{title: '试卷列表'}],
  "eres-exercise-edit":[{title:'习题管理',link:{name:'eres-exercise-list'}},{title:'习题列表',link:{name:'eres-exercise-list'}},{title:'编辑习题'}],
  "eres-exam-edit":[{title:'试卷管理',link:{name:'eres-exam-list'}},{title:'试卷列表',link:{name:'eres-exam-list'}},{title:'编辑试卷'}],
}
