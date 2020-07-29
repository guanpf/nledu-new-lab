<template>
  <div id="HorizontalLayout">
    <div class="top-bar" :style="topBarHeight">
      <nl-scrollbar>
        <slot name="topBar"></slot>
      </nl-scrollbar>
    </div>
    <div class="center-bar" :style="centerBarHeight">
      <nl-scrollbar>
        <slot name="centerBar"></slot>
      </nl-scrollbar>
    </div>
    <div class="bottom-bar" :style="bottomBarHeight">
      <nl-scrollbar>
        <slot name="bottomBar"></slot>
      </nl-scrollbar>
    </div>
  </div>
</template>

<script>

export default {
  name: "horizontal-layout",
  computed: {
    topBarHeight() {
      let style = {
        height: this.topBar
      };
      return style;
    },
    centerBarHeight() {
      let style = {
        height: "calc(100% - " + this.topBar + " - " + this.bottomBar + ")"
      };
      return style;
    },
    bottomBarHeight() {
      let style = {
        height: this.bottomBar
      };
      return style;
    }
  },
  props: {
    topBar: {
      type: String,
      default: "0px"
    },
    bottomBar: {
      type: String,
      default: "0px"
    },
    centerBar: {
      type: String,
      default: "100%"
    }
  }
};
</script>

<style scoped>
#HorizontalLayout {
  width: 100%;
  height: 100%;
}
.top-bar {
  position: relative;
  float: left;
  width: 100%;
}
.bottom-bar {
  position: relative;
  float: left;
  width: 100%;
}
.center-bar {
  position: relative;
  float: left;
  width: 100%;

}
 /deep/ .el-scrollbar__view{
   height:100%
 }
</style>
