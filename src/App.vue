<template>
  <div id="app">
<!--    <transition name="fade" mode="out-in">-->
      <router-view />
<!--    </transition>-->
  </div>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  /*overflow: hidden;*/
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
}
#app {
  .size;
  /*overflow: hidden;*/
}
</style>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
