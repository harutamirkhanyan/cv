<template lang="pug">
.cvPage
  header.cvPage__header
    h1.cvPage__title Harutyun Amirkhanyan
  .cvPage__content
    CvInfo
    CvNavbar
</template>

<script lang="js">
import CvNavbar from '@/components/CvNavbar/CvNavbar.vue';
import CvInfo from '@/components/CvInfo/CvInfo.vue';

export default {
  name: 'CvPage',
  components: { CvNavbar, CvInfo },
  props: {},
};
</script>

<style src="./_cvPage.scss" lang="scss"></style>
