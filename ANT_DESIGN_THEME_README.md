# Ant Design Vue 主题支持

本项目已经添加了对 Ant Design Vue 的主题支持，可以与现有的 Element Plus 主题系统无缝集成。

## 功能特性

- ✅ 支持三种主题：`normal`（默认）、`dark`（暗色）、`dark-blue`（深蓝）
- ✅ 与 Element Plus 主题系统完全兼容
- ✅ 动态主题切换，无需刷新页面
- ✅ CSS 变量和 ConfigProvider 双重支持

## 实现原理

### 1. CSS 变量支持

在 `src/common/assets/styles/ant-design-vue.css` 中定义了不同主题下的 CSS 变量：

```css
/* 默认主题 */
html.normal {
  --ant-primary-color: #1890ff;
  --ant-text-color: rgba(0, 0, 0, 0.85);
  /* ... 更多变量 */
}

/* 暗色主题 */
html.dark {
  --ant-primary-color: #1890ff;
  --ant-text-color: rgba(255, 255, 255, 0.85);
  /* ... 更多变量 */
}

```

### 2. ConfigProvider 支持

在 `useTheme` composable 中添加了 `antThemeConfig`，通过 Ant Design Vue 的 ConfigProvider 动态配置主题：

```typescript
const antThemeConfig = computed(() => getAntThemeConfig(activeThemeName.value))
```

### 3. 应用集成

在 `App.vue` 中将主题配置传递给 `a-config-provider`：

```vue
<template>
  <a-config-provider :locale="zhCN" :theme="antThemeConfig">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </a-config-provider>
</template>
```

## 如何使用

### 切换主题

主题切换方式与之前完全相同，使用 `useTheme` composable：

```typescript
import { useTheme } from "@@/composables/useTheme"

const { setTheme, activeThemeName } = useTheme()

// 切换到暗色主题
setTheme(event, "dark")

// 切换到深蓝主题
setTheme(event, "dark-blue")

// 切换到默认主题
setTheme(event, "normal")
```

### 自定义主题

如需自定义主题颜色，可以修改：

1. **CSS 变量方式**：在 `ant-design-vue.css` 中修改对应主题的变量值
2. **ConfigProvider 方式**：在 `useTheme.ts` 中的 `getAntThemeConfig` 函数中修改 token 配置

## 测试页面

创建了测试页面 `src/pages/demo/ant-theme-test/index.vue`，可以用来验证不同主题下 Ant Design Vue 组件的显示效果。

## 支持的组件

目前已经为以下 Ant Design Vue 组件添加了主题支持：

- Button 按钮
- Input 输入框
- Select 选择器
- Table 表格
- Menu 菜单
- Card 卡片
- Modal 模态框
- Form 表单
- Typography 文字
- Divider 分割线

如需为其他组件添加主题支持，请在 `ant-design-vue.css` 中添加相应的样式规则。

## 注意事项

1. 确保 Ant Design Vue 版本 >= 4.0，才支持 ConfigProvider 的 theme 属性
2. 部分组件可能需要额外的 CSS 样式调整才能完美适配主题
3. 如果发现某些组件样式不正确，可以在 `ant-design-vue.css` 中添加特定的样式覆盖
