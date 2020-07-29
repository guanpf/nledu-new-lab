<template>
  <div :style="headerStyle" >
    <component :is="currentHeader"></component>
    <template v-if="showBreadcrumb">
      <Affix :offsetTop="0" v-if="affixBreadcrumb" :target="getScrollElm" @change="(affixed)=> {showBreadcrumbBg = affixed}">
        <Breadcrumb :show-bg="showBreadcrumbBg"></Breadcrumb>
      </Affix>
      <Breadcrumb v-else></Breadcrumb>

    </template>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SearchModel from "@/api/ETMRes/res";

import Breadcrumb from "./Breadcrumb";
import variables from '@/scss/abstracts/_vars.scss'
import {Affix} from 'ant-design-vue'
import examHeader from "@/components/header/ExamHeader";
import {getPlatformName} from "@/libs/platformLib";
import {PLATFORM_NAME} from "@/config/constants";
import eelabHeader from "@/components/header/ETMLabHeader";
import practice from "@/components/header/PracticeHeader"
import racepractice from "../../components/header/RacePracticeHeader";
import OnlineresHeader from "@/components/header/OnlineresHeader";

let searchModel = new SearchModel();

export default {
  name: "ETMLabHeader",
  data() {
    return {
      searchKeyword: "",
      isShowSearchInput: false,
      dialogVisible: false,
      suggestTimer: "",
      showBreadcrumbBg: false, // 面包屑是否透明
    };
  },

  components: {
    Breadcrumb,
    Affix
  },
  computed: {
    ...mapState("user", ["name", "avatar", "role"]),
    ...mapState('setting', ['fixedHeader', 'showBreadcrumb', 'showLeftMenu','headerColor','affixBreadcrumb','isFullPage']),

      currentHeader() {
        // 添加模块头部
        let platformName = getPlatformName()
        switch(platformName) {
            case PLATFORM_NAME.NAME_LEARNING:
                return eelabHeader;
            case PLATFORM_NAME.NAME_EXAM:
                return examHeader;
            case PLATFORM_NAME.NAME_PRACTICE:
                return practice;
            case PLATFORM_NAME.NAME_RACE_PRACTICE:
                return racepractice;
            case PLATFORM_NAME.NAME_ERES:
                return OnlineresHeader
            default:
                return eelabHeader
        }
    },
    headerStyle() {
      if (this.fixedHeader) {
        if (this.showLeftMenu) {
          return {
            position: 'fixed',
            top: 0,
            width: `calc(100% - ${variables.menuWidth})`
          }
        } else {
          return {
            position: 'fixed',
            top: 0,
            width: '100%'
          }
        }
      } else {
        return {}
      }
    }
  },
  methods: {
    ...mapActions("user", ["getInfo", "logout"]),
    getScrollElm() {
        let elm = this.isFullPage ? document.querySelector('#js-frame-container > .el-scrollbar__wrap') : window
        return elm
    },
    async querySearchAsync(queryString, cb) {
      clearTimeout(this.suggestTimer);
      this.suggestTimer = setTimeout(() => {
        searchModel.getSuggestion(this.searchKeyword).then(e => {
          let res = e.map(item => {
            return { value: item.searchInfo };
          });
          cb(res);
        });
      }, 300);
    },

    handleSelect(item) {
      this.searchKeyword = item.value;
      this.toSearch();
    },
    handleClose(done) {
      done();
    },
    logoutHandler() {
      // localStorage.clear();
      this.logout()
      // let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      // if (keys) {
      //   for (let i = keys.length; i--; )
      //     document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
      // }

      this.$router.push({ name: "login" });
    },
    showSearch() {
      this.isShowSearchInput = true;
      // event.currentTarget.style.display = "none";
      // document.getElementsByClassName("search")[0].style.visibility = "visible";
    },
    hideSearch() {
      this.isShowSearchInput = false;
    },
    toSearch() {
      this.$router.push({
        name: "search",
        query: {
          keyword: this.searchKeyword
        }
      });
      this.hideSearch();
    }
  },
  mounted() {
    // this.getInfo();
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 75px;
  /*background-color: #1a2026;*/
  &:after {
    content: " ";
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}

.logo-wrap {
  margin-left: 45px;
  display: inline-block;
  vertical-align: middle;
}
.right {
  display: inline-block;
  float: right;
  height: 100%;

  &:after {
    content: " ";
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .search {
  }

  .item {
    display: inline-block;
    margin-right: 40px;
    vertical-align: middle;
  }

  .input {
    width: 380px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    background-color: #474c50;
    color: #ffffff;

    &::placeholder {
      color: #c2c0cd;
    }
    /deep/ .el-input__inner {
      background: transparent;
      border: none;
      padding-left: 20px;
      color: #fff;
    }
  }

  .input-search {
    margin-left: -30px;
    font-size: 14px;
    color: #c2c0cd;
  }
  .user {
    color: #959bc1;
    font-size: 36px;
    .avatar-img {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      margin-right: 5px;
    }
    .name {
      display: inline-block;
      font-size: 14px;
    }
  }
}
.pop-over {
  .pop-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .name {
    color: #30285a;
    font-size: 14px;
  }
  .role {
    color: #999999;
    font-size: 12px;
  }
  .logout {
    color: #0e0254;
    font-size: 12px;
    text-align: center;
    padding-top: 10px;
  }
}
.logo-img {
  /*width: 147px;*/
  /*height: 45px;*/
}
</style>
<style>
.dark-autocomplete {
  /*background: #000000;*/
  /*border: none;*/
}
</style>
