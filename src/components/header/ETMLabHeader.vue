<template>
  <div class="container">
    <div class="logo-wrap">
      <img src="/logos/logo-learn.svg" alt="logo" class="logo-img" />
    </div>

    <div class="right">
      <div class="item search" v-if="isShowSearchInput">
        <nl-autocomplete
          type="text"
          placeholder="输入需要搜索的内容"
          class="input"
          @keypress.enter.native="toSearch"
          v-model="searchKeyword"
          :popper-append-to-body="false"
          :hide-loading="false"
          popper-class="dark-autocomplete"
          :fetch-suggestions="querySearchAsync"
          @select="handleSelect"
          :trigger-on-focus="false"
        />

        <i
          class="nl-icon icon-search input-search cursor-pointer"
          @click="toSearch"
        ></i>
      </div>
      <div
        class="item cursor-pointer"
        @click="showSearch"
        v-if="!isShowSearchInput"
      >
        <img src="../../assets/images/icon_search.png" alt="" />
      </div>


      <!-- todo 无用菜单 暂时屏蔽-->
      <!--
      <div class="item cursor-pointer" @click="dialogVisible = true">
        <img src="../../assets/images/icon-help.png" alt="" />
      </div>
      <nl-dialog
        title="使用指南"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <img src="./handbook.png" />
      </nl-dialog>
      <nl-badge is-dot class="item cursor-pointer">
        <img src="../../assets/images/icon-msg.png" alt="" />
      </nl-badge>

      -->


      <div class="user item cursor-pointer">
        <nl-popover placement="top-start" trigger="hover">
          <div class="pop-over">
            <div
              class="bfc "
              style="border-bottom: 1px solid #d1d1d1;padding-bottom: 10px"
            >
              <div class="fl" style="margin-right: 10px;">
                <img
                  :src="
                    avatar || require('../../assets/images/default-avatar.png')
                  "
                  alt=""
                  class="pop-avatar"
                />
              </div>
              <div class="">
                <p class="name">{{ name }}</p>
                <p class="role">{{ role || "管理员" }}</p>
              </div>
            </div>
            <div class="logout cursor-pointer" @click="logoutHandler">
              退出管理控制台
            </div>
          </div>
          <div slot="reference">
            <img
              :src="avatar || require('../../assets/images/default-avatar.png')"
              alt=""
              class="avatar-img"
            />
            <span class="name">{{ name }}</span>
          </div>
        </nl-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SearchModel from "@/api/ETMRes/res";
let searchModel = new SearchModel();

export default {
  name: "ETMLabHeader",
  data() {
    return {
      searchKeyword: "",
      isShowSearchInput: false,
      dialogVisible: false,
      suggestTimer: ""
    };
  },
  computed: {
    ...mapState("user", ["name", "avatar", "role"])
  },
  methods: {
    ...mapActions("user", ["getInfo", "logout"]),
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
  background-color: #1a2026;
  &:after {
    content: " ";
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}

@media screen and (max-width: 1440px) {
  .container {
    height: 57px;
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
