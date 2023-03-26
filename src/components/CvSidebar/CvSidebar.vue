<template lang="pug">
.sidebar(v-if="sidebar")
  span.sidebar__close(@click="closeSidebar") &times;
  .sidebar__content
    slot

</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);

    return {
      sidebar,
      closeSidebar: () => store.commit('closeSidebar'),
    };
  },
};
</script>

<style src="./_cvSidebar.scss" lang="scss"></style>
