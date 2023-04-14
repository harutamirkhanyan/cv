<template lang="pug">
.sidebar(v-if="sidebar")
  span.sidebar__close(@click="closeSidebar") &times;
  .sidebar__content
    slot

</template>

<script>
import {  computed, onMounted, onUnmounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);
    const closeSidebar = () => store.commit('closeSidebar');


    const handleOutsideClick = (event) => {
      const sidebarEl = document.querySelector('.sidebar');
      const openButton = document.querySelector('.cvHeaderNav__imgWrapper');

      if (
        sidebar.value &&
        sidebarEl &&
        !sidebarEl.contains(event.target) &&
        openButton &&
        !openButton.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    onMounted(() => {
      window.addEventListener('click', handleOutsideClick);
    });

    onUnmounted(() => {
      window.removeEventListener('click', handleOutsideClick);
    });

    return {
      sidebar,

      closeSidebar,
    };
  },
};
</script>

<style src="./_cvSidebar.scss" lang="scss"></style>
