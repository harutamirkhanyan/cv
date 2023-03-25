<template lang="pug">
.cvHeader 
  CvHeaderNav
  .cvHeader__wrapper
    .cvHeader__name Hello! My name is Harut and I am
    h1.cvHeader__title {{title}}
    .cvHeader__btns
      button.cvHeader__cv Open CV
      button.effect.effect-4(type='submit') SEND MAIL


</template>

<script>
import CvHeaderNav from '@/components/CvHeaderNav/CvHeaderNav.vue';
import { ref } from 'vue';
export default {
  name: 'CvHeader',
  components: { CvHeaderNav },
  setup() {
    
    const title = ref('FRONTEND & WORDPRESS DEVELOPER');
    return {
      title,
    };
  },
};
</script>

<style src="./_cvHeader.scss" lang="scss"></style>
