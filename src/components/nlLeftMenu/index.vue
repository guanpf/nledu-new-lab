<template>
  <div class="nl-left-menu-container">
    <div
      class="nl-left-menu-container__inner"
      ref="menu"
      @click="containerClickHandler"
      @mouseleave="containerMouseLeaveHandler"
    >
      <div class="nl-left-menu-wrap">
        <!--<div class="background-mask" v-if="showDetail" @click="showDetail = !showDetail"></div>-->
        <div class="nl-left-menu-wrap__main nl-left-menu-main">
          <div
            v-for="(menu, index) in options"
            :key="index"
            class=" nl-left-menu-main__item"
            @mouseenter="menuMouseEnterHandler(index)"
          >
            <span class="el-icon-star-on nl-left-menu-main__icon"></span>
            <span class="">{{ menu.title }}</span>
          </div>
        </div>
        <div
          class="nl-left-menu-wrap__submenu nl-left-menu-submenu"
          v-show="isShowDetailMenu"
        >
          <div
            v-for="(item, index) in showDetailMenu"
            :key="index"
            class="nl-left-menu-submenu__item"
            @click="subMenuClickHandler(item)"
          >
            <div>{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from "../../libs/dom";

export default {
  name: "index",
  props: {
    options: Array
  },
  data() {
    return {
      showDetailMenu: [],
      isShowDetailMenu: false
    };
  },
  methods: {
    menuMouseEnterHandler(index) {
      this.showDetailMenu = this.options[index].children;
      addClass(this.$refs["menu"], "nl-left-menu-container__inner--hover");
      this.$nextTick(() => {
        this.isShowDetailMenu = true;
      });
    },
    containerClickHandler() {
      this.isShowDetailMenu = false;
      this.$nextTick(() => {
        removeClass(this.$refs["menu"], "nl-left-menu-container__inner--hover");
      });
    },
    containerMouseLeaveHandler() {
      this.isShowDetailMenu = false;
      this.$nextTick(() => {
        removeClass(this.$refs["menu"], "nl-left-menu-container__inner--hover");
      });
    },
    subMenuClickHandler(meta) {
      if (meta.router && meta.router.name) {
        this.$router.push({ name: meta.router.name });
      }
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
$namespace: nl;
</style>
