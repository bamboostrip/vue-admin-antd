<!--
 * @Author: bamboo
 * @Date: 2025-06-22 17:40:26
 * @LastEditors: BambooStrop qiheng0625@gmail.com
 * @LastEditTime: 2025-06-25 08:59:18
 * @FilePath: \vue-admin-antd\src\App.vue
 * @Description: 
-->
<script lang="ts" setup>
import { useGreyAndColorWeakness } from "@@/composables/useGreyAndColorWeakness"
import { useTheme } from "@@/composables/useTheme"
import zhCN from 'ant-design-vue/es/locale/zh_CN' // Ant Design Vue 中文包
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包

const { initTheme, antThemeConfig } = useTheme()
const { initGreyAndColorWeakness } = useGreyAndColorWeakness()

// 初始化主题
initTheme()

// 初始化灰色模式和色弱模式
initGreyAndColorWeakness()
</script>

<template>
  <a-config-provider :locale="zhCN" :theme="antThemeConfig">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </a-config-provider>
</template>
