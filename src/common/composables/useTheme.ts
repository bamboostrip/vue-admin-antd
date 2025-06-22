import { getActiveThemeName, setActiveThemeName } from "@@/utils/cache/local-storage"
import { setCssVar } from "@@/utils/css"

const DEFAULT_THEME_NAME = "normal"

type DefaultThemeName = typeof DEFAULT_THEME_NAME

/** 注册的主题名称, 其中 DefaultThemeName 是必填的 */
export type ThemeName = DefaultThemeName | "dark" | "dark-blue"

interface ThemeList {
  title: string
  name: ThemeName
}

/** 主题列表 */
const themeList: ThemeList[] = [
  {
    title: "默认",
    name: DEFAULT_THEME_NAME
  },
  {
    title: "黑暗",
    name: "dark"
  },
  {
    title: "深蓝",
    name: "dark-blue"
  }
]

/** 正在应用的主题名称 */
const activeThemeName = ref<ThemeName>(getActiveThemeName() || DEFAULT_THEME_NAME)

/** 获取 Ant Design Vue 主题配置 */
function getAntThemeConfig(themeName: ThemeName) {
  switch (themeName) {
    case "dark":
      return {
        token: {
          colorPrimary: "#1890ff",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#f5222d",
          colorInfo: "#1890ff",
          colorBgBase: "#141414",
          colorTextBase: "rgba(255, 255, 255, 0.85)"
        }
      }
    case "dark-blue":
      return {
        token: {
          colorPrimary: "#00bb99",
          colorSuccess: "#67c23a",
          colorWarning: "#e6a23c",
          colorError: "#f56c6c",
          colorInfo: "#00bb99",
          colorBgBase: "#001b44",
          colorTextBase: "#e5eaf3"
        }
      }
    default:
      return {
        token: {
          colorPrimary: "#1890ff",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#f5222d",
          colorInfo: "#1890ff",
          colorBgBase: "#ffffff",
          colorTextBase: "rgba(0, 0, 0, 0.85)"
        }
      }
  }
}

/** Ant Design Vue 主题配置 */
const antThemeConfig = computed(() => getAntThemeConfig(activeThemeName.value))

/** 设置主题 */
function setTheme({ clientX, clientY }: MouseEvent, value: ThemeName) {
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY)
  )
  setCssVar("--v3-theme-x", `${clientX}px`)
  setCssVar("--v3-theme-y", `${clientY}px`)
  setCssVar("--v3-theme-r", `${maxRadius}px`)
  const handler = () => {
    activeThemeName.value = value
  }
  document.startViewTransition ? document.startViewTransition(handler) : handler()
}

/** 在 html 根元素上挂载 class */
function addHtmlClass(value: ThemeName) {
  document.documentElement.classList.add(value)
}

/** 在 html 根元素上移除其他主题 class */
function removeHtmlClass(value: ThemeName) {
  const otherThemeNameList = themeList.map(item => item.name).filter(name => name !== value)
  document.documentElement.classList.remove(...otherThemeNameList)
}

/** 初始化 */
function initTheme() {
  // watchEffect 来收集副作用
  watchEffect(() => {
    const value = activeThemeName.value
    removeHtmlClass(value)
    addHtmlClass(value)
    setActiveThemeName(value)
  })
}

/** 主题 Composable */
export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme, antThemeConfig }
}
