<template>
  <section class="content-container">
    <router-view v-slot="{ Component, route }" v-if="isShow">
      <transition appear name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'

export default defineComponent({
  setup() {
    const settingStore = useSettingStore()
    const isShow = ref(true)
    watch(
      () => settingStore.refresh,
      () => {
        isShow.value = false
        nextTick(() => {
          isShow.value = true
        })
      },
    )
    return { isShow }
  },
})
</script>

<style scoped lang="scss">
.content-container {
  min-height: $base-app-main-height;

  // padding: 20px;
  background-color: inherit;
}
</style>
