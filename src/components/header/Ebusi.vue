  <template>
    <div class="container">
      <div class="logo-wrap">
        <img src="/logos/logo-race-practice.svg" alt="logo" class="logo-img" />
      </div>

      <div class="right">

        <div class="menu">
          <div class="menu-item" @click="redirect(item)" :class="{active: $route.name === item.name}" v-for="(item,index) in menus" >{{item.title}}</div>

        </div>



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
                退出登录
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

    export default {
      name: "examHeader",
      data() {
        return {
          menus: [{
            name: 'ebusi-race-account',
            title: '账号管理',
          }, {
            name: 'ebusi-race-plan',
            title: '计划管理',
          },{
            name: 'ebusi-race-seat',
            title: '赛位管理',
          }],
        };
      },
      computed: {
        ...mapState("ebusiUser", ["name", "avatar", "role", "token"])
      },
      methods: {
        redirect(item) {
          this.$router.push({
            name: item.name
          })
        },
        ...mapActions("ebusiUser", ["getInfo", "logout"]),
        logoutHandler() {
          this.logout()

          setTimeout(()=> {
            this.$router.push({ name: "ebusi-login" });
          }, 300)
        },
      },
      mounted() {
        if (this.token) {
          // this.getInfo();
        }
      }
    };
  </script>

  <style scoped lang="scss">
    .container {
      width: 100%;
      height: 75px;
      background-color: #2a2f55;
      &:after {
        content: " ";
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }

    @media screen and (max-width: 1440px) {
      /*.container {*/
        /*height: 57px;*/
      /*}*/
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

      .menu{
        font-size: 16px;
        display: inline-block;
        vertical-align: middle;
        line-height: 75px;
        .menu-item {
          display: inline-block;
          color: rgba(149, 155, 193, 1);
          margin: 0 52px;
          text-align: center;
          cursor: pointer;
          position: relative;
          &.active{
            color: #fff;
            &::after{
              content: '';
              width: 100%;
              height: 4px;
              background: #fff;
              position: absolute;
              bottom: 0;
              left: 0;
            }

          }

        }
      }

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
      /*width: 241px;*/
      /*height: 45px;*/
    }
  </style>
  <style>
    .dark-autocomplete {
      /*background: #000000;*/
      /*border: none;*/
    }
  </style>
