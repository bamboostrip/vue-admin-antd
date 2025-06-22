<!--
 * @Author: bamboo
 * @Date: 2025-06-22
 * @Description: Ant Design Vue 主题测试页面
-->
<script lang="ts" setup>
import { Button } from 'ant-design-vue';
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address"
  }
]

const dataSource = [
  {
    key: "1",
    name: "张三",
    age: 32,
    address: "北京市朝阳区"
  },
  {
    key: "2",
    name: "李四",
    age: 42,
    address: "上海市浦东新区"
  },
  {
    key: "3",
    name: "王五",
    age: 32,
    address: "广州市天河区"
  }
]
</script>

<template>
  <div class="app-container">
    <a-card title="Ant Design Vue 主题测试" style="margin-bottom: 20px;">
      <a-space direction="vertical" size="large" style="width: 100%;">
        <!-- 按钮测试 -->
        <a-space wrap>
          <a-button type="primary">
            主要按钮
          </a-button>
          <a-button>默认按钮</a-button>
          <a-button type="dashed">
            虚线按钮
          </a-button>
          <a-button type="link">
            链接按钮
          </a-button>
        </a-space>

        <!-- 输入框测试 -->
        <a-space wrap>
          <a-input placeholder="请输入内容" style="width: 200px;" />
          <a-select placeholder="请选择" style="width: 200px;">
            <a-select-option value="option1">
              选项1
            </a-select-option>
            <a-select-option value="option2">
              选项2
            </a-select-option>
          </a-select>
        </a-space>

        <!-- 表格测试 -->
        <a-table
          :columns="columns"
          :data-source="dataSource"
          :pagination="false"
          size="small"
        />

        <!-- 菜单测试 -->
        <a-menu mode="horizontal" :default-selected-keys="['1']" style="width: 400px;">
          <a-menu-item key="1">
            菜单项 1
          </a-menu-item>
          <a-menu-item key="2">
            菜单项 2
          </a-menu-item>
          <a-menu-item key="3">
            菜单项 3
          </a-menu-item>
        </a-menu>        <!-- 文字测试 -->
        <div>
          <a-typography-title :level="4">
            标题文字
          </a-typography-title>
          <a-typography-text>普通文字</a-typography-text><br>
          <a-typography-text type="secondary">
            次要文字
          </a-typography-text><br>
          <a-typography-text type="success">
            成功文字
          </a-typography-text><br>
          <a-typography-text type="warning">
            警告文字
          </a-typography-text><br>
          <a-typography-text type="danger">
            危险文字
          </a-typography-text>
        </div>
      </a-space>
    </a-card>
  </div>
</template>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
