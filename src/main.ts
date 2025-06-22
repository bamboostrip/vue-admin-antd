/*
 * @Author: bamboo
 * @Date: 2025-06-22 17:40:26
 * @LastEditors: bamboo 815070110@qq.com
 * @LastEditTime: 2025-06-22 18:04:36
 * @FilePath: \v3-admin-vite-antd\src\main.ts
 * @Description:
 */
/* eslint-disable perfectionist/sort-imports */

// core
import { pinia } from "@/pinia"
import { router } from "@/router"
import { installPlugins } from "@/plugins"
import App from "@/App.vue"
// css
import "normalize.css"
import "nprogress/nprogress.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "vxe-table/lib/style.css"
import "@@/assets/styles/index.scss"
import "virtual:uno.css"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/reset.css"

// 创建应用实例
const app = createApp(App)

// 安装插件（全局组件、自定义指令等）
installPlugins(app)

// 安装 pinia 和 router
app.use(pinia).use(router).use(Antd)

// router 准备就绪后挂载应用
router.isReady().then(() => {
  app.mount("#app")
})
