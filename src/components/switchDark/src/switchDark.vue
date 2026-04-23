<template>
  <el-switch
    v-model="themeConfig.isDark"
    @change="onAddDarkChange"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
  />
</template>

<script setup lang="ts" name="switchDark">
import { computed } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useTheme } from '@/utils/theme'
const settingStore = useSettingStore()

const { switchDark } = useTheme()

const themeConfig = computed(() => settingStore.themeConfig)

const onAddDarkChange = () => {
  switchDark()
}
</script>
