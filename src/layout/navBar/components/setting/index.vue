<!--
 * @Description: 
 * @Autor: 赖伟强
 * @Date: 2023-04-04
-->
<template>
  <div class="btn">
    <el-tooltip effect="dark" content="系统设置">
      <el-button circle @click="onSetting">
        <el-icon :size="16">
          <Setting />
        </el-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mitt from '@/utils/mitt'
export default defineComponent({
  setup() {
    const onSetting = () => {
      // 采用事件监听的方式打开ThemeDrawer
      mitt.emit('openThemeDrawer')
    }
    return { onSetting }
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
