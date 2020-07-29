<template>
  <nl-breadcrumb
    class="app-breadcrumb"
    separator="/"
    v-if="(levelList && levelList.length) || (breadcrumb && breadcrumb.length)"
    :style="{backgroundColor: showBg?'#fff' : 'transparent'}"
  >
    <transition-group name="breadcrumb">
      <template v-if="breadcrumb && breadcrumb.length > 0">
        <nl-breadcrumb-item
          v-for="(item, index) in breadcrumb"
          :key="item.title"
        >
          <span v-if="index == breadcrumb.length - 1" class="no-redirect">{{
            item.rtitle || item.title
          }}</span>
          <span v-else @click.prevent="handleLink(item)">{{
            item.rtitle || item.title
          }}</span>
        </nl-breadcrumb-item>
      </template>

      <nl-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="item.rtitle || item.title"
        v-else
      >
        <span v-if="index == levelList.length - 1" class="no-redirect">{{
          item.rtitle || item.title
        }}</span>
        <span v-else @click.prevent="handleLink(item)">{{
          item.rtitle || item.title
        }}</span>
      </nl-breadcrumb-item>
    </transition-group>
  </nl-breadcrumb>
  <div v-else style="height: 27px;"></div>
</template>

<script>
import breadConfig from "@/config/breadcrumb";
import { mapState } from "vuex";

export default {
  name: "emtBreadcrumb",
  data() {
    return {
      levelList: [],
      showBreadcrumb: false
    };
  },
  props: {

    showBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState("user", ["router"]),
    ...mapState("ui", ["breadcrumb"]),
    ...mapState('setting', ['affixBreadcrumb'])

  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let name = this.$route.name;
      let res = breadConfig[name];


      function searchTitle(routername, list) {
        if (!(list instanceof Array)) {
          return false;
        }

        let res = false;
        for (let l of list) {
          if (l.name === routername) {
            res = l.title;
            break;
          } else if (l.children instanceof Array && l.children.length > 0) {
            res = searchTitle(routername, l.children);
            if (res) {
              break;
            }
          }
        }
        return res;
      }

      if (res) {
        res = res.map(r => {
          if (r.routerName) {
            r.rtitle = searchTitle(r.routerName, this.router);
          }
          return r;
        });
      }

      this.levelList = res;
    },

    handleLink(item) {
      this.$router.push(item.link);
    }
  }
};
</script>

<style scoped>
.app-breadcrumb {
  padding: 20px 30px 25px;
}
.placeholder {
  height: 30px;
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
