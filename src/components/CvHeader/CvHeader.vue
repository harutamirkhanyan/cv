<template lang="pug">
.cvHeader 
  CvHeaderNav
  .cvHeader__wrapper
    .cvHeader__hello
      CvTerminal.cvHeader__text(:phrases= 'hello', :repeatCount='1')
    .cvHeader__title
      CvTerminal(:phrases= 'title')
    .cvHeader__btns
      button.cvHeader__cv(@click="openPdf") OPEN CV
      a.effect.effect-4(href="mailto:har.amirkhanyan@gmail.com" target='_blank') SEND EMAIL
</template>

<script>
import { ref } from 'vue';
import CvHeaderNav from '@/components/CvHeaderNav/CvHeaderNav.vue';
import CvTerminal from '@/components/CvTerminal/CvTerminal.vue';
import pdf from '@/assets/img/cv.pdf';

export default {
  name: 'CvHeader',
  components: { CvHeaderNav, CvTerminal },
  setup() {
    const hello = ref('Hello! My name is Harut and I am');
    const title = ref(['FRONTEND DEVELOPER', 'VUE.JS DEVELOPER']);
        const openPdf = () => {
      const newTab = window.open();
      newTab.document.write(`<iframe src="${pdf}" frameborder="0" style="width:100%; height:100vh;"></iframe>`);
    };
    return {
      title,
      hello,
      openPdf
    };
  },
};
</script>

<style src="./_cvHeader.scss" lang="scss"></style>
