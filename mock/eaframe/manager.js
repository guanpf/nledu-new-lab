const router = [
  {
    path: "/manager", // 必填
    name: "manager-index", // 必填
    component: "layout/manager", // 必填
    icon: "menu-down", // isInMenu = "true" 时必填
    title: "后台管理", // isInMenu = "true" 时必填
    isInMenu: false, // 必填
    isDisabled: 'true',
    redirect: '/manager/user',
    children: [
      {
        path: "user", // 必填
        name: "manager-user", // 必填
        icon: "menu-down", // isInMenu = "true" 时必填
        title: "人员管理", // isInMenu = "true" 时必填
        isInMenu: "true", // 必填
        component: "module/eusmgr/view/admin/user",
        isDisabled: 'true',
      },
      {
        path: "role", // 必填
        name: "manager-role", // 必填
        icon: "menu-down", // isInMenu = "true" 时必填
        title: "角色管理", // isInMenu = "true" 时必填
        isInMenu: "true", // 必填
        component: "module/eusmgr/view/admin/role",
        isDisabled: 'true',
      },
      {
        path: "organization", // 必填
        name: "manager-organization", // 必填
        icon: "menu-down", // isInMenu = "true" 时必填
        title: "组织管理", // isInMenu = "true" 时必填
        isInMenu: "true", // 必填
        component: "module/eusmgr/view/admin/organization",
        isDisabled: 'true',
      },
      {
        path: "menu", // 必填
        name: "manager-menu", // 必填
        icon: "menu-down", // isInMenu = "true" 时必填
        title: "菜单管理", // isInMenu = "true" 时必填
        isInMenu: "true", // 必填
        component: "module/eusmgr/view/admin/menu",
        isDisabled: 'true',
      },
      {
        path: "system", //必填
        name: "manager-system", //必填
        icon: "menu-down", //isInMenu = "true" 时必填
        title: "系统配置管理", //isInMenu = "true" 时必填
        isInMenu: "true", //必填
        component: "module/eusmgr/view/admin/system",
        isDisabled: "true",
      },

    ]
  }
];
module.exports = router;
