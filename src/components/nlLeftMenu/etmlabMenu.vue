<template>
  <div
    class="container"
    :class="{ active: !isCollapse }"
    @mouseenter="isCollapse = false"
    @mouseleave="isCollapse = true"
  >
    <nl-scrollbar style="height: 100%">
      <div style="border-bottom: 2px solid #333;">
        <div class="status tc rotate">
          <i class="nl-icon icon-menu abs-center"></i>
        </div>
      </div>
      <div>
        <template v-for="(item, index) in menu">
          <div v-if="item.isInMenu" :key="index">
            <div
              class="menu-item menu-first"
              :class="{
                'has-child': item.children && item.children.length > 0,
                active: item.name === activeMenu,
                disable: !item.isDisabled
              }"
              @click="redirect(item, 1)"
            >
              <i class="nl-icon" :class="`icon-${item.icon}`"></i>
              <span class="txt">{{ item.title }}</span>
            </div>
            <template v-for="(child, index) in item.children">
              <div
                :key="index"
                class="menu-item menu-second"
                v-if="child.isInMenu"
                :class="{ active: child.name === activeMenu }"
                @click="redirect(child, 2)"
              >
                <i class="nl-icon" :class="`icon-${child.icon}`"></i>
                <span class="txt">{{ child.title }}</span>
              </div>
            </template>
          </div>
        </template>
      </div>
    </nl-scrollbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  name: "etmlabMenu",
  data() {
    return {
      isCollapse: true
    };
  },
  computed: {
    ...mapState("routerPermission", ["routes"]),
    ...mapState("user", ["menu", "router"]),
    activeMenu() {
      const route = this.$route;
      // const { meta, path, name } = route;
      const { name } = route;
      return name;
      // if (meta.activeMenu) {
      //   return meta.activeMenu;
      // }
      // return path;
    }
  },
  methods: {
    ...mapActions("routerPermission", ["generateRoutes"]),
    ...mapActions("user", ["getMenus"]),
    redirect(route, index) {
      let routerName = route.name;
      if (!route.isDisabled ) {
        return;
      }
      if (index === 1) {
        if (route.children && route.children.length > 0) {
          return;
        }


        let names = [
          'etmlab-teacher-caselist',
          'etmlab-student-experiment',
          'etmlab-teacher-paperlist',
        ]

        if (names.indexOf(routerName) > -1) {
          // todo 11.22 展会临时把路由挂进来，跳转新页面处理，展会之后去掉

          let path = this.$router.resolve({
            name: routerName
          })
          let { href } = path
          window.open(href, 'router-page')
          return
        }

        this.$router.push({ name: routerName });
      } else if (index === 2) {
        this.$router.push({ name: routerName });
      }
    }
  },
  async mounted() {
    // let menu = await this.getMenus();
    // if (menu && menu.products && menu.products.length > 0) {
    //   this.generateRoutes(menu.products[0].functions);
    // }
  },
  watch: {
    $router(nv) {
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 70px;
  height: 100%;
  background-color: #2c3034;
  color: #999c9d;
  overflow-x: hidden;
  transition: all 0.3s;

  .status {
    height: 50px;
    line-height: 50px;
    font-size: 30px;
  }

  .txt {
    display: none;
  }

  .rotate {
    transition: transform 0.3s;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
  }
  &.active {
    width: 200px;
    .txt {
      display: inline-block;
    }

    .rotate {
      transform: rotate(0deg);
    }
  }
  .menu-item {
    text-align: left;
    white-space: nowrap;
    height: 45px;
    line-height: 45px;
    padding-left: 26px;
    font-size: 16px;
    cursor: pointer;

    &.disable{
      cursor: not-allowed;
    }
    &.menu-first {
      margin-bottom: 10px;
    }
    &.has-child {
      background-color: #363c40;
      cursor: initial;
      &:hover {
        background-color: #363c40;
        color: #999c9d;
      }
    }

    &.menu-second {
      padding-left: 33px;
      font-size: 14px;
    }
    &:hover {
      color: #ffffff;
      background-color: #4c87fb;
    }
    &.active {
      color: #ffffff;
      background-color: #4c87fb;
    }

    .nl-icon {
      margin-right: 16px;
    }
  }
}
</style>
