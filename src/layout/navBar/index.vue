<!--
 * @Description: 
 * @Autor: 赖伟强
 * @Date: 2023-04-04
-->
<template>
  <div class="navBar-container">
    <el-row :gutter="15">
      <el-col :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <el-icon class="fold-unfold" @click="handleCollapse">
            <component :is="collapse ? 'Expand' : 'Fold'"></component>
          </el-icon>
          <breadcrumb />
        </div>
      </el-col>
      <el-col :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <refresh />
          <screenFull />
          <setting />
          <user />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'
import user from './components/user/index.vue'
import breadcrumb from './components/breadcrumb/index.vue'
import refresh from './components/refresh/index.vue'
import screenFull from './components/screeFull/index.vue'
import setting from './components/setting/index.vue'
export default defineComponent({
  components: {
    refresh,
    user,
    screenFull,
    breadcrumb,
    setting,
  },
  setup() {
    const settingStore = useSettingStore()

    const collapse = computed(() => settingStore.collapse)

    function handleCollapse() {
      settingStore.changeCollapse()
    }
    return {
      collapse,
      handleCollapse,
    }
  },
})
</script>

<style scoped lang="scss">
.navBar-container {
  position: relative;
  height: $base-nav-bar-height;
  padding-right: $base-padding;
  padding-left: $base-padding;
  overflow: hidden;
  user-select: none;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;

    .fold-unfold {
      font-size: 18px;
      color: $base-color-gray;
      cursor: pointer;
    }
  }

  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: $base-nav-bar-height;
  }
}
</style>
