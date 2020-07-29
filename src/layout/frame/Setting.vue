<template>
    <div class="setting-wrap">
        <nl-button icon="el-icon-star-off" @click="showDrawer=true"></nl-button>

        <nl-drawer
                title="设置"
                :visible.sync="showDrawer"
                direction="rtl"
                size="200px"
        >


            <nl-switch v-model="fixedHeader" active-text="固定顶部"/>
            <nl-switch v-model="showLeftMenu" active-text="显示左侧菜单"/>
            <nl-switch v-model="showBreadcrumb" active-text="显示面包屑"/>
            <nl-switch v-model="affixBreadcrumb" active-text="面包屑图钉"/>


            <div>
                <span>设置顶部颜色</span>
                <nl-color-picker v-model="headerColor"></nl-color-picker>
            </div>
        </nl-drawer>

    </div>
</template>

<script>
    export default {
        name: "Setting",
        data: () => {
            return {
                showDrawer: false,
            }
        },
        computed: {
            fixedHeader: {
                get() {
                    return this.$store.state.setting.fixedHeader
                },
                set(value) {
                    this.dispatchSetting({key: 'fixedHeader', value})
                }
            },
            showLeftMenu: {
                get() {
                    return this.$store.state.setting.showLeftMenu
                },
                set(value) {
                    this.dispatchSetting({key: 'showLeftMenu', value})
                },
            },
            showBreadcrumb: {
                get() {
                    return this.$store.state.setting.showBreadcrumb
                },
                set(value) {
                    this.dispatchSetting({key: 'showBreadcrumb', value})
                }
            },
            affixBreadcrumb: {
                get() {
                    return this.$store.state.setting.affixBreadcrumb
                },
                set(value) {
                    this.dispatchSetting({key: 'affixBreadcrumb', value})
                }
            },
            headerColor: {
                get() {
                    return this.$store.state.setting.headerColor
                },
                set(value) {
                    this.dispatchSetting({key: 'headerColor', value})
                }
            }
        },
        methods: {
            dispatchSetting(data) {
                this.$store.dispatch('setting/changeSetting', data)
            }
        },
        mounted() {
            console.log(1);
        }
    }
</script>

<style scoped lang="scss">
    .setting-wrap {
        position: absolute;
        top: 100px;
        right: 10px;
    }
</style>