<template>
  <div class="sideBar-container" :class="{ 'is-collapse': collapse }">
    <logo />

    <el-scrollbar>
      <el-menu
        background-color="#001529"
        text-color="hsla(0,0%,100%,.65)"
        active-text-color="#fff"
        :defaultActive="activeMenu"
        :collapse="collapse"
        :unique-opened="true"
      >
        <sub-menu :menuList="menuList"></sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'
import { useAuthStore } from '@/stores/modules/auth'
import { useRoute } from 'vue-router'
import logo from '../logo/index.vue'
import subMenu from './components/subMenu/index.vue'

export default defineComponent({
  components: {
    logo,
    subMenu,
  },
  setup() {
    const settingStore = useSettingStore()
    const authStore = useAuthStore()
    const route = useRoute()
    const collapse = computed(() => settingStore.collapse)
    const themeConfig = computed(() => settingStore.themeConfig)
    const menuList = computed(() => authStore.authMenuList)
    const activeMenu = computed(() =>
      route.meta.activeMenu ? (route.meta.activeMenu as string) : route.path,
    )
    return {
      menuList,
      collapse,
      activeMenu,
      themeConfig,
    }
  },
})
</script>

<style scoped lang="scss">
@mixin active {
  &:hover {
    color: $base-color-white;
  }

  &.is-active {
    color: $base-color-white;
    background-color: var(--el-color-primary) !important;
  }
}

.sideBar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: $base-z-index;
  width: $base-left-menu-width;
  height: 100vh;
  background: $base-menu-background;
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
  transition: width $base-transition-time;

  &.is-collapse {
    width: $base-left-menu-width-min;
    border-right: 0;
  }

  :deep(.el-scrollbar__wrap) {
    overflow-x: hidden;

    .el-menu {
      border: 0;
    }

    .el-menu-item,
    .el-submenu__title {
      height: $base-menu-item-height;
      overflow: hidden;
      line-height: $base-menu-item-height;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }

    .el-menu-item {
      @include active;
    }
  }
}
</style>
