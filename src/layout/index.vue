<template>
  <div class="layout-wrapper">
    <div class="layout-container-vertical fixed">
      <!-- SubMenu -->
      <layoutSideBar />
      <div class="layout-main" :class="{ 'is-collapse': collapse }">
        <!-- Header -->
        <div
          class="layout-header fixed-header"
          :class="{ 'is-collapse': collapse }"
        >
          <layoutNavBar />
          <layoutTabsBar />
        </div>
        <div class="layout-content">
          <!-- Main -->
          <layoutMain />
          <!-- Footer -->
          <layoutFooter />
        </div>
      </div>
    </div>
    <!-- 主题切换 -->
    <themeDrawer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, computed, ref } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'
import { useDebounceFn } from '@vueuse/core'
import layoutFooter from './footer/index.vue'
import layoutMain from './main/index.vue'
import layoutSideBar from './sideBar/index.vue'
import layoutNavBar from './navBar/index.vue'
import layoutTabsBar from './tabsBar/index.vue'
import themeDrawer from './navBar/components/themeDrawer/index.vue'
export default defineComponent({
  components: {
    layoutFooter,
    layoutMain,
    layoutSideBar,
    layoutNavBar,
    layoutTabsBar,
    themeDrawer,
  },
  setup() {
    const settingStore = useSettingStore()
    const collapse = computed(() => settingStore.collapse)
    // 监听窗口大小变化，折叠侧边栏
    const screenWidth = ref(0)
    const listeningWindow = useDebounceFn(() => {
      screenWidth.value = document.body.clientWidth
      if (!collapse.value && screenWidth.value < 1200)
        settingStore.changeCollapse()
      if (collapse.value && screenWidth.value > 1200)
        settingStore.changeCollapse()
    }, 100)

    window.addEventListener('resize', listeningWindow, false)

    onBeforeUnmount(() => {
      window.removeEventListener('resize', listeningWindow)
    })
    return {
      collapse,
    }
  },
})
</script>

<style scoped lang="scss">
@mixin fix-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: $base-z-index - 2;
  width: calc(100% - $base-left-menu-width);
}

.layout-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  .layout-container-vertical {
    &.fixed {
      padding-top: calc(#{$base-top-bar-height} + #{$base-tabs-bar-height});
    }

    .layout-main {
      min-height: 100%;
      margin-left: $base-left-menu-width;

      &.is-collapse {
        margin-left: $base-left-menu-width-min;
        border-right: 0;
      }

      .layout-header {
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

        &.fixed-header {
          @include fix-header;
        }

        &.is-collapse {
          width: calc(100% - $base-left-menu-width-min);
        }
      }

      .layout-content {
        padding: 20px;
      }
    }
  }
}
</style>
