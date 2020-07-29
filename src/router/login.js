import {
  PATH_RACE,
  PATH_BUSI,
  PATH_RACE_PRACTICE,
  PATH_MANAGER,
  PATH_EXAM,
  PATH_PRACTICE,
  PATH_LEARNING,
  PATH_ERES
} from "@/config/constants";

export default [
  {
    path: `/${PATH_LEARNING}/login`,
    name: "login",
    component: () => import("@/module/eusmgr/view/login/index")
  },

  {
    path: `/${PATH_RACE}/login`,
    name: 'race-login',
    component: () => import('@/module/race/view/login')
  },
  {
    path: `/${PATH_RACE}`,
    redirect: {
      name: 'race-login'
    }
  },
  {
    path: `/${PATH_BUSI}/login`,
    name: 'ebusi-login',
    component: ()=> import('@/module/ebusi/view/login'),
  },
  {
    path: `/${PATH_BUSI}`,
    redirect: {
      name: "ebusi-login"
    }
  },
  {
    path: `/${PATH_RACE_PRACTICE}/login`,
    name: 'racepractice-login',
    component: ()=> import('@/module/racepractice/view/login.vue')
  },
  {
    path: `/${PATH_RACE_PRACTICE}`,
    name: 'racepractice-home',
    component: ()=> import('@/module/racepractice/view/Home.vue')
  },

  {
    path: `/${PATH_PRACTICE}`,
    name: "practicelayout",
    component: () => import("@/layout/practice.vue"),
    children: [
      {
        path: "",
        name: "practice-index",
        component: () => import("@/module/etmpractice/view/index.vue")
      }
    ]
  },
  {
    path: `/${PATH_EXAM}`,
    name: 'examlayout',
    component: ()=> import("@/layout/exam.vue"),
    redirect: {
      name: 'exam-login'
    },
    children: [{
      path: "login",
      name: "exam-login",
      component: () => import('@/module/etmexam/view/login.vue')
    }]
  },
  {
    path: `/${PATH_MANAGER}/login`,
    name: 'manager-login',
    component: () => import("@/module/eusmgr/view/admin/login.vue")
  },
  {
    path: `/${PATH_ERES}/login`,
    name: 'eres-login',
    component: () => import("@/module/onlineres/view/login")
  }

]
