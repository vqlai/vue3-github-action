<!--
 * @Description: 
 * @Autor: 赖伟强
 * @Date: 2023-04-08
-->
<template>
  <div class="btn">
    <el-tooltip content="刷新">
      <el-button circle @click="onRefresh">
        <el-icon :size="16">
          <Refresh />
        </el-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'

export default defineComponent({
  setup() {
    const settingStore = useSettingStore()
    const onRefresh = () => {
      settingStore.setRefresh()
    }
    return { onRefresh }
  },
})
</script>

<style scoped lang="scss">
.btn {
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
</style>
