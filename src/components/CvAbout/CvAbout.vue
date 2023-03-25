<template lang="pug">
.about 
  .about__block
    h2.about__title About Me 
    span.about__text(v-html='text')
    span.about__text(v-html='textTwo')
  hr.about__line
  //- .about__experience
  //-   h2.about__title WORK EXPERIENCE
  //-   .about__work
  //-     .about__workYear 1 MAR 2022 – 1 MAR 2023 Yerevan, Armenia
  //-     .about__copmany
  //-       .about__copmanyName Codetime
  //-       .about__workDesc 1. Development and Implementation of new modules, templates und widgets 2. Bug fixes/ Optimization



   
 
  
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'CvInfo',
  setup() {
    const title = ref('About Me ');
    const text = ref(
      'Front-End Developer with 1+ year of experience .<br> Skilled in creating Websites, implementing new functionalities to add widgets and templates via Vue.js.<br> Team player with an eye for details.'
    );
    const textTwo=ref('I express my interest to work for a company with a pleasant atmosphere.<br> In my long-lasting working path i am eager to use my skills for a company and other hand enrich my knowledge from the company experience.<br> I am ready to gain a foothold in the direction of Front-End (Vue) development to expand in it to an expert level.')

    return {
      title,
      text,
      textTwo
    };
  },
};
</script>

<style src="./_cvAbout.scss" lang="scss"></style>
