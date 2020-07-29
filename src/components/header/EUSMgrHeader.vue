<template>
  <nl-menu
    class="nl-mgr-header"
    background-color="#1b1931"
    active-text-color="#9895ff"
    text-color="#ffffff"
    :default-active="curRoute"
    router
    mode="horizontal"
  >
    <div class="fr">
      <nl-menu-item class="fl" index="1-1">平台首页</nl-menu-item>
      <nl-menu-item class="fl" index="1-2">发现大数据</nl-menu-item>
      <nl-menu-item class="fl" index="1-3">发现物联网</nl-menu-item>
      <nl-menu-item class="fl" index="1-4">关于我们</nl-menu-item>
      <nl-menu-item index="2" class="fl search-input">
        <nl-input
          placeholder="搜索"
          suffix-icon="el-icon-search"
          v-model="searchText"
        ></nl-input>
      </nl-menu-item>
      <nl-menu-item class="fl" index="1-5">新用户注册</nl-menu-item>
      <nl-menu-item class="fl" index="/login">登录</nl-menu-item>
    </div>
    <nl-submenu index="1-7">
      <template slot="title"
        >选择主题</template
      >
      <nl-menu-item @click="loadTheme('default')">默认主题</nl-menu-item>
      <nl-menu-item @click="loadTheme('dark')">黑色主题</nl-menu-item>
    </nl-submenu>
  </nl-menu>
</template>

<script>
export default {
  name: "EUSMgrHeader",
  data() {
    return {
      curRoute: "1-3",
      searchText: ""
    };
  },
  methods: {
    loadTheme(theme) {
      if (theme != "default") {
        // require(`@/scss/theme/dist/${theme}.css`);
      }
      this.$emit("changeTheme", theme);
    }
  }
};
</script>

<style lang="scss" scoped>
.nl-mgr-header {
  /deep/.el-menu-item:hover {
    color: #9895ff !important;
    background-color: #1b1931 !important;
  }
  &.el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}

.search-input {
  .el-input {
    padding-bottom: 2px;
  }
  /deep/ .el-input__inner {
    color: #fff;
    background-color: #3e375d;
    border: none;
    border-radius: 0px;
    &:focus {
      border-color: #3e375d;
    }
    &::placeholder {
      color: #888ac1;
    }
  }
}
</style>
