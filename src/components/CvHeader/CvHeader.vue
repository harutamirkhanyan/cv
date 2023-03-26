<template lang="pug">
.cvHeader 
  CvHeaderNav
  .cvHeader__wrapper
    .cvHeader__hello
      CvTerminal(:phrases= 'hello', :repeatCount='1')
    .cvHeader__title
      CvTerminal(:phrases= 'title')
    .cvHeader__btns
      button.cvHeader__cv Open CV
      button.effect.effect-4(type='submit') SEND MAIL


</template>

<script>
import CvHeaderNav from '@/components/CvHeaderNav/CvHeaderNav.vue';
import CvTerminal from '@/components/CvTerminal/CvTerminal.vue';

import { ref } from 'vue';
export default {
  name: 'CvHeader',
  components: { CvHeaderNav, CvTerminal },
  setup() {
    const hello = ref('Hello! My name is Harut and I am');
    const title = ref(['FRONTEND DEVELOPER', 'VUE.JS DEVELOPER']);
    return {
      title,
      hello,
    };
  },
};
</script>

<style src="./_cvHeader.scss" lang="scss"></style>
