<template>
  <div id="VerticalLayout">
    <div class="left-bar" :style="leftBarWidth">
      <nl-scrollbar>
        <slot name="leftBar"></slot>
      </nl-scrollbar>
    </div>
    <div class="center-bar" :style="centerBarWidth">
      <nl-scrollbar>
        <slot name="centerBar"></slot>
      </nl-scrollbar>
    </div>
    <div class="right-bar" :style="rightBarWidth">
      <nl-scrollbar>
        <slot name="rightBar"></slot>
      </nl-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vertical-layout",
  computed: {
    centerBarWidth() {
      let style = {
        width: "calc(100% - " + this.leftBar + " - " + this.rightBar+")"
      };
      return style;
    },
    rightBarWidth() {
      let style = {
        width: this.rightBar
      };
      return style;
    },
    leftBarWidth() {
      let style = {
        width: this.leftBar
      };
      return style;
    }
  },
  props: {
    leftBar: {
      type: String,
      default: "0px"
    },
    rightBar: {
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

<style scoped lang="scss">
    #VerticalLayout{
        height:100%
    }
.left-bar {
position: relative;
    float: left;
  /*background-color: #0da935;*/
  height: 100%;
}
.right-bar {
    position: relative;
  float: left;
  /*background-color: #00e600;*/
  height: 100%;
}
.center-bar {
position: relative;
    float: left;
  /*background-color: #2ac853;*/
  height: 100%;
}
</style>
