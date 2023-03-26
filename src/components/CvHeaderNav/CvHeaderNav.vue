<template lang="pug">
.cvHeaderNav  
  .cvHeaderNav__container
    .cvHeaderNav__wrapper
      .cvHeaderNav__terminal
        h1.cvHeaderNav__name {{name}}
      ul.cvHeaderNav__menu
        li.cvHeaderNav__item(v-for="item in nav" :key="item.id") {{item.text}}
      .cvHeaderNav__imgWrapper(@click.prevent="openSidebar")
        img.cvHeaderNav__img(:src='burgerLogo' alt='burger' loading='lazy')
  span.cvHeaderNav__line
    span.cvHeaderNav__scrollLine
  CvSidebar
    ul.cvHeaderNav__menuSidebar
      li.cvHeaderNav__itemSidebar(v-for="item in nav" :key="item.id") {{item.text}}

</template>

<script>
import { ref, onMounted } from 'vue';
import burgerLogo from '@/assets/img/burgerLogo.svg';
import CvSidebar from '@/components/CvSidebar/CvSidebar.vue';
import { useStore } from 'vuex';
export default {
  name: 'CvHeader',
  components: { CvSidebar },
  setup() {
    const name = ref('Harutyun');
    const nav = ref([
      { id: 'home', text: 'Home' },
      { id: 'aboutMe', text: 'About me' },
      // { id: 'experience', text: 'Experience' },
      // { id: 'education', text: 'Education' },
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
    const store = useStore();

    return {
      nav,
      name,
      line,
      burgerLogo,
      openSidebar: () => store.commit('openSidebar'),
    };
  },
};
</script>

<style src="./_cvHeaderNav.scss" lang="scss"></style>
