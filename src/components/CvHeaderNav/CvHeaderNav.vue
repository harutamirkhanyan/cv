<template lang="pug">
.cvHeaderNav
  .cvHeaderNav__wrapper
    h1.cvHeaderNav__name {{name}}
    ul.cvHeaderNav__menu
      li.cvHeaderNav__item(v-for="item in items" :key="item.id") {{item.text}}
    span.cvHeaderNav__line
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'CvHeader',
  setup() {
    const name = ref('Harutyun');
    const nav = ref([
      { id: 'home', text: 'Home' },
      { id: 'aboutMe', text: 'About me' },
      { id: 'experience', text: 'Experience' },
      { id: 'education', text: 'Education' },
      { id: 'skills', text: 'Skills' },
      { id: 'portfolio', text: 'Portfolio' },
      { id: 'contacts', text: 'Contacts' },
    ]);
    return {
      nav,
      name
    };
  },
};
</script>

<style src="./_cvHeaderNav.scss" lang="scss"></style>
