<template>
    <div class="view-wrap" :style="pageStyle">
        <Header></Header>
        <div ref="pageView" :style="{height: pageViewHeight}" v-if="!isFullPage" style="position: relative">
            <slot></slot>
            <router-view></router-view>
        </div>
        <div v-else>
            <slot></slot>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Header from "./Header";

    import variables from '@/scss/abstracts/_vars.scss'
    import examHeader from '@/components/header/ExamHeader'
    import eelabHeader from '@/components/header/ETMLabHeader'
    import {getPlatformName} from "@/libs/platformLib";

    export default {
        name: "PageContainer",
        components: {
            Header
        },
        computed: {
            ...mapState('setting', ['showLeftMenu', 'fixedHeader', 'showBreadcrumb', 'isFullPage']),
            pageStyle() {
                let marginLeft;
                let marginTop = '0'
                if (this.showLeftMenu) {
                    marginLeft = `${variables.menuWidth}`
                } else {
                    marginLeft = '0'
                }

                if (this.fixedHeader) {
                    if (this.showBreadcrumb) {
                        marginTop = `${parseFloat(variables.headerHeight) + parseFloat( variables.breadcrumbHeight)}px`
                    }else{
                        marginTop = `${variables.headerHeight}`
                    }
                }

                return {
                    marginLeft: marginLeft,
                    marginTop,
                }
            },

        },
        data: ()=> {
            return {
                pageViewHeight: 0,
            }
        },
        mounted() {
            this.resizePage()
        },
        methods: {
          resizePage() {
              this.$nextTick(()=> {
                  if (this.$refs['pageView']) {
                      this.pageViewHeight = `calc(100% - ${this.$refs['pageView'].offsetTop}px)`
                  }
              })
          }
        },
        watch: {
            showBreadcrumb() {
                this.resizePage()
            },
            $route() {
                this.resizePage()
            }
        }
    }
</script>

<style scoped lang="scss">
    .view-wrap {
        /*background: aliceblue;*/
        background: #F1F3F4;
        margin-left: 50px;
        z-index: 1;
        height: 100%;
    }
</style>