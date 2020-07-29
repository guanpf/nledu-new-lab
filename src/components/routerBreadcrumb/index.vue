<template>
  <nl-breadcrumb class="nl-breadcrumb" separator="/">
    <nl-breadcrumb-item
      v-for="(item, index) in routeData"
      :to="item.link"
      :key="index"
    >
      {{ item.name }}
    </nl-breadcrumb-item>
  </nl-breadcrumb>
</template>

<script>
/*
 * options = [{link: "路由地址",name: "路由名字"}]
 * example:
 * <breadcrumb-router :options="[{link:'asd',name:'asd'},{link:'qwe',name:'qwe'},{link:'zxc',name:'zxc'}]"></breadcrumb-router>
 * <breadcrumb-router></breadcrumb-router>
 * */
export default {
  name: "breadcrumbRouter",
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      routeData: []
    };
  },
  methods: {
    update() {
      if (this.options.length !== 0) {
        this.routeData = this.options;
        return;
      }
      this.routeData = this.$route.matched.map(item => {
        return { link: item.path, name: item.meta.name, meta: item.meta };
      });
    }
  },
  mounted() {
    this.update();
  },
  watch: {
    $route() {
      this.update();
    }
  }
};
</script>
<style lang="scss">
.nl-breadcrumb {
  background-color: #383652;
  padding-left: 15px;
  height: 30px;
  font-size: 14px;
  color: #fff !important;
  line-height: 30px;
  * {
    color: #fff !important;
  }
}
</style>
