<template>
  <router-view></router-view>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { useTheme } from './utils/theme'
// 初始化主题配置
const { initTheme } = useTheme()
initTheme()
</script>

<style scoped lang="scss"></style>
