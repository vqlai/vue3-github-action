<template>
  <div class="error-page">
    <div class="error-code">
      5
      <span>0</span>
      0
    </div>
    <div class="error-desc">服务器异常，请稍后再试</div>
    <div class="error-handle">
      <router-link to="/">
        <el-button type="primary" size="large">返回首页</el-button>
      </router-link>
      <!-- <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  box-sizing: border-box;
  .error-code {
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #f02d2d;
    span {
      color: #f02d2d;
    }
  }
  .error-desc {
    font-size: 30px;
    color: #777;
  }
  .error-handle {
    margin-top: 30px;
    .error-btn {
      margin-left: 100px;
    }
  }
}
</style>
