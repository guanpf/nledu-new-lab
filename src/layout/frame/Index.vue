<template>
    <nl-scrollbar class="frame-container" id="js-frame-container" v-if="isFullPage">
        <Menu v-if="showLeftMenu"></Menu>
        <PageContainer>
            <slot></slot>
        </PageContainer>
        <Setting v-if="showSetting"></Setting>
    </nl-scrollbar>
    <div class="frame-container" id="js-frame-container" v-else>
        <Menu v-if="showLeftMenu"></Menu>
        <PageContainer>
            <slot></slot>
        </PageContainer>
        <Setting v-if="showSetting"></Setting>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    import Menu from '@/components/nlLeftMenu/frameMenu'
    import PageContainer from "@/layout/frame/PageContainer";
    import Setting from "@/layout/frame/Setting";

    export default {
        name: "index",
        components: {
            Menu,
            PageContainer,
            Setting,
        },
        computed: {
            ...mapState('setting', ['showLeftMenu', 'showSetting','isFullPage'])
        },
    }
</script>

<style scoped>
    .frame-container{
        height: 100%;
    }
</style>