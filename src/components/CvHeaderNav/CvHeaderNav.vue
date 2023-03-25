<template lang="pug">
.cvHeaderNav  
  .cvHeaderNav__container
    .cvHeaderNav__wrapper
      h1.cvHeaderNav__name {{name}}
      ul.cvHeaderNav__menu
        li.cvHeaderNav__item(v-for="item in nav" :key="item.id") {{item.text}}
  span.cvHeaderNav__line
    span.cvHeaderNav__scrollLine
</template>

<script>
import { ref, onMounted } from 'vue';
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

    const line = () => {
      const scrollLine = document.querySelector('.cvHeaderNav__scrollLine');
      const windowInnerHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const onePercent = (pageHeight - windowInnerHeight) / 100;

      addEventListener('scroll', () => {
        const scrY = window.scrollY;
        const percentWidth = scrY / onePercent;
        scrollLine.style.width = percentWidth + '%';
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', line);
    });

    return {
      nav,
      name,
      line,
    };
  },
};
</script>

<style src="./_cvHeaderNav.scss" lang="scss"></style>
