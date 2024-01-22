import type { Router, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store'
import type { IUserInfo } from '@/store/models'
import {login} from "@/api";

NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 500,
    minimum: 0.1,
})

export class useAuthGuard {
  
    whiteList: string[] = ["Forbidden", "NotFound","alert-add"]
  
    constructor(private router: Router) {
        this.canActivate()
        this.afterEach()
    }

    canActivate() {
        this.router.beforeEach(async (to, from, next: NavigationGuardNext) => {
            document.title = to.meta.title as string
            NProgress.start()
            if (to.name === "NotFound") {
                // 保证在404页面可以寻到可访问权限的第一条记录（存在自动跳转页）
                await store.dispatch('getUserInfo')
                next()
            } else {
                // 预置白名单页直接访问
                if (to.name && this.whiteList.includes(to.name.toString())) {
                    // 保证在40x页面可以寻到可访问权限的第一条记录（存在自动跳转页）
                    if (["Forbidden", "NotFound"].includes(to.name as string)) {
                        await store.dispatch('getUserInfo')
                    }
                    next()
                } else {
                    // 从 store 中获取当前登录帐号的相关用户信息
                    // 如果 token 存在, 表示当前帐号已经成功登录, 将直接进入路由
                    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
                        await store.dispatch('getUserInfo')
                        const userInfo: IUserInfo = store.getters['userInfo']
                        this.validPermission(to, userInfo.roleId, next)
                    } else {
                        if (to.name!.toString() === "login") {
                            next()
                        } else {
                            next({ path: "/login" })
                        }
                        // 可能未登录当前系统, 则发起 isLogin 请求, 获取登录用户信息
                        await store.dispatch('getUserInfo')
                        const userInfo: IUserInfo = store.getters['userInfo']
                        localStorage.setItem("token", userInfo.token)
                        if (localStorage.getItem("token")) {
                            this.validPermission(to, userInfo.roleId, next)
                        }
                    }
                }
            }
        })
        return this.router
    }

    afterEach() {
        this.router.afterEach(() => {
            NProgress.done()
        })
    }

    private validPermission(
        to: RouteLocationNormalized,
        roleId: number,
        next: NavigationGuardNext,
    ) {
        if (!to.name) {
            next({ path: "/404" })
        }
        if (to.name!.toString() === "login" || to.path === "/") {
            next({ path: "/admin/home" })
        }
        if (roleId === 1) {
            if (to.path.includes("/admin")) {
                next()
            } else {
                next({ path: "/403" })
            }
        }
    }
}
