<template lang='pug'>
.cvHeader 
  .cvHeader__name Hello! My name is Harut and I am
  h1.cvHeader__title {{title}}

</template>

<script>
import { ref } from 'vue';
export default {
  name: 'CvHeader',
  setup() {
  const title=ref('FRONTEND & WORDPRESS DEVELOPER')
    return {
      title,

    };
  },
};
</script>

<style src='./_cvHeader.scss' lang='scss'></style>
