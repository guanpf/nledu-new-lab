<template>
  <div class="practice-layout">
    <div>
      <div class="fixed" ref="fixed">
        <Header></Header>
        <Breadcrumb style="margin-left: 10px"></Breadcrumb>
      </div>
      <div class="placeholder" :style="{height: placeholderHeight+ 'px'}"></div>
    </div>
    <div class="page-container pr" :style="{height: pageHeight}">
      <slot></slot>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PracticeHeader from '@/components/header/Ebusi';
import Breadcrumb from '@/components/routerBreadcrumb/emtBreadcrumb';

export default {
  name: "racePracticsLayout",
  components: {
    Header: PracticeHeader,
    Breadcrumb
  },
  data: () => ({
    placeholderHeight: 0,
  }),
  computed: {
    pageHeight() {
      return `calc(100% - ${this.placeholderHeight}px - 30px)`
    }
  },
  methods: {
    updateHeight() {
      this.$nextTick(()=> {
        this.placeholderHeight = this.$refs['fixed'].clientHeight
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
