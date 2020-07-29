import AuthModel from "@/api/auth";
import {MODULE_BUSI, MODULE_LEARNING, MODULE_ERES, MODULE_RACE_PRACTICE} from "@/config/constants";
import {subScribeLoginInOtherPlace} from "@/libs/checkLogin";
import {
    getPlatformLoginPage,
    getPlatformCode,
    setPlatformToken,
    getPlatformName,
    removePlatformToken,
    isEbusiPath,
    isManualCreateRouter
} from "@/libs/platformLib";
import router, {defaultAddRouter, resetRouter} from "@/router";
import getComponent from "@/temp/requireLib";
import store from "@/store";
import User from "@/api/EUSMgr/user";
import {LocalStorage} from "@/libs/storage";

let authModel = new AuthModel();
let userModel = new User()

// user login
export function login({commit}, userInfo) {
    const {username, password, verificationCode} = userInfo;
    return new Promise((resolve, reject) => {
        authModel
            .getToken(username.trim(), password, "password", verificationCode, getPlatformCode())
            .then(response => {
                if (!response) {
                    reject(false);
                    return;
                }
                const {access_token, expires_in, username} = response;
                commit("SET_TOKEN", access_token);

                LocalStorage.setItem('username', username, expires_in)
                setPlatformToken(getPlatformName(), access_token, expires_in);
                subScribeLoginInOtherPlace(access_token);
                resolve(true);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// user logout
export function logout({commit, state}) {

    return userModel.logout().then(() => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        // removePlatformToken(getPlatformName())
    }).finally(_=> {
        removePlatformToken(getPlatformName())

    }).catch(e=> {
        window.location.reload()
    })

    // return new Promise((resolve, reject) => {
    //   logout(state.token)
    //     .then(() => {
    //       commit("SET_TOKEN", "");
    //       commit("SET_ROLES", []);
    //       removeToken();
    //       resetRouter();
    //       resolve();
    //     })
    //     .catch(error => {
    //       reject(error);
    //     });
    // });
}

// get user info
export function getInfo({commit, state}, productid) {
    return new Promise((resolve, reject) => {
        // getInfo(state.token)
        authModel
            .getUserInfo(productid)
            .then(response => {
                if (!response) {
                    reject("Verification failed, please Login again.");
                }

                const {roleName, userAlias, headImage, roles, eusmgrUserId, ticketNumber} = response;

                // roles must be a non-empty array
                // if (!roles || roles.length <= 0) {
                //   reject("getInfo: roles must be a non-null array!");
                // }

                let role = {
                    etmRole: roles[0],
                    role: roleName
                };

                commit("SET_ROLES", role);
                commit("SET_NAME", userAlias);
                commit("SET_AVATAR", headImage);
                if (state.eusmgrUserId != undefined) {
                    commit("SET_USER_ID", eusmgrUserId);
                }
                if (state.ticketNumber != undefined) {
                    commit("SET_TICKETNUMBER", ticketNumber)
                }
                // commit("SET_INTRODUCTION", introduction);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// get user  menu for user/manageruser/examuser
//racePracticeUser/raceUser is different from .
export function getMenus({commit, state, dispatch}, platform) {
    return new Promise((resolve, reject) => {
        //ebusi将请求所有的路由
        if (getPlatformCode() == 7) {
            authModel
                .getAllMenu()
                .then(menus => {
                    let m = []
                    menus.products.forEach(menu => {
                        if (Array.isArray(menu.functions)) {
                            // 过滤出ebusi的路由
                            let filterRes = menu.functions.filter(func => {
                                return isEbusiPath(func.path)
                            })
                            m = m.concat(filterRes)
                        }
                    })
                    let router = m;

                    commit("SET_ROUTER", router);
                    resolve(router);

                    // let productId = menus.product.productId
                    // commit("SET_PRODUCTID", productId)

                    dispatch('getInfo', MODULE_BUSI)
                })
                .catch(e => {
                    let loginPath = getPlatformLoginPage()
                    router.push({name: loginPath})
                    dispatch('logout').then(() => {
                        reject(e);
                    }).catch(e=> {
                        window.location.reload()
                    })
                });
        } else {
            authModel
                .getMenu(platform)
                .then(menus => {
                    let m = []
                    menus.products.forEach(menu => {
                        if (Array.isArray(menu.functions)) {
                            m = m.concat(menu.functions)
                        }
                    })
                    let router = m;
                    //竞赛平台需要setProductId
                    if (getPlatformCode() === 5 || getPlatformCode() === 6) {
                        commit("SET_ROUTER", router);
                        commit("SET_PRODUCTID", getPlatformCode())
                        dispatch('getInfo', getPlatformCode()).then(() => {
                            resolve(router);
                        })
                    } else {
                        commit("SET_ROUTER", router);
                        resolve(router);
                        dispatch('getInfo', getPlatformCode())
                    }

                })
                .catch(e => {
                    let loginPath = getPlatformLoginPage()
                    router.push({name: loginPath})
                    dispatch('logout').then(() => {
                        reject(e);
                    })
                });
        }

    }).then(e => {
        function buildRouter(router) {
            if (router instanceof Array === false) {
                return [];
            }
            return router.map(route => {
                route.component = route.component || "layout/index";
                return {
                    path: route.path || "",
                    name: route.name,
                    // component: () => import(`@/${route.component}.vue`),
                    component: () => getComponent(route.component),
                    children: buildRouter(route.children),
                    isDisabled: route.isDisabled
                };
            });
        }

        function buildMenu(router) {
            if (router instanceof Array === false) {
                return [];
            }
            let inMenuRouter = router.filter(r => r.isInMenu);
            let menu = inMenuRouter.map(item => {
                let defaultRouterName = "";
                if (item.children instanceof Array === true) {
                    let defaultRouter = item.children.filter(
                        mc => mc.path === "" || mc.path === undefined
                    )[0];
                    if (defaultRouter) {
                        defaultRouterName = defaultRouter.name;
                    }
                }
                let redirect
                if (item.meta) {
                    try {
                        let meta = JSON.parse(item.meta);
                        redirect = meta.redirect;
                    }catch (e) {
                    }
                }
                return {
                    path: item.path || "",
                    name: defaultRouterName || item.name,
                    icon: item.icon,
                    title: item.title,
                    isInMenu: true,
                    isDisabled: item.isDisabled,
                    children: buildMenu(item.children),
                    expand: true, // 控制菜单是否展开
                    redirect
                };
            });
            return menu;
        }

        let r = buildRouter(e);
        let menu
        if (getPlatformCode() === MODULE_ERES) {
            menu = buildMenu(e[0].children);
        } else {
            menu = buildMenu(e);
        }

        console.log(menu);
        store.commit("user/SET_MENU", menu);
        //ebusi、race、racePractice需要手动构建首页路由
        if (isManualCreateRouter()) {
            commit('SET_INDEXROUTER', r)
        }
        resetRouter();
        router.addRoutes(r);
        router.addRoutes(defaultAddRouter);
        return e;
    }).catch(e => {
        let router = resetRouter();
        router.addRoutes(defaultAddRouter);
        throw new Error('get menu error')

    });
}

export const mutation = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    },
    SET_ROLES: (state, role) => {
        state.role = role.role;
        state.etmRole = role.etmRole;
    },
    SET_MENU: (state, menu) => {
        state.menu = menu;
    },
    SET_ROUTER: (state, router) => {
        state.router = router;
    },
    SET_USER_ID: (state, id) => {
        state.eusmgrUserId = id
    }
}
