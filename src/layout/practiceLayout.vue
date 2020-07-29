<template>
  <div class="practice-layout" v-if="isPracticePage">
    <div>
      <div class="fixed" ref="fixed">
        <Header></Header>
        <Breadcrumb style="margin-left: 10px"></Breadcrumb>
      </div>
      <div class="placeholder" :style="{height: placeholderHeight+ 'px'}"></div>
    </div>
    <div class="page-container pr" :style="{height: `calc(100% - ${placeholderHeight}px - 20px`}">
      <slot></slot>
    </div>
  </div>
  <div v-else style="position: relative;height: 100%;">
    <slot></slot>
  </div>
</template>

<script>
import PracticeHeader from '@/components/header/PracticeHeader';
import Breadcrumb from '@/components/routerBreadcrumb/emtBreadcrumb';

import {getPlatformName} from "@/libs/platformLib";

export default {
  name: "practicsLayout",
  components: {
    Header: PracticeHeader,
    Breadcrumb
  },
  data: () => ({
    placeholderHeight: 0,
    isPracticePage: getPlatformName() === 'practice'
  }),
  methods: {
    updateHeight() {
      this.$nextTick(()=> {
        if (this.$refs['fixed']) {
          this.placeholderHeight = this.$refs['fixed'].clientHeight
        }
      })
    }
  },
  mounted() {
    this.updateHeight()
    window.addEventListener('resize', this.updateHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateHeight)
  },
  updated() {
    this.updateHeight()
  }
};
</script>

<style scoped lang="scss">
.practice-layout {
  background: #f1f3f4;
  height: 100%;
  .fixed {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
  }
}
</style>
