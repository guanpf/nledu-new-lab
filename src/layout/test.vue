<template>
  <div class="" style="height: 100%;">
    <etm-header></etm-header>
    <div
      style="height: calc(100% - 75px);position: relative;background-color: #f1f3f4"
    >
      <etm-menu class="frame-menu"></etm-menu>
      <div class="right-top">
        <etm-breadcrumb></etm-breadcrumb>
        <!--<div class="title" v-if="pageTitle">{{ pageTitle }}</div>-->
      </div>
      <div
        class=""
        style="margin: 0 27px 0  calc(27px + 70px);"
        id="js-page-view"
      >
        <nl-scrollbar style="" :style="pageViewStyle" class="frame-view">
          <!--<router-view></router-view>-->
          <edit-layout title="asd" :steps="steps" :btns="btns">
            <div>page</div>
          </edit-layout>
        </nl-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import etmHeader from "@/components/header/ETMLabHeader";
import etmBreadcrumb from "@/components/routerBreadcrumb/emtBreadcrumb";
// import etmMenu from "@/components/nlMenu/sidebar";
import etmMenu from "@/components/nlLeftMenu/etmlabMenu";
import eventBus from "@/libs/eventBus";
import { mapState, mapMutations } from "vuex";

import editLayout from "@/components/editLayout/index";

export default {
  name: "index",
  components: {
    etmHeader,
    etmMenu,
    etmBreadcrumb,
    editLayout
  },
  data() {
    return {
      scrollElm: null,
      pageHeight: 0,
      showDefaultPageStyle: true,
      btns: [
        {
          name: "qwe",
          fn: this.test
        },
        {
          name: "btn2",
          fn: this.test2
        }
      ],
      steps: [
        {
          status: "active",
          title: "step1",
          content: "step1 content"
        },
        {
          status: "active",
          title: "step1",
          content: "step1 content"
        },
        {
          status: "active",
          title: "step1",
          content: "step1 content"
        }
      ]
    };
  },
  computed: {
    ...mapState("ui", ["pageTitle"]),
    pageViewStyle() {
      let style = {
        height: this.pageHeight + "px",
      };
      if (this.showDefaultPageStyle !== false) {
        // style.borderRadius = "3px";
        // style.boxShadow = "0 0 3px 0 #ddd";
        // style.backgroundColor = "#ffffff";
      }
      return style;
    }
  },
  mounted() {
    this.$nextTick(() => {
      let sElm = (this.scrollElm = document.getElementsByClassName(
        "el-scrollbar__wrap"
      )[0]);
      this.scrollFunc = e => {
        if (sElm.scrollHeight - sElm.scrollTop === sElm.clientHeight) {
          eventBus.$emit("onReachBottom");
        }
      };
      sElm.addEventListener("scroll", this.scrollFunc);
    });
    this.setPageHeight();
    this.showDefaultPageStyle =
      this.$route.meta && this.$route.meta.showDefaultPageStyle;

    document.oncontextmenu = () => false;
    document.addEventListener("keydown", e => {
      if (e.key === "F12") {
        // e.preventDefault();
      }
    });

    window.addEventListener("resize", e => {
      this.setPageHeight();
    });
  },
  methods: {
    test() {
      console.log("t1");
      console.log(this.pageHeight);
    },
    test2() {
      console.log("t2");
    },
    ...mapMutations("ui", ["SET_TITLE"]),
    setPageHeight() {
      let e = document.getElementById("js-page-view");
      let windowHeight = document.body.clientHeight;
      let windowWidth = document.body.clientWidth;

      if (windowWidth < 1920) {
        // e.style.overflowX = "scroll";
      } else {
        // e.style.overflowX = "hidden";
      }
      e.style.overflow = "visible"
      this.pageHeight = windowHeight - e.getBoundingClientRect().top - 30;
    }
  },
  watch: {
    $route(newVal) {
      this.$nextTick(this.setPageHeight);

      this.showDefaultPageStyle =
        newVal.meta && newVal.meta.showDefaultPageStyle;
      this.SET_TITLE("");
      // todo move page height control to ui vuex
      setTimeout(() => {
        this.setPageHeight();
      }, 1000);
    }
  },
  beforeDestroy() {
    this.scrollElm.removeEventListener("scroll", this.scrollFunc);
  }
};
</script>

<style scoped lang="scss">
.frame-menu {
  /*float: left;*/
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1999;
}
.right-top {
  padding-left: 70px;
  .title {
    padding-left: 30px;
    font-size: 22px;
    color: #30285a;
    line-height: 50px;
    margin-top: -10px;
  }
}
.frame-view {
  /*padding-left: 70px;*/
  //
  /deep/ .el-scrollbar__view {
    height: 100%;
  }
}
</style>
