<template lang="pug">
.skills
  h2.skills__title Skills
  .skills__hard
    .skills__imgWrapper(v-for="item in imgs" :key="item.id" :title='item.id')
      img.skills__img(:src='item.img' loading='lazy' :alt='item.id')
</template>

<script>
import { ref } from 'vue';
import js from '@/assets/img/js.png';
import vue from '@/assets/img/vue.png';
import gulp from '@/assets/img/gulp.png';
import pug from '@/assets/img/pug.png';
import scss from '@/assets/img/sass.png';

export default {
  name: 'CvInfo',
  setup() {
    const title = ref('About Me ');
    const imgs = ref([
    { id: 'js', img: js },
    { id: 'vue', img: vue },
    { id: 'gulp', img: gulp },
    { id: 'pug', img: pug },
    { id: 'scss', img: scss },
    ]);

    return {
      title,
      imgs,
      js,
      vue,
      gulp,
      pug,
      scss,
    };
  },
};
</script>

<style src="./_cvSkills.scss" lang="scss"></style>
