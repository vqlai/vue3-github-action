<template>
  <div class="login-container">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="login-form"
    >
      <div class="login-header">
        <div class="title">hello，</div>
        <div class="title-tips">欢迎来到admin-template！</div>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          :prefix-icon="User"
          autocomplete="off"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          show-password
          :prefix-icon="Lock"
          autocomplete="off"
          placeholder="请输入密码"
          @keyup.enter="submitForm(ruleFormRef)"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          size="large"
          :loading="loading"
          @click="submitForm(ruleFormRef)"
        >
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
import type { FormInstance } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { HOME_URL } from '@/config/index'
import { login } from '@/api'
const router = useRouter()
const route = useRoute()
const ruleFormRef = ref<FormInstance>()
const userStore = useUserStore()
const ruleForm = reactive({
  username: '',
  password: '',
})
const loading = ref(false)
const validateUsername = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else if (value.length < 4) {
    callback(new Error('用户名长度不能小于4位'))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码长度不能小于6位'))
  } else {
    callback()
  }
}

const rules = reactive({
  username: [{ required: true, validator: validateUsername }],
  password: [{ required: true, validator: validatePassword }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (!valid) return
    try {
      loading.value = true
      const { data } = await login(ruleForm)
      userStore.setToken(data.token)
      router.replace((route.query.redirect as string) || HOME_URL)
      ElNotification({
        title: `halo`,
        message: `欢迎回来`,
        type: 'success',
      })
    } finally {
      loading.value = false
    }
  })
}
</script>

<style scoped lang="scss">
@import './index';
</style>
