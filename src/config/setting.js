/*
上下结构及左右结构切换功能 -- 不要
头部菜单通过开关控制是否固定 -- ok
侧边菜单通过开关控制是否展现 -- ok
内容区域宽度通过选项控制
流式布局通过开关控制
面包屑通过开关控制是否显示 -- ok
面包屑提供图钉开关 -- ok
整体风格调整功能
主题色调整功能*/

import {PLATFORM_NAME} from './constants'
import {getPlatformName} from "@/libs/platformLib";

let isDev = (process.env.NODE_ENV === 'development')
export const getPlatformSettings = () => {
    let platformName = getPlatformName()
    let config = {}
    switch (platformName) {
        case PLATFORM_NAME.NAME_LEARNING :
            config =  {
                fixedHeader: false,
                showLeftMenu: true,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#1a2026',
                isFullPage: false
            };
            break;
        case PLATFORM_NAME.NAME_PRACTICE:
            config = {
                fixedHeader: false,
                showLeftMenu: false,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#2a2f55',
                isFullPage: false
            }
            break;

        case PLATFORM_NAME.NAME_EXAM:
            config = {
                fixedHeader: false,
                showLeftMenu: false,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#1a2026',
                isFullPage: false
            }
            break;

        case PLATFORM_NAME.NAME_RACE_PRACTICE:
            config = {
                fixedHeader: false,
                showLeftMenu: false,
                contentWidth: 'auto',
                affixBreadcrumb: false,
                showBreadcrumb: true,
                headerColor: '#2a2f55',
                isFullPage: false
            }
            break;

        case PLATFORM_NAME.NAME_RACE:
            config = {
                fixedHeader: false,
                showLeftMenu: false,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#1a2026',
                isFullPage: false
            }
            break;

        case PLATFORM_NAME.NAME_MANAGER:
            config = {
                fixedHeader: false,
                showLeftMenu: true,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#1a2026',
                isFullPage: false
            }
            break;

        case PLATFORM_NAME.NAME_BUSI:
            config = {
                fixedHeader: false,
                showLeftMenu: true,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#1a2026',
                isFullPage: false
            }
            break;
        case PLATFORM_NAME.NAME_ERES:
            config = {
                fixedHeader: false,
                showLeftMenu: true,
                contentWidth: 'auto',
                affixBreadcrumb: true,
                showBreadcrumb: true,
                headerColor: '#2A2A7A',
                isFullPage: false
            };
            break;

    }
    config.showSetting = isDev

    return config
}


export default {
    fixedHeader: false,
    showLeftMenu: true,
    contentWidth: 'auto',
    affixBreadcrumb: true,
    showBreadcrumb: true,
    headerColor: '#2a2f55',
    isFullPage: false, // 是否整页滚动，默认为否，需要在特殊页面内手动设置
    showSetting: isDev
}
