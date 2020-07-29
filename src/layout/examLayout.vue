<template>
  <div class="practice-layout">
    <div>
      <div class="fixed" ref="fixed">
        <Header></Header>
        <Breadcrumb ></Breadcrumb>
      </div>
      <div class="placeholder" :style="{height: placeholderHeight+ 'px'}"></div>
    </div>
    <div class="page-container pr" :style="{height: `calc(100% - ${placeholderHeight}px - 20px`}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ExamHeader from '@/components/header/ExamHeader';
import Breadcrumb from '@/components/routerBreadcrumb/emtBreadcrumb';

export default {
  name: "examLayout",
  components: {
    Header: ExamHeader,
    Breadcrumb
  },
  data: () => ({
    placeholderHeight: 0,
  }),
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
